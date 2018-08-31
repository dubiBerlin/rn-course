import { Navigation } from 'react-native-navigation';
// Icons importieren weil Android für Tabs Icons benötigt.
import Icon from "react-native-vector-icons/Ionicons";



// Eine Funktion 
const startTabs = () => {

    /* getImageSource liefert das Image zurück für das bestimmte Icon. getImageSource() ist eine Promise
       Funktion. Da wir beide Images brauchen und somit zwei Promises() durchführen müssen, können
       wir das Promise Objekt und die Funktion all() benutzen. In all() werden alle Promise Funktionen
       in ein Array gesteckt und es wird erst weitergemacht nach dem jedes Promise erfüllt worden ist.
       Die Response Antwort gibt ein array zurück welches die Rückgaben jeder einzelnen Promise Funktion
       enthält. */
    Promise.all([
        Icon.getImageSource("md-map", 30),
        Icon.getImageSource("md-share-alt", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: 'Find Place', // tab label as appears under the icon in iOS (optional)
                    screen: 'awesome-places.FindPlaceScreen', // unique ID registered with Navigation.registerScreen
                    title: 'Find Place',
                    icon: sources[0]
                },
                {
                    label: 'Share Place', // tab label as appears under the icon in iOS (optional)
                    screen: 'awesome-places.SharePlaceScreen', // unique ID registered with Navigation.registerScreen
                    title: 'Share Place',
                    icon: sources[1]
                }
            ]
        });
    })

}


export default startTabs;