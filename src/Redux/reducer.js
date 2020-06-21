import {createStore} from 'redux';

import {persistStore, persistReducer} from 'redux-persist';

import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['ideas'],
};
const initialState = {
  undefined: undefined,
  ideas: undefined,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REHYDRATE':
      return state;
      break;
    case 'UPLOAD_NEW_IDEA':
      console.log(action.payload);
      return {
        ...state,
        ideas: {...action.payload},
      };
      break;
  }
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

console.log(store);
console.log(persistor.getState());
