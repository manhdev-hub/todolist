import { createAction } from '@reduxjs/toolkit';
import { Task } from 'src/constant/type';

export const getTasks = createAction('tasks/getTasks');
export const getTask = createAction<Task>('tasks/getTask');
export const addTask = createAction<Task>('tasks/addTask');
export const remoteTask = createAction<Task>('tasks/remoteTask');
export const remoteMultipleTasks = createAction<string[]>('tasks/remoteMultipleTasks');
export const searchTask = createAction<string>('tasks/searchTask');
export const setTempId = createAction<string[]>('tasks/setTempId');
export const updateTask = createAction<Task>('tasks/updateTask');
