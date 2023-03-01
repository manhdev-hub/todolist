import { createAction } from '@reduxjs/toolkit';
import { Task } from 'src/constant/type';

export const getTasks = createAction('tasks/getTasks');
export const addTask = createAction<Task>('tasks/addTask');
export const remoteTask = createAction<Task>('tasks/remoteTask');
export const searchTask = createAction<string>('tasks/searchTask');
