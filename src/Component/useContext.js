import React, { useState, createContext } from 'react';
import { View, Text, StyleSheet, AppState } from 'react-native';
import Layout from './Layout';

export const AppState = createContext();

const Context = () => {
    const [loading, setLoading] = useState(false);
     const onSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }
    return (
        <AppState.Provider value={{loading, onSubmit}}>
        <View style={styles.container}>
            <Text>Context</Text>
            <Layout />
        </View>
        </AppState.Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default Context;
