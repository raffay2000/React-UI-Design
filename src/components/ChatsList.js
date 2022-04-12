import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Chats = ({ name, chat, day, style, image, icon,icon2,icon3,icon8, textStyle,imageStyle,chatNameStyle,dayStyle }) => {
  return (
    <View style={[Styles.chatBlock, style]}>
      <View>
        <Image style={[{ marginLeft: 12 },imageStyle]} source={image} />
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: wp("65%"),
            marginTop:10,
            marginHorizontal: 10
          }}
        >
          <View style={{ alignItems: "flex-start" }}>
            <Text style={[Styles.chatName,chatNameStyle]}>{name}</Text>
          </View>
          <View style={{flexDirection:"row",alignItems:"center",
          justifyContent:"center",width:wp('20%'),
          marginLeft:10}}>
            <Text style={[{color: "#5B6C9F",fontSize: hp('1.8%')},dayStyle]}>{icon8}{day}</Text>
            <View style={{marginLeft:15,marginTop:12}}>
            {icon2}
            </View>
          </View>
        </View>
        <View style={{flexDirection:"row",width:'100%',justifyContent:"flex-start"}}>
          <View style={{marginLeft:10,marginTop:12}}>{icon3}</View>
          <View>
            <Text style={[Styles.chatText, textStyle]}>{chat}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    alignItems: "center",
    backgroundColor: "#060A16",
  },
  chatBlock: {
    width: wp("88%"),
    height: hp("10%"),
    backgroundColor: "#0C1326",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#273253",
    alignItems: "center",
    flexDirection: "row",
  },
  chatName: {
    marginLeft: 1,
    fontSize: hp('2.5%'),
    color: "#FFB81A",
  },
  chatText: {
    marginLeft: 2,
    marginTop: 0,
    marginBottom: 12,
    color: "#5B6C9F",
  },
});

export default Chats;
