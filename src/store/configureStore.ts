import { configureStore } from '@reduxjs/toolkit';
import appReducer, { AppState } from './app/reducer';
import tasksReducer, { TaskState } from './tasks/reducer';

export interface State {
    app: AppState;
    tasks: TaskState;
}

export const store = configureStore({
    reducer: {
        app: appReducer,
        tasks: tasksReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
