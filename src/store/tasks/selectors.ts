import { Task } from 'src/constant/type';
import { useAppDispatch, useAppSelector } from 'src/store/hook';
import { getTasks, addTask, remoteTask, searchTask } from './action';

export const useTasks = () => {
    const { tasks } = useAppSelector((state) => state.tasks);
    const dispatch = useAppDispatch();

    const onGetTasks = () => {
        dispatch(getTasks());
    };

    const onAddTask = (task: Task) => {
        dispatch(addTask(task));
    };

    const onDeleteTask = (task: Task) => {
        dispatch(remoteTask(task));
    };

    const onSearchTask = (key: string) => {
        dispatch(searchTask(key));
    };

    return {
        tasks,
        onGetTasks,
        onAddTask,
        onDeleteTask,
        onSearchTask,
    };
};
