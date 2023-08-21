import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import Constants from "expo-constants";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.appTitle}>TAXIS-APP</Text>
        <TouchableWithoutFeedback
          onPress={() => Alert.alert("HEY ENTRASTE A LA APP")}
        >
          <View style={styles.imageContainer}>
            <Image source={require("./assets/taxi.png")} style={styles.icon} />
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.text}>¡Viaja con nosotros!</Text>

        <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback
            onPress={() => Alert.alert("¡EMPEZEMOS!")}
          >
            <View style={styles.customButton}>
              <Text style={styles.buttonText}>
                EMPEZAR
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flex: 1,
    backgroundColor: "#292C3E",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#292C3E",
    padding: 20,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "#ffeb3b",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 6,
    height: "80%",
  },
  appTitle: {
    color: "#ffeb3b", 
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  text: {
    color: "#ffeb3b",
    fontSize: 38,
    fontWeight: "bold",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  icon: {
    width: "80%", 
    height: 300,
    resizeMode: "contain",
  },
  buttonContainer: {
    marginTop: 10,
  },
  customButton: {
    backgroundColor: "#ffeb3b",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#292C3E",
    fontWeight: "bold",
    fontSize: 28,
  },
});
