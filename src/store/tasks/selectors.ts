import { Task } from 'src/constant/type';
import { useAppDispatch, useAppSelector } from 'src/store/hook';
import {
    getTasks,
    getTask,
    addTask,
    remoteTask,
    searchTask,
    remoteMultipleTasks,
    setTempId,
    updateTask,
} from './actions';

export const useTasks = () => {
    const { tasks, task, tempId } = useAppSelector((state) => state.tasks);
    const dispatch = useAppDispatch();

    const onGetTasks = () => {
        dispatch(getTasks());
    };

    const onGetTask = (task: Task) => {
        dispatch(getTask(task));
    };

    const onAddTask = (task: Task) => {
        dispatch(addTask(task));
    };

    const onSetIdTask = (id: string[]) => {
        dispatch(setTempId(id));
    };

    const onDeleteTask = (task: Task) => {
        dispatch(remoteTask(task));
    };

    const onDeleteMultipleTask = (id: string[]) => {
        dispatch(remoteMultipleTasks(id));
    };

    const onSearchTask = (key: string) => {
        dispatch(searchTask(key));
    };

    const onUpdateTask = (task: Task) => {
        dispatch(updateTask(task));
    };

    return {
        tasks,
        task,
        tempId,
        onGetTasks,
        onGetTask,
        onAddTask,
        onDeleteTask,
        onSearchTask,
        onSetIdTask,
        onDeleteMultipleTask,
        onUpdateTask,
    };
};
