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
import { PropsScreensApp } from "../../routes/interfaces";

export function Home({ navigation, route} : PropsScreensApp<"Home">) {

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
