// Question 1: Write a JavaScript for loop that iterates from 1 to 100 and prints "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both 3 and 5.

// for(var i=1; i<=100; i++){

//     // console.log(i)

//     if(i%3==0){

//     console.log("Fizz");     
//     }
//     else if(i%5===0){
//         console.log("Buzz");     

//     }
//     else if(i%3===0 && i%5===0){
//         console.log("FizzBuzz");     

//     }
//     else{
//         console.log(i);
//     }
// }


// Question 3:Create a JavaScript function that takes two arrays as input and returns a new array containing only the elements that are present in both arrays (intersection).

// var arr1=[1, 2, 3, 4];
// var arr2= [2, 4, 6, 8];
// var output=[];

// function intersect(arr1, arr2){

//     for(i=0; i<=arr1.length-1;i++){  //value-1, 2, 3, 4

//         for(j=0; j<=arr2.length-1; j++){ //value- 1([2, 4, 6, 8 ), 2([2, 4, 6, 8 ), 3([2, 4, 6, 8), 4([2, 4, 6, 8)

//             if(arr1[i]===arr2[j]){ // 1==([2, 4, 6, 8) F, 2==([2T, 4, 6, 8) F, 3==([2, 4, 6, 86), 4== ([2, 4T, 6, 8)
//                 output.push(arr1[i]); // [2, 4]
//             }
//         }
//     }
// return output;

// }

// console.log(intersect(arr1, arr2));


// Question 5:Create a JavaScript function that takes an array of numbers and returns a new array with all the duplicate elements removed.

// var input=[1, 2, 2, 3, 4, 4, 5];
// var result=[];

// function unique(input){
// input.forEach(element => {   //1,2,2,3,4,4,5
    
//     if(result.includes(element)==false){ //T, T, F,T,T,F,T

//         result.push(element); //1, 2, 3, 4, 5
//     }
// });
//     return result;
// }

// console.log(unique(input))



