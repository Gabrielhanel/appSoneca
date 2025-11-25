import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type PropsStackRoutes = {
    Home: undefined
    TabRoutes: undefined
    FilterHistoric: undefined
    RegisterSleep: undefined
    SaveSleepDay: undefined
}

export type PropsScreensApp<T extends keyof PropsStackRoutes> = NativeStackScreenProps<PropsStackRoutes, T>