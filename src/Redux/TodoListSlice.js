import {createSlice} from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [
           
        ],
        taskText: ''
    },
    reducers: {
        ChangeTaskText: (state, action) => {
            state.taskText = action.payload;
        },
        AddTask: (state) => {
            let newTask = {
                id: state.tasks.length + 1,
                text: state.taskText,
                completed: false
            };
            state.tasks.push(newTask);
            state.taskText = '';
        },
        DeleteTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            if (index !== -1) {
                state.tasks.splice(index, 1);
            }
        },
        ChangeTaskState: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        DeleteAll: (state, action) => {
            state.tasks = [];
        }
    }
});

export const {ChangeTaskText, AddTask, DeleteTask, ChangeTaskState, DeleteAll} = tasksSlice.actions;
export default tasksSlice.reducer;