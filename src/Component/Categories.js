import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';

const Categories = ({ data, activeCategory, handleChangeCategory }) => {
    return (
        <View style={styles.container}>
            <Animated.View entering={FadeInDown.duration(500).springify()}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 0 }}
                style={tw`flex-row`}
            >
                <Text>Categories</Text>
                {
                    data.map((cat, index) => {
                        let isActive = cat.strCategory === activeCategory;
                        let activeButtonClass = isActive ? tw`bg-amber-400` : tw`bg-black/10`;
                        return (
                            <View key={index} style={{ marginLeft: -60 }}>
                                <TouchableOpacity
                                  style={[tw`items-center mt-5 mr-5 pt-5`]}
                                    onPress={() => handleChangeCategory(cat.strCategory)}
                                >
                                    <View style={[tw`rounded-full p-[6px]`, { marginRight: 50 }, activeButtonClass]}>
                                        <Image
                                            source={{ uri: cat.strCategoryThumb }}
                                            style={[tw`rounded-full`, { width: hp(6), height: hp(6) }]}
                                        />
                                    </View>
                                    <Text style={[tw`text-neutral-600`, { fontSize: hp(1.6), marginTop: 5, marginRight: 50 }]}>{cat.strCategory}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                } 
                
            </ScrollView>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 0,
        paddingVertical: 10,
   
    },
});

export default Categories;


