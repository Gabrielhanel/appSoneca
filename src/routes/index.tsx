import { NavigationContainer } from "@react-navigation/native";
import StackNavigationApp from "./stack";

export function ScreensContainer() {
    return (
        <NavigationContainer>
            <StackNavigationApp />
        </NavigationContainer>
    );
}