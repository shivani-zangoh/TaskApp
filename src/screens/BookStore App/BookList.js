import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
import { Card } from '@rneui/themed';

const BookList = ({ navigation }) => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [count, setCount] = useState(0);
    const [addedItems, setAddedItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            // console.log('Book list',response.data.products);
            setData(response.data.products);
            setFilteredData(response.data.products);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            Alert.alert('Error', 'Failed to fetch data. Please try again later.');
        }
    }

    const handleSearch = (text) => {
        setQuery(text);
        if (text === '') {
            setFilteredData(data); // Reset to all products when the query is empty
        } else {
            const filtered = data.filter(item =>
                item.category.toLowerCase().includes(text.toLowerCase()) ||
                item.title.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredData(filtered);
        }
    };

    const add = (item) => {
        setCount(count + 1);
        setAddedItems([...addedItems, item.id]);
    };

    const isItemAdded = (itemId) => {
        return addedItems.includes(itemId);
    };

    return (
        <SafeAreaView>
            <ScrollView style={{ marginBottom: 20 }}>
                <View style={styles.container}>
                    <Text style={styles.heading}>BookList App</Text>
                </View>
                <View>
                    <Text style={styles.subheading}>Welcome To Book Store</Text>

                    <TouchableOpacity style={styles.searchBar}>
                        <TextInput
                            style={styles.input}
                            placeholder="Search Books..."
                            placeholderTextColor="#888"
                            value={query}
                            onChangeText={handleSearch}
                        />
                    </TouchableOpacity>

                    {isLoading ? (
                        <View style={styles.horizontal}>
                            <ActivityIndicator size="large" color="#006fb9" />
                        </View>
                    ) : (
                        filteredData.length === 0 ? (
                            <Text style={styles.emptyState}>No results found.</Text>
                        ) : (
                            filteredData.map((item, index) => {
                                const added = isItemAdded(item.id);
                                return (
                                    <View key={index}>
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
                                                        style={[styles.button, added && styles.buttonAdded]}
                                                        onPress={() => add(item)}
                                                        disabled={added}
                                                    >
                                                        <Text style={styles.text}>{added ? 'Added' : 'Store'}</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </Card>
                                    </View>
                                )
                            })
                        )
                    )}

                </View>
            </ScrollView>

            <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate('StoredBook', { addedItems })}>
                <Image
                    source={require('../../Assets/Images/cart.png')}
                    style={{ height: 18, width: 18, tintColor: 'blue', alignItems: 'center' }}
                />
                <View style={styles.counterContainer}>
                    <Text style={styles.counterText}>{count}</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    horizontal: {
        justifyContent: 'center',
        marginTop: 200,
    },
    emptyState: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 20,
        color: 'blue',
        fontStyle: 'italic'
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    heading: {
        fontSize: 20,
        textAlign: 'left',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 30,
        fontWeight: '800'
    },
    subheading: {
        fontSize: 20,
        textAlign: 'left',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 30,
        fontWeight: '800',
        color: '#006400',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        backgroundColor: 'white',
        marginHorizontal: 15,
        borderColor: '#DFDFDF',
        borderWidth: 0.9,
        borderRadius: 10,
        padding: 3
    },
    input: {
        flex: 1,
        height: '100%',
        marginLeft: 10,
        paddingVertical: 10,
        fontSize: 16,
        fontWeight: "400",
        color: "black"
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
        fontWeight: 'bold',
        color: 'black',
    },
    category: {
        fontSize: 16,
        color: 'gray',
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
    circle: {
        backgroundColor: 'orange',
        padding: 5,
        borderRadius: 30,
        width: 50,
        height: 50,
        position: 'absolute',
        right: 20,
        bottom: 20,
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    counterContainer: {
        position: 'absolute',
        top: -5,
        right: -1,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    counterText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold'
    }
});

export default BookList;
