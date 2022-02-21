// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// // const animalArray = ['dog', 'cat', 'pig'];

// // animalArray.push('cow');

// // const personObj = {
// //   name: 'Lernantino',
// //   age: 99
// // };

// // personObj.age = 100;
// // personObj.occupation = 'Developer';


// const printProfileData = profileDataArr => {
//   for(let i = 0; i < profileDataArr.length; i++){
//      console.log(profileDataArr[i]);
//   }
// }

// printProfileData(profileDataArgs);

// const message = 'Hello Node!';

// if (true === true) {
//   const message = 'Hello ES6!';
//   let sum = 5;
//   sum += 10;
//   console.log(message);
//   console.log(sum);
// }

// console.log(message);
// console.log(sum);

// var profileDataArr = ["a", "bchs", "aios"];

// const printProfileData = profileDataArr => {
//   for(let i = 0; i < profileDataArr.length; i+= 1){
//     console.log(profileDataArr[i]);
//   }
//   console.log("===================");

//   profileDataArr.forEach((profileItem) => {
//     console.log(profileItem)
    
//   });
// };
console.log("its this shit working at all?")

const nums = [1, 2, 3, 4];




// const multiplyThis = (arr) => {
//   const newArr = []; 
  
//   for(let i = 0; i < arr.length; i++){
//     const currElement = arr[i];
//     newArr.push(currElement * 2);
//   }
//   return newArr;
// }

const multiplyByForEach = (arr) => {
  const newArr = []; 
  arr.forEach((num) => {
    newArr.push(num * 2);
  });
  return newArr;
}
console.log(multiplyByForEach(nums))

  
