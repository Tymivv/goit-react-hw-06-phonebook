// import { createAction } from '@reduxjs/toolkit';

const setContacts = cities => ({
  type: 'contacts/set_items',
  payload: cities,
});

const addContacts = city => ({
  type: 'contacts/add_item',
  payload: city,
});

const editContacts = city => ({
  type: 'contacts/edit_item',
  payload: city,
});

const deleteContacts = id => ({
  type: 'contacts/remove_item',
  payload: id,
});

const changeFilter = value => ({
  type: 'contacts/change_filter',
  payload: value,
});

export { setContacts, addContacts, editContacts, deleteContacts, changeFilter };
