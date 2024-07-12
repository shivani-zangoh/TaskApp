import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function PropDrilling() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <View>
      <Text>{`Hello ${user}!`}</Text>
      <Component2 user={user} />
    </View>
  );
}

function Component2({ user }) {
  return (
    <View>
      <Text>Component 2</Text>
      <Component3 user={user} />
    </View>
  );
}

function Component3({ user }) {
  return (
    <View>
      <Text>Component 3</Text>
      <Component4 user={user} />
    </View>
  );
}

function Component4({ user }) {
  return (
    <View>
      <Text>Component 4</Text>
      <Component5 user={user} />
    </View>
  );
}

function Component5({ user }) {
  return (
    <View>
      <Text>Component 5</Text>
      <Text>{`Hello ${user} again!`}</Text>
    </View>
  );
}

export default PropDrilling;
