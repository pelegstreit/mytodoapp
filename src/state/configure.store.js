import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import taksReducer from "./tasks.slice"


let lastSavedData = "[]";
const local = localStorage.getItem("todosProj");
if (local) lastSavedData = JSON.parse(local);
const initialAppState = lastSavedData;

const saveToStorage = (store) => (next) => (action) => {
  console.log("dispatching", action);
  next(action);
  window.localStorage.setItem("todosProj", JSON.stringify(store.getState()));
};

const store = configureStore({
  reducer: {
    tasks: taksReducer,
  },
  preloadedState: initialAppState,
  middleware: [saveToStorage]
});

export default store;
