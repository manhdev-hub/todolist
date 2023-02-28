import React, { memo } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Stack } from '@mui/system';
import { Text } from 'src/components/shared';

type DateTimeProps = {
    label?: string;
};

const DateTime = (props: DateTimeProps) => {
    const { label } = props;
    const [value, setValue] = React.useState<number | null>(Date.now());
    return (
        <Stack flex={1}>
            {label && (
                <Text variant="body2" fontWeight={600} mb={0.6}>
                    {label}
                </Text>
            )}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label=""
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                />
            </LocalizationProvider>
        </Stack>
    );
};

export default memo(DateTime);
