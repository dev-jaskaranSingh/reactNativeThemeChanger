import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import HomeScreen from './HomeScreen';
import themeReducer from './redux/themeReducer';


const store = createStore(combineReducers({
  theme: themeReducer,
  }),applyMiddleware(thunk));
  

const App = () => {

  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({})

export default App;
