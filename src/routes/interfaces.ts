import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type PropsStackRoutes = {
    Home: undefined
    TabBar: undefined
    FilterHistoric: undefined
    RegisterSleep: undefined
    SaveSleepDay: undefined
}

export type TabRoutes = {
    HomeTab: undefined;
    RegisterSleepTab: undefined
    FilterHistoricTab: undefined
}


export type PropsTabScreens<T extends keyof TabRoutes> =
  BottomTabScreenProps<TabRoutes, T>;

export type PropsScreensApp<T extends keyof PropsStackRoutes> = NativeStackScreenProps<PropsStackRoutes, T>