import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const removeDuplicate = () => {
  // Define the array
  const arr = ['apple', 'mango', 'apple', 'banana', 'papaya', 'mango'];

  // // using filter method 
  // function removeDuplicate(arr) {
  //   return arr.filter((item, index) =>
  //     arr.indexOf(item) === index)
  // }

  //   // using Set method 
  // function removeDuplicate(arr) {
  //   return [... new Set(arr)];
  // }

  // // using forEach method 
  // function removeDuplicate(arr) {
  //   let unique = [];
  //   arr.forEach(element => {
  //     if (!unique.includes(element)) {
  //       unique.push(element);
  //     }
  //   });
  //   return unique;
  // }

  // // using reduce method 
  // function removeDuplicate(arr) {
  //   let unique = arr.reduce(function (acc, curr) {
  //     if (!acc.includes(curr))
  //       acc.push(curr);
  //     return acc;
  //   }, [])
  //   return unique;
  // }

  //using indexOf method 
 function removeDuplicate(arr) {
  let unique =[];
  for(let i=0 ;i<arr.length; i++){
      if(unique.indexOf(arr[i]) === -1)
      unique.push(arr[i]);
  }
     return unique;
}


  console.log("Duplicate values are ", removeDuplicate(arr));

  const duplicateValue = removeDuplicate(arr);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Duplicate values are {removeDuplicate(arr)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default removeDuplicate;


// let arr = ['apple', 'mango', 'apple', 'banana', 'papaya', 'mango' ];

// // using filter method 
// function removeDuplicate(arr) {
//    return arr.filter((item , index)=>
//        arr.indexOf(item) === index) 
    
// }
// console.log("Duplicate values are ", removeDuplicate(arr));


// // using Set method 
// function removeDuplicate(arr) {
//     return [... new Set(arr)];
//  }

// // using forEach method 
// function removeDuplicate(arr) {
//     let unique = [];
//     arr.forEach(element =>{
//     if(!unique.includes(element)){
//        unique.push(element) ;
//     }
//     });
//   return unique;
// }

// // using reduce method 
// function removeDuplicate(arr) {
//     let unique = arr.reduce(function(acc,curr){
//         if(!acc.includes(curr))
//             acc.push(curr);
//             return acc;
//  },[])
//  return unique;
// }

// //using indexOf method 
// function removeDuplicate(arr) {
//     let unique =[];
//     for(let i=0 ;i<arr.length; i++){
//         if(unique.indexOf(arr[i]) === -1)
//         unique.push(arr[i]);
//     }
//        return unique;
// }

 