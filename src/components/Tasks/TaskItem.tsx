import { Box, Checkbox, Stack } from '@mui/material';
import React, { memo, useState } from 'react';
import { Task } from 'src/constant/type';
import { Button, Text } from 'src/components/shared';
import { useTasks } from 'src/store/tasks/selectors';
import { useToggle } from 'src/hooks';
import { Confirm, UpdateTask } from 'src/components';

type TaskItemProps = {
    item: Task;
};

const TaskItem = (props: TaskItemProps) => {
    const { item } = props;
    const { tempId, onDeleteTask, onSetIdTask, onGetTask } = useTasks();
    const [currentItem, setCurrentItem] = useState<Task>();
    const [open, onOpen, onClose] = useToggle();
    const [openDetail, , onCloseDetail, onToggleDetail] = useToggle();

    const openDialog = (item: Task) => {
        setCurrentItem(item);
        onOpen();
    };

    const onRemoveTasks = () => {
        if (!currentItem) return;
        onDeleteTask(currentItem);
    };

    const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newIndex = [...tempId, item.id];
            onSetIdTask(newIndex);
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
                    <Checkbox className="checkbox" onChange={handleChecked} defaultChecked={false} />
                    <Text
                        sx={{
                            mr: '15px!important',
                            width: { lg: 140, xs: 'auto' },
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
                    title="Are you sure delete this task?"
                />
            </Box>
            <UpdateTask open={openDetail} onClose={onCloseDetail} />
        </Stack>
    );
};

export default memo(TaskItem);
