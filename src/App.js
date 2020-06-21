import React from 'react';
// import {Provider} from 'react-redux';
// import {store} from './Redux/reducer';
import {SafeAreaView, StatusBar, Text} from 'react-native';

import Main from './Main';

const App = () => {
  // console.log(store.getState());
  return (
    <>
      {/* <Provider store={store}> */}
      <Main />
      {/* </Provider> */}
    </>
  );
};

export default App;
