import React from 'react'
import { View,Text,StyleSheet ,Image} from 'react-native'
import {Button} from '../components/Button'


const Ticket = ({navigation}) => {
    return (
      <>
      <View style={styles.container}>
      <View  style={{flex:2,alignItems:'center',justifyContent:'center'}}> 
      {/* <AntDesign name="checkcircleo" size={110} color="#FFB81A" /> */}
      <Image source={require("../img/Icon.png")} />
      </View>
      <Button style={{alignSelf:'center',marginBottom:15}} color={'#C63520'} textColor={'white'} text={'Next'} textSize={18} onPress={()=>{navigation.navigate('MainRoutes')}}/>
      </View>
      </>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#060A16'
  
    }
    
  
  });
  
  export default Ticket