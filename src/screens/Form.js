import React from 'react'
import { View,StyleSheet,Text ,Image,TextInput } from 'react-native';
import {Button} from '../components/Button'
import {Textarea} from '../components/Textarea'



const Form = ({navigation}) => {
  return (
    <>
    <View style={styles.container}>
      <View style={{height:164,width:164,borderRadius:80,backgroundColor:'#FFB81A' , marginTop:85}}>
        <Image source={require('../img/user.png')}/>
        <Image style={{marginLeft:125}} source={require('../img/circle.png')}/>
      </View>
      <View style={{marginTop:10}}>
        <Textarea color={'#0C1326'} text={'username'}/>
        <Textarea color={'#0C1326'} text={'full name'}/>
        <Textarea color={'#0C1326'} text={'password'}/>
        <Textarea color={'#0C1326'} text={'confirm password '}/>
        

      
      <View style={{flexDirection:'row'}}>
        <View style={{width:89 ,height:54 ,backgroundColor:'#0C1326',marginTop:23, borderRadius:12,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
          <Image style={{width:28 ,height:20}} source={require('../img/flag.png')}/><Text style={{color:'white',marginLeft:5}}>+1</Text>
        </View>
        <View style={{width:225 ,height:54 ,backgroundColor:'#0C1326',marginTop:23,borderRadius:12,marginLeft:3 ,justifyContent:'center'}}>
          <Text style={{color:'white',marginLeft:24}}>256 256 256</Text>
        </View>
   

      </View>
      
      </View>
      <Button color={'#FFB81A'} style={{marginTop:35}} text={'Save & Proceed'} textColor={'black'} textSize={18} textStyle={'bold'} onPress={()=>{navigation.navigate('GetStarted')}}/>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#060A16',
    // justifyContent:'center',
    alignItems:'center'
  }
});
export default Form;
