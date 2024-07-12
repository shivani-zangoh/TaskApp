import { memo } from "react";
import { useState, useCallback } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

const AddTodo = ({ todos, addTodo }) => {
    console.log("child render");
    return (
        <View>
            <Text>My Todos</Text>
            {todos.map((todo, index) => {
                return <Text key={index}>{todo}</Text>;
            })}
            <Button onPress={addTodo} title="Add Todo" />
        </View>
    );
};

export default memo(AddTodo);