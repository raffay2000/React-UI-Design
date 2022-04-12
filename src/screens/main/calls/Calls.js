import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import ChatsList from "../../../components/ChatsList";
import { MaterialIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Calls = () => {
  return (
    <>
      <View
        style={{
          paddingTop: 30,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 25,
          // paddingBottom:12,
          backgroundColor: "#060A16",
        }}
      >
        <View>
          <Text
            style={{
              color: "white",
              fontSize: hp("5%"),
              fontWeight: "bold",
            }}
          >
            Call Log
          </Text>
        </View>
        <View>
          <Entypo name="phone" size={34} color="#FFB81A" />
        </View>
      </View>
      <View style={styles.container}>
        <ChatsList
          icon={<Entypo name="phone" size={14} color="#5B6C9F" />}
          chat={"hey There im in town"}
          day={"Yesterday"}
          name={"Sara"}
          style={{ marginTop: 30, height: hp("12%") }}
          image={require("../../../img/Dp.png")}
        />
        <ChatsList
          icon={<MaterialIcons name="phone-missed" size={14} color="red" />}
          textStyle={{ marginLeft: 20 }}
          chat={"Missed Call"}
          day={"Yesterday"}
          name={"Sara"}
          style={{ marginTop: 15, height: "15%" }}
          image={require("../../../img/Dp.png")}
        />
        <ChatsList
          chat={"hey There im in town"}
          day={"Yesterday"}
          name={"Sara"}
          style={{ marginTop: 15, height: "15%" }}
          image={require("../../../img/Dp.png")}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#060A16",
    // justifyContent:'center',
    alignItems: "center",
  },
});

export default Calls;
