import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity, Alert, Dimensions } from 'react-native';
import axios from 'axios';
import { Card } from '@rneui/themed';

const Ecommerce = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      // console.log('>>>>>>',response.data.products)
      setData(response.data.products);
    } catch (error) {
      console.log(error);
    }
  }

  const add = (item) => { //add item to the cart
    setCart([...cart, item]);
    Alert.alert('Added to Cart');
  }

  const remove = (index) => { //remove item from the cart
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    Alert.alert('Removed from Cart');
  }

  const handleProceed = () => {
    if (cart.length === 0) {
      Alert.alert('Add at least one product to the cart before proceeding.');
    } else {
      Alert.alert('Congratulations! Your order is placed successfully.');
    }
  }
  // const Height = Dimensions.get('window').height / 1;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.heading}>E-Commerce App</Text>
        {/* <Text style={styles.heading}>{data?.length}</Text> */}

        <View style={styles.container}>
          {data.map((item, index) => {
            return (
              <View key={index}>
                <Card containerStyle={[styles.card]}
                  wrapperStyle={{
                    width: 280,
                    height: 160,
                    borderRadius: 10,
                  }}>
                  <Text style={styles.title} numberOfLines={1}>Title:  {item.title}</Text>
                  <Text style={styles.category}>Category:  {item.category}</Text>
                  <Text style={styles.brand}>Brand:  {item.brand}</Text>
                  <Text style={styles.brand}>Price:  {item.price}</Text>
                  <TouchableOpacity style={styles.button} onPress={() => add(item)}>
                    <Text style={styles.text}>Add to Cart</Text>
                    <Image
                      source={require('../Assets/Images/cart.png')}
                      style={{ height: 18, width: 18,  tintColor: 'white', alignItems: 'center' }}
                    />
                  </TouchableOpacity>
                </Card>
              </View>
            )
          })}
        </View>
      </ScrollView>
      <ScrollView>

        <View style={styles.container}>
          <Text style={styles.subheading}>Shopping Cart</Text>
          {cart.map((item, index) => (
            <View key={index}>
              <Card containerStyle={styles.shoppingcard}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.title} numberOfLines={1}>Title: {item.title}</Text>
                    <Text style={styles.brand}>Price: {item.price}</Text>
                  </View>
                  <TouchableOpacity onPress={() => remove(index)}>
                    <Image
                      source={require('../Assets/Images/deleteIcon.png')}
                      style={{ height: 40, width: 40, tintColor: 'red' }}
                    />
                  </TouchableOpacity>
                </View>
              </Card>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        {/* arr.reduce(( acc, cuu ) => acc+curr ,0) syntex of reduce() method */}
        <Text style={styles.total}>Total: ${cart.reduce((total, item) => total + item.price, 0)}</Text>
        <TouchableOpacity style={styles.proceedbutton} onPress={handleProceed}>
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: '500', }}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#006400',
    fontStyle: 'italic',
    fontWeight: '800'
  },
  subheading: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    color: '#006fb9',
    fontStyle: 'italic',
    fontWeight: '800',
  },
 card: {
    borderWidth: 1,
    borderColor: '#03071214',
    borderRadius: 10
  },
  shoppingcard: {
    borderWidth: 1,
    borderColor: '#03071214',
    borderRadius: 10,
    width: 280,
    height: 70,
    padding: 10,
   },
  brand: {
    fontSize: 17,
    textAlign: 'left',
    marginHorizontal: 10,
    marginTop: 10,
    color: 'gray'
  },
  title: {
    fontSize: 16,
    textAlign: 'left',
    marginHorizontal: 10,
    fontWeight: 'bold'
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 10,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  total: {
    fontSize: 16,
    marginHorizontal: 80,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  category: {
    fontSize: 16,
    textAlign: 'left',
    marginHorizontal: 10,
    marginTop: 10,
    color: 'gray'
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
    marginLeft: 70
  },
  button: {
    backgroundColor: '#006400',
    padding: 12,
    marginVertical: 10,
    borderRadius: 8,
    width: '95%',
    marginTop: 15,
    flexDirection: 'row',
    gap: 13
  },
  footer: {
    width: '100%',
    alignItems: 'flex-end',
  },
  proceedbutton: {
    backgroundColor: '#006fb9',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    width: '50%',
  }
});
export default Ecommerce;



