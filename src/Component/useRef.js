import React, { useRef } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

const MyComponent = () => {
    const inputRef = useRef(null);
    const onPress=()=>{
        inputRef.current.value = ''
    }
    return (
        <View style={styles.container}>
            <Text>MyComponent</Text>
            <input placeholder='Ex ....' ref={inputRef}/>
            <Button onPress={onPress} title='change name'/>
        </View>
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


export default MyComponent;
