import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home/home";
import { RegisterSleep } from "../screens/RegisterSleep/registerSleep";
import { FilterHistoric } from "../screens/Historic/filterHistoric";
import { PropsStackRoutes } from "./interfaces";
import { Feather } from "@react-native-vector-icons/feather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SaveSleepDay } from "../screens/SaveSleepDay/SaveSleepDay";
export default function StackNavigationApp() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator<PropsStackRoutes>();
  function TabRoutes() {
    return (
      <Tab.Navigator
              initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#26919B",
          tabBarInactiveTintColor: "#506078",
          tabBarStyle: {
            position: "absolute",
            backgroundColor: "#fff",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 100,
            paddingTop: 10,
          },
        }}
      >
<Tab.Screen
  name="Home"
  component={Home}
  options={{
    tabBarIcon: ({ color, size }) => (
      <Feather name="home" color={color} size={size} />
    ),
  }}
/>
<Tab.Screen 
name="RegisterSleep"
component={RegisterSleep}
options={{
    tabBarIcon: ({ color, size }) => (
        <Feather name="bar-chart-2" color={color} size={size} />
    )
}}
/> 
<Tab.Screen 
name="Historic"
component={FilterHistoric}
options={{
    tabBarIcon: ({ color, size }) => (
      <Feather name="clock" color={color} size={size} />
    ),
}}
/>

      </Tab.Navigator>
    );
  }

  return (
    <Stack.Navigator
      id={undefined}
      initialRouteName="TabRoutes"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TabRoutes" component={TabRoutes} />
      <Stack.Screen name="RegisterSleep" component={RegisterSleep} />
  <Stack.Screen name="FilterHistoric" component={FilterHistoric} />
  <Stack.Screen name="SaveSleepDay" component={SaveSleepDay} />
    </Stack.Navigator>
  );
}