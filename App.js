import { Navigation } from "react-native-navigation";

// Die einzelnen Screens werden hier importiert
import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import PlaceDetailNew from "./src/screens/PlaceDetail/PlaceDetailNew";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";

// Um die Screens mit redux zu verbinden müssen muss man den Provider und den Store
// importieren und beides als drittes und viertes Argument an die Screens übergeben.
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";
const store = configureStore(); // gibt den erstellten Store zurück in dem ja die Reducers sind

// Die einzelnen Screens werden hier registriert
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("awesome-places.SharePlaceScreen", () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("awesome-places.FindPlaceScreen", () => FindPlaceScreen, store, Provider);
Navigation.registerComponent("awesome-places.PlaceDetailScreen", () => PlaceDetailNew, store, Provider);
Navigation.registerComponent("awesome-places.SideDrawerScreen", () => SideDrawer, store, Provider);

// Start a App
Navigation.startSingleScreenApp({
    screen: {
        screen: 'awesome-places.AuthScreen', // unique ID registered with Navigation.registerScreen
        title: 'Login' // title of the screen as appears in the nav bar (optional)

    }
});