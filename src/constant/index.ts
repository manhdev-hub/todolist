import { PriorityType } from './enum';
import { Option } from 'src/components/FormControls';

export const KEY_LOCALSTORAGE = 'TASKS';
export const A_MIN_TO_MILISEC = 60 * 1000;

export const PIORITY_OPTIONS: Option[] = [
    {
        label: 'Low',
        value: PriorityType.Low,
    },
    {
        label: 'Normal',
        value: PriorityType.Normal,
    },
    {
        label: 'High',
        value: PriorityType.High,
    },
];

//Message
export const DELETE_TASK_SUCCESS_MESSAGE = 'Delete tasks successfully';
export const CREATE_TASK_SUCCESS_MESSAGE = 'Create new task successfully';
export const UPDATE_TASK_SUCCESS_MESSAGE = 'Task update successful!';
export const TASK_NOT_FOUND = 'Create new task successfully';
export const TIME_PAST_ERROR = "Can't select time in too past";
export const TIME_MALFORMED = 'Due date is malformed!';
export const TIME_REQUIRED = 'Due date is required.';
export const TITLE_REQUITED = 'Title is required.';
