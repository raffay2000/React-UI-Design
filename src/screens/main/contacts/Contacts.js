import React from 'react'
import {View,Text,StyleSheet,ScrollView} from 'react-native'
import { Feather } from '@expo/vector-icons';
import ChatsList from '../../../components/ChatsList'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Contacts = () => {
  return (
    <>
    <View style={{
          paddingTop:30,
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          paddingHorizontal:25,
          paddingBottom:12,
          backgroundColor:'#060A16'

    }}>
            <View>
                <Text style={{
                    color:'white',
                    fontSize: hp('4%'),
                    fontWeight:'bold'
                    }}>
                    Contact 
                </Text>
            </View>
            <View >
            <Feather name="search" size={30} color="#FFB81A" />
            </View>

        </View>
        <ScrollView>
    <View style={styles.container}>
    <View>
    <ChatsList 
    style={styles.chatListsStyle} 
    image={require('../../../img/Dp.png')} 
    imageStyle={styles.imageStyle} 
    name={'Joshua Simon'} 
    chatNameStyle={styles.chatNameStyle} 
    dayStyle={{marginTop:15}} 
    icon={<MaterialCommunityIcons 
    name="android-messages" 
    size={24} 
    color="#C63520" />} 
    icon2 ={<FontAwesome 
    name="phone" 
    size={22} 
    style={{}} 
    color="#FFB81A"/>}/>
<ChatsList 
    style={styles.chatListsStyle} 
    image={require('../../../img/Dp.png')} 
    imageStyle={styles.imageStyle} 
    name={'Joshua Simon'} 
    chatNameStyle={styles.chatNameStyle} 
    dayStyle={{marginTop:15}} 
    icon={<MaterialCommunityIcons 
    name="android-messages" 
    size={24} 
    color="#C63520" />} 
    icon2 ={<FontAwesome 
    name="phone" 
    size={24} 
    style={{}} 
    color="#FFB81A"/>}/>
<ChatsList 
    style={styles.chatListsStyle} 
    image={require('../../../img/Dp.png')} 
    imageStyle={styles.imageStyle} 
    name={'Joshua Simon'} 
    chatNameStyle={styles.chatNameStyle} 
    dayStyle={{marginTop:15}} 
    icon={<MaterialCommunityIcons 
    name="android-messages" 
    size={24} 
    color="#C63520" />} 
    icon2 ={<FontAwesome 
    name="phone" 
    size={24} 
    style={{}} 
    color="#FFB81A"/>}/>
<ChatsList 
    style={styles.chatListsStyle} 
    image={require('../../../img/Dp.png')} 
    imageStyle={styles.imageStyle} 
    name={'Joshua Simon'} 
    chatNameStyle={styles.chatNameStyle} 
    dayStyle={{marginTop:15}} 
    icon={<MaterialCommunityIcons 
    name="android-messages" 
    size={24} 
    color="#C63520" />} 
    icon2 ={<FontAwesome 
    name="phone" 
    size={24} 
    style={{}} 
    color="#FFB81A"/>}/>
<ChatsList 
    style={styles.chatListsStyle} 
    image={require('../../../img/Dp.png')} 
    imageStyle={styles.imageStyle} 
    name={'Joshua Simon'} 
    chatNameStyle={styles.chatNameStyle} 
    dayStyle={{marginTop:15}} 
    icon={<MaterialCommunityIcons 
    name="android-messages" 
    size={24} 
    color="#C63520" />} 
    icon2 ={<FontAwesome 
    name="phone" 
    size={24} 
    style={{}} 
    color="#FFB81A"/>}/>
<ChatsList 
    style={styles.chatListsStyle} 
    image={require('../../../img/Dp.png')} 
    imageStyle={styles.imageStyle} 
    name={'Joshua Simon'} 
    chatNameStyle={styles.chatNameStyle} 
    dayStyle={{marginTop:15}} 
    icon={<MaterialCommunityIcons 
    name="android-messages" 
    size={24} 
    color="#C63520" />} 
    icon2 ={<FontAwesome 
    name="phone" 
    size={24} 
    style={{}} 
    color="#FFB81A"/>}/>
<ChatsList 
    style={styles.chatListsStyle} 
    image={require('../../../img/Dp.png')} 
    imageStyle={styles.imageStyle} 
    name={'Joshua Simon'} 
    chatNameStyle={styles.chatNameStyle} 
    dayStyle={{marginTop:15}} 
    icon={<MaterialCommunityIcons 
    name="android-messages" 
    size={24} 
    color="#C63520" />} 
    icon2 ={<FontAwesome 
    name="phone" 
    size={24} 
    style={{}} 
    color="#FFB81A"/>}/>
<ChatsList 
    style={styles.chatListsStyle} 
    image={require('../../../img/Dp.png')} 
    imageStyle={styles.imageStyle} 
    name={'Joshua Simon'} 
    chatNameStyle={styles.chatNameStyle} 
    dayStyle={{marginTop:15}} 
    icon={<MaterialCommunityIcons 
    name="android-messages" 
    size={24} 
    color="#C63520" />} 
    icon2 ={<FontAwesome 
    name="phone" 
    size={24} 
    style={{}} 
    color="#FFB81A"/>}/>
<ChatsList 
    style={styles.chatListsStyle} 
    image={require('../../../img/Dp.png')} 
    imageStyle={styles.imageStyle} 
    name={'Joshua Simon'} 
    chatNameStyle={styles.chatNameStyle} 
    dayStyle={{marginTop:15}} 
    icon={<MaterialCommunityIcons 
    name="android-messages" 
    size={24} 
    color="#C63520" />} 
    icon2 ={<FontAwesome 
    name="phone" 
    size={24} 
    style={{}} 
    color="#FFB81A"/>}/> 
    <ChatsList 
    style={styles.chatListsStyle} 
    image={require('../../../img/Dp.png')} 
    imageStyle={styles.imageStyle} 
    name={'Joshua Simon'} 
    chatNameStyle={styles.chatNameStyle} 
    dayStyle={{marginTop:15}} 
    icon={<MaterialCommunityIcons 
    name="android-messages" 
    size={24} 
    color="#C63520" />} 
    icon2 ={<FontAwesome 
    name="phone" 
    size={24} 
    style={{}} 
    color="#FFB81A"/>}/>   
    <ChatsList 
    style={styles.chatListsStyle} 
    image={require('../../../img/Dp.png')} 
    imageStyle={styles.imageStyle} 
    name={'Joshua Simon'} 
    chatNameStyle={styles.chatNameStyle} 
    dayStyle={{marginTop:15}} 
    icon={<MaterialCommunityIcons 
    name="android-messages" 
    size={24} 
    color="#C63520" />} 
    icon2 ={<FontAwesome 
    name="phone" 
    size={24} 
    style={{}} 
    color="#FFB81A"/>}/>  
</View>
<View>

</View>
    </View>
    </ScrollView>
    </>
  )
}
const styles =StyleSheet.create({
  container:{
    flex:1,
    // justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#060A16',
  },
  chatListsStyle:{
    width: wp('82%'),height:hp('7%'),marginTop:10,marginBottom:6
  },
  imageStyle:{
    height:hp('5%'),width:wp('9%')
  },
  chatNameStyle:{
    fontSize:hp('2%'),marginTop:15
  }
})
export default Contacts