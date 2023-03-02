import { Box, Checkbox, Stack } from '@mui/material';
import React, { memo, useState } from 'react';
import { Task } from 'src/constant/type';
import { Button, Text } from 'src/components/shared';
import { useTasks } from 'src/store/tasks';
import { useToggle } from 'src/hooks';
import { Confirm, UpdateTask } from 'src/components';
import { useSnackbar } from 'src/store/app';
import { DELETE_TASK_SUCCESS_MESSAGE, TASK_NOT_FOUND } from 'src/constant';

type TaskItemProps = {
    item: Task;
};

const TaskItem = (props: TaskItemProps) => {
    const { item } = props;
    const { tempId, onDeleteTask, onSetIdTask, onGetTask } = useTasks();
    const [currentItem, setCurrentItem] = useState<Task>();
    const [open, onOpen, onClose] = useToggle();
    const [openDetail, , onCloseDetail, onToggleDetail] = useToggle();
    const { onSnackbar } = useSnackbar();

    const openDialog = (item: Task) => {
        setCurrentItem(item);
        onOpen();
    };

    const onRemoveTasks = () => {
        if (!currentItem) {
            onSnackbar(TASK_NOT_FOUND, 'error');
            return;
        }
        onDeleteTask(currentItem);
        onSnackbar(DELETE_TASK_SUCCESS_MESSAGE, 'success');
    };

    const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newIds = [...tempId, item.id];
            onSetIdTask(newIds);
        } else {
            const newIds = tempId.filter((id) => id !== item.id);
            onSetIdTask(newIds);
        }
    };

    const handleDetail = () => {
        onToggleDetail();
        onGetTask(item);
    };

    return (
        <Stack className="item-wrapper" mb={2}>
            <Box
                className="item"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                border="1px solid"
                px={1.5}
                py={1}
            >
                <Stack className="title" direction="row" spacing={2} alignItems="center">
                    <Checkbox
                        checked={tempId.some((id) => id === item.id)}
                        className="checkbox"
                        onChange={handleChecked}
                    />
                    <Text
                        sx={{
                            mr: '15px!important',
                            width: { lg: 140, sm: 'auto', xs: 80 },
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        {item.title}
                    </Text>
                </Stack>

                <Stack className="action" direction={{ sm: 'row', xs: 'column' }} spacing={2} alignItems="center">
                    <Button color="primary.main" sx={{ width: { lg: 100, xs: 70 } }} onClick={handleDetail}>
                        Detail
                    </Button>
                    <Button color="error.main" sx={{ width: { lg: 100, xs: 70 } }} onClick={() => openDialog(item)}>
                        Remove
                    </Button>
                </Stack>

                <Confirm
                    open={open}
                    handleClose={onClose}
                    handleSubmit={() => onRemoveTasks()}
                    title="Are you sure you want to delete this task?"
                />
            </Box>
            <UpdateTask open={openDetail} onClose={onCloseDetail} />
        </Stack>
    );
};

export default memo(TaskItem);
