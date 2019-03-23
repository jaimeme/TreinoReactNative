/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './src';
// Se eu não botar nada após a pasta "src" ele subentende que é o index que deve ser checado
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
