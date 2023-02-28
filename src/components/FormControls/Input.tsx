import { Input as InputMUI } from '@mui/material';
import { memo } from 'react';

type InputProps = {
    id?: string;
    placeholder?: string;
};

const Input = (props: InputProps) => {
    const { id = 'outlined-basic', placeholder = 'Jot something down...' } = props;
    return (
        <InputMUI
            id={id}
            placeholder={placeholder}
            disableUnderline
            sx={{ border: '1px solid', px: 0.6, borderRadius: 1, mb: 3 }}
        />
    );
};

export default memo(Input);
