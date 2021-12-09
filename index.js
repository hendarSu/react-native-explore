/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import App from './app/App';
// import LotsOfGreetings from './app/examples/exam_1';
// import App from './app/examples/exam_2';
// import AppWithOtherComponent from './app/examples/with-component/exam_1';

AppRegistry.registerComponent(appName, () => App);
