import { PriorityType } from './enum';

export interface Task {
    id: string;
    title: string;
    description?: string;
    dueDate: number;
    piority: PriorityType;
}
