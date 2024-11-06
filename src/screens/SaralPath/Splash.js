import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import SplashLogo from '../../Assets/Images/Splash.svg'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('SelectLanguage');
        }, 3000);

    }, []);
   console.log("SPLASHHHHHH>>>>>");
    return (
        <View style={styles.container}>
            {/* <Image
                source={require('../Assets/Images/newSplashh.jpg')} resizeMode="cover"
                style={{ width: '100%', height: '100%' }} /> */}
             <SplashLogo />   
        </View>
    );
};
export default Splash;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#deafb1'
    },
});