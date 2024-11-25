import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";
import TodoInput from "../TodoInput/TodoInput";

function TodoList() {

    const todoList = useSelector((state) => state.todos.value).flat();

    console.log(todoList);

    return (
        <>
            <TodoInput />
            {todoList &&
            todoList.map((todo) => {
            // console.log(todo.id);
            // console.log(todo.title);
             return <Todo id={todo.id} title={todo.title} key={todo.id}/>
        }) }
        </>
        
    );
}

export default TodoList;