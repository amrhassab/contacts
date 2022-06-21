import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView, StatusBar} from 'react-native';

import Contacts from './src/pages/Contacts';

import {getStore} from './store';

import styles from './styles';

const App = () => {
  const store = getStore();

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.layout}>
        <StatusBar />
        <Contacts />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
