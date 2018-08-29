
const initialState = {
    places: [],
    selectedPlace: null
}

// param1: state: ist der alte state
//         state = initialState ist der default Wert wenn die app zum ersten mal geladen wird und noch keine Action geschehen ist
const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}


export default reducer;