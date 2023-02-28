import { MenuItem, Select as SelectMUI, Stack } from '@mui/material';
import { StackProps } from '@mui/system';
import { memo } from 'react';
import { Text } from 'src/components/shared';

type SelectProps = StackProps & {
    label?: string;
};

const Select = (props: SelectProps) => {
    const { label } = props;
    return (
        <Stack flex={1}>
            {label && (
                <Text variant="body2" fontWeight={600} mb={0.6}>
                    {label}
                </Text>
            )}
            <SelectMUI labelId="demo-simple-select-label" id="demo-simple-select" label="Age" defaultValue={10}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </SelectMUI>
        </Stack>
    );
};

export default memo(Select);
