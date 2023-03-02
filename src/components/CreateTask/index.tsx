import { Stack } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';
import { useFormik } from 'formik';
import { memo } from 'react';
import { Heading } from 'src/components';
import { DateTime, Input, Select } from 'src/components/FormControls';
import { Button } from 'src/components/shared';
import { PIORITY_OPTIONS, A_MIN_TO_MILISEC, CREATE_TASK_SUCCESS_MESSAGE, TIME_PAST_ERROR } from 'src/constant';
import { PriorityType } from 'src/constant/enum';
import { Task } from 'src/constant/type';
import { useSnackbar } from 'src/store/app';
import { useTasks } from 'src/store/tasks';
import { InitialValue, INITIAL_VALUES, validationSchema } from './helpers';

const CreateTask = () => {
    const { onAddTask } = useTasks();
    const { onSnackbar } = useSnackbar();
    const onSubmit = (value: InitialValue) => {
        if (value.dueDate < Date.now() - A_MIN_TO_MILISEC) {
            formik.setFieldError('dueDate', TIME_PAST_ERROR);
            return;
        }
        const newValue: Task = {
            id: nanoid(),
            ...value,
        };
        onAddTask(newValue);
        onSnackbar(CREATE_TASK_SUCCESS_MESSAGE, 'success');
        onResetForm();
    };

    const formik = useFormik({
        initialValues: INITIAL_VALUES,
        validationSchema,
        enableReinitialize: true,
        onSubmit,
    });

    const onChangeDate = (fieldName: string, newDate: Date) => {
        formik.setFieldValue(fieldName, newDate.getTime());
    };

    const onResetForm = () => {
        formik.resetForm();
    };

    return (
        <Stack
            component="form"
            flex="1"
            px={{ md: 5, sm: 3, xs: 2 }}
            py={3}
            border="1px solid"
            borderRight={{ md: 0, xs: 1 }}
            borderBottom={{ md: 1, xs: 0 }}
            onSubmit={formik.handleSubmit}
        >
            <Heading>New Task</Heading>
            <Input
                name="title"
                placeholder="Add new task..."
                onChange={formik.handleChange}
                value={formik.values['title']}
                error={formik.errors['title']}
            />
            <Input
                name="description"
                placeholder=""
                label="Description"
                multiline
                minRows={6}
                onChange={formik.handleChange}
                value={formik.values['description']}
                error={formik.errors['description']}
            />
            <Stack className="date-wrapper" direction={{ sm: 'row', xs: 'column' }} spacing={2} mb={5}>
                <DateTime
                    label="Due date"
                    name="dueDate"
                    value={formik.values['dueDate']}
                    error={formik.errors['dueDate']}
                    onChangeDate={onChangeDate}
                />
                <Select
                    name="piority"
                    label="Piority"
                    options={PIORITY_OPTIONS}
                    defaultValue={PriorityType.Normal}
                    value={formik.values['piority']}
                    onChange={formik.handleChange}
                />
            </Stack>
            <Button type="submit">Add</Button>
        </Stack>
    );
};

export default memo(CreateTask);
