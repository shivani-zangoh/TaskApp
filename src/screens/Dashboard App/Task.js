import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Platform, TouchableOpacity } from 'react-native';
import { Card } from '@rneui/themed';

const Task = ({ navigation }) => {
    return (
        <ScrollView >
            <View style={styles.container}>
                <View style={{ backgroundColor: '#0096FF', width: '100%', borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../../Assets/Images/backIcon.png')}
                            style={{ height: 40, width: 40, tintColor: 'black', alignItems: 'center' }}
                        />
                        <Text style={styles.heading}>Task Section </Text>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={{ marginTop: 20, marginLeft: 20, marginBottom: 10 }}>
                <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Upcoming Tasks </Text>
            </View>

            <Card containerStyle={styles.shoppingcard}>
                <Text style={styles.content}>Task 1</Text>
                <Text style={styles.subheading}>Hello i am user ..!</Text>
            </Card>
            <Card containerStyle={styles.shoppingcard}>
                <Text style={styles.content}>Task 2</Text>
                <Text style={styles.subheading}>Hello i am user ..!</Text>
            </Card>

            <Card containerStyle={styles.shoppingcard}>
                <Text style={styles.content}>Task 3</Text>
                <Text style={styles.subheading}>Hello i am user ..!</Text>
            </Card>


        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 25,
        textAlign: 'left',
        marginBottom: Platform.OS === 'ios' ? 10 : 0,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
        fontWeight: 'bold',
    },
    button: {
        marginHorizontal: 20,
        marginVertical: 30
    },
    shoppingcard: {
        borderWidth: 1,
        borderColor: '#03071214',
        borderRadius: 10,
        width: '90%',
        height: 90,
        padding: 10,
        backgroundColor: '#006fb9',
        marginTop: 20
    },
    content: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 30
    },
    subheading: {
        color: 'white',
        fontSize: 16,
        lineHeight: 30
    }
});

export default Task;
