import React from 'react';
// import {Navigation} from './src/navigator/Navigation';
// import { Navigation } from './src/redux/Navigation';
import {Navigation} from './src/navigation/Navigation';
import {Provider} from 'react-redux';

import {View} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './src/redux/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={{flex: 1}}>
          <Navigation />
        </View>
      </PersistGate>
    </Provider>
  );
}

export default App;
