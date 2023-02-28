import { Button as ButtonMUI, ButtonProps as ButtonPropsMUI } from '@mui/material';
import { memo } from 'react';

type ButtonProps = ButtonPropsMUI & {};

const Button = (props: ButtonProps) => {
    const { children, ...rest } = props;
    return (
        <ButtonMUI
            {...rest}
            sx={{
                textTransform: 'capitalize',
                mt: 5,
                background: 'green',
                color: '#fff',
                '&:hover': { background: 'green' },
            }}
        >
            {children}
        </ButtonMUI>
    );
};

export default memo(Button);
