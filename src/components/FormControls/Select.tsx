import { MenuItem, Select as SelectMUI, SelectProps as SelectPropsMUI, Stack } from '@mui/material';
import { memo } from 'react';
import { Text } from 'src/components/shared';

export type Option = {
    label: string;
    value: number | string;
};

type SelectProps = SelectPropsMUI & {
    label?: string;
    options: Option[];
};

const Select = (props: SelectProps) => {
    const { label, options, ...rest } = props;
    return (
        <Stack flex={1}>
            {label && (
                <Text variant="body2" fontWeight={600} mb={0.6}>
                    {label}
                </Text>
            )}
            <SelectMUI labelId="demo-simple-select-label" id="demo-simple-select" label="Age" size="small" {...rest}>
                {options.map((option, index) => (
                    <MenuItem key={index} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </SelectMUI>
        </Stack>
    );
};

export default memo(Select);
