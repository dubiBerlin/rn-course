import React from "react";
import DefaultInput from "../UI/DefaultInput/DefaultInput";


/**
 * Wir benutzen diese Komponente in der screens/sharePlace/sharePlace.js.
 * Es ist ja hier nur ein Input Feld und wir benötigen diesen Wert nach dem ein submit button in der oberen Komponente
 * (screens/sharePlace/sharePlace.js) gedrückt wurde.
 * Das heisst Button und input Feld sind voneinander getrennt. Um auf diesen Wert von außen zuzugreifen, wandeln wir
 * die PlaceInputNew in eine FunctionBased Komponent um.
 * Wir übergeben von ausserhalb deren state als prop und auch eine Funktion die den Wert
 */
const PlaceInputNew = props => (
    <DefaultInput
        placeholder="An Awesome Place"
        value={props.placeName}
        onChangeText={props.onChangeText}
        style={props.style}
    />
)

/**
 * So sieht es aus wenn wir auf den input Wert von aussen zugreifen möchten und die PlaceInputNew eine Classbased Komponent
 * ist. 
 * Wir bekommen von außen eine Funktion zugefügt die genauso aussieht wie placeInputChangedHandler Funktion, nur dass sie
 * mit den Wert, den sie als Parameter übergeben bekommt, den internen state setzt.
 * Wir rufen diese von außen übergebene Funktion innerhalb unserer Funktion auf und übergeben so den Wert des Input fields,
 * den wir hier selber als Parameter übergeben bekommen.
 */
// class PlaceInputNew extends React.Component {
//     placeInputChangedHandler = val => {
//         this.props.onChanging(val);
//     };

//     render() {
//         return (
//             <DefaultInput
//                 placeholder="An Awesome Place"
//                 onChangeText={this.placeInputChangedHandler}
//                 style={this.props.style}
//             />
//         );
//     }
//}


export default PlaceInputNew;
