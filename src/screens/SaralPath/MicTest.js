import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MicTest = () => {
    return (
        <View style={styles.container}>
            <Text>MicTest screen</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
   },
});


export default MicTest;
