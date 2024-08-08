import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const WebviewScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <WebView source={{ uri: 'https://reactnative.dev/' }}
                style={{  width:390}}>
                <Text>Webview</Text>
            </WebView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default WebviewScreen;
