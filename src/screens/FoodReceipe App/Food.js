import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, Image, StyleSheet, ScrollView, TextInput } from 'react-native';
import tw from 'twrnc';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import BellIcon from '../../Assets/BellIcon.svg';
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from '../../Component/Categories';
import Recipes from '../../Component/Recipes';
import { SparklesIconOutline } from "react-native-heroicons/outline";
import axios from 'axios';
//import { BellIcon} from "react-native-heroicons/outline";

const Food = () => {
    const [activeCategory, setActiveCategory] = useState('Beef');
    const [data, setData] = useState([]);
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getCategory();
        getRecipe();
    }, []);


    //handle change Category : for Feature Category

    const handleChangeCategory = category => {
        getRecipe(category);
        setActiveCategory(category);
        setMeals([]);
    }

    const getCategory = async () => {
        try {
            const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
            const categories = response?.data?.categories;

            if (categories) {
                categories.forEach(category => {
                    // console.log('CATEGORY -----', category.strCategory);
                    // console.log('CATEGORY IMAGE -----', category.strCategoryThumb);
                });
                setData(categories);
            }

        } catch (error) {
            console.log(error);
        }
    }

    const getRecipe = async (data = 'Beef') => {
        try {
            const response = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${data}`);

            // console.log('RECEPI ----', response.data.meals)
            if (response && response.data) {
                setMeals(response.data.meals)

            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <ScrollView
                showsVerticalScrollIndicator={true}
                contentContainerStyle={{ paddingBottom: 50 }}
                style={tw`pt-10`}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={require('../../Assets/Images/food.jpeg')}
                        style={{ height: hp(5), width: hp(5.5), borderRadius: 180, marginHorizontal: 15 }}
                    />
                    <BellIcon width={hp(4)} height={hp(4)} color="gray" style={{ marginLeft: 260 }} />
                </View>
                <View style={tw`mx-4 space-y-2 mb-2 mt-5`}>
                    <Text style={[tw`text-neutral-600 mb-5`, { fontSize: hp(1.7) }]}>Hello, Jhon !</Text>
                    <View>
                        <Text style={[tw`font-semibold text-neutral-600`, { fontSize: hp(3.8) }]}>Make your own food,</Text>
                    </View>
                    <Text style={[tw`font-semibold text-neutral-600`, { fontSize: hp(3.8) }]}>style at
                        {/* <Text className='text-amber-400'> homedfg </Text> */}
                        <Text style={[tw`text-amber-400 mb-5`]}> home </Text>
                    </Text>
                </View>
                <View style={tw`mx-4 mt-5 flex-row items-center rounded-full bg-black/5 p-[6px]`}>
                    <TextInput
                        placeholder='Search Any Recepi'
                        placeholderTextColor={'gray'}
                        style={[tw`flex-1 text-base mb-1 pl-3 tracking-wider`, { fontSize: hp(1.7) }]}
                    />
                    <View style={tw`bg-white rounded-full p-3`}>
                        <MagnifyingGlassIcon strokeWidth={3} size={hp(2.5)} color="gray" />
                    </View>
                </View>
                <View style={tw`mt-5 mx-4`}>
                    {data.length > 0 && <Categories data={data} activeCategory={activeCategory} handleChangeCategory={handleChangeCategory} />}
                </View>
                <View style={tw`mt-5 mx-4`}>
                    <Recipes meals={meals} data={data} />
                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
});

export default Food;
