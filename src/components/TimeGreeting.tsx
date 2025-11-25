import { Text, View, StyleSheet } from "react-native";

export function TimeGreeting() {
  let currentTime = new Date().getHours();

if (currentTime >= 6 && currentTime < 12) {
  return (
    <View>
      <Text style={styles.text}>Bom dia!</Text>
    </View>
  );
}

if (currentTime >= 12 && currentTime < 18) {
  return (
    <View>
      <Text style={styles.text}>Boa tarde!</Text>
    </View>
  );
}

return (
  <View>
    <Text style={styles.text}>Boa noite!</Text>
  </View>
);
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Quicksand_500Medium",
    fontSize: 20,
    marginTop: 20,
    marginLeft: 40,
  },
  positionText: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
