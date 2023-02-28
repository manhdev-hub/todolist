import React, { memo } from 'react';
import { Stack } from '@mui/material';
import { Heading } from 'src/components';

type UpdateTaskProps = {};

const UpdateTask = (props: UpdateTaskProps) => {
    return (
        <Stack component="form">
            <Heading>Update Task</Heading>
        </Stack>
    );
};

export default memo(UpdateTask);
