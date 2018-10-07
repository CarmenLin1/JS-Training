//Section 6 Arrays
/*
    const does not prevent modify the object, just can not reassign the whole object
    ES6 syntax for fining reference type element in array

    Reassign an array equals to create a new object, reference is changed and points to a new object in memory! the original array is NOT garbage collected if it was referenced by another array

    combine or slice arrays - primitives are copied by value; object are copied by reference (meaning pointing to same objecgt reference)
*/

//Adding Elements
let numbers = [3,4];
//end
numbers.push(5,6);
//beginning
numbers.unshift(1,2);
//middle
numbers.splice(3,2,100,101);
console.log(numbers);

//Finding elements - primitives
console.log(numbers.indexOf(100,0));
console.log(numbers.lastIndexOf(110));

//Finding elements - reference types
const courses =[
    {title:'ab', length:123},
    {title:'gg', length:567}
];
//call back function
const course = courses.find(function (course){
    return course.title==='ab';
});
console.log(course);    
const course1 = courses.findIndex(function (course){
    return course.title==='ab';
});
console.log(course1); 

//!! new ES6 syntax
const course2 = courses.find(course => course.title=='gg');
console.log(course2);   

//Removing elements
//end
let gone = numbers.pop();
console.log(gone);
//beginning
gone = numbers.shift();
console.log(gone);
console.log(numbers);
gone = numbers.splice(2, 1);
console.log(gone);

//Emptying an Array
let another = numbers;
numbers.push(200);
console.log(numbers, another);  

//solution1 (this solution works if there is only one reference)
//numbers =[];  //!! note: numbers is pointing a new reference, it is different from another!!
//console.log(numbers, another); 

//solution 2 (preferred solution)
//numbers.length=0;
//console.log(numbers, another); // now both arrays can be truncated

//solution 3: 
//numbers.splice(0, numbers.length);  

//Combining and slicing arrays
//fistArr.concat(secondArr);
//myArr.slice(startIndex, endIndex)

//Test Git4