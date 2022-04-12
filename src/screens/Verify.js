import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import {Button} from '../components/Button'


function Verify({navigation}){
return(
  <>
  <View style={styles.container}>
    <Text style={styles.heading}>Verify Your Number</Text>
    <Text style={{color:'white',textAlign:'center',width:255,marginTop:20}}>Insert the 4-digit OTP code that has been sent to your device for verification.</Text>
    <View style={{flexDirection:'row',justifyContent:'space-around',width:"70%"}}>
    <View style={styles.box} >
      <Text style={{color:'white',fontSize:26}}>9</Text>
      </View>
    <View style={styles.box} >
      <Text style={{color:'white',fontSize:26}}>1</Text>
      </View>
    <View style={styles.box} >
      <Text style={{color:'white',fontSize:26}}>6</Text>
      </View>
    <View style={styles.box} >
      <Text style={{color:'white',fontSize:26}}>5</Text>
      </View>
    </View>
    <Text style={{color:'white',marginTop:15}}>00:50</Text>
    <Text style={{color:'white',marginTop:55}}>Didn't receive the code?</Text>
    <Text style={{color:'#FFB81A',marginTop:25,textDecorationLine:'underline'}}>Resend OTP</Text>
    
    <Button textColor={'#FFFFFF'} color={'#C63520'} style={{marginTop:51}} text={'Verify'} textSize={25} textStyle={'bold'} onPress={()=>{navigation.navigate('Ticket')}}/>
    
  </View>

  
  </>
)
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#060A16",
    justifyContent:'center',
    alignItems:'center'
  },
  heading:{
    color:"#FFB81A",
    fontSize:28
  },
  box:{
    width:63,
    height:70,
    backgroundColor:'#0C1326',
    borderStyle:'solid',
    borderWidth:1,
    borderColor:'#273253',
    borderRadius:12,
    marginTop:51,
    justifyContent:'center',
    alignItems:'center'

  }
})
export default Verify