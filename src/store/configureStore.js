
/* Erstellt einen Store und verbindet den mit den Reducern.
   Die funktion createStore erstellt diesen Store und verbindet ihn 
   mit den Reducern. CreateStore kann aber nur ein Reducer-Objekt
   aufnehmen, deswegen werden alle Reducers in der Funktion
   combineReducers in ein einzelnes Objekt verpackt und an den
   Store übergeben.
   Compose ist für das debuggen im production mode   */


import { createStore, combineReducers, compose } from "redux";
import placesReducer from "./reducers/places";


const rootReducer = combineReducers({
    places: placesReducer
});

// debuggingfür das Debbuging
let composeEnhancers = compose;

// Wenn wir uns im development modus befinden versuchen wir  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ für das Debuggen zu verwenden
if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}


// Store erstellen
const configureStore = () => {
    return createStore(rootReducer, composeEnhancers()); // das Einfügen von composeEnhancers verbindet den store mit den rn debugger.
};


export default configureStore;