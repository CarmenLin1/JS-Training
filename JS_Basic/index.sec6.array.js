//Section 6 Arrays
/*
    const does not prevent modify the object, just can not reassign the whole object
    ES6 syntax for fining reference type element in array

    Reassign an array equals to create a new object, reference is changed and points 
    to a new object in memory! the original array is NOT garbage collected if it was referenced by another array

    combine or slice arrays - primitives are copied by value; object are copied 
    by reference (meaning pointing to same objecgt reference)

    iterate array call back function in forEach

    split and join array

    Testing element in Array - every, some

    //these methods do not modify the array instead retuan a new array
    //these methods can be CHAINED!
    filter
    map

    reduce
    Exercise 3, 4
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

//Spread operator
const first =[1,2,3];
const second = [3,4,5];
let combined = [...first,'b','e', ...second];
//combined = first.concat(second);
const copy = [...combined];

//iterate an Array
//for (let number of numbers)
numbers.forEach(function (number){
    console.log(number);
})
//simplified 
numbers.forEach(number => console.log(number));
numbers.forEach((number,index) => console.log(number, index));

//joined array elements into a string; 
//opposite split a string into an Array
//this is helpful to re-compose a string 
//and substitue certain characters between words like makein an url (replacing space with -)

//sort and reverse
const myArr = [
    {id:1, name:'adfb'},
    {id:2, name:'jgkjdls'},
    {id:3, name:'BDJ'}
];

myArr.sort(function(a,b){
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA <nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
    
})
console.log(myArr);

myArr2 = [...myArr];
myArr2.sort((a,b) =>{
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA <nameB) return 1;
    if (nameA > nameB) return -1;
    return 0;
    
})
console.log(myArr2);

//Testing element in Array
const myArr3= [9,41,940,3,-4,-50,-30];
console.log(myArr3);
const allPositive = myArr3.every(function(value){return value>0;});
//console.log(allPositive); 

//const somePositive = myArr3.some(value => {value>0; }); //!!! Wrong syntax!! if it is in {} it MUST contain return or it won't work b/c js engine treats
// {} as code block; or NOT include {}
//const somePositive = myArr3.some(value => {return value>0; }); //WORK
const somePositive = myArr3.some(value => value>0); //WORK TOO
const filtered = myArr3.filter(value => { return value>=0;}); //!!! MUST contain return or it won't work!!
console.log(allPositive,somePositive,filtered);

//map element
const mapped = myArr3.map (n => ({id:n, name:'tbd'})); //!!! the simplied version to return objec in {} must be put into () otherwise js 
//engine will treat it as code block
console.log (mapped);

//chaining
console.log(myArr3.filter(n=> n>=-55).map(n => ({value:n-30})).filter(n => n.value>-55));

//reduce
const initialAccumulator = 0;
const sum= myArr3.reduce((acc, cur) => {
    return acc + cur;
}, initialAccumulator);
//if skip initialAccumulator, the value of the first element will be used
//this is much more elegant to loop through the array and do the sum!!

//================================================================================================

//Exercise1
function arrayFromRange(min, max){
    let a = []; //we can use const here as const allows push
    for (let i=min; i<=max; i++){
        a.push(i);
    }
    return a;
}
//console.log('arrayFromRange(-4,5)', arrayFromRange(-4,5));

//Exercise 2 (write a function does the same job as include metho) -- expect to use for( let n of array) haha
const numbers1 = [2,4,55,-1, 5353, 55];
console.log(numbers1.includes(55));
function includes(array, searchItem){
    return array.some(v => v==searchItem);
}
//console.log(includes(numbers1,55));


//Exercise 3 move element
function move(array, index, offset){
    const position = index + offset;
    if (position >= array.length || position<0){
        console.error('Invalid offset');
        return;
    }
    const item = array[index];
    //console.log(array);
    array.splice(index, 1);
    //console.log(array);
    array.splice(position,0,item);
    console.log(array);
   // return array;
    
}
console.log(move(numbers1, 3,10));

//Exercise 4 countOccurrence
function count(array, item){
    return array.reduce((output, curr) => (curr==item? output++: output)); //simplified !!!
    /*
    return array.reduce(function(output, curr){
        if (curr==item) {
            //console.log(curr);
            output ++;
        }
        return output;
    },0);*/
}
// array.reduce((output, curr) => (curr==item? output++: output})
console.log(count(numbers1, 55));

//Exercise 5 getMax
function getMax(array){

    return array.reduce((max, curr)=> (max>=curr? max: curr));
}
console.log(getMax(numbers1));

//Exercise 6 pick movies > 2010 and rating >4 ; print out the movies titles sorted by rating descending order
const movies =[
    {title:'ab', year:2018, rating:4.2},
    {title:'jfj', year:2016, rating:4.5},
    {title:'dsfjk', year:2011, rating:5},
    {title:'po', year:2009, rating:5},
    {title:'pj', year:2014, rating:3.1},
];

const pickedMovies= movies
    .filter(v => v.year>2010 && v.rating>4)
    .sort((a,b)=> {if (a.rating > b.rating) return -1; return 1;});
const moviesTitles = pickedMovies.map(n=> n.title);
console.log(movies, pickedMovies);
console.log(moviesTitles);    

//better and simpler way below!!
/*
const pickedMovies= movies
    .filter(v => v.year>2010 && v.rating>4)
    .sort((a,b)=> a.rating - b.rating)
    .reverse()
    .map (n=>n.title);
*/
