const { Router } = require("express");
const { userModel, adminModel, courseModel, purchaseModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");
const { userMiddleware } = require("../middleware/user");
const userRouter = Router();
const { z } = require("zod");
const bcrypt = require("bcrypt");

userRouter.post("/signup", async (req, res) => {
  const requiredBody = z.object({
    email: z.string().min(5).max(50).email(),
    firstName: z.string().min(3).max(80),
    lastName: z.string().min(3).max(80),
    password: z
      .string()
      .min(6)
      .max(40)
      .regex(/[a-z]/, "password must contain lower case alphabet")
      .regex(/[A-Z]/, "password must contain upper case alphabet")
      .regex(/[!@#$%^&*()_<>?:]/, "password must contain a special character"),
  });

  const parsedDataSuccess = requiredBody.safeParse(req.body);
  if (!parsedDataSuccess.success) {
    res.status(400).json({
      message: "invalid format",
      error: parsedDataSuccess.error,
    });
    return;
  }

  const { email, password, firstName, lastName } = req.body; 

  const hashedPassword = await bcrypt.hash(password, 5);
  console.log(hashedPassword);
  try {
    await userModel.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });
  } catch (error) {
    res.json({
      message: "user already exists",
    });
  }

  res.json({
    message: "you are signed up",
  });
});

userRouter.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await userModel.findOne({
    email,
  });

  if (user) {
    const matchPassword = bcrypt.compare(password, user.password);
    if (matchPassword) {
      const token = jwt.sign(
        {
          id: user._id.toString(),
        },
        JWT_USER_PASSWORD
      );
      // cookie logic
      res.json({
        token,
      });
    }
  } else {
    res.status(400).json({
      message: "user not signed up",
    });
  }
});

userRouter.get("/my-courses", userMiddleware, async (req, res) => {
  const userId = req.body.userId;

  const purchases = await purchaseModel.find({
    userId,
  });
  req.json({
    purchases,
  });
});

module.exports = {
  userRouter: userRouter,
};

/* 


const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
  });

  try {
    const parsedData = signinSchema.safeParse(req.body);
    if (!parsedData.success) {
      return res.status(400).json({
        message: "Invalid input format",
        error: parsedData.error.errors
      });
    }

    const { email, password } = parsedData.data;

    const user = await userModel.findOne({ email });
    
    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      JWT_USER_PASSWORD
    );

    return res.status(200).json({
      message: "Signed in successfully",
      token
    });

  } catch (error) {
    console.error("Signin error:", error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
*/
