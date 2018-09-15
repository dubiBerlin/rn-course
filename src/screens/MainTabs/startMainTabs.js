import { Navigation } from 'react-native-navigation';
// Icons importieren weil Android für Tabs Icons benötigt.
import Icon from "react-native-vector-icons/Ionicons";
import { Platform } from "react-native";



// Eine Funktion 
const startTabs = () => {

    /* getImageSource liefert das Image zurück für das bestimmte Icon. getImageSource() ist eine Promise
       Funktion. Da wir beide Images brauchen und somit zwei Promises() durchführen müssen, können
       wir das Promise Objekt und die Funktion all() benutzen. In all() werden alle Promise Funktionen
       in ein Array gesteckt und es wird erst weitergemacht nach dem jedes Promise erfüllt worden ist.
       Die Response Antwort gibt ein array zurück welches die Rückgaben jeder einzelnen Promise Funktion
       enthält. */
    Promise.all([
        Icon.getImageSource(Platform.OS === "android" ? "md-map" : "ios-map", 30),
        Icon.getImageSource(Platform.OS === "android" ? "md-share-alt" : "ios-share-alt", 30),
        Icon.getImageSource(Platform.OS === "android" ? "md-menu" : "ios-menu", 30)
    ]).then(sources => {
        console.log(sources)
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: 'Find Place', // tab label as appears under the icon in iOS (optional)
                    screen: 'awesome-places.FindPlaceScreen', // unique ID registered with Navigation.registerScreen
                    title: 'Find Place',
                    icon: sources[0],
                    navigatorButtons: { // Über navigatorButtons werden Menu-Buttons registriert
                        leftButtons: [
                            {
                                icon: sources[2], // hier wird das icon für diesen Button abgerufen oben getImageS....
                                title: "Menu",
                                id: "sideDrawerToggle" // // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
                            }
                        ]
                    }
                },
                {
                    label: 'Share Place', // tab label as appears under the icon in iOS (optional)
                    screen: 'awesome-places.SharePlaceScreen', // unique ID registered with Navigation.registerScreen
                    title: 'Share Place',
                    icon: sources[1],
                    navigatorButtons: { // Über navigatorButtons werden Menu-Buttons registriert
                        leftButtons: [
                            {
                                icon: sources[2], // hier wird das icon für diesen Button abgerufen oben getImageS....
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                }
            ],
            drawer: {
                left: {
                    screen: "awesome-places.SideDrawerScreen"
                }
            }

        });
    })

}


export default startTabs;