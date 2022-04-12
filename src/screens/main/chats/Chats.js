import React from 'react'
import {Text,View,StyleSheet,ScrollView} from 'react-native'
import ChatsList from '../../../components/ChatsList'
import { Feather } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const Chats = () => {
  return (
      <>
      <View style={{
          paddingTop:25,
          flexDirection:'row',
          justifyContent:'space-between',
          paddingHorizontal:25,
        //   alignItems:'center',
        //   paddingBottom:12,
          backgroundColor:'#060A16'

    }}>
            <View>
                <Text style={{
                    color:'white',
                    fontSize:40,
                    fontWeight:'bold'
                    }}>
                    Chat
                </Text>
            </View>
            <View >
            <Feather name="search" size={44} color="#FFB81A" />
            </View>

        </View>
      <ScrollView>
    <View style={styles.container}>
        
        <ChatsList chat={'hey There im in town'} day={'Yesterday'} name={'Sara'} style={{marginTop:30}} image={require('../../../img/Dp.png')} imageStyle={{width:wp('15%'),height:hp('8%')}}/>
        <ChatsList chat={'hey There im in town'} day={'04 feb'} name={'Hamza khan'} style={{marginTop:10}} image={require('../../../img/Dp.png')} chatNameStyle={{fontSize:hp('2.5%')}} imageStyle={{width:wp('15%'),height:hp('8%')}}/>
        <ChatsList chat={'hey There im in town'} day={'05 feb'} name={'Raffay'} style={{marginTop:10}} image={require('../../../img/Dp.png')} imageStyle={{width:wp('15%'),height:hp('8%')}}/>
        <ChatsList chat={'hey There im in town'} day={'06 feb'} name={'Zain'} style={{marginTop:10}} image={require('../../../img/Dp.png')} imageStyle={{width:wp('15%'),height:hp('8%')}}/>
        <ChatsList chat={'hey There im in town'} day={'07 feb'} name={'Suliman'} style={{marginTop:10}} image={require('../../../img/Dp.png')} imageStyle={{width:wp('15%'),height:hp('8%')}}/>
        <ChatsList chat={'hey There im in town'} day={'08 feb'} name={'saad'} style={{marginTop:10}} image={require('../../../img/Dp.png')} imageStyle={{width:wp('15%'),height:hp('8%')}}/>
        <ChatsList chat={'hey There im in town'} day={'08 feb'} name={'aliyan'} style={{marginTop:10}} image={require('../../../img/Dp.png')} imageStyle={{width:wp('15%'),height:hp('8%')}}/>
        <ChatsList chat={'hey There im in town'} day={'09 feb'} name={'rayyan'} style={{marginTop:10}} image={require('../../../img/Dp.png')} imageStyle={{width:wp('15%'),height:hp('8%')}}/>
        <ChatsList chat={'hey There im in town'} day={'09 feb'} name={'rizwan'} style={{marginTop:10,marginBottom:10}} image={require('../../../img/Dp.png')} imageStyle={{width:wp('15%'),height:hp('8%')}}/>




    </View>
    </ScrollView>
    </>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#060A16'
    },
}
)

export default Chats