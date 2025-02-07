const express = require("express");
const router = express.Router();
const authenticator = require("../middleware/user.js");
const { addTodo, removeTodo, updateTodo } = require("../db/index.js");
const { TodoModel, UserModel } = require("../db/db.js");
router.post("/add", authenticator, async (req, res) => {
  let { newTodo } = req.body;
  let email = req.email;
  console.log(email);
  let user = await UserModel.findOne({ email: email });
  let user_id = user._id;
  // await addTodo(username, newTodo);
  console.log("add todos route : ",user_id, typeof(user_id));
  await TodoModel.create({
    //   title: newTodo,
      description : newTodo,
      done : false,
      userId : user_id

  });

  res.json({
    message: "Added!",
  });
  // return true;
});

router.patch("/edit", authenticator, async (req, res) => {
  let { idx, newTodo } = req.body;
  let username = req.username;
  await updateTodo(username, idx, newTodo);
  res.json({
    message: "Updated!",
  });
});

router.delete("/delete", authenticator, async (req, res) => {
  let { idx } = req.body;
  let username = req.username;
  await removeTodo(username, idx);
});

router.get("/:id/get",async(req,res)=>{
    // let {user_id} = req.body;
    let user_id = req.params.id;
    let todos = await TodoModel.find({ref : user_id});

    res.json({
        todos: todos
    })
})

module.exports = router;
