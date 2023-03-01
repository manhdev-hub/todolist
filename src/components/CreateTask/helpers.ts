import * as Yup from 'yup';
import { PriorityType } from 'src/constant/enum';
import { Task } from 'src/constant/type';

export const validationSchema = Yup.object().shape({
    title: Yup.string().trim().required('Title is required.'),
    dueDate: Yup.number()
        .typeError('Due date is malformed!')
        .required('Due date is required.')
        .min(Date.now(), `Can't select time in too past`),
});

export const INITIAL_VALUES: Task = {
    title: '',
    dueDate: Date.now(),
    piority: PriorityType.Normal,
    description: '',
};
