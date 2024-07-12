import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard App/Dashboard';
import Profile from '../screens/Dashboard App/Profile';
import Setting from '../screens/Dashboard App/Setting';
import Task from '../screens/Dashboard App/Task';
import Calendar from '../screens/Dashboard App/Calendar';
import Message from '../screens/Dashboard App/Message';
import Ecommerce from '../screens/Ecommerce';
import HomeScreen from '../screens/HomeScreen';
import AllTask from '../Component/Array/AllTask';
import BookList from '../screens/BookStore App/BookList';
import StoredBook from '../screens/BookStore App/StoredBook';

const Stack = createNativeStackNavigator();


const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="BookList">
                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    // options={{ title: 'Welcome' }}
                    options={{ headerShown: false, }}
                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{ headerShown: false, }}
                />
                <Stack.Screen
                    name="Setting"
                    component={Setting}
                    options={{ headerShown: false, }}
                />
                <Stack.Screen
                    name="Task"
                    component={Task}
                    options={{ headerShown: false, }}
                />
                <Stack.Screen
                    name="Calendar"
                    component={Calendar}
                    options={{ headerShown: false, }}
                />
                <Stack.Screen
                    name="Message"
                    component={Message}
                    options={{ headerShown: false, }}
                />
                <Stack.Screen
                    name="Ecommerce"
                    component={Ecommerce}
                    options={{ headerShown: false, }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false, }}
                />
               
                <Stack.Screen
                    name="BookList"
                    component={BookList}
                    options={{ headerShown: false, }}
                />
                 <Stack.Screen
                    name="StoredBook"
                    component={StoredBook}
                    options={{ headerShown: false, }}
                />
                 <Stack.Screen
                    name="AllTask"
                    component={AllTask}
                    options={{ headerShown: false, }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default AppNavigation;

