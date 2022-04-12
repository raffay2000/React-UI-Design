import React from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ChatsList from '../../../components/ChatsList'
const Contacts = ({navigation}) => {
  return (
    <>
    <View style={{
          paddingTop:40,
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
                    fontSize:30,
                    fontWeight:'bold'
                    }}>
                    Settings 
                </Text>
            </View>
        </View>
    <View style={styles.container}>
    <View style={styles.profileSection}>
      <View style={{marginLeft:12,backgroundColor:'#FFB81A',width:wp('18%'),height:hp('10%'),borderRadius:100 }}>
        <Image style={{height:hp('10%'),width:wp('18%')}} source={require('../../../img/user.png')}/>
        </View> 
      <View>
        <Text style={{color:'#FFB81A',marginLeft:12,fontSize:hp('4%'),fontWeight:'bold'}}>
          Jason Parker
        </Text>
        </View>              
    </View>
    <View style={{width:wp('90%'),backgroundColor:'#273253',height:1,margin:20}}> 
    </View>
    <TouchableOpacity onPress={()=>{navigation.navigate('Chats')}}>
    <ChatsList  style={{height:hp('7%'),marginTop:2}} name={'Chats'} chatNameStyle={{marginTop:10}}/>
    </TouchableOpacity>
    <TouchableOpacity>
    <ChatsList  style={{height:hp('7%'),marginTop:10}} name={'Account Settings'} chatNameStyle={{marginTop:12}}/>
    </TouchableOpacity>
    <TouchableOpacity>
    <ChatsList  style={{height:hp('7%'),marginTop:10}} name={'Notifications'} chatNameStyle={{marginTop:12}}/>
    </TouchableOpacity>
    <TouchableOpacity>
    <ChatsList  style={{height:hp('7%'),marginTop:10}} name={'Storage & Data'} chatNameStyle={{marginTop:12}}/>
    </TouchableOpacity>
    <TouchableOpacity>
    <ChatsList  style={{height:hp('7%'),marginTop:10}} name={'Help'} chatNameStyle={{marginTop:12}}/>
    </TouchableOpacity>
    <TouchableOpacity>
    <ChatsList  style={{height:hp('7%'),marginTop:10}} name={'Tell a Friend'} chatNameStyle={{marginTop:12}}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{navigation.popToTop()}}>
    <ChatsList  style={{height:hp('7%'),marginTop:10}} name={'Log Out'} chatNameStyle={{marginTop:12}}/>
    </TouchableOpacity>
    </View>
    </>
  )
}
const styles =StyleSheet.create({
  container:{
    flex:1,
    // justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#060A16'
  },
  profileSection:{
    backgroundColor:'#0C1326',
    flexDirection:'row',
    alignItems:'center',
    height:hp('13%'),
    width:wp('88%'),
    borderRadius:12,
    borderWidth:1,
    borderColor:'#273253'
  }
})
export default Contacts