// store.js
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";

const middleWares = [thunk];

export type RootState = ReturnType<typeof rootReducer>;

if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["user", "categories"],
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // optional: to ignore non-serializable checks
    }).concat(middleWares),
});

export const persistor = persistStore(store);
