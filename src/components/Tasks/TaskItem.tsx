import { Box, Checkbox, Stack } from '@mui/material';
import React, { memo } from 'react';
import { Task } from 'src/constant/type';
import { Button, Text } from 'src/components/shared';

type TaskItemProps = {
    item: Task;
};

const TaskItem = (props: TaskItemProps) => {
    const { item } = props;
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
                <Button color="error.main" sx={{ width: 100 }}>
                    Remove
                </Button>
            </Stack>
        </Box>
    );
};

export default memo(TaskItem);
