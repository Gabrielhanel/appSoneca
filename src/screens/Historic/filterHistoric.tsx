import {} from "react";
import { Text, View, StyleSheet } from "react-native";

export function FilterHistoric() {
    return (
        <View style={styles.container}>
            <Text>FilterHistoric</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});