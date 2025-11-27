import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import Feather from "@react-native-vector-icons/feather";
import { TimeGreeting } from "../../components/TimeGreeting";
import { PropsStackRoutes, PropsTabScreens, TabRoutes } from "../../routes/interfaces";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";


type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabRoutes, "HomeTab">,
  NativeStackScreenProps<PropsStackRoutes>
>;

export function Home({ navigation, route} : HomeScreenProps) {

  return (
    <View style={styles.container}>
      <View style={styles.areaLogo}>
        <Text style={{ fontFamily: "Quicksand_700Bold", fontSize: 22 }}>
          SONECA
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SaveSleepDay')}>
          <Feather name="save" size={40} color="#506078" />
        </TouchableOpacity>
      </View>

      <View>
        <TimeGreeting />
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  areaLogo: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
  },
});
