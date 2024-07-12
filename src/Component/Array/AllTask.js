import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AllTask = () => {
    {/* 1 Largest Element in an Array
            let arr = [ 100,30,4,500,289,345];

            function Largest(arr){
                    let max = arr[0];
                    for(let i=1;i<arr.length;i++) {
                        if(arr[i] > max){
                            max= arr[i];
                        }
                    }
                    return max;
                }
                console.log(' Largest numbers ',Largest(arr));

                2 Sum of all numbers in array.
                let arr = [1,2,3,4,5];
                function Sum(arr){
                    let sum = 0;
                    for(let i=0;i<arr.length;i++){
                      sum =sum+ arr[i];
                     }
                    return sum;
                }
                console.log(' sum of numbers ',Sum(arr));

                3. Remove duplicates from array.

                let arr = [10,100,45,23,100,67,10,56,23];

                function removeDuplicate(arr){
                 return arr.filter((item,index)=>
                  arr.indexOf(item) == index)
                }
                console.log(' Remove duplicates ',removeDuplicate(arr));

                //4. sort an array
                 let arr = [10,100,45,23,100,67,10,56,23];
                //  const temp = arr.sort((a,b)=>a-b);
                  const temp = arr.sort((a,b)=>a-b);
                 console.log('sort an array',temp[0]);

                5 Count of each element in an array
                let arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

                function Count(arr) {
                    let count = {}
                    arr.forEach(ele=>{
                        if(count[ele]){
                            count[ele]++;
                        }else{
                            count[ele]=1;
                        }
                    });
                    return count;
                }
                console.log('count element', Count(arr));

                6 Check two arrays are equal or not.

                let a =[1,2,7,5];
                let b =[1,2,3,5];

                function compareArray(a,b){
                 return a.join() == b.join();
                }
                console.log('compare Array', compareArray(a,b));

                7 Average of all numbers in an array. 
                o/p = 3

                let arr = [1,2,3,4,5]; 
                function Average(arr){
                    let sum = 0;
                    arr.forEach((element)=>{
                      sum = sum + element;
                    });
                    return sum/arr.length;
                }
                console.log('average of all number', Average(arr));

                8 Find max. & min number from an array.

                let arr = [ 100,30,4,500,289,345];
                const temp = arr.sort((a,b)=>a-b); //using method 1
                console.log('Minimum value is ',temp[0]);

                const temp2 = arr.sort((a,b)=>b-a);
                console.log('Maximum value is ',temp2[0]);

                const temp3 = arr.reduce((acc,curr)=>Math.min(acc,curr)); //using method 2
                console.log('Maximum value is ',temp3);

                let minValue = Math.min(...arr); //using method 3
                let maxValue = Math.max(...arr);

                console.log('Maximum value is ',minValue,maxValue);

                9 Reverse an array.
                 let arr = [ 100,30,4,500,289,345];
                 const temp = arr.reverse();
                 console.log('Reverse array is ',temp);

                10 Remove false values from an array (ex- null, undefined etc.)

                let arr =['ram',undefined,0, 'gg',null,'aa',23,[],false,true,NaN,""];

                function Remove(arr){
                    return arr.filter(val=>val);
                }

                function Remove(arr){
                    let newArray =[];
                     arr.forEach((k)=>{
                        if(k){
                            newArray.push(k)
                        }
                    });
                    return newArray;
                }
                console.log('Remove false values ',Remove(arr));

                11 Find the second largest number in an array.

                 let arr = [ 100,30,4,500,289,345];

                 function secondLargest(arr){
                     let first = -Infinity,second = -Infinity;
                     for(let num of arr){
                         if(num > first){
                        second = first;
                        first = num;
                        }else if(num > second && num < first){
                          second = num;
                         }
                         }
                          return second;
                 }
                 console.log('Second largest number ',secondLargest(arr));

                12 Product of all numbers in array.

                 let arr = [1,2,3,4,5]; 
                 function product(arr){
                     let result = 1;
                     arr.forEach((val)=>{
                         result = result * val;
                     });
                     return result;
                 }
                 console.log(' Product of all numbers ',product(arr));

                13 . Merge multiple arrays into single array.
                 let a = [1,2,3,5];
                 let b = [6,7,8,9];
                 let c = [11,12,13,15];
                 const d = [...a,...b,...c];
                 console.log('merge array',d);

                14 reverse string using for loop

                 function reverseString(str){
                    let revstr= ""
                    for(let i=str.length-1;i>=0;i--){
                        revstr=revstr+str[i];
                    }
                    return revstr;
                }

                console.log('Reverse String',reverseString('Akash'));

                 15 according to aplhabets order name is arranged, sort an array of object based on specific property.
                I/P>> [
                    { name: "Lord", age: 30},
                    { name: 'Ram', age: 17}, 
                    { name: 'ayodhya', age: 17}
                    { name: "Shyam", age: 15},
                ];

                O?P>> [
                  { name: 'ayodhya', age: 17 }
                  { name: 'Lord', age: 30 },
                  { name: 'Ram', age: 17 },
                  { name: 'Shyam', age: 15 },
                ]

                let arr =[
                    { name: "Lord",age: 30},
                    { name: 'Ram',age: 17}, 
                    { name: 'ayodhya',age:17},
                    { name: "Shyam", age: 15}
                ];

                function orderArrange(arr) {
                    return arr.sort((a, b) => a.name.localeCompare(b.name));
                }
                const temp = orderArrange(arr);
                console.log('order arranged', temp);



                16 swap two numbers without using third variable
                let a= 10;
                let b=20;

                [a,b]=[b,a] //array destructure
                console.log('a is',a);
                console.log('b is',b);
                console.log('b is',b=b-a);
                console.log('a is',a=b+a);

                let a= 20;
                let b=10;

                a = a-b; //10
                b = a+b; //20

                 console.log("a = " + a + ", b = " + b);

                17 make a program for break an array into chunks

                Using a Loop to Split the Array.

                let arr = [1, 2, 3, 4, 5, 6];

                function Chunk(arr, chunkSize){
                 const chunks = [];
                 for(let i=0; i< arr.length; i= i+chunkSize){
                     chunks.push(arr.slice(i, i + chunkSize));
                 }
                 return chunks;
                }

                const temp =Chunk( arr, 2);
                console.log('Array',temp);

                18 Fibonacci Series Up to n Terms */}

    function Fibonacci(n) {
        let a = 0, b = 1, c, i;
        if (n == 0)
            return a;
        for (i = 2; i <= n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return b;
    }

    let n = 9;
    console.log('Fibonacci Series of number is', Fibonacci(n));
    {/* 19 Shuffle all the elements from an array. */ }

    return (
        <View style={styles.container}>
            <Text>AllTask</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AllTask;



















