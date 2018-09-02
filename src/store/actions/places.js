import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from "./actionTypes";

export const addPlace = (placeName) => {
    return {
        type: ADD_PLACE,
        placeName: placeName // payload
    };
};

export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        placeKey: key
    };
};

// bekommt den key als Parameter und fügt den in das Objekt unter 
// export const selectPlace = (key) => {
//     return {
//         type: SELECT_PLACE,
//         placeKey: key // payload
//     };
// };


// export const deselectPlace = () => {
//     return {
//         type: SELECT_PLACE
//     };
// };