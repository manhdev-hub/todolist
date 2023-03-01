import { Box, Stack } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import { Heading } from 'src/components';
import { Input } from 'src/components/FormControls';
import { useTasks } from 'src/store/tasks/selectors';
import TaskItem from './TaskItem';
import { Button, Text } from 'src/components/shared';

const Tasks = () => {
    const { tasks, onGetTasks, onSearchTask, tempId, onDeleteMultipleTask } = useTasks();
    const [value, setValue] = useState<string>('');
    const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const textValue = event.target.value;
        setValue(textValue);
        onSearchTask(textValue);
    };
    const removeMultipleTask = () => {
        onDeleteMultipleTask(tempId);
    };

    useEffect(() => {
        if (!tasks) onGetTasks();
    }, [onGetTasks, tasks]);

    return (
        <Stack className="task-list-wrapper" border="1px solid" flex={1}>
            <Stack px={{ md: 5, sm: 3, xs: 2 }} py={3}>
                <Heading>To do list</Heading>
                <Input name="search" placeholder="Search..." onChange={onChangeValue} value={value} />
                <Stack className="tasks" minHeight={300} overflow="auto">
                    {tasks && tasks.map((task, index) => <TaskItem key={index} item={task} />)}
                </Stack>
            </Stack>
            <Box
                className="action"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{ backgroundColor: '#CCCCCC', py: 3, px: 2 }}
            >
                <Text>Bulk Action:</Text>
                <Stack direction="row" spacing={2}>
                    <Button color="primary.main">Done</Button>
                    <Button color="error.main" onClick={removeMultipleTask}>
                        Remove
                    </Button>
                </Stack>
            </Box>
        </Stack>
    );
};

export default memo(Tasks);
