import React, { memo, useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { Heading } from 'src/components';
import { Input } from 'src/components/FormControls';
import TaskItem from './TaskItem';
import useTask from 'src/hooks/useTask';
import { Task } from 'src/constant/type';

type TasksProps = {};

const Tasks = (props: TasksProps) => {
    const [value, setValue] = useState<string>('');
    const onChangeValue = () => {};
    const [tasks] = useTask();

    return (
        <Stack flex="1" px={5} py={3} border="1px solid">
            <Heading>To do list</Heading>
            <Input name="search" placeholder="Search..." onChange={onChangeValue} value={value} />
            <Stack className="tasks">{tasks && tasks.map((task, index) => <TaskItem key={index} item={task} />)}</Stack>
        </Stack>
    );
};

export default memo(Tasks);
