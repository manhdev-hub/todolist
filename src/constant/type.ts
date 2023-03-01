import { PriorityType } from './enum';

export interface Task {
    title: string;
    description?: string;
    dueDate: number;
    piority: PriorityType;
}
