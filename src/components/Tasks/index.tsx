import { Box, Stack } from '@mui/material';
import { memo, useCallback, useEffect, useState } from 'react';
import { Confirm, Heading } from 'src/components';
import { Input } from 'src/components/FormControls';
import { useTasks } from 'src/store/tasks';
import TaskItem from './TaskItem';
import { Button, Text } from 'src/components/shared';
import { useToggle } from 'src/hooks';
import { useSnackbar } from 'src/store/app';
import { DELETE_TASK_SUCCESS_MESSAGE } from 'src/constant';

const Tasks = () => {
    const { tasks, onGetTasks, onSearchTask, tempId, onDeleteMultipleTask } = useTasks();
    const [open, onOpen, onClose] = useToggle();
    const [openAction, setOpenAction] = useState<boolean>(false);
    const { onSnackbar } = useSnackbar();
    const [value, setValue] = useState<string>('');
    const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const textValue = event.target.value;
        setValue(textValue);
        onSearchTask(textValue);
    };

    const removeMultipleTask = () => {
        onDeleteMultipleTask(tempId);
        onSnackbar(DELETE_TASK_SUCCESS_MESSAGE, 'success');
        setOpenAction(false);
        onClose();
    };

    useEffect(() => {
        if (!tasks) onGetTasks();
    }, [onGetTasks, tasks]);

    useEffect(() => {
        const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('.checkbox input');
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', () => {
                if (checkbox.checked === true) {
                    setOpenAction(true);
                } else {
                    setOpenAction(false);
                }
            });
        });
    }, [tasks]);

    return (
        <Stack className="task-list-wrapper" border="1px solid" flex={1}>
            <Stack px={{ md: 5, sm: 3, xs: 2 }} py={3}>
                <Heading>To do list</Heading>
                <Input name="search" placeholder="Search..." onChange={onChangeValue} value={value} />
                <Stack className="tasks" minHeight={300} overflow="auto">
                    {tasks && tasks.map((task, index) => <TaskItem key={index} item={task} />)}
                </Stack>
            </Stack>
            {openAction && (
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
                        <Button color="error.main" onClick={onOpen}>
                            Remove
                        </Button>
                    </Stack>
                </Box>
            )}

            <Confirm
                open={open}
                handleClose={onClose}
                handleSubmit={removeMultipleTask}
                title="Do you want to delete selected tasks?"
            />
        </Stack>
    );
};

export default memo(Tasks);
