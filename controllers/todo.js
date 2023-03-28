const Todo = require('../models/todo')


//add a todo

exports.addNewTodo = (req,res,next) =>{

    const todo = new Todo({
        title : req.body.title,
        desctiption : req.body.description,
        userId : req.body.userId,
    });

    todo.save().then(()=>{
        res.status(201).json({
            message : "Todo added successfully"
        })
    }).catch(()=>{
        res.status(401).json({
            error : "Todo not created"
        })
    })

}


//get all todolist

exports.getAllTodos = (req,res,next) =>{

    Todo.find().then((todos)=>{

        res.status(200).json({"todos":todos})


    }).catch(()=>{

        res.status(401).json({
            error : "Error getting todos"
        })

    })


}


//get one todo

// exports.getOneTodo = (req,res,next) =>{

//     Todo.findOne({ _id:req })


// }