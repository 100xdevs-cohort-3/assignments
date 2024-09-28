//  TODO: Can you create backend with standard folder structure like: week-4/hard ???
const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const bcrypt = require("bcrypt")
const cors = require("cors")
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors())  // Note: This wil accept all 

const secret = process.env.JWT_SECRET;  // This should be in an environment variable in a real application
const port = process.env.PORT;

// Define mongoose schemas
const userSchema = new mongoose.Schema({
    // userSchema here
    username: { type: String, unique: true },
    password: String,
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]  // for course purchasing
}, { timestamps: true });

const adminSchema = new mongoose.Schema({
    // adminSchema here
    username: { type: String, unique: true },
    password: String
}, { timestamps: true });

const courseSchema = new mongoose.Schema({
    // courseSchema here
    title: { type: String, unique: true },
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
}, { timestamps: true });

// Define mongoose models
const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', adminSchema);
const Course = mongoose.model('Course', courseSchema);

const authMiddleware = (req, res, next) => {
    //  authMiddleware logic here 
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }
    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded.id;  // simply an id is stored in this req.user
        next();
    } catch (ex) {
        return res.status(400).json({ message: "Invalid token." });
    }

};

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL).then(() => console.log("Database connected successfully"))


// Admin routes
app.post('/admin/signup', async (req, res) => {
    // logic to sign up admin
    try {
        const { username, password } = req.body;

        const existAdmin = await Admin.findOne({ username });
        if (existAdmin) {
            return res.status(400).json({ message: "Username already exists, Please try another username" });
        }

        const hashedpassword = await bcrypt.hash(password, 10)

        const newAdmin = await Admin.create({
            username,
            password: hashedpassword,
        });

        // Generating a JWT token
        const token = jwt.sign({ id: newAdmin._id }, secret);

        res.status(201).json({
            message: "Admin Created Successfully",
            token
        });
    } catch (error) {
        res.status(500).json({ message: "An error occurred." });
    }

});

app.post('/admin/login', async (req, res) => {
    // logic to log in admin
    try {
        const { username, password } = req.body;
        const admin = await Admin.findOne({ username });   // here getting error as findone only accept object with key-value pairs
        if (!admin) {
            return res.status(404).json({
                message: "Admin not found"
            })
        }
        const isMatched = await bcrypt.compare(password, admin.password);
        if (!isMatched) {
            return res.status(401).json({
                message: "Invalid credentials"
            })
        }

        const token = jwt.sign({ id: Admin._id }, secret)
        return res.status(200).json({
            message: "Logged in successfully",
            token
        })
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({
            Error: "Error Occured.."
        })

    }
});

app.post('/admin/courses', authMiddleware, async (req, res) => {
    // logic to create a course
    try {
        const { title, description, price, imageLink, published } = req.body;

        const existCourse = await Course.findOne({ title })
        if (existCourse) {
            return res.status(400).json({
                message: "Title can't be same, Please choose another One"
            })
        }
        if (!title || !description || !price || !imageLink) {
            return res.status(400).json({
                message: "All fields are required: title, description, price, imageLink and published"
            });
        }
        const newCourse = await Course.create({
            title,
            description,
            price,
            imageLink,
            published
        })
        return res.status(201).json({
            message: "Course Created Successfully",
            course: newCourse
        })
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({
            message: "Error Occured.."
        })
    }
});


// This is for getting the course from the database
app.get('/admin/courses/:courseId', authMiddleware, async (req, res) => {
    try {
      const {courseId} = req.params;
  
      // Find the course by its ID
      const course = await Course.findById(courseId);
  
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
  
      // Send course data in the response
      res.json({ course });
    } catch (error) {
      console.error('Error fetching course:', error);
      res.status(500).json({ message: 'Server error. Failed to retrieve course.' });
    }
  });

app.put('/admin/courses/:courseId', authMiddleware, async (req, res) => {
    // logic to edit a course
    try {
        const { courseId } = req.params;
        const { title, description, price, imageLink, published } = req.body;

        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({
                message: "Course not found"
            })
        }

        if (title) course.title = title;
        if (description) course.description = description;
        if (price) course.price = price;
        if (imageLink) course.imageLink = imageLink;
        if (published !== undefined) course.published = published;

        const updatedCourse = await course.save();

        return res.status(200).json({
            message: "Course updated Successfully",
            updatedCourse
        })
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({
            message: "Error Occured.."
        })
    }
});


app.get('/admin/courses', authMiddleware, async (req, res) => {
    // logic to get all courses
    try {
        const courses = await Course.find();
        if (courses.length < 1) {
            return res.status(400).json({
                message: "No Courses Available"
            })
        }
        return res.status(200).json({
            message: "Courses Retrived Successfully",
            courses
        })
    } catch (error) {
        res.status(500).json({
            message: "Error Occured.."
        })
    }

});

// User routes
app.post('/users/signup', async (req, res) => {
    try {
        const { username, password } = req.body;

        const existUser = await User.findOne({ username });
        if (existUser) {
            return res.status(400).json({ message: "Username already taken, please choose another username" });
        }

        const hashedpassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({
            username,
            password: hashedpassword,
        });

        // Generating a JWT token
        const token = jwt.sign({ id: newUser._id }, secret);

        res.status(201).json({
            message: "User Created Successfully",
            token
        });
    } catch (error) {
        res.status(500).json({ message: "An error occurred." });
    }
});


app.post('/users/login', async (req, res) => {
    // logic to log in user
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json("User not Found")
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            return res.json({
                message: "Invalid credientails"
            })
        }

        const token = jwt.sign({ id: user._id }, secret)

        res.status(200).json({
            message: "Logged in successfully",
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "An error occurred." });
    }

});

app.get('/users/courses', authMiddleware, async (req, res) => {
    // logic to list all courses
    try {
        const courses = await Course.find();
        if (courses.length < 1) {
            return res.status(400).json({
                message: "No Courses Available"
            })
        }
        return res.status(200).json({
            message: "Courses Retrived Successfully",
            courses
        })
    } catch (error) {
        res.status(500).json({
            message: "Error Occured.."
        })
    }
});

app.post('/users/courses/:courseId', authMiddleware, async (req, res) => {
    // logic to purchase a course
    try {
        const { courseId } = req.params;
        const userId = req.user;

        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({
                message: "Course not Found"
            })
        }

        const user = await User.findById(userId);
        if (!user) {
            res.status(404).json({
                message: "User not Found"
            })
        }

        if (user.purchasedCourses && user.purchasedCourses.includes(courseId)) {
            return res.status(200).json({
                message: "Course already Purchased"
            })
        }

        user.purchasedCourses = user.purchasedCourses || [];
        user.purchasedCourses.push(courseId)

        await user.save();
        return res.status(200).json({
            message: "Course puchased Successfully"
        })
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({
            message: "Error Occured.."
        })
    }
});

app.get('/users/purchasedCourses', authMiddleware, async (req, res) => {
    try {
        const userId = req.user; 
        const user = await User.findById(userId).populate("purchasedCourses");

        if (!user || !user.purchasedCourses || user.purchasedCourses.length === 0) {
            return res.status(404).json({
                message: "No Courses Available"
            });
        }

        return res.status(200).json({
            message: "Successfully Retrived Purchased Courses",
            purchasedCourses: user.purchasedCourses
        });
    } catch (error) {
        console.log("Error retrieving purchasedCourses:", error);
        // Check if headers have already been sent before responding
        if (!res.headersSent) {
            return res.status(500).json({
                message: "Error Occurred."
            });
        }
    }
});


app.listen(port, () => {
    console.log('Server is listening on port 3000');
});