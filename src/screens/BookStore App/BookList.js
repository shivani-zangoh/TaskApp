// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, TextInput, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity, ActivityIndicator, Alert, Animated } from 'react-native';
// import axios from 'axios';
// import { Card } from '@rneui/themed';

// const BookList = ({ navigation }) => {
//     const [query, setQuery] = useState('');
//     const [data, setData] = useState([]);
//     const [filteredData, setFilteredData] = useState([]);
//     const [count, setCount] = useState(0);
//     const [addedItems, setAddedItems] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const rotateAnim = useRef(new Animated.Value(0)).current; // Initialize animated value
//     const scaleAnim = useRef(new Animated.Value(1)).current; // Initialize animated value

//     useEffect(() => {
//         getProduct();
//         animateRotation(); // Trigger animation on mount
//     }, []);

//     const getProduct = async () => {
//         try {
//             const response = await axios.get('https://dummyjson.com/products');
//             setData(response.data.products);
//             setFilteredData(response.data.products);
//             setIsLoading(false);
//         } catch (error) {
//             console.log(error);
//             setIsLoading(false);
//             Alert.alert('Error', 'Failed to fetch data. Please try again later.');
//         }
//     }

//     const handleSearch = (text) => {
//         setQuery(text);
//         if (text === '') {
//             setFilteredData(data); // Reset to all products when the query is empty
//         } else {
//             const filtered = data.filter(item =>
//                 item.category.toLowerCase().includes(text.toLowerCase()) ||
//                 item.title.toLowerCase().includes(text.toLowerCase())
//             );
//             setFilteredData(filtered);
//         }
//     };

//     const add = (item) => {
//         setCount(count + 1);
//         setAddedItems([...addedItems, item.id]);
//         animateScale(); // Trigger animation
//     };

//     const animateRotation = () => {
//         rotateAnim.setValue(0); // Reset rotation value
//         Animated.loop(
//             Animated.timing(rotateAnim, {
//                 toValue: 0.1,
//                 duration: 4000,
//                 useNativeDriver: true,
//             })
//         ).start();
//     };

//     const animateScale = () => {
//         Animated.sequence([
//             Animated.timing(scaleAnim, {
//                 toValue: 1.2,
//                 duration: 200,
//                 useNativeDriver: true,
//             }),
//             Animated.timing(scaleAnim, {
//                 toValue: 1,
//                 duration: 200,
//                 useNativeDriver: true,
//             })
//         ]).start();
//     };


//     const isItemAdded = (itemId) => {
//         return addedItems.includes(itemId);
//     };

//     const rotation = rotateAnim.interpolate({
//         inputRange: [0, 1],
//         outputRange: ['0deg', '360deg'],
//     });

//     return (
//         <SafeAreaView>
//             <ScrollView style={{ marginBottom: 20 }}>
//                 <View style={styles.container}>
//                     <View style={{ flexDirection: 'row' }}>
//                         <TouchableOpacity onPress={() => navigation.goBack()}>
//                             <Image
//                                 source={require('../../Assets/Images/backIcon.png')}
//                                 style={{ height: 40, width: 40, tintColor: 'black', marginLeft: 10, top: 10, marginRight: 0 }}
//                             />
//                         </TouchableOpacity>
//                         <Text style={styles.heading}>BookList App</Text>
//                     </View>
//                 </View>
//                 <View>
//                     <Animated.Text style={[styles.subheading, { transform: [{ rotate: rotation }] }]}>
//                         Welcome To Book Store
//                     </Animated.Text>

//                     <TouchableOpacity style={styles.searchBar}>
//                         <TextInput
//                             style={styles.input}
//                             placeholder="Search Books..."
//                             placeholderTextColor="#888"
//                             value={query}
//                             onChangeText={handleSearch}
//                         />
//                     </TouchableOpacity>

//                     {isLoading ? (
//                         <View style={styles.horizontal}>
//                             <ActivityIndicator size="large" color="#006fb9" />
//                         </View>
//                     ) : (
//                         filteredData.length === 0 ? (
//                             <Text style={styles.emptyState}>No results found.</Text>
//                         ) : (
//                             filteredData.map((item, index) => {
//                                 const added = isItemAdded(item.id);
//                                 return (
//                                     <View key={index}>
//                                         <Card containerStyle={styles.card}>
//                                             <View style={{ flexDirection: 'row', alignItems: 'center', gap: 0 }}>
//                                                 <Image
//                                                     style={styles.img}
//                                                     resizeMode='contain'
//                                                     source={{ uri: item.images[0] }}
//                                                 />
//                                                 <View style={{ flex: 1, marginLeft: 0 }}>
//                                                     <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
//                                                     <Text style={styles.category}>{item.category}</Text>
//                                                 </View>
//                                                 <View style={{ justifyContent: 'flex-start', marginBottom: 40 }}>
//                                                     <TouchableOpacity
//                                                         style={[styles.button, added && styles.buttonAdded]}
//                                                         onPress={() => add(item)}
//                                                         disabled={added}
//                                                     >
//                                                         <Animated.Text style={[styles.text, { transform: [{ scale: added ? scaleAnim : 1 }] }]}>
//                                                             {added ? 'Added' : 'Store'}
//                                                         </Animated.Text>
//                                                         {/* <Text style={styles.text}>{added ? 'Added' : 'Store'}</Text> */}
//                                                     </TouchableOpacity>
//                                                 </View>
//                                             </View>
//                                         </Card>
//                                     </View>
//                                 )
//                             })
//                         )
//                     )}
//                 </View>
//             </ScrollView>

//             <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate('StoredBook', { addedItems })}>
//                 <Image
//                     source={require('../../Assets/Images/cart.png')}
//                     style={{ height: 18, width: 18, tintColor: 'blue', alignItems: 'center' }}
//                 />
//                 <View style={styles.counterContainer}>
//                     <Text style={styles.counterText}>{count}</Text>
//                 </View>
//             </TouchableOpacity>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//         justifyContent: 'center',
//     },
//     horizontal: {
//         justifyContent: 'center',
//         marginTop: 200,
//     },
//     emptyState: {
//         textAlign: 'center',
//         fontSize: 16,
//         marginTop: 20,
//         color: 'blue',
//         fontStyle: 'italic'
//     },
//     img: {
//         width: 100,
//         height: 100,
//         borderRadius: 8,
//     },
//     heading: {
//         fontSize: 20,
//         textAlign: 'left',
//         marginTop: 20,
//         marginBottom: 20,
//         marginLeft: 10,
//         fontWeight: '800'
//     },
//     subheading: {
//         fontSize: 20,
//         textAlign: 'left',
//         marginTop: 20,
//         marginBottom: 20,
//         marginLeft: 30,
//         fontWeight: '800',
//         color: '#006400',
//     },
//     searchBar: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-around',
//         paddingHorizontal: 10,
//         backgroundColor: 'white',
//         marginHorizontal: 15,
//         borderColor: '#DFDFDF',
//         borderWidth: 0.9,
//         borderRadius: 10,
//         padding: 3
//     },
//     input: {
//         flex: 1,
//         height: '100%',
//         marginLeft: 10,
//         paddingVertical: 10,
//         fontSize: 16,
//         fontWeight: "400",
//         color: "black"
//     },
//     card: {
//         borderWidth: 1,
//         borderColor: '#03071214',
//         borderRadius: 10,
//         marginVertical: 10,
//         paddingHorizontal: 10,
//     },
//     title: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: 'black',
//     },
//     category: {
//         fontSize: 16,
//         color: 'gray',
//     },
//     text: {
//         color: 'white',
//         textAlign: 'center',
//         fontWeight: '500',
//     },
//     button: {
//         backgroundColor: '#006fb9',
//         paddingVertical: 5,
//         paddingHorizontal: 10,
//         borderRadius: 8,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     buttonAdded: {
//         backgroundColor: 'orange',
//     },
//     circle: {
//         backgroundColor: 'orange',
//         padding: 5,
//         borderRadius: 30,
//         width: 50,
//         height: 50,
//         position: 'absolute',
//         right: 20,
//         bottom: 20,
//         zIndex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     counterContainer: {
//         position: 'absolute',
//         top: -5,
//         right: -1,
//         backgroundColor: 'red',
//         borderRadius: 10,
//         width: 20,
//         height: 20,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     counterText: {
//         color: 'white',
//         fontSize: 12,
//         fontWeight: 'bold'
//     }
// });

// export default BookList;



import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity, ActivityIndicator, Alert, Animated } from 'react-native';
import axios from 'axios';
import { Card } from '@rneui/themed';

const BookList = ({ navigation }) => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [count, setCount] = useState(0);
    const [addedItems, setAddedItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const rotateAnim = useRef(new Animated.Value(0)).current; // Initialize animated value
    const scaleAnim = useRef(new Animated.Value(1)).current; // Initialize animated value
    const translateAnim = useRef(new Animated.Value(0)).current; // Initialize animated value
    const skewAnim = useRef(new Animated.Value(0)).current; // Initialize skew animated value
    const rotateXAnim = useRef(new Animated.Value(0)).current; // Initialize X-axis rotation animated value  //  perspective animation
    const rotateYAnim = useRef(new Animated.Value(0)).current; // Initialize Y-axis rotation animated value  //  perspective animation

    useEffect(() => {
        getProduct();
        animateRotation(); // Trigger animation on mount
        animateTranslation(); // Trigger animation on mount
        animateSkew(); // Trigger skew animation on mount
        animatePerspective(); // Trigger perspective animation on mount
    }, []);
    
    useEffect(() => {
        Animated.parallel([
            Animated.timing(scaleAnim, {
                toValue: 1.5,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

   const getProduct = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
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
        animateScale(); // Trigger animation
    };

    const animateRotation = () => {
        rotateAnim.setValue(0); // Reset rotation value
        Animated.loop(
            Animated.timing(rotateAnim, {
                toValue: 0.1,
                duration: 4000,
                useNativeDriver: true,
                // easing: Animated.Easing.linear
            })
        ).start();
    };

    const rotation = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['360deg', '0deg'],
    });

    const animateScale = () => {
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 1.2,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            })
        ]).start();
    };

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
        outputRange: [300, 0], // Start position, End position
        //  outputRange: [300, -300], // Start position, End position
    });


    const animateSkew = () => {
        skewAnim.setValue(0); // Reset skew value
        Animated.loop(
            Animated.sequence([
                Animated.timing(skewAnim, {
                    toValue: 0.1,
                    duration: 2000,
                    useNativeDriver: true,
                }),
                Animated.timing(skewAnim, {
                    toValue: -0.1,
                    duration: 2000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    };

    const skewX = skewAnim.interpolate({
        inputRange: [0, 0.1],
        outputRange: ['0deg', '10deg'],
    });


    const animatePerspective = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(rotateXAnim, {
                    toValue: 0.4,
                    duration: 2000,
                    useNativeDriver: true,
                }),
                Animated.timing(rotateXAnim, {
                    toValue: 0.4,
                    duration: 2000,
                    useNativeDriver: true,
                }),
            ])
        ).start();

        Animated.loop(
            Animated.sequence([
                Animated.timing(rotateYAnim, {
                    toValue: 0.1,
                    duration: 2000,
                    useNativeDriver: true,
                }),
                Animated.timing(rotateYAnim, {
                    toValue: -0.1,
                    duration: 2000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    };


    const isItemAdded = (itemId) => {
        return addedItems.includes(itemId);
    };

    const rotateX = rotateXAnim.interpolate({
        inputRange: [-0.1, 0, 0.1],
        outputRange: ['-10deg', '0deg', '10deg'],
    });

    const rotateY = rotateYAnim.interpolate({
        inputRange: [-0.1, 0, 0.1],
        outputRange: ['-10deg', '0deg', '10deg'],
    });

    const combinedStyle = {
        transform: [
            { scaleAnim },
            {
                rotate: rotateAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                }),
            },
        ],
    };


    return (
        <SafeAreaView>
            <ScrollView style={{ marginBottom: 20 }}>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                source={require('../../Assets/Images/backIcon.png')}
                                style={{ height: 40, width: 40, tintColor: 'black', marginLeft: 10, top: 10, marginRight: 0 }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.heading}>BookList App</Text>
                        {/* <Animated.View style={combinedStyle}>
                            <Text style={styles.heading}>YourComponent</Text>
                        </Animated.View> */}
                    </View>
                </View>
                <View>
                    <Animated.Text style={[styles.subheading, { transform: [{ rotate: rotation }] }]}>
                        Welcome To Book Store
                    </Animated.Text>

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
                                        <Animated.View style={[styles.card, {
                                            transform: [
                                                { rotateX: rotateX },
                                                { rotateY: rotateY },
                                                { scale: scaleAnim }
                                            ]
                                        }]}>
                                            {/* <Animated.View style={[styles.card, { transform: [{ skewX }] }]}> */}
                                            {/* <Animated.View key={index} style={{ transform: [{ translateX: translation }] }}> */}
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
                                                            <Animated.Text style={[styles.text, { transform: [{ scale: added ? scaleAnim : 1 }] }]}>
                                                                {added ? 'Added' : 'Store'}
                                                            </Animated.Text>
                                                            {/* <Text style={styles.text}>{added ? 'Added' : 'Store'}</Text> */}
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </Card>
                                        </Animated.View>
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
        marginLeft: 10,
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
        //  borderWidth: 1,
        borderColor: '#03071214',
        borderRadius: 10,
        // marginVertical: 0,
        // paddingHorizontal: 10,
        perspective: 1000, // Add perspective to create the 3D effect
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
