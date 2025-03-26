const Todo = require('../models/Todo')

const getAllTodos = async (req,res)=>{
    const todos = await Todo.find().lean().sort({id:1})
    if(!todos)
       return res.status(400).json({message:'not found todos'})

    res.json(todos)
}

const getTodoById=async (req,res)=>{
    const {id}= req.params
    if(!id)
        return res.status(400).json({message:"not found todo with this id"})
    const mytodo = await Todo.findById(id).lean()
    res.json(mytodo)
}



/*const getNotComplaited = async (req,res)=>{
    const todosNotComplaited = await Todo.find(({ completed: false }).lean()
    if(!todosNotComplaited)
        return res.status(400).message('not exssiting todos not complaited !!')

    res.json(todosNotComplaited)
}

const getComplaited = async (req,res)=>{
    const todosComplaited = await Todo.find(t=>t.completed).lean()
    if(!todosComplaited)
        return res.status(400).message('not exssiting todos complaited !!')

    res.json(todosComplaited)
}*/

const createTodo = async (req,res) =>{
    const {title,tags} = req.body
    if(!title)
        return res.status(400).json({message:'not found todo'})
    const newTodo = await Todo.create({title,tags})
    res.json(newTodo)
}


const updateTodo = async (req,res) => {
    const {id , title, tags } = req.body
    if(!id)
        return res.status(400).json({message:'not found todo to update'})
    const todo = await Todo.findById(id).exec()
    if(title)
        todo.title = title
    if(tags)
        todo.tags = tags
    const updatetodo = await todo.save()
    res.json(updatetodo)
}

const updateComplete = async (req, res) => {
    const { id } = req.params
    const todo = await Todo.findById(id).exec()
    if (!todo) {
    return res.status(400).json({ message: 'Todo not found' })
    }
    todo.completed = !todo.completed
    const updatedTodo = await todo.save()
    res.json(`'${updatedTodo.completed}' updated`)
}

const deleteTodo = async (req, res) => {
    const { id } = req.params

    if (!id) {
    return res.status(400).json({ message: 'ID not found' })
    }
    const todo = await Todo.findById(id).exec()
    if (!todo) {
        return res.status(400).json({ message: 'Todo not found' })
        }
    const result = await todo.deleteOne(todo)
    const reply=`Todo '${result}'  deleted`
    res.json(reply)
}


module.exports = {getAllTodos 
    ,getTodoById 
   /* ,getComplaited 
    ,getNotComplaited */
    ,createTodo  
    ,updateTodo 
    ,updateComplete
    ,deleteTodo
}

