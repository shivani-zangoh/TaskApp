import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Card } from '@rneui/themed';

const Dashboard = ({ navigation }) => {
    return (
        // <SafeAreaView >
        <ScrollView contentContainerStyle={styles.scrollView}>

            <View style={styles.container}>
                <View style={{ backgroundColor: '#006fb9', width: '100%', borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}>
                    <Text style={styles.heading}>Welcome to the Dashboard !</Text>

                    <View style={{ flexDirection: 'row', gap: 70, marginHorizontal: 15 }}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
                            <Image
                                source={require('../../Assets/Images/account.png')}
                                style={{ height: '100%', width: 40, tintColor: 'white', alignItems: 'center' }}
                            />
                            <Text style={styles.text}>Profile</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Setting')}>
                            <Image
                                source={require('../../Assets/Images/settingIcon.png')}
                                style={{ height: '100%', width: 40, tintColor: 'white', alignItems: 'center' }}
                            />
                            <Text style={styles.text}>Setting</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',marginTop:20,flex:1}}>
                <Card containerStyle={styles.card1}>
                    <Image
                        source={require('../../Assets/Images/deleteIcon.png')}
                        style={{ height: 45, width: 45, tintColor: 'blue',marginLeft:30,marginTop:15 }}
                    />
                    <Text style={styles.subheading}>Analytics</Text>
                </Card>
         
                <Card containerStyle={[styles.card1,]} >
                <TouchableOpacity onPress={() => navigation.navigate('Message')}>
                    <Image
                        source={require('../../Assets/Images/message.jpeg')}
                        style={{ height: 25, width: 25, tintColor: 'blue',marginLeft:50,marginTop:15 }}
                    />
                    <Text style={styles.subheading}>Messages</Text>
                    </TouchableOpacity>
                </Card>
            </View>

            <View style={{ flexDirection: 'row',alignItems: 'center', justifyContent: 'center',marginTop:20, marginBottom:20}}>
                <Card containerStyle={styles.card1} >
                <TouchableOpacity onPress={() => navigation.navigate('Task')}>
                    <Image
                        source={require('../../Assets/Images/editIcon.png')}
                        style={{ height: 45, width: 45, tintColor: 'blue',marginLeft:30,marginTop:15 }} />
                    <Text style={styles.subheading}>Tasks</Text>
                    </TouchableOpacity>
                </Card>
                <Card containerStyle={styles.card1}>
                <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
                    <Image
                        source={require('../../Assets/Images/plusIcon.png')}
                        style={{ height:50, width: 50, tintColor: 'blue',marginLeft:30,marginTop:15 }}
                    />
                    <Text style={styles.subheading}>Calendar</Text>
                    </TouchableOpacity>
                </Card>
            </View>

        </ScrollView>
        // </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
        fontWeight: 'bold',
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 18,
        marginVertical:10,
        marginHorizontal:-10
        // marginLeft: -10
    },
    button: {
        backgroundColor: '#006400',
        padding: 18,
        marginVertical: 20,
        width: '40%',
        height:80,
        marginTop: 15,
        flexDirection: 'row',
        borderRadius: 5,
        gap: 10
    },
    card1: {
        borderWidth: 1,
         borderColor: '#03071214',
        // borderColor: 'gray',
        borderRadius: 10,
        width: '43%',
        height: '100%',
        padding: 10,
        marginTop: 30,
        marginRight:0,
    },
   
    subheading: {
        color: 'black',
        fontSize: 16,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30
    }
});

export default Dashboard;
