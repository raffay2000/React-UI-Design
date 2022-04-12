import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Textarea } from "../../../components/Textarea";
import ChatsList from "../../../components/ChatsList";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const NewMsg = () => {
  return (
    <>
      <View
        style={{
          backgroundColor: "#060A16",
          flexDirection: "row",
          paddingTop: 30,
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 12,
        }}
      >
        <View>
          <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
            New Message
          </Text>
        </View>
        <View>
          <Text style={{ color: "red", fontSize: 18 }}>Cancel</Text>
        </View>
      </View>
      <View style={Styles.container}>
        <Textarea
          color={"#0C1326"}
          placeholder={"Search to start a chat with"}
          placeholderColor={"#5B6C9F"}
          // style={{width:'100%'}}
          // inHeightt={55}
          // inWidthdth={'90%'}
        />
        <Text
          style={{
            color: "#FFB81A",
            fontSize: hp("2.5%"),
            fontWeight: "bold",
            alignSelf: "flex-start",
            marginLeft: 35,
            marginTop: 16,
            marginBottom: 16,
          }}
        >
          Frequently Contacted
        </Text>
        <ChatsList
          style={{ width: wp("82%"), height: hp("7%"), marginTop: 12 }}
          image={require("../../../img/Dp.png")}
          imageStyle={{ height: hp("5%"), width: wp("9%") }}
          name={"Joshua Simone"}
          chatNameStyle={{ fontSize: hp("2%"), marginTop: 20 }}
          day={"Away"}
          dayStyle={{ marginTop: 20 }}
        />
        <ChatsList
          style={{ width: wp("82%"), height: hp("7%"), marginTop: 12 }}
          image={require("../../../img/Dp.png")}
          imageStyle={{ height: hp("5%"), width: wp("9%") }}
          name={"Scarlett Brooks"}
          chatNameStyle={{ fontSize: hp("2%"), marginTop: 20 }}
          day={"Away"}
          dayStyle={{ marginTop: 20 }}
        />
        <ChatsList
          style={{ width: wp("82%"), height: hp("7%"), marginTop: 12 }}
          image={require("../../../img/Dp.png")}
          imageStyle={{ height: hp("5%"), width: wp("9%") }}
          name={"Joshua Simone"}
          chatNameStyle={{ fontSize: hp("2%"), marginTop: 20 }}
          day={"Away"}
          dayStyle={{ marginTop: 20 }}
        />
        <ChatsList
          style={{ width: wp("82%"), height: hp("7%"), marginTop: 12 }}
          image={require("../../../img/Dp.png")}
          imageStyle={{ height: hp("5%"), width: wp("9%") }}
          name={"Joshua Simone"}
          chatNameStyle={{ fontSize: hp("2%"), marginTop: 20 }}
          day={"Away"}
          dayStyle={{ marginTop: 20 }}
        />
      </View>
    </>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    alignItems: "center",
    backgroundColor: "#060A16",
  },
});

export default NewMsg;
