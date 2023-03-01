import { Stack } from '@mui/material';
import { useFormik } from 'formik';
import { memo } from 'react';
import { DateTime, Input, Select } from 'src/components/FormControls';
import { Button } from 'src/components/shared';
import { PIORITY_OPTIONS } from 'src/constant';
import { PriorityType } from 'src/constant/enum';
import { Task } from 'src/constant/type';
import { useTasks } from 'src/store/tasks/selectors';
import { InitialValue, INITIAL_VALUES, validationSchema } from './helpers';

type UpdateTaskProps = {
    open: boolean;
    onClose: () => void;
};

const UpdateTask = (props: UpdateTaskProps) => {
    const { open, onClose } = props;
    const { onUpdateTask, task } = useTasks();
    const onSubmit = (value: InitialValue) => {
        if (!task || !task?.id) return;
        const valueUpdated: Task = {
            id: task.id,
            ...value,
        };
        onUpdateTask(valueUpdated);
        onClose();
    };

    const initialValue = task ? task : INITIAL_VALUES;

    const formik = useFormik({
        initialValues: initialValue,
        validationSchema,
        enableReinitialize: true,
        onSubmit,
    });

    const onChangeDate = (fieldName: string, newDate: Date) => {
        formik.setFieldValue(fieldName, newDate.getTime());
    };

    return open ? (
        <Stack component="form" flex="1" px={3} py={3} border="1px solid" borderTop="0" onSubmit={formik.handleSubmit}>
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
            <Button type="submit">Update</Button>
        </Stack>
    ) : (
        <></>
    );
};

export default memo(UpdateTask);
