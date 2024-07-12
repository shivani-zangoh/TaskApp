import { useState, useCallback } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import AddTodo from "./AddTodo";

const CallBack = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    console.log("parent render");

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);

    return (
        <View style={styles.container}>
            <AddTodo todos={todos} addTodo={addTodo} />
            <View>
                <Text>Count: {count}</Text>
                <Button onPress={increment} title="+" />
            </View>
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

export default CallBack;

