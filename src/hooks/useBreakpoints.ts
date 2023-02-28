import { useMemo } from 'react';
import { Breakpoint, useMediaQuery, useTheme } from '@mui/material';

const useBreakpoints = () => {
    const theme = useTheme();
    const isXsSmaller = useMediaQuery(theme.breakpoints.down(BreakpointsOptions.xs));
    const isSmSmaller = useMediaQuery(theme.breakpoints.down(BreakpointsOptions.sm));
    const isMdSmaller = useMediaQuery(theme.breakpoints.down(BreakpointsOptions.md));
    const isLgSmaller = useMediaQuery(theme.breakpoints.down(BreakpointsOptions.lg));
    const isXlSmaller = useMediaQuery(theme.breakpoints.down(BreakpointsOptions.xl));

    const ratio = useMemo(() => {
        switch (true) {
            case Boolean(isSmSmaller):
                return BreakpointsOptions.xs;
            case Boolean(isMdSmaller):
                return BreakpointsOptions.sm;
            case Boolean(isLgSmaller):
                return BreakpointsOptions.md;
            case Boolean(isXlSmaller):
                return BreakpointsOptions.lg;
            default:
                return BreakpointsOptions.xl;
        }
    }, [isSmSmaller, isMdSmaller, isLgSmaller, isXlSmaller]);

    return {
        isXsSmaller,
        isSmSmaller,
        isMdSmaller,
        isLgSmaller,
        isXlSmaller,
        currentRatio: ratio,
    };
};

export default useBreakpoints;

export const BreakpointsOptions: { [key: string]: Breakpoint } = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
};
