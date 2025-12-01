import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from "react";
import { Feather } from "@react-native-vector-icons/feather";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { HomeScreenProps } from "../Home/home";

export function SaveSleepDay({ navigation, route }: HomeScreenProps) {
  let [showModalSleep, setShowModalSleep] = useState<boolean>();
  let [showModalWakeUp, setShowModalWakeUp] = useState<boolean>();
  let [dateSleep, setDateSleep] = useState<Date>();
  let [dateWakeUp, setDateWakeUp] = useState<Date>();
  let [totalTime, setTotalTime] = useState<number>();

  const onHourSleepChange = (
    event: DateTimePickerEvent,
    date?: Date | undefined
  ) => {
    setShowModalSleep(false);
    if (date) {
      setDateSleep(date);
    }
  };

  function CalculateHours(){
    let valueInMilliseconds = Number(dateWakeUp) - Number(dateSleep)
  let hours : number = Number((valueInMilliseconds / 1000 / 60 / 60).toFixed(2))

    if(hours < 0){
      Alert.alert("Erro:", "A hora de acordar deve ser maior que a hora de dormir")
    }
    else {
      setTotalTime(hours)
          console.log(hours)
    }
  }

  function DoNotSaveRecord () {
    if (!dateSleep || !dateWakeUp) {
      return (
        Alert.alert("Erro", "Preencha todos os campos para salvar o registro")
      )
    }
    if (dateWakeUp < dateSleep) {
      return (
        Alert.alert("Erro", "A hora de acordar deve ser maior que a hora de dormir")
      )
    }
  }

  function SaveRecord (data : SaveSleepDayProps) {
    if (!DoNotSaveRecord) {
    setDateSleep(data.HourSleep);
    setDateWakeUp(data.HourWakeUp);
    }
  }
  
   interface SaveSleepDayProps {
     HourSleep: Date;
     HourWakeUp: Date;
     TotalTime?: number;
     Classification?: number;
   }
  const onHourWakeUpChange = (
    event: DateTimePickerEvent,
    date?: Date | undefined
  ) => {
    setShowModalWakeUp(false);
    if (date) {
      setDateWakeUp(date);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Feather name="chevron-left" size={40} color="#506078" />
        </TouchableOpacity>
      </View>
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
              <Text style={styles.textInputs}>
                {(dateSleep && dateSleep.toLocaleTimeString()) ||
                  "Selecione o horário"}
              </Text>
            </View>
          </TouchableOpacity>
          {showModalSleep && (
            <RNDateTimePicker
              display="clock"
              mode="time"
              is24Hour={true}
              value={dateSleep || new Date()}
              onChange={onHourSleepChange}
            />
          )}
        </View>

        <View>
          <Text style={styles.textQuestion}> Hora que acordou:</Text>
          <TouchableOpacity onPress={() => setShowModalWakeUp(true)}>
            <View style={styles.areaInputs}>
              <Feather name="clock" size={24} color="#506078" />
              <Text style={styles.textInputs}>
                {(dateWakeUp && dateWakeUp.toLocaleTimeString()) ||
                  "Selecione o horário"}
              </Text>
            </View>
          </TouchableOpacity>
          {showModalWakeUp && (
            <RNDateTimePicker
              display="clock"
              mode="time"
              is24Hour={true}
              value={dateWakeUp || new Date()}
              onChange={onHourWakeUpChange}
            />
          )}
        </View>
        {/* <View>
          <View>
            <Text>Horas totais:</Text>
          </View>
          <View>
            <Text>Classificação: </Text></View>
        </View> */}
        { dateSleep && dateWakeUp && 
        <TouchableOpacity onPress={CalculateHours}>
          <View style={styles.areaBtnSaveRegister}>
            <Feather name="save" size={40} color="#506078" />
            <Text style={styles.textBtnSaveRegister}>Salvar registro</Text>
          </View>
        </TouchableOpacity> || <View style={[styles.areaBtnSaveRegister, {backgroundColor: "#EAF4FF"}]}>
            <Feather name="alert-circle" size={40} color="#506078" />
            <Text style={[styles.textBtnSaveRegister, ]}>Selecione os horários</Text>
          </View>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  titleArea: {
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
    paddingTop: 5,
  },
  areaBtnSaveRegister: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 50,
    backgroundColor: "#D9D4FF",
    justifyContent: "center",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  textBtnSaveRegister: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: 18,
    paddingLeft: 10,
    color: "#506078",
  },
  backButton: {
    alignItems: "flex-start",
    marginTop: 50,
    marginLeft: 20,
  },
});
