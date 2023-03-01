import { Box, Checkbox, Stack } from '@mui/material';
import React, { memo, useState } from 'react';
import { Task } from 'src/constant/type';
import { Button, Text } from 'src/components/shared';
import { useTasks } from 'src/store/tasks/selectors';
import { useToggle } from 'src/hooks';
import { Confirm } from 'src/components';

type TaskItemProps = {
    item: Task;
};

const TaskItem = (props: TaskItemProps) => {
    const { item } = props;
    const { onDeleteTask } = useTasks();
    const [currentItem, setCurrntItem] = useState<Task>();
    const [open, onOpen, onClose] = useToggle();

    const openDialog = (item: Task) => {
        setCurrntItem(item);
        onOpen();
    };

    const onRemoveTasks = () => {
        if (!currentItem) return;
        onDeleteTask(currentItem);
    };

    return (
        <Box
            className="item"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            border="1px solid"
            px={1.5}
            py={1}
            mb={2}
        >
            <Stack className="title" direction="row" spacing={2} alignItems="center">
                <Checkbox />
                <Text>{item.title}</Text>
            </Stack>

            <Stack className="action" direction="row" spacing={2} alignItems="center">
                <Button color="primary.main" sx={{ width: 100 }}>
                    Detail
                </Button>
                <Button color="error.main" sx={{ width: 100 }} onClick={() => openDialog(item)}>
                    Remove
                </Button>
            </Stack>

            <Confirm
                open={open}
                handleClose={onClose}
                handleSubmit={() => onRemoveTasks()}
                title="Are you sure delete this task?"
            />
        </Box>
    );
};

export default memo(TaskItem);
