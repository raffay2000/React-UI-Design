
import { StyleSheet, Text, View, TouchableOpacity,Image  } from 'react-native';
import {Button} from '../components/Button'

export default function App({navigation}) {
  return (
   <View style={
     styles.container}
     >
   <Text style={
     styles.heading1}
     >
       Get Started 
     </Text>
   <Text style={
     {color:"white",marginTop:44,fontSize:14,alignSelf:'flex-start',marginLeft:51}}
     >
       enter your mobile number to sign up
       </Text>
        <View style={{flexDirection:"row"}}>
       <View style={[styles.box,{justifyContent:'center',alignItems:'center',flexDirection:'row'}]}>
         <Image source={require('../img/flag.png')} style={{width:28,height:28}}
         />
         <Text style={{color:"white",marginLeft:4}}>+1</Text>

       </View>
       <View style={[styles.box,{width:'50%',marginLeft:13}]}>
         <Text style={{color:"white",marginLeft:21}}>
           245 546 584
         </Text>

       </View>
       </View>
       
           <Button text={'Sign Up With Phone'} textColor={'white'} textStyle={'bold'} color={'#C63520'}  style={{width:'72%',marginTop:33}} textSize={18} onPress={()=>{navigation.navigate('Verify')}}/>
       <View style={
         {flexDirection: 'row', alignItems: 'center',marginTop:33,width:280}
         }>
  <View style={styles.line} />
  <View>
    <Text style={
      {width: 50, textAlign: 'center',color:"#273253"}
      }>
        OR
        </Text>
  </View>
  <View style={styles.line} />
</View>
<Button text={'Sign Up With Facebook'} textColor={'black'} textStyle={'bold'} color={'#FFB81A'}  style={{width:'72%',marginTop:33}} textSize={18}/>
       <Button text={'Sign Up With Twitter'} textColor={'black'} textStyle={'bold'} color={'#FFB81A'}  style={{width:'72%',marginTop:33}} textSize={18}/>

   </View>
  
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#060A16",
    alignItems:'center',
    justifyContent:'center',
    // paddingTop:'20%'

  },
  heading1:{
    color:"#C63520",
    fontSize:28,
    alignSelf:'flex-start',
    marginLeft:51,
    fontWeight:"bold"
    
  },
  box:{
    width:'20%',
    height:54,
    backgroundColor:"#0C1326",
    borderColor:"#273253",
    borderRadius:12,
    justifyContent:'center',
    alignItems:'flex-start',
    marginTop:20

  },
  
  line:{
    flex: 1, height: 1, 
    backgroundColor: '#273253'


  }

});
