import React, { memo, useEffect } from 'react';
import { Snackbar as MuiSnackbar, Alert, paperClasses } from '@mui/material';
import { useSnackbar, updateSnackbar } from 'src/store/app';
import { Text } from 'src/components/shared';
import { useAppDispatch } from 'src/store/hook';

const Snackbar = () => {
    const dispatch = useAppDispatch();
    const { snackbar } = useSnackbar();

    const onClose = () => {
        dispatch(updateSnackbar(null));
    };

    useEffect(() => {
        return () => {
            dispatch(updateSnackbar(null));
        };
    }, [dispatch]);

    if (!snackbar?.severity) return null;

    return (
        <MuiSnackbar
            onClose={onClose}
            open={Boolean(snackbar)}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            sx={{
                [`& .${paperClasses.root}`]: {
                    backgroundColor: 'common.white',
                },
            }}
        >
            <Alert severity={snackbar?.severity ?? 'success'} sx={{ width: '100%' }}>
                <Text variant="body2" fontWeight={500} color="common.black">
                    {snackbar?.message}
                </Text>
            </Alert>
        </MuiSnackbar>
    );
};

export default memo(Snackbar);
