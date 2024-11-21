import { useDispatch } from "react-redux";
//import { removeTodo,editTodo } from "../../actions/index";
import todoSlice from "../../slices/todoSlice";
import { bindActionCreators } from "redux";
import { useState } from "react";

function Todo({ id,title }) {
    const dispatch = useDispatch();

    const {editTodo,removeTodo} = todoSlice.actions;
    const actions = bindActionCreators({ removeTodo,editTodo },dispatch);
    
    const [isEditting,setIsEditting] = useState(false);
    const [edittableText,setEdittableText] = useState(title);


    function edittTodo() {
        if(isEditting) {
            actions.editTodo({id: id,title: edittableText})
            setIsEditting(false);
        }else{
            setIsEditting(true);
        }
    }

    return(
        <div>
            {(isEditting) ? <input value={edittableText} onChange={(e) => setEdittableText(e.target.value)}/> : title}
            <button onClick={() => actions.removeTodo(id)}>Delete</button>
            <button onClick={edittTodo}>{(isEditting)?'Save':'Edit'}</button>
        </div>
    )
}

export default Todo;


// 1. Implement the deletion of Todo
// 2. try to replace calling dispatch directly (may be bindActionCreator) ??
// 3. Implement edit todo functionality