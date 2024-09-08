import './Task.css';
import {useDispatch} from "react-redux";
import {ChangeTaskState, DeleteTask} from "../../../Redux/TodoListSlice";

const Task = ({task}) => {
    let dispatch = useDispatch();

    const deleteTaskHandler = () => {
        dispatch(DeleteTask(task.id));
    }

    const changeTaskStateHandler = () => {
        dispatch(ChangeTaskState(task.id));
    }

    return (
        <div className={task.completed ? 'TaskCompleted' : 'Task'} onClick={changeTaskStateHandler}>
            <input type="checkbox" defaultChecked={task.completed} checked={task.completed}/>
            <h1>{task.text}</h1>
            <button onClick={deleteTaskHandler}>Delete/Drop</button>
        </div>
    )
}

export default Task;