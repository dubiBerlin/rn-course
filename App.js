import { Navigation } from "react-native-navigation";

// Die einzelnen Screens werden hier importiert
import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";

// Die einzelnen Screens werden hier registriert
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen);
Navigation.registerComponent("awesome-places.SharePlaceScreen", () => SharePlaceScreen);
Navigation.registerComponent("awesome-places.FindPlaceScreen", () => FindPlaceScreen);

// Start a App
Navigation.startSingleScreenApp({
    screen: {
        screen: 'awesome-places.AuthScreen', // unique ID registered with Navigation.registerScreen
        title: 'Login' // title of the screen as appears in the nav bar (optional)
    }
});