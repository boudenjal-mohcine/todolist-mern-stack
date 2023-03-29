const express = require('express');
const router = express.Router();
const todoCtrl = require('../controllers/todo');


//add new thing

router.post("/",todoCtrl.addNewTodo);
router.get("/",todoCtrl.getAllTodos);
router.get("/:id",todoCtrl.getOneTodo);


module.exports = router;