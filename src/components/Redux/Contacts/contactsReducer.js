import { combineReducers } from 'redux';

// {
//   cities: {
//     items: [],
//     filter: '',
//   },
// }

// action = { type: 'action/type', payload: 'data'}

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'contacts/set_items':
      return action.payload;

    case 'contacts/add_item':
      return [...state, action.payload];

    case 'contacts/edit_item':
      return state.map(city =>
        city.id === action.payload.id ? action.payload : city,
      );

    case 'contacts/remove_item':
      return state.filter(city => city.id !== action.payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'contacts/change_filter':
      return action.payload;

    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
