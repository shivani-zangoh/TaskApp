import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Navbar from '../../Component/NavBar';
import Button from '../../Component/Button';

const SelectLanguage = ({ navigation }) => {
    return (
        <View style={[{ flex: 1, backgroundColor: 'white' }]}>
            <SafeAreaView>
                <Navbar onPress={() => navigation.navigate('ChangeLanguage') } />
                <View style={styles.container}>
                    <Text style={{
                        textAlign: 'center', fontWeight: '400', fontSize: 32, lineHeight: 45,
                        fontFamily: 'Helvetica Neue', color: 'black', marginLeft: 100, marginRight: 80
                    }}>Select a language to Proceed</Text>
                </View>
                <View style={{flexDirection:'row',marginLeft:50,marginRight:80,gap:10}}>
                    <Button title="English" onPress={() => navigation.navigate('Welcome')}
                        style={styles.button}
                        textStyle={{
                            fontFamily: 'Roboto',
                            fontSize: 16,
                            fontWeight: 400,
                            color: 'black',
                            lineHeight: 20,
                           
                         }}/>
                          <Button title="हिन्दी" onPress={() => navigation.navigate('Welcome')}
                        style={styles.button}
                        textStyle={{
                            fontFamily: 'Roboto',
                            fontSize: 16,
                            fontWeight: 400,
                            color: 'black',
                            lineHeight: 20,
                         }}/>
                          <Button title="বাংলা" onPress={() => navigation.navigate('Welcome')}
                        style={styles.button}
                        textStyle={{
                            fontFamily: 'Roboto',
                            fontSize: 16,
                            fontWeight: 400,
                            color: 'black',
                            lineHeight: 20,
                         }}/>
                </View>
                <View style={{flexDirection:'row',marginLeft:50,marginRight:80,gap:10}}>
                    <Button title="தமிழ்" onPress={() => navigation.navigate('Welcome')}
                        style={styles.button}
                        textStyle={{
                            fontFamily: 'Roboto',
                            fontSize: 16,
                            fontWeight: 400,
                            color: 'black',
                            lineHeight: 20,
                           
                         }}/>
                          <Button title="తెలుగు" onPress={() => navigation.navigate('Welcome')}
                        style={styles.button}
                        textStyle={{
                            fontFamily: 'Roboto',
                            fontSize: 16,
                            fontWeight: 400,
                            color: 'black',
                            lineHeight: 20,
                         }}/>
                          <Button title="मराठी" onPress={() => navigation.navigate('Welcome')}
                        style={styles.button}
                        textStyle={{
                            fontFamily: 'Roboto',
                            fontSize: 16,
                            fontWeight: 400,
                            color: 'black',
                            lineHeight: 20,
                         }}/>
                </View>
                <View style={{flexDirection:'row',marginLeft:110,marginRight:80,gap:10}}>
                    <Button title="ગુજરાતી" onPress={() => navigation.navigate('Welcome')}
                        style={styles.button}
                        textStyle={{
                            fontFamily: 'Roboto',
                            fontSize: 16,
                            fontWeight: 400,
                            color: 'black',
                            lineHeight: 20,
                           
                         }}/>
                          <Button title="ಕನ್ನಡ" onPress={() => navigation.navigate('Welcome')}
                        style={styles.button}
                        textStyle={{
                            fontFamily: 'Roboto',
                            fontSize: 16,
                            fontWeight: 400,
                            color: 'black',
                            lineHeight: 20,
                         }}/>
                        
                        
                </View>
                <View style={{flexDirection:'row',marginLeft:50,marginRight:80,gap:10}}>
                    <Button title="മലയാളം" onPress={() => navigation.navigate('Welcome')}
                        style={styles.button}
                        textStyle={{
                            fontFamily: 'Roboto',
                            fontSize: 16,
                            fontWeight: 400,
                            color: 'black',
                            lineHeight: 20,
                           
                         }}/>
                          <Button title="ਪੰਜਾਬੀ" onPress={() => navigation.navigate('Welcome')}
                        style={styles.button}
                        textStyle={{
                            fontFamily: 'Roboto',
                            fontSize: 16,
                            fontWeight: 400,
                            color: 'black',
                            lineHeight: 20,
                         }}/>
                          <Button title="ଓଡିଆ" onPress={() => navigation.navigate('Welcome')}
                        style={styles.button}
                        textStyle={{
                            fontFamily: 'Roboto',
                            fontSize: 16,
                            fontWeight: 400,
                            color: 'black',
                            lineHeight: 20,
                         }}/>
                </View>
            </SafeAreaView>
        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 40
    },
    button: {
        width: 100,
        height: 43,
        backgroundColor: 'rgba(240, 244, 255, 1)',
        borderRadius: 4,
        justifyContent: 'center',
        paddingVertical: 2,
        borderRadius:10
    }
});


export default SelectLanguage;
