const express = require('express');
const router = express.Router();
const todoCtrl = require('../controllers/todo');
const auth = require('../middleware/auth')


router.post("/",auth,todoCtrl.addNewTodo);
router.get("/",auth,todoCtrl.getAllTodos);
router.get("/:id",auth,todoCtrl.getOneTodo);
router.delete("/:id",auth,todoCtrl.deleteTodo);
router.put("/:id",auth,todoCtrl.updateTodo);


module.exports = router;