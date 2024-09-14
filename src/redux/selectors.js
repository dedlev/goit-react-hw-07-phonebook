import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const isLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filters;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
