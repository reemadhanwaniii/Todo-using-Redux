import { useDispatch } from "react-redux";
import { removeTodo } from "../../actions/index";
import { bindActionCreators } from "redux";

function Todo({ id,title }) {
    const dispatch = useDispatch();
    const actions = bindActionCreators({ removeTodo },dispatch);

    return(
        <div>
            {title}
            <button onClick={() => actions.removeTodo(id)}>Delete</button>
        </div>
    )
}

export default Todo;


// 1. Implement the deletion of Todo
// 2. try to replace calling dispatch directly (may be bindActionCreator) ??
// 3. Implement edit todo functionality