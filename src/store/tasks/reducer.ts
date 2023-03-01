import { createSlice, current } from '@reduxjs/toolkit';
import { Task } from 'src/constant/type';
import { addTask, getTasks, remoteTask, searchTask } from './action';
import { KEY_LOCALSTORAGE } from 'src/constant';

const getTasksStorage = () => {
    const tasks: Task[] | [] = localStorage.getItem(KEY_LOCALSTORAGE)
        ? JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE) as string)
        : [];
    return tasks;
};

const addTaskStorage = (task: Task) => {
    const tasks = getTasksStorage();
    if (!tasks) {
        const newTasks = [task];
        localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(newTasks));
    } else {
        const newTasks = [...tasks, task];
        localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(newTasks));
    }
};

const setTaskStorage = (tasks: Task[]) => {
    if (!tasks) return;
    localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(tasks));
};

export interface TaskState {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: getTasksStorage(),
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTasks, (state, action) => {
                state.tasks = getTasksStorage();
            })
            .addCase(addTask, (state, action) => {
                const newTasks = [...current(state.tasks), action.payload];
                addTaskStorage(action.payload);
                state.tasks = newTasks;
            })
            .addCase(remoteTask, (state, action) => {
                const newTasks = current(state.tasks).filter((task) => task !== action.payload);
                setTaskStorage(newTasks);
                state.tasks = newTasks;
            })
            .addCase(searchTask, (state, action) => {
                const listTask = getTasksStorage();
                const newTasks = listTask.filter((task) => task.title === action.payload);
                if (action.payload === '') {
                    state.tasks = listTask;
                    return;
                }
                state.tasks = newTasks;
            });
    },
});

export default taskSlice.reducer;
