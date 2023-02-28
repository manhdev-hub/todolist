import { Breakpoint } from '@mui/material';
import { BreakpointsOptions } from 'src/hooks';

export const getActiveBreakpoint = (currentRatio: Breakpoint, options: { [key: string]: string }) => {
    switch (currentRatio) {
        case BreakpointsOptions.xl:
            return (
                options[BreakpointsOptions.xl] ??
                options[BreakpointsOptions.lg] ??
                options[BreakpointsOptions.md] ??
                options[BreakpointsOptions.sm] ??
                options[BreakpointsOptions.xs]
            );
        case BreakpointsOptions.lg:
            return (
                options[BreakpointsOptions.lg] ??
                options[BreakpointsOptions.md] ??
                options[BreakpointsOptions.sm] ??
                options[BreakpointsOptions.xs]
            );
        case BreakpointsOptions.md:
            return options[BreakpointsOptions.md] ?? options[BreakpointsOptions.sm] ?? options[BreakpointsOptions.xs];
        case BreakpointsOptions.sm:
            return options[BreakpointsOptions.sm] ?? options[BreakpointsOptions.xs];
        case BreakpointsOptions.xs:
            return options[BreakpointsOptions.xs];
        default:
            return;
    }
};
