import * as Yup from 'yup';
import { PriorityType } from 'src/constant/enum';
import { Task } from 'src/constant/type';

export interface InitialValue {
    title: string;
    description?: string;
    dueDate: number;
    piority: PriorityType;
}

export const validationSchema = Yup.object().shape({
    title: Yup.string().trim().required('Title is required.'),
    dueDate: Yup.number()
        .typeError('Due date is malformed!')
        .required('Due date is required.')
        .min(Date.now(), `Can't select time in too past`),
});

export const INITIAL_VALUES: InitialValue = {
    title: '',
    dueDate: Date.now(),
    piority: PriorityType.Normal,
    description: '',
};
