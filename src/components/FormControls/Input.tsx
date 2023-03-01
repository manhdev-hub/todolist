import { Input as InputMUI, InputProps as InputPropsMUI } from '@mui/material';
import { Stack } from '@mui/system';
import { memo } from 'react';
import { Text } from 'src/components/shared';

type InputProps = Omit<InputPropsMUI, 'error'> & {
    name: string;
    error?: string;
    id?: string;
    placeholder?: string;
    label?: string;
};

const Input = (props: InputProps) => {
    const { id = 'outlined-basic', placeholder = 'Jot something down...', label, name, error, ...rest } = props;

    return (
        <Stack mb={3}>
            {label && (
                <Text variant="body2" fontWeight={600} mb={0.6}>
                    {label}
                </Text>
            )}
            <InputMUI
                name={name}
                id={id}
                placeholder={placeholder}
                disableUnderline
                sx={{
                    border: '1px solid',
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: 16,
                }}
                {...rest}
            />
            {Boolean(error) && (
                <Text mt={0.7} variant="body2" color="error.main">
                    {error}
                </Text>
            )}
        </Stack>
    );
};

export default memo(Input);
