import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filtersSlice";
import { contactsReducer } from "./contactsSlice";

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filtersReducer,
    }
})

export default store;