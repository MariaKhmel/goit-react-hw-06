import { createSlice, nanoid } from "@reduxjs/toolkit";
import initialContacts from "../contacts.json";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: initialContacts
    },
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload)
            },
            prepare({ name, number }) {
                return {
                    payload:
                    {
                        name,
                        number,
                        id: nanoid()
                    }
                }
            }
        },
        deleteContact(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)
        }

    }
})
export const selectContacts = (state) => state.contacts.items;
export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
