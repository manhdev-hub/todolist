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

export const formatTimestamp2LocalDate = (date?: number | string, format?: string) => {
    if (!date) return '';
    if (!format) format = 'yyyy-MM-dd hh:mm';
    const dateObj = new Date(date);

    const year = dateObj.getFullYear();

    if (year === 1 || year === 1970) return '';
    const day = `0${dateObj.getDate()}`.substr(-2);
    const month = `0${dateObj.getMonth() + 1}`.substr(-2);
    const hours = `0${dateObj.getHours()}`.substr(-2);
    const minutes = `0${dateObj.getMinutes()}`.substr(-2);
    const seconds = `0${dateObj.getSeconds()}`.substr(-2);
    let dateFormat = format.replace('yyyy', year.toString());
    dateFormat = dateFormat.replace('MM', month);
    dateFormat = dateFormat.replace('dd', day);
    dateFormat = dateFormat.replace('hh', hours);
    dateFormat = dateFormat.replace('mm', minutes);
    dateFormat = dateFormat.replace('ss', seconds);

    return dateFormat;
};
