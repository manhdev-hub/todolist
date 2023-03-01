import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { memo } from 'react';
import Button from './shared/Button';

type ConfirmProps = {
    open: boolean;
    handleClose: () => void;
    handleSubmit: () => void;
    title?: string;
    content?: string;
};

const Confirm = (props: ConfirmProps) => {
    const { open, title, content, handleClose, handleSubmit } = props;
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="draggable-dialog-title">
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>{content}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="error.main">
                    Cancel
                </Button>
                <Button color="primary.main" onClick={handleSubmit}>
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default memo(Confirm);
