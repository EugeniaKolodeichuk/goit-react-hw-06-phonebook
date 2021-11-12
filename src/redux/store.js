import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import logger from 'redux-logger';
import contactsReducer from './contacts/reducer';

/*Redux Toolkit*/
/* console.log(process.env); */
/* console.log(getDefaultMiddleware()); */

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

/*Redux*/
/* import { createStore, combineReducers } from 'redux'; */
/* import { composeWithDevTools } from 'redux-devtools-extension'; */

/* const rootReducer = combineReducers({ contacts: contactsReducer }); */
/* const store = createStore(rootReducer, composeWithDevTools()); */

// eslint-disable-next-line
export default { store, persistor };
