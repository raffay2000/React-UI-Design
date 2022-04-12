import { StyleSheet, Text, View,ScrollView, TouchableOpacity  } from 'react-native';
import {Button} from '../components/Button'

export default function Welcome({ navigation }) {
  return (
   <View style={styles.container}>
   
   <Button textColor={'black'} color={"#FFB81A"} textStyle={'bold'} style={{marginBottom:25}} text={'Login'} onPress={() =>
        navigation.navigate('Login')}/>
   <Button textColor={'white'} color={"#C63520"} textStyle={'bold'} style={{marginBottom:100}} text={'Sign Up'} onPress={()=>navigation.navigate('Form')}/>
   
   </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#060A16',
    justifyContent:'flex-end',
    alignItems:'center',

  }
  

});
