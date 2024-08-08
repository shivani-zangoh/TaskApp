import React from 'react';
import { Animated, ScrollView, StyleSheet, Text, View,TouchableOpacity } from 'react-native';

const AnimationScrollView = ({navigation}) => {
  const scrollY = new Animated.Value(0);

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [100, 0],
    extrapolate: 'clamp',
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [100, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.header,
          {
            height: headerHeight,
            opacity: headerOpacity,
          },
        ]}
      >
        <Text style={styles.headerText}>Animated Header</Text>
      </Animated.View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.content}>
          <TouchableOpacity onPress={()=>navigation.navigate('BookList')}>
          <Text style={styles.contentText}>
            Scroll down to see the header animation!
          </Text>
          </TouchableOpacity>
          {/* Add more content here to make scrolling possible */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    paddingTop: 100,
  },
  content: {
    height: 1000, // make sure the content is long enough to scroll
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 16,
  },
});

export default AnimationScrollView;
