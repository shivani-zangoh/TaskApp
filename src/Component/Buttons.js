import React, { useContext } from 'react';
import { View, Text, StyleSheet ,Button, AppState} from 'react-native';
import { AppsState } from '../../App';

const Buttons = () => {
    const context = useContext(AppsState);
    const { loading, onSubmit} = context

    return (
        <View>
            {/* <Text>Button</Text> */}
           <Text>{loading ? ' Button is Loading': 'Submit the button'}</Text> 
           <Button title='SUBMIT' onPress={onSubmit} disabled={loading}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
    },
});

export default Buttons;
