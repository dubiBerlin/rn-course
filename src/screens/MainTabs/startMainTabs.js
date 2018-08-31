import { Navigation } from 'react-native-navigation';

// Eine Funktion 
const startTabs = () => {
    Navigation.startTabBasedApp({
        tabs: [
            {
                label: 'Find Place', // tab label as appears under the icon in iOS (optional)
                screen: 'awesome-places.FindPlaceScreen', // unique ID registered with Navigation.registerScreen
                title: 'Find Place'
            },
            {
                label: 'Share Place', // tab label as appears under the icon in iOS (optional)
                screen: 'awesome-places.SharePlaceScreen', // unique ID registered with Navigation.registerScreen
                title: 'Share Place'
            }
        ]
    });
}


export default startTabs;