import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

/*Redux Toolkit*/

const onAddContact = createAction('contacts/add', (name, number) => ({
  payload: {
    name,
    number,
    id: uuidv4(),
  },
}));

const onDeleteContact = createAction('contacts/delete');

const onChangeFilter = createAction('contacts/changeFilter');

/*Redux*/
/* import types from './types'; */

/* const onAddContact = (name, number) => ({
  type: types.ADD,
  payload: {
    name,
    number,
    id: uuidv4(),
  },
}); */

/* const onDeleteContact = id => ({
  type: types.DELETE,
  payload: id,
}); */

/* const onChangeFilter = contacts => ({
  type: types.CHANGE_FILTER,
  payload: contacts,
}); */

// eslint-disable-next-line
export default { onAddContact, onDeleteContact, onChangeFilter };
