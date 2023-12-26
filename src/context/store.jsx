import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistStore } from "redux-persist";
import rootReducer from "./slices/rootReducer";
import { quotesApi } from "../services/quotes";

const store = configureStore({
    reducer: {
        root: rootReducer,
        [quotesApi.reducerPath]: quotesApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(quotesApi.middleware),
});

setupListeners(store.dispatch);
const persistor = persistStore(store);
export { store, persistor };
