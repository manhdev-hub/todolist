import * as Yup from 'yup';
import { PriorityType } from 'src/constant/enum';
import { TIME_MALFORMED, TIME_PAST_ERROR, TIME_REQUIRED, TITLE_REQUITED } from 'src/constant';

export interface InitialValue {
    title: string;
    description?: string;
    dueDate: number;
    piority: PriorityType;
}

export const validationSchema = Yup.object().shape({
    title: Yup.string().trim().required(TITLE_REQUITED),
    dueDate: Yup.number().typeError(TIME_MALFORMED).required(TIME_REQUIRED).min(Date.now(), TIME_PAST_ERROR),
});

export const INITIAL_VALUES: InitialValue = {
    title: '',
    dueDate: Date.now(),
    piority: PriorityType.Normal,
    description: '',
};
