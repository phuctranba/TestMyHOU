import React, {Component} from 'react';
import {
  Alert,
} from 'react-native';
import RootNavigation from './src/App'
import {Provider} from 'react-redux'
import createSagaMiddleware from "redux-saga";
import rootSaga from "./src/redux/saga/rootSaga";
import reducer from "./src/redux/reducers/index";
import {applyMiddleware, createStore} from "redux";
import AsyncStorage from '@react-native-community/async-storage';
import {default_array_setting, objects_setting} from "./src/utils/values";
import SafeAreaView from 'react-native-safe-area-view';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

class App extends Component {


  async componentWillMount() {
    try {
      const value = await AsyncStorage.getItem(objects_setting.Fisrt_open);
      if(value === null) {
        console.log("cai dặt lan dau");
        await AsyncStorage.multiSet(default_array_setting);
        console.log(default_array_setting)
      }
    } catch(e) {
      console.log(e.toString())
    }
  }


  render() {
    return (
        <Provider store={store}>
          {/*<SafeAreaView style={{flex:1}} forceInset = {{bottom:'never'}}>*/}
          <RootNavigation/>
        {/*</SafeAreaView>*/}
        </Provider>
    );
  }
}

sagaMiddleware.run(rootSaga);

export default App;


