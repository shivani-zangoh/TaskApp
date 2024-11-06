import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';

function App() {
 return (
    <>
      <AppNavigation/>
    </>
  );
}
export default App;



// import React, { useEffect } from 'react';
// import { View, Text,Button, StyleSheet } from 'react-native';
// import crashlytics from '@react-native-firebase/crashlytics';

// const App = () => {
//   useEffect(() => {
//          crashlytics().log('App mounted.');
//          }, []); 

//   return (
//     <View style={styles.container}>
//       {/* <Text>MyComponenddtnm</Text> */}
//       <Button title="Test Crasnnh" onPress={() => crashlytics().crash()}/> 
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'lightblue',
//   },
// });

// export default App;


