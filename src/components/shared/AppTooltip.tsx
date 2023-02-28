import React, { memo } from 'react';
import { Tooltip, TooltipProps, Zoom } from '@mui/material';

type AppTooltipProps = {
    children: React.ReactNode;
} & TooltipProps;

const AppTooltip = (props: AppTooltipProps) => {
    const { children, ...rest } = props;
    return (
        <Tooltip placement="top" arrow TransitionComponent={Zoom} {...rest}>
            {children}
        </Tooltip>
    );
};

export default memo(AppTooltip);
