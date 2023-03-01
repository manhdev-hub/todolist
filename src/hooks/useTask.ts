import { useState } from 'react';
import { Task } from 'src/constant/type';
import { getTask, addTask } from 'src/store';

const useTask = (initStatus = getTask()) => {
    const [tasks, setTasks] = useState<Task[]>(initStatus);

    const onGetTask = (tasks: Task[]) => {
        setTasks(tasks);
    };

    const onAddTask = (task: Task) => {
        addTask(task);
        setTasks([...tasks, task]);
    };

    return [tasks, onGetTask, onAddTask] as const;
};

export default useTask;
