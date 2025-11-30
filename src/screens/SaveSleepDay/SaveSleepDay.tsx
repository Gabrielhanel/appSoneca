import { Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Feather } from "@react-native-vector-icons/feather";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import RNDateTimePicker from "@react-native-community/datetimepicker";

export function SaveSleepDay() {

  let [sleepHour, setSleepHour] = useState("");
  let [wakeUpHour, setWakeUpHour] = useState("");
  let [showModalSleep, setShowModalSleep] = useState<boolean>();
  let [showModalWakeUp, setShowModalWakeUp] = useState<boolean>();
  let [dateSleep, setDateSleep] = useState<Date>();
  let [dateWakeUp, setDateWakeUp] = useState<Date>();

const onHourSleepChange = (event: DateTimePickerEvent, date?: Date | undefined) => {
  setShowModalSleep(false);
  if (date) {
    setDateSleep(date);
  }
};

const onHourWakeUpChange = (event: DateTimePickerEvent, date?: Date | undefined) => {
  setShowModalWakeUp(false);
  if (date) {
    setDateWakeUp(date);
  }
};
  return (
    <View style={styles.container}>
      <View style={styles.titleArea}>
        <Text style={styles.textTitle}>Registrar</Text>
        <Text style={styles.textTitle}>sono</Text>
      </View>

      <View>
        <Text style={styles.textQuestion}> Hora que dormiu:</Text>
        <TouchableOpacity onPress={() => setShowModalSleep(true)}>
        <View style={styles.areaInputs}>
            <Feather name="clock" size={24} color="#506078" />
            <Text style={styles.textInputs}>{dateSleep && dateSleep.toLocaleTimeString() || 'Selecione o horário'}</Text>
        </View>
        </TouchableOpacity>
        {showModalSleep && (
                      <RNDateTimePicker
          display="clock"
          mode="time"
          is24Hour={true}
          value={dateSleep ||new Date()}
          onChange={onHourSleepChange}
          />
        )}
      </View>

      <View>
        <Text style={styles.textQuestion}> Hora que acordou:</Text>
                <TouchableOpacity onPress={() => setShowModalWakeUp(true)}>
        <View style={styles.areaInputs}>
            <Feather name="clock" size={24} color="#506078" />
                        <Text style={styles.textInputs}>{dateWakeUp && dateWakeUp.toLocaleTimeString() || 'Selecione o horário'}</Text>
        </View>
        </TouchableOpacity>
        {showModalWakeUp && (
                      <RNDateTimePicker
          display="clock"
          mode="time"
          is24Hour={true}
          value={dateWakeUp ||new Date()}
          onChange={onHourWakeUpChange}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  titleArea : {
    marginTop: 100,
    marginBottom: 50,
  },
  textTitle: {
    fontFamily: "Quicksand_500Medium",
    fontSize: 30,
    textAlign: "center",
  },
  textQuestion: {
    fontFamily: "Quicksand_500Medium",
    fontSize: 20,
  },
  textInputs: {
    fontFamily: "Quicksand_400Regular",
    fontSize: 15,
    paddingLeft: 10,

  },
  areaInputs: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 10,
    backgroundColor: "#C7DCF2",
    justifyContent: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingBottom: 5,
    paddingTop: 5
  },
});