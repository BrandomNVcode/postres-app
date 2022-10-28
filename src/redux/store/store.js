import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import listReucer from '../features/list/listSlice';
import { listListenerMiddleware } from '../features/list/listMiddleware';
import { userListenerMiddleware } from '../features/user/userMiddleware';


const listenerMiddleware = createListenerMiddleware();


userListenerMiddleware(listenerMiddleware);
listListenerMiddleware(listenerMiddleware);




export const store = configureStore({
  reducer: {
    user: userReducer,
    list: listReucer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware)
})