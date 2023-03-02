import { PriorityType } from './enum';
import { AlertColor } from '@mui/material';

export interface Task {
    id: string;
    title: string;
    description?: string;
    dueDate: number;
    piority: PriorityType;
}

export type Snackbar = {
    message: string;
    severity?: AlertColor;
};
