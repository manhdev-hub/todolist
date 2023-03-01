import { Stack } from '@mui/material';
import { memo } from 'react';
import { Heading } from 'src/components';
import { DateTime, Input, Select, Option } from 'src/components/FormControls';
import { Button } from 'src/components/shared';
import { useFormik } from 'formik';
import { INITIAL_VALUES, validationSchema } from './helpers';
import { PriorityType } from 'src/constant/enum';
import { Task } from 'src/constant/type';
import useTask from 'src/hooks/useTask';

const CreateTask = () => {
    const [tasks, onGetTask, onAddTask] = useTask();
    const onSubmit = (value: Task) => {
        onAddTask(value);
        onGetTask(tasks);
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

    return (
        <Stack
            component="form"
            flex="1"
            px={5}
            py={3}
            border="1px solid"
            borderRight="0"
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
            <Stack className="date-wrapper" direction="row" spacing={2} mb={5}>
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

const PIORITY_OPTIONS: Option[] = [
    {
        label: 'Low',
        value: PriorityType.Low,
    },
    {
        label: 'Normal',
        value: PriorityType.Normal,
    },
    {
        label: 'High',
        value: PriorityType.High,
    },
];
