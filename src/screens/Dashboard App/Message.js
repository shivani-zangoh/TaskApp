import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Platform, TouchableOpacity } from 'react-native';

const Message = ({ navigation }) => {
    return (
        <ScrollView >
            <View style={styles.container}>
                <View style={{ backgroundColor: '#0096FF', width: '100%', borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../../Assets/Images/backIcon.png')}
                            style={{ height: 40, width: 40, tintColor: 'black', alignItems: 'center' }}
                        />
                        <Text style={styles.heading}>Message Section </Text>
                    </TouchableOpacity>

                </View>
            </View>
            <Text style={styles.message}>Messages Content Goes Here </Text>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 25,
        textAlign: 'left',
        //marginBottom:Platform.OS === 'ios' ? 0 : 0,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
        fontWeight: 'bold',
    },
    button: {
        marginHorizontal: 20,
        marginVertical: 30
    },
    message:{
        marginTop:20,
         marginLeft:20,
         fontSize:16,
         color:'black'
    }
});

export default Message;
