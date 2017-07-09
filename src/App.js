import React, { Component } from 'react';
import { AsyncStorage, View, Text, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
import Loading from './components/Loading';
import firebase from 'firebase';

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(ReduxThunk),
    autoRehydrate(),
  ),
);

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { rehydrated: false };
  }
  componentWillMount() {
    persistStore(store, { storage: AsyncStorage }, () => {
      this.setState({ rehydrated: true });
    });

    const config = {
      apiKey: 'AIzaSyB23V41_ZR5fAh6acdLGvCHPdGOnnU1LDU',
      authDomain: 'nomadpad-64160.firebaseapp.com',
      databaseURL: 'https://nomadpad-64160.firebaseio.com',
      projectId: 'nomadpad-64160',
      storageBucket: 'nomadpad-64160.appspot.com',
      messagingSenderId: '497216774470',
    };

    firebase.initializeApp(config);
  }

  render() {
    if (!this.state.rehydrated) {
      return Loading;
    }

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
