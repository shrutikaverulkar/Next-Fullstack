import mongoose, { models } from "mongoose"
const todoSchema = new mongoose.Schema({
    task: String,
    desc: String,
    complete: {
        type: Boolean,
        default: false
    }

}, {
    timestamps: true
})
const Todo = models.todo || mongoose.model("todo", todoSchema)
export default Todo