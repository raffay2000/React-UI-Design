import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Button } from "../components/Button";

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login to your account</Text>
      <Text
        style={{
          alignSelf: "flex-start",
          marginLeft: 40,
          color: "white",
          fontSize: 18,
        }}
      >
        username
      </Text>
      <TextInput style={styles.textInput}></TextInput>
      <Text
        style={{
          alignSelf: "flex-start",
          marginLeft: 40,
          color: "white",
          fontSize: 18,
        }}
      >
        password
      </Text>
      <TextInput style={styles.textInput}></TextInput>
      <Text
        style={{
          alignSelf: "flex-end",
          marginRight: 45,
          marginTop: 5,
          marginBottom: 5,
          color: "red",
        }}
      >
        forget?
      </Text>
      <Button
        color={"#C63520"}
        textColor={"white"}
        text={"Login"}
        textStyle={"bold"}
        onPress={() => {
          navigation.navigate("MainRoutes");
        }}
      />
      <Text>OR</Text>
      <Button
        color={"#FFB81A"}
        textColor={"#060A16"}
        text={"Login with Facebook"}
        style={{ marginTop: 44, marginBottom: 31 }}
        textStyle={"bold"}
      />
      <Button
        color={"#FFB81A"}
        textColor={"black"}
        text={"Login with Twitter"}
        textStyle={"bold"}
        style={{ marginBottom: 122 }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#060A16",
    alignItems: "center",
  },
  heading: {
    marginTop: 172,
    fontSize: 28,
    color: "#FFB81A",
    alignSelf: "flex-start",
    marginLeft: 40,
    fontWeight: "bold",
  },
  textInput: {
    backgroundColor: "#0C1326",
    width: "80%",
    alignSelf: "center",

    marginTop: 5,
    borderRadius: 5,
    height: "7%",
    borderColor: "#93C0A4",
  },
});

export default Login;
