const originalArray = [1, 2, 3];

const clonedArray = [...originalArray];

console.log(clonedArray);

//merged array
const arr1 = [1, 2];
const arr2 = [3, 4];

const mergedArray = [...arr1, ...arr2];

console.log(mergedArray);
//object cloning 

const originalObj = {
    name: "John",
    age: 25
};

const clonedObj = { ...originalObj };

console.log(clonedObj);

//object merging
const obj1 = { name: "John", age: 25 };
const obj2 = { city: "New York", age: 30 };

const mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj);
