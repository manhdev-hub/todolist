import { Snackbar } from 'src/constant/type';
import { useAppDispatch, useAppSelector } from 'src/store/hook';
import { State } from 'src/store/configureStore';
import { useCallback } from 'react';
import { AlertColor } from '@mui/material';
import { updateSnackbar } from './reducer';

export const useSnackbar = () => {
    const dispatch = useAppDispatch();
    const snackbar: Snackbar | null = useAppSelector((state: State) => state.app.snackbar);

    const onSnackbar = useCallback(
        (message: string, severity?: AlertColor) => {
            dispatch(
                updateSnackbar({
                    message,
                    severity: severity ?? 'info',
                }),
            );
        },
        [dispatch],
    );

    return { snackbar, onSnackbar };
};
