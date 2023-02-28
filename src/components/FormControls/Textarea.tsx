import React, { memo } from 'react';
import { TextField } from '@mui/material';
import { Stack } from '@mui/system';
import { Text } from 'src/components/shared';

type TextareaProps = {
    label?: string;
};

const Textarea = (props: TextareaProps) => {
    const { label } = props;
    return (
        <Stack mb={3}>
            {label && (
                <Text variant="body2" fontWeight={600} mb={0.6}>
                    {label}
                </Text>
            )}
            <TextField multiline minRows={4} />
        </Stack>
    );
};

export default memo(Textarea);
