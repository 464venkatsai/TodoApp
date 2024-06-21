import { useState } from "react" ;
import './Todo.css'

const Todo = ()=>{
    const [userInput,setUserInput] = useState("");
    const [todo , setTodos] = useState([]);
    const [isEditing , setIsEditing] = useState(false);
    const [currentIndex , setCurrentIndex] = useState(null);
    function handleChange(e) {
        setUserInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (isEditing){
            const updatedTodos = [...todo];
            updatedTodos[currentIndex] = userInput;
            setTodos(updatedTodos);
            setIsEditing(false)
            setCurrentIndex(null)
        }else{
            setTodos([...todo,userInput]);
        }
        setUserInput("");
    }

    function handleDelete(index) {
        let newTodos = [...todo];
        newTodos.splice(index,1);
        setTodos(newTodos);
    }
    function handleUpdate(index) {
        setUserInput(todo[index]);
        setIsEditing(true);
        setCurrentIndex(index)
    }
    return (
        <>
        <div className="container">
            <h1>Todo List</h1>
            <form>
                <input type="text" name="task" value={userInput} onChange={handleChange} id="input-task" />
                <button className='btn' type="submit" onClick={handleSubmit}>Add Task</button>
            </form>
            <section className="display-tasks">
                <h2>Your Tasks</h2>
                {
                todo.length>0?
                    todo.map((task,index)=>{
                        return <ul key={index} className="task">
                                    <li key={index} oncc>{task}</li>
                                    <div>
                                        <button onClick={()=>{handleUpdate(index)}}>Edit</button>
                                        <button onClick={()=>{handleDelete(index)}}>Delete</button>
                                    </div>
                                </ul>})
                    :<h4>No Tasks Were Added</h4>
                }
            </section>
        </div>
        </>
    )
}
export default Todo;