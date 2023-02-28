import React, { memo } from 'react';
import { Stack } from '@mui/material';
import { Heading } from 'src/components';

type TasksProps = {};

const Tasks = (props: TasksProps) => {
    return (
        <Stack flex="1" px={5} py={3} border="1px solid">
            <Heading>To do list</Heading>
        </Stack>
    );
};

export default memo(Tasks);
