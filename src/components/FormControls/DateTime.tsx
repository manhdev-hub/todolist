import { StackProps, Stack, InputBaseProps } from '@mui/material';
import { TextField, Text } from 'src/components/shared';
import { memo } from 'react';
import { formatTimestamp2LocalDate } from 'src/utils';

type DateTimePickerProps = {
    value: string | number | Date;
    name: string;
    onChangeDate?: (fieldName: string, date: Date) => void;
    error?: string;
    label?: string;
    required?: boolean;
    containerProps?: StackProps;
    InputProps?: InputBaseProps;
};

const DateTimePicker = (props: DateTimePickerProps) => {
    const now = new Date();
    const {
        value = now,
        name,
        onChangeDate,
        error,
        label,
        required,
        containerProps = {},
        InputProps = { sx: { fontSize: 16 } },
        ...rest
    } = props;

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChangeDate && onChangeDate(name, new Date(event.target.value ?? 1));
    };

    return (
        <Stack flex={1} {...containerProps}>
            {label && (
                <Text variant="body2" fontWeight={600} mb={0.6}>
                    {label}
                </Text>
            )}
            <TextField
                type="datetime-local"
                defaultValue={formatTimestamp2LocalDate(new Date().getTime() as number, 'yyyy-MM-ddThh:mm')}
                value={formatTimestamp2LocalDate(Number(value), 'yyyy-MM-ddThh:mm')}
                InputProps={{ ...InputProps, onChange }}
                {...rest}
            />
            {Boolean(error) && (
                <Text variant="body2" mx={1} color="error" mt={0.7}>
                    {error}
                </Text>
            )}
        </Stack>
    );
};

export default memo(DateTimePicker);
