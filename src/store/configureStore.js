
/* Erstellt einen Store und verbindet den mit den Reducern.
   Die funktion createStore erstellt diesen Store und verbindet ihn 
   mit den Reducern. CreateStore kann aber nur ein Reducer-Objekt
   aufnehmen, deswegen werden alle Reducers in der Funktion
   combineReducers in ein einzelnes Objekt verpackt und an den
   Store übergeben  */


import { createStore, combineReducers } from "redux";
import placesReducer from "./reducers/places";


const rootReducer = combineReducers({
    places: placesReducer
});

// Store erstellen
const configureStore = () => {
    return createStore(rootReducer);
};


export default configureStore;