import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Inter } from "./fonts";

const Button = ({ title, onPress, style, textSize ,textStyle,disabled,numberOfLines}) => {
  return (
   <View style={{ alignItems: 'center',justifyContent:'center'}}>
     <TouchableOpacity onPress={onPress} style={[styles.button, style]} disabled={disabled}>
      <Text numberOfLines={numberOfLines} style={[styles.text,textStyle, { fontSize: 12.8 }]}> {title}</Text>
      {/* <Inter numberOfLines={numberOfLines}  name={title} style={[styles.text,textStyle]}/> */}
    </TouchableOpacity>
   </View>
  );
}
export default Button;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textAlign:'center',
    fontWeight:'500',
  },
  button: {
    backgroundColor: '#D2464B',
    padding: 14,
    marginVertical:10,
    borderRadius: 8,
    width:'60%'
  }
});

{/* <Button title="ગુજરાતી" onPress={() => console.log('ગુજરાતી')}
style={styles.button}
textStyle={{
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 400,
    color: 'black',
    lineHeight: 20,

}} /> */}