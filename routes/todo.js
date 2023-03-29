const express = require('express');
const router = express.Router();
const todoCtrl = require('../controllers/todo');


//add new thing

router.post("/",todoCtrl.addNewTodo);
router.get("/",todoCtrl.getAllTodos);
router.get("/:id",todoCtrl.getOneTodo);
router.delete("/:id",todoCtrl.deleteTodo);
router.put("/:id",todoCtrl.updateTodo);



module.exports = router;