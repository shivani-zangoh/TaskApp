import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const Splash = ({ navigation }) => {
    // const animationRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('AnimationScrollView');
        }, 7000)
        console.log('bdhdsh')
    })

    return (
        <View style={styles.container}>
        <LottieView
                //  ref={animationRef}
                source={require('../Assets/Animation/splash.json')}
                autoPlay
                // loop
                style={styles.animation}
            />
            {/* <Text style={styles.text}>Welcome to Splash Screen</Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#55AFE7', // Ensure the background color is set for visibility
    },
    text: {
        fontSize: 20,
        marginTop: 20,
    },
    animation: {
        width: 400, // Set width and height for the animation
        height: 800,
        marginBottom: 40,
    },
});

export default Splash;
