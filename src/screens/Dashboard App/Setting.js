import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Platform, TouchableOpacity } from 'react-native';

const Setting = ({ navigation }) => {
    return (
        <ScrollView >
            <View style={styles.container}>
                <View style={{ backgroundColor: '#0096FF', width: '100%', borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../../Assets/Images/backIcon.png')}
                            style={{ height: 40, width: 40, tintColor: 'black', alignItems: 'center' }}
                        />
                        <Text style={styles.heading}>Setting Section </Text>
                    </TouchableOpacity>

                </View>
            </View>

            <View style={{ marginTop: 30, marginHorizontal: 20, }}>
                <Image
                    source={require('../../Assets/Images/setting.png')}
                    style={{ height: 100, width: 100, alignItems: 'left' }}
                />
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.text}>Notification: on </Text>
                    <Text style={styles.text}>Theme :  light </Text>
                </View>
            </View>
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
        marginBottom:Platform.OS === 'ios' ? 10 : 0,
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
    text: {
        textAlign: 'left',
        fontSize: 16,
        marginHorizontal: 10,
        fontWeight: '500',
        lineHeight: 30
    }
});

export default Setting;
