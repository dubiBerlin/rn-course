import React from "react";
import { AppRegistry } from 'react-native';
import { Provider } from "react-redux";
import App_old from './App_old';
import App from "./App";
import configureStore from "./src/store/configureStore";

const store = configureStore(); // gibt den erstellten Store zurück in dem ja die Reducers sind


// registerComponent erwartet eine Funktion
// also muss RNRedux eine Funktion sein
const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

// Hier registrieren wir den Store über den Provider
AppRegistry.registerComponent('rncourse', () => RNRedux);
