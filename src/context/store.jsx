import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistStore } from "redux-persist";
import rootReducer from "./slices/rootReducer";
import { quotesApi } from "../services/quotes";
import { authApi } from "../services/authApi";

const store = configureStore({
    reducer: {
        root: rootReducer,
        [quotesApi.reducerPath]: quotesApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(quotesApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);
const persistor = persistStore(store);
export { store, persistor };
