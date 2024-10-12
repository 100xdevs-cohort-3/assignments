require("dotenv").config();
const config = require("./config");
const express = require("express");
const { generateToken } = require("./services/token.service");
const { auth } = require("./middleware/auth");

const { UserModel, TodoModel } = require("./db/setup");

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email: email,
        password: password,
        name: name,
    }).catch((e) => {
        console.log(e);
    });

    res.json({
        message: "You are signed up",
    });
});

app.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const resp = await UserModel.findOne({
        email: email,
        password: password,
    });

    if (resp) {
        const token = generateToken({ userId: resp._id.toString() });
        res.status(200).json({
            token
        });
    } else {
        res.status(403).json({
            message: "Incorrect Username and password"
        })
    }

});

app.post("/todo", auth, async function (req, res) {
    const title = req.body.title;
    const done = req.body.done;

    const resp = await TodoModel.create({
        title: title,
        done: done,
        userId: req.userId
    })

    if (resp) {
        res.status(200).json({
            message: "Todoo created successfully"
        })
    } else {
        res.status(500).json({
            message: "Internal server error"
        })
    }
});

app.get("/todos", auth, async function (req, res) {
    const resp = await TodoModel.find();

    res.json({
        data: resp,
    });
});

app.get("/userInfo", auth, async function (req, res) {

    const resp = await UserModel.find({
        _id: req.userId
    });

    res.json({
        data: resp,
    });
});

app.listen(config.SERVER_PORT, () => {
    console.log(`App listening on ${config.SERVER_PORT}`);
});
