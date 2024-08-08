import React, { useEffect } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import tw from 'twrnc';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

function Welcome() {
    const ring1padding = useSharedValue(0);
    const ring2padding = useSharedValue(0);

    const navigation = useNavigation();

    useEffect(() => {
        ring1padding.value = withSpring(hp(5), { damping: 5, stiffness: 90 });
        ring2padding.value = withSpring(hp(5.5), { damping: 5, stiffness: 90 });
        setTimeout(() => navigation.navigate('Food'), 2500);
    }, []);

    const ring1Style = useAnimatedStyle(() => ({
        padding: ring1padding.value,
    }));

    const ring2Style = useAnimatedStyle(() => ({
        padding: ring2padding.value,
    }));

    return (
        <View style={tw`flex-1 items-center justify-center bg-amber-500`}>
            <StatusBar barStyle="light-content" />
            <Text style={tw`text-white font-bold mb-10`}>
                Open up App.js to start working on your app!
            </Text>

            <Animated.View style={[tw`bg-white/20 rounded-full`, ring2Style]}>
                <Animated.View style={[tw`bg-white/20 rounded-full`, ring1Style]}>
                    <Image
                        source={require('../../Assets/Images/food.jpeg')}
                        style={{ height: hp(25), width: hp(25), borderRadius: 180 }}
                    />
                </Animated.View>
            </Animated.View>

            <View style={tw`flex items-center pt-10`}>
                <Text style={[tw`font-bold text-white tracking-widest mt-5 text-6xl`, { fontSize: hp(7) }]}>Foody</Text>
                <Text style={[tw`font-medium text-white tracking-widest mt-5 text-lg`, { fontSize: hp(2) }]}>Eat | Explore | Fun</Text>
            </View>
        </View>
    );
}

export default Welcome;



