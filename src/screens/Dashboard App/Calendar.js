import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Platform, TouchableOpacity } from 'react-native';
import { Card } from '@rneui/themed';

const Calendar = ({ navigation }) => {
    return (
        <ScrollView >
            <View style={styles.container}>
                <View style={{ backgroundColor: '#0096FF', width: '100%', borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../../Assets/Images/backIcon.png')}
                            style={{ height: 40, width: 40, tintColor: 'black', alignItems: 'center' }}
                        />
                        <Text style={styles.heading}>Calendar Section </Text>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={{ marginTop: 20, marginLeft: 20, marginBottom: 10 }}>
                <Text style={styles.event}>Events This Week </Text>
            </View>
            <Card containerStyle={styles.shoppingcard}>
                <View style={styles.card}>
                    <Text style={styles.date}>Mon, Jan 10</Text>
                    <Text style={styles.time}>3:00 PM -5:00 PM</Text>
                </View>

                <Text style={styles.content}>Meeting with Team</Text>
                <Text style={styles.subheading}>Office Conference Room</Text>
            </Card>
            <Card containerStyle={styles.shoppingcard}>
                <View style={styles.card}>
                    <Text style={styles.date}>Thu, Jan 13</Text>
                    <Text style={styles.time}>10:00 AM -12:00 PM</Text>
                </View>

                <Text style={styles.content}>Client Presentation</Text>
                <Text style={styles.subheading}>Online</Text>
            </Card>

            <Card containerStyle={styles.shoppingcard}>
                <View style={styles.card}>
                    <Text style={styles.date}>Sat, Jan 15</Text>
                    <Text style={styles.time}>6:00 PM -8:00 PM</Text>
                </View>

                <Text style={styles.content}>Dinner with Friends</Text>
                <Text style={styles.subheading}>Local Restaurent</Text>
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
        width: '92%',
        height: 100,
        padding: 10,
        marginTop: 20
    },
    event: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    card: {
        flexDirection: 'row',
        gap: 100,
        marginBottom: 5
    },
    time: {
        color: 'gray',
        fontSize: 15,
        fontWeight: 'bold',
    },
    date: {
        color: '#006fb9',
        fontSize: 16,
        fontWeight: 'bold',
    },
    content: {
        color: 'black',
        fontSize: 16,
        lineHeight: 30,
        fontWeight: 'bold'
    },
    subheading: {
        color: 'gray',
        fontSize: 16,
        lineHeight: 20
    }
});

export default Calendar;
