import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity, Alert, Animated } from 'react-native';
import axios from 'axios';
import { Card } from '@rneui/themed';

const StoredBook = ({ navigation, route }) => {
    const [storedBooks, setStoredBooks] = useState([]);
    const { addedItems } = route.params;
    const translateAnim = useRef(new Animated.Value(0)).current; // Initialize animated value

    console.log("Stored Screen", route.params.addedItems)

    useEffect(() => {
        animateTranslation(); // Trigger animation on mount
    }, []);

    useEffect(() => {
        if (addedItems && addedItems.length > 0) {
            getStoredBooks();
        }
    }, [addedItems]);

    const getStoredBooks = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            const allProducts = response.data.products;
            //  console.log('data',response.data.products);
            const storedBooksData = allProducts.filter(product => addedItems.includes(product.id));
            setStoredBooks(storedBooksData);
        } catch (error) {
            console.log(error);
            Alert.alert('Error', 'Failed to fetch data. Please try again later.');
        }
    }

    const removeBook = (item) => {
        const updatedStoredBooks = storedBooks.filter(book => book.id !== item.id);
        setStoredBooks(updatedStoredBooks);
        Alert.alert('Book Removed Successfully');
    }

    const animateTranslation = () => {
        translateAnim.setValue(0); // Reset translation value
         Animated.loop(
            Animated.timing(translateAnim, {
                toValue: 1,
                duration: 2000, // Duration of the animation
                useNativeDriver: true,
            })
         ).start();
    };

    const translation = translateAnim.interpolate({
        inputRange: [0, 1],
      //  outputRange: [300, 0], // Start position, End position
          outputRange: [0, 120], // Start position, End position
    });

    return (
        <SafeAreaView>
            <ScrollView>
                <TouchableOpacity style={{ flexDirection: 'row', gap: 10, marginTop: 25, marginLeft: 10 }} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../Assets/Images/backIcon.png')}
                        style={{ height: 40, width: 40, tintColor: 'black', alignItems: 'center' }}
                    />
                    <Text style={styles.heading}>Stored Books</Text>
                </TouchableOpacity>
                {storedBooks.map((item, index) => (
                    <View key={index}>
                         <Animated.View key={index} style={{ transform: [{ translateX: translation }] }}> 
                        <Card containerStyle={styles.card}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 0 }}>
                                <Image
                                    style={styles.img}
                                    resizeMode='contain'
                                    source={{ uri: item.images[0] }}
                                />
                                <View style={{ flex: 1, marginLeft: 0 }}>
                                    <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                                    <Text style={styles.category}>{item.category}</Text>
                                </View>
                                <View style={{ justifyContent: 'flex-start', marginBottom: 40 }}>
                                    <TouchableOpacity
                                        style={[styles.button, styles.buttonAdded]}
                                        onPress={() => removeBook(item)}
                                    >
                                        <Text style={styles.text}>Remove</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Card>
                        </Animated.View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        textAlign: 'left',
        marginTop: 5,
        marginBottom: 20,
        justifyContent: 'left',
        alignItems: 'left',
        color: 'black',
        fontWeight: '800'
    },
    card: {
        borderWidth: 1,
        borderColor: '#03071214',
        borderRadius: 10,
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 16,
        textAlign: 'left',
        marginHorizontal: 10,
        fontWeight: 'bold',
        color: 'black'
    },
    category: {
        fontSize: 16,
        textAlign: 'left',
        marginHorizontal: 10,
        marginTop: 10,
        color: 'gray'
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '500',
    },
    button: {
        backgroundColor: '#006fb9',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonAdded: {
        backgroundColor: 'orange',
    },
});

export default StoredBook;
