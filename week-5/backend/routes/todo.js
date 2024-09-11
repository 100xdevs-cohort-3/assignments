//  start writing your code from here

const express=require('express');
const { createTodo, updateTodo, deleteTodo, allTodos, completeTodo } = require('../db');
const verifyJWT = require('../middleware/user');
const router=express.Router();

router.post("/create-todo",verifyJWT,createTodo);
router.patch("update-todo",verifyJWT, updateTodo);
router.post('delete-todo',verifyJWT, deleteTodo);
router.get('todos-list',verifyJWT, allTodos);
router.patch('finish-todo',verifyJWT,completeTodo);

module.exports=router;