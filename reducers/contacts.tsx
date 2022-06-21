import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ContactInterface} from '../src/components/Contact';

// Define a type for the slice state
interface ContactsState {
  contactsList: ContactInterface[];
  focusedContact?: ContactInterface;
}

const initialState: ContactsState = {
  contactsList: [],
  focusedContact: undefined,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<ContactInterface>) => {
      state.contactsList = [...state.contactsList, action.payload];
    },
    focusContact: (state, action: PayloadAction<ContactInterface>) => {
      state.focusedContact = action.payload;
    },
    clearContact: state => {
      state.focusedContact = undefined;
    },
  },
});

export const {addContact, focusContact, clearContact} = contactsSlice.actions;

export default contactsSlice.reducer;
