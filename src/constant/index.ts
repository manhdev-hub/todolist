import { PriorityType } from './enum';
import { Option } from 'src/components/FormControls';

export const KEY_LOCALSTORAGE = 'TASKS';

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
