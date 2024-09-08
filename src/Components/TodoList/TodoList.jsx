import {useDispatch, useSelector} from "react-redux";
import Task from "./Task/Task";
import './TodoList.css';
import task from "./Task/Task";
import tasksSlice, {AddTask, ChangeTaskText, DeleteAll} from "../../Redux/TodoListSlice";

const TodoList = () => {
    let tasks = useSelector(store => store.tasksSlice.tasks);
    let taskText = useSelector(store => store.tasksSlice.taskText);
    let dispatch = useDispatch();

    let onChangeHandler = (e) => {
        let taskText = e.target.value;
        dispatch(ChangeTaskText(taskText));
    }

    let addTaskHandler = () => {
        dispatch(AddTask(task.id));
    }

    const deleteAllTasksHandler = () => {
        dispatch(DeleteAll());
    }

    return (
        <div className="TodoList">
            <h1>My TodoList</h1>
            <div className="inputPanel">
                <input type="text" onChange={(e) => onChangeHandler(e)} value={taskText}/>
                <button onClick={addTaskHandler}>Add task</button>
                <button onClick={deleteAllTasksHandler}>Delete All tasks</button>
            </div>
            <div>
                {
                    tasks.map(task => <Task task={task} key={task.id}/>)
                }
            </div>
        </div>
    )
}

export default TodoList;