import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';
import {ContactInterface} from '../src/components/Contact';

// Define a type for the slice state
interface ContactsState {
  contactsList: ContactInterface[];
}

const initialState: ContactsState = {
  contactsList: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<ContactInterface>) => {
      state.contactsList = [...state.contactsList, action.payload];
    },
  },
});

export const {addContact} = contactsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectContacts = (state: RootState) => state.contacts.contactsList;

export default contactsSlice.reducer;
