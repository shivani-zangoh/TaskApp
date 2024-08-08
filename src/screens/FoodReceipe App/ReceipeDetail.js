import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ChevronLeftIcon, ClockIcon, FireIcon, Square3Stack3DIcon, UsersIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Loading from '../../Component/Loading';
import Animated, { FadeInDown, FadeIn } from 'react-native-reanimated';
import YoutubeIframe from 'react-native-youtube-iframe';

const ReceipeDetail = (props) => {
    let item = props.route.params;
    // console.log(props.route.params);
    const [isFavourite, setIsFavourite] = useState(false);
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        getMealData(item.idMeal);
    }, []);

    const getMealData = async (id) => {
        try {
            const response = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            console.log('GET MEAL DATA ----', response.data.meals)
            if (response && response.data) {
                setMeal(response.data.meals[0])
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const ingrediantsIndex = (meal) => {
        if (!meal) return [];
        let indexes = [];
        for (let i = 1; i < 20; i++) {
            if (meal['strIngredient' + i]) {
                indexes.push(i)
            }
        }
        return indexes;
    }

    const getYoutubeVideoId = url => {
        const regex = /[?&]v=([^&]+)/;
        const match = url.match(regex);
        if (match && match[1]) {
            return match[1];
        }
        return null;
    }

    return (
        // <View style={styles.container}>
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 30 }}
            style={tw`bg-white flex-1`}
        >
            <StatusBar barStyle="light-content" />
            <View style={tw`flex-row justify-center`}>
                <Image
                    source={{ uri: item.strMealThumb }}
                    sharedTransitionTag={item.strMealThumb}
                    style={[{
                        width: wp(98), height: hp(50),
                        borderRadius: 53, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, marginTop: 4
                    }]}
                />
            </View>
            <Animated.View entering={FadeIn.delay(200).duration(1000)}
                style={tw`w-full absolute flex-row justify-between items-center pt-14`}>
                <TouchableOpacity style={tw`p-2 rounded-full ml-5 bg-white`} onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon strokeWidth={4.5} size={hp(3.5)} color="#fbbf24" />
                </TouchableOpacity>
                <TouchableOpacity style={tw`p-2 rounded-full mr-5 bg-white`} onPress={() => setIsFavourite(!isFavourite)}>
                    <HeartIcon strokeWidth={4.5} size={hp(3.5)} color={isFavourite ? 'red' : 'gray'} />
                </TouchableOpacity>
            </Animated.View>

            {
                loading ? (<Loading size="large" style={tw`mt-20`} />
                ) : (
                    <View>
                        <Animated.View entering={FadeInDown.delay(700).springify().damping(12)}
                            style={tw`px-8 flex justify-between space-y-4 pt-8`}>
                            <View style={tw`space-y-2`}>
                                <Text style={[tw`font-bold flex-1 text-neutral-700`, { fontSize: hp(3) }]}>{meal?.strMeal}</Text>
                                <Text style={[tw`font-medium flex-1 text-neutral-500 pt-2 pb-5`, { fontSize: hp(2) }]}>{meal?.strArea}</Text>
                            </View>
                        </Animated.View>

                        <Animated.View entering={FadeInDown.delay(100).duration(700).springify().damping(12)} style={tw`flex-row justify-around`}>

                            <View style={tw`flex rounded-full bg-amber-300 p-2`}>
                                <View style={[tw`rounded-full bg-white flex items-center justify-center`, { height: hp(6.5), width: hp(6.5) }]}>
                                    <ClockIcon strokeWidth={2.5} size={hp(4)} color="#525252" />
                                </View>
                                <View style={tw`flex items-center py-2 space-y-1`}>
                                    <Text style={[tw`font-bold text-neutral-700`, { fontSize: hp(2) }]}>35</Text>
                                    <Text style={[tw`font-bold text-neutral-700`, { fontSize: hp(1.3) }]}>Mins</Text>
                                </View>
                            </View>

                            <View style={tw`flex rounded-full bg-amber-300 p-2`}>
                                <View style={[tw`rounded-full bg-white flex items-center justify-center`, { height: hp(6.5), width: hp(6.5) }]}>
                                    <UsersIcon strokeWidth={2.5} size={hp(4)} color="#525252" />
                                </View>
                                <View style={tw`flex items-center py-2 space-y-1`}>
                                    <Text style={[tw`font-bold text-neutral-700`, { fontSize: hp(2) }]}>03</Text>
                                    <Text style={[tw`font-bold text-neutral-700`, { fontSize: hp(1.3) }]}>Servings</Text>
                                </View>
                            </View>
                            <View style={tw`flex rounded-full bg-amber-300 p-2`}>
                                <View style={[tw`rounded-full bg-white flex items-center justify-center`, { height: hp(6.5), width: hp(6.5) }]}>
                                    <FireIcon strokeWidth={2.5} size={hp(4)} color="#525252" />
                                </View>
                                <View style={tw`flex items-center py-2 space-y-1`}>
                                    <Text style={[tw`font-bold text-neutral-700`, { fontSize: hp(2) }]}>103</Text>
                                    <Text style={[tw`font-bold text-neutral-700`, { fontSize: hp(1.3) }]}>Cal</Text>
                                </View>
                            </View>
                            <View style={tw`flex rounded-full bg-amber-300 p-2`}>
                                <View style={[tw`rounded-full bg-white flex items-center justify-center`, { height: hp(6.5), width: hp(6.5) }]}>
                                    <Square3Stack3DIcon strokeWidth={2.5} size={hp(4)} color="#525252" />
                                </View>
                                <View style={tw`flex items-center py-2 space-y-1`}>
                                    <Text style={[tw`font-bold text-neutral-700`, { fontSize: hp(2) }]}>1</Text>
                                    <Text style={[tw`font-bold text-neutral-700`, { fontSize: hp(1.3) }]}>Easy</Text>
                                </View>
                            </View>
                        </Animated.View>

                        <Animated.View entering={FadeInDown.delay(200).duration(700).springify().damping(12)} style={tw`space-y-4`}>
                            <Text style={[tw`font-bold flex-1 text-neutral-700 pt-5 ml-5 pb-2`, { fontSize: hp(2.5) }]}>Ingredients</Text>
                            <View style={tw`space-y-2 ml-3`}>
                                {
                                    ingrediantsIndex(meal).map((i) => {
                                        return (
                                            <View key={i} style={tw`flex-row space-x-4`}>
                                                <View style={[tw`rounded-full bg-amber-300 ml-5 `, { height: hp(1.5), width: hp(1.5), marginVertical: 9 }]} />
                                                <View style={tw`flex-row space-x-2 ml-3 my-1`}>
                                                    <Text style={[tw`font-extrabold text-neutral-700`, { fontSize: hp(1.7) }]}>{meal['strMeasure' + i]}</Text>
                                                    <Text style={[tw`font-medium text-neutral-600 ml-2`, { fontSize: hp(1.7) }]}>{meal['strIngredient' + i]}</Text>
                                                </View>
                                            </View>
                                        )
                                    })
                                }

                            </View>
                        </Animated.View>

                        <Animated.View entering={FadeInDown.delay(300).duration(700).springify().damping(12)} style={tw` pt-1`}>
                            <Text style={[tw`font-bold flex-1 text-neutral-700 pt-3 ml-5 pb-2`, { fontSize: hp(2.5) }]}>Instructions</Text>
                            <Text style={[tw`text-neutral-700 ml-5`, { fontSize: hp(1.6) }]}>
                                {
                                    meal.strInstructions
                                }
                            </Text>
                        </Animated.View>
                        {
                            meal.strYoutube && (
                                <Animated.View entering={FadeInDown.delay(400).duration(700).springify().damping(12)} style={tw`space-y-4`}>
                                    <Text style={[tw`font-bold flex-1 text-neutral-700 pt-5 ml-5 pb-2`, { fontSize: hp(2.5) }]}>Recepi Video</Text>
                                    <View style={{ marginLeft: 15, marginRight: 15 }}>
                                        <YoutubeIframe
                                            videoId={getYoutubeVideoId(meal.strYoutube)}
                                            height={hp(30)}
                                        />
                                    </View>
                                </Animated.View>
                            )
                        }
                    </View>
                )
            }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ReceipeDetail;
