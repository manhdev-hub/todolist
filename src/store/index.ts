import { Task } from 'src/constant/type';

export const getTask = () => {
    const tasks: Task[] | [] = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks') as string) : [];
    return tasks;
};

export const addTask = (task: Task) => {
    const tasks = getTask();
    if (!tasks) {
        const newTasks = [task];
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    } else {
        const newTasks = [...tasks, task];
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    }
};
