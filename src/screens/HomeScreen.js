import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, SafeAreaView, TouchableOpacity, } from 'react-native';
import axios from 'axios';

const HomeScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      console.log('>>>>>>>>>', response.data.products);
      setData(response.data.products);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {data.map((item, index) => {
            return (
              <View key={index}>
                <View style={{ marginTop: 50 }}>
                  <Image
                    style={styles.img}
                    resizeMode='cover'
                    src={`${item.images[0]}`}
                  />
                </View>
                <View style={{ margin: 10, }}>
                  <Text style={styles.category}>{item.category}</Text>
                  <Text style={styles.brand}>{item.brand}</Text>
                  {/* <View style={styles.group}> */}
                    <TouchableOpacity style={styles.group}>
                    <Text style={styles.num}>{item.dimensions.width}</Text>
                    <Text style={styles.num}>{item.dimensions.height}</Text>
                    <Text style={styles.num}>{item.dimensions.depth}</Text>
                    </TouchableOpacity>
                  {/* </View> */}
                </View>
              </View>
            )
          }
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 375,
    height: 510,
    backgroundColor: 'lightpink'
  },
  brand: {
    fontSize: 17,
    textAlign: 'left',
    marginHorizontal: 10,
    marginTop: 10,
    color: 'black'
  },
  category: {
    fontSize: 16,
    textAlign: 'left',
    marginHorizontal: 10,
    marginTop: 10
  },
  group: {
    flexDirection: 'row',
    gap: 20,
    marginHorizontal: 10,
    marginTop: 10
  },
  num: {
    fontSize: 18,
    fontWeight:'bold',
    color: 'black'
  }
});

export default HomeScreen;
