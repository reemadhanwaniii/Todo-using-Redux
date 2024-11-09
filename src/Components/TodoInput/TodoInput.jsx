import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addTodo } from "../../actions/index";


function TodoInput() {

    const [todoText,setTodoText] = useState("");
    const todoList = useSelector((state) => state.todos)
    const dispatch = useDispatch();


    function insertTodo() {
        dispatch(addTodo({title: todoText, id: todoList.length+1}));
        setTodoText("");
    }

    return(
        <>
            <input 
                type="text"
                placeholder="Add Todo text ...."
                value={todoText}
                onChange={(e)=>setTodoText(e.target.value)}

            />
            <button onClick={insertTodo}>Add Todo</button>
        </>
    )
}

export default TodoInput;