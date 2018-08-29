import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from "../actions/actionTypes";
import placeImage from "../../assets/ljubis.jpg";

// Das ist der globale State
const initialState = {
    places: [],
    selectedPlace: null
}

// param1: state: ist der alte state
//         state = initialState ist der default Wert wenn die app zum ersten mal geladen wird und noch keine Action geschehen ist
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state, // das ist der gesamte alte state. über die drei Punkte holt man sich alle Eigenschaften des alten states und fügt ihn in das Objekt
                places: state.places.concat({ // über diesen alten state greifen wir auf das Array places zu
                    key: Math.random(),
                    name: action.placeName, // über die Action greift man auf den neuen Wert des properties "placeName" zu und fügt ihn in das neue Objekt ein unter der                           // Eigenschaft "name"
                    image: placeImage
                })
            };
        case DELETE_PLACE:
            return {
                ...state, // das ist der gesamte alte state. über die drei Punkte holt man sich alle Eigenschaften des alten states und fügt ihn in das Objekt
                places: state.places.filter(place => {
                    return place.key !== state.selectedPlace.key;
                }),
                selectedPlace: null
            };
        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find(place => {
                    return place.key === action.placeKey;
                })
            };
        case DESELECT_PLACE:
            return {
                selectedPlace: null
            }
        default:
            return state;
    }
}


export default reducer;