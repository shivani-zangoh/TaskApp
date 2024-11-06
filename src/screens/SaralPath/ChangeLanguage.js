import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import CloseSvg from '../../Assets/Images/close.svg';
import Button from '../../Component/Button';

const ChangeLanguage = ({ navigation }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const Language = [
        {
            id: '1',
            title: 'English',
        },
        {
            id: '2',
            title: 'हिन्दी',
        },
        {
            id: '3',
            title: 'বাংলা',
        },
        {
            id: '4',
            title: 'தமிழ்',
        },
        {
            id: '5',
            title: 'తెలుగు',
        },
        {
            id: '6',
            title: 'मराठी',
        },
        {
            id: '7',
            title: 'ગુજરાતી',
        },
        {
            id: '8',
            title: 'ಕನ್ನಡ',
        },
        {
            id: '9',
            title: 'മലയാളം',
        },
        {
            id: '10',
            title: 'ਪੰਜਾਬੀ',
        },
        {
            id: '11',
            title: 'ଓଡିଆ',
        },
    ];

    const handleLanguage = (id) => {
        setSelectedLanguage(id)
        console.log('Selected Language ID:', id)
    }

    const Item = ({ id, title }) => (
        <TouchableOpacity onPress={() => handleLanguage(id)}
            style={[styles.button,
            {
                backgroundColor: selectedLanguage === id ?'rgba(240, 244, 255, 1)': 'transparent',
                 borderColor: selectedLanguage === id ? 'rgba(78, 103, 235, 1)' : 'transparent' },
            ]}>
            <Text style={styles.title}>{title}</Text>

        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            {/* Header section with X icon */}
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CloseSvg />
                </TouchableOpacity>
            </View>
            {/* Border line */}
            <View style={styles.borderBottomLine} />
            {/* Main content */}
            <View style={styles.container}>
                <Text style={styles.language}>Change Language</Text>
                <FlatList
                    data={Language}
                    renderItem={({ item }) => <Item title={item.title} id={item.id}/>}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 40,
        alignItems: 'flex-end',
        marginRight: 20,
    },
    borderBottomLine: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(228, 228, 228, 1)',
        marginHorizontal: 0, // Add this to align the border with the header
    },
    container: {
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    language: {
        fontFamily: 'Helvetica Neue',
        fontWeight: 400,
        fontSize: 20,
        lineHeight: 23,
        color: 'black',
        marginBottom: 30
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 400,
        color: 'black',
        lineHeight: 21,
        alignItems: 'center'
    },
    button: {
        width: 240,
        height: 43,
      
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 2,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        // borderColor: 'rgba(78, 103, 235, 1)'
    }
});

export default ChangeLanguage;
