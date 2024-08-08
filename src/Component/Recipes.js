import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable, StatusBar } from 'react-native';
import tw from 'twrnc';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';
import MasonryList from '@react-native-seoul/masonry-list';
import Loading from './Loading';
import { useNavigation } from '@react-navigation/native';


const Recipes = ({ meals, data }) => {
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    return (
        <View style={tw`mx-4 space-y-3`}>
            <StatusBar barStyle="light-content" />
            <Text style={[tw`font-semibold text-neutral-600`, { fontSize: hp(3) }]}>Recipes</Text>
            <View>
                {
                    data.length == 0 || meals.length == 0 ? (
                        <Loading size="large" style={tw`mt-20`} />
                    ) : (
                        <MasonryList
                            data={meals}
                            keyExtractor={(item) => item.idMeal}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, i }) => <RecepiCard item={item} index={i} navigation={navigation} />}
                            onEndReachedThreshold={0.1}
                         />
                    )
                }

            </View>
        </View>
    );
};

const RecepiCard = ({ item, index, navigation }) => {
    let isEven = index % 2 == 0
    return (
        <Animated.View entering={FadeInDown.delay(index * 100).duration(600).springify().damping(12)}>
            <Pressable
                    style={[tw`flex justify-center mb-4 space-y-1 pt-1`,
                    { width: '100%', paddingLeft: isEven ? 0 : 8, paddingRight: isEven ? 8 : 0 }]}
                    onPress={() => navigation.navigate('ReceipeDetail', { ...item })}
                >
                    <Image
                        source={{ uri: item.strMealThumb }}
                        sharedTransitionTag={item.strMealThumb}
                        style={[tw`bg-black/5`, { width: '100%', height: index % 3 == 0 ? hp(25) : hp(35), borderRadius: 35 }]}
                    />
                    <Text style={[tw`font-semibold ml-2 text-neutral-600 pt-1`, { fontSize: hp(1.5) }]}>
                        {
                            item.strMeal.length > 20 ? item.strMeal.slice(0, 20) + '...' : item.strMeal
                        }
                    </Text>
                </Pressable>
           </Animated.View>
    )
   

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Recipes;
