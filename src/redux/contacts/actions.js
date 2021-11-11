import types from './types';
import { v4 as uuidv4 } from 'uuid';

const onAddContact = (name, number) => ({
  type: types.ADD,
  payload: {
    name,
    number,
    id: uuidv4(),
  },
});

const onDeleteContact = id => ({
  type: types.DELETE,
  payload: id,
});

const onChangeFilter = contacts => ({
  type: types.CHANGE_FILTER,
  payload: contacts,
});

// eslint-disable-next-line
export default { onAddContact, onDeleteContact, onChangeFilter };
