import { Stack } from '@mui/material';
import { memo } from 'react';
import { Heading } from 'src/components';
import { DateTime, Input, Select, Textarea } from 'src/components/FormControls';
import { Button } from 'src/components/shared';

type CreateTaskProps = {};

const CreateTask = (props: CreateTaskProps) => {
    return (
        <Stack component="form" flex="1" px={5} py={3} border="1px solid" borderRight="0">
            <Heading>New Task</Heading>
            <Input placeholder="Add new task..." />
            <Textarea label="Description" />
            <Stack className="date-wrapper" direction="row" spacing={2}>
                <DateTime label="Due date" />
                <Select label="Piority" />
            </Stack>
            <Button>Add</Button>
        </Stack>
    );
};

export default memo(CreateTask);
