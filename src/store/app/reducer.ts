import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Snackbar } from 'src/constant/type';

export interface AppState {
    snackbar: Snackbar | null;
}

const initialState: AppState = {
    snackbar: null,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        updateSnackbar(state, action: PayloadAction<Snackbar | null>) {
            state.snackbar = action.payload;
        },
    },
});

export const { updateSnackbar } = appSlice.actions;

export default appSlice.reducer;
