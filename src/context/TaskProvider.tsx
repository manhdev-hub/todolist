import { createContext, useState } from 'react';
import { Task } from 'src/constant/type';
import useTask from 'src/hooks/useTask';
import { getTask } from 'src/store';

type TaskProviderProps = {
    children: React.ReactNode;
};

const initialState = getTask();

export const TaskContext = createContext<Task[]>(initialState);

const TaskProvider = (props: TaskProviderProps) => {
    const [tasks, onGetTask, onAddTask] = useTask();
};
