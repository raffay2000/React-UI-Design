import React from 'react'
import { View,Text ,StyleSheet,TextInput} from 'react-native'
// import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

export const Textarea = ({color,style,text,textStyle,placeholder,placeholderColor}) => {
  return (
    <> 
    <View style={style} >
    <Text style={{color:'white' ,alignSelf:'flex-start',marginLeft:10,marginBottom:6}} >{text}</Text>
      <TextInput placeholder={placeholder} placeholderTextColor={placeholderColor} style={[styles.textInputStyle,{backgroundColor:color,padding:12,}]}/>
    </View>
    
    </>
  )
}
const styles=StyleSheet.create({
    textInputStyle:{
        backgroundColor:'#0C1326',width:327 , height:54,borderRadius:12
    }
})
