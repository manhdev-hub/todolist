import { Button as ButtonMUI, ButtonProps as ButtonPropsMUI } from '@mui/material';
import { memo } from 'react';

type ButtonProps = Omit<ButtonPropsMUI, 'color'> & {
    color?: string;
};

const Button = (props: ButtonProps) => {
    const { children, color, sx, ...rest } = props;
    return (
        <ButtonMUI
            {...rest}
            sx={{
                textTransform: 'capitalize',
                backgroundColor: color ?? 'secondary.main',
                color: '#fff',
                '&:hover': {
                    backgroundColor: color ?? 'secondary.main',
                },
                ...sx,
            }}
        >
            {children}
        </ButtonMUI>
    );
};

export default memo(Button);
