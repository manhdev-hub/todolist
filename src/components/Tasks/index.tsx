import { Stack } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import { Heading } from 'src/components';
import { Input } from 'src/components/FormControls';
import { useTasks } from 'src/store/tasks/selectors';
import TaskItem from './TaskItem';

type TasksProps = {};

const Tasks = (props: TasksProps) => {
    const { onSearchTask } = useTasks();
    const [value, setValue] = useState<string>('');
    const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const textValue = event.target.value;
        setValue(textValue);
        onSearchTask(textValue);
    };
    const { tasks, onGetTasks } = useTasks();

    useEffect(() => {
        if (!tasks) onGetTasks();
    }, [onGetTasks, tasks]);

    return (
        <Stack flex="1" px={5} py={3} border="1px solid">
            <Heading>To do list</Heading>
            <Input name="search" placeholder="Search..." onChange={onChangeValue} value={value} />
            <Stack className="tasks">{tasks && tasks.map((task, index) => <TaskItem key={index} item={task} />)}</Stack>
        </Stack>
    );
};

export default memo(Tasks);
