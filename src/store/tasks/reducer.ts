import { createSlice, current } from '@reduxjs/toolkit';
import { Task } from 'src/constant/type';
import {
    addTask,
    getTasks,
    getTask,
    remoteTask,
    searchTask,
    remoteMultipleTasks,
    setTempId,
    updateTask,
} from './action';
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

const findIndex = (tasks: Task[], id: string) => {
    let result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id) {
            result = index;
        }
    });
    return result;
};
export interface TaskState {
    tasks: Task[];
    task?: Task;
    tempId: string[];
}

const initialState: TaskState = {
    tasks: getTasksStorage(),
    tempId: [],
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //get all task
            .addCase(getTasks, (state, action) => {
                state.tasks = getTasksStorage();
            })
            //get detail task
            .addCase(getTask, (state, action) => {
                state.task = action.payload;
            })
            //create new task
            .addCase(addTask, (state, action) => {
                const newTasks = [...current(state.tasks), action.payload];
                addTaskStorage(action.payload);
                state.tasks = newTasks;
            })
            //remove task
            .addCase(remoteTask, (state, action) => {
                const newTasks = current(state.tasks).filter((task) => task !== action.payload);
                setTaskStorage(newTasks);
                state.tasks = newTasks;
            })
            //search task
            .addCase(searchTask, (state, action) => {
                const listTask = getTasksStorage();
                const newTasks = listTask.filter((task) =>
                    task.title.toUpperCase().includes(action.payload.toUpperCase()),
                );
                state.tasks = newTasks;
            })
            //remove multi task
            .addCase(remoteMultipleTasks, (state, action) => {
                const newTasks = current(state.tasks).filter((task) => action.payload.indexOf(task.id) === -1);
                setTaskStorage(newTasks);
                state.tasks = newTasks;
            })
            //save selected ids
            .addCase(setTempId, (state, action) => {
                state.tempId = action.payload;
            })
            //update task
            .addCase(updateTask, (state, action) => {
                const { id } = action.payload;
                if (!id) return;
                const indexTask = findIndex(state.tasks, id);
                state.tasks[indexTask] = action.payload;
                setTaskStorage(state.tasks);
            });
    },
});

export default taskSlice.reducer;
