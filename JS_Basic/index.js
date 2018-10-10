//Section 7 Function
/*
    declaration vs expression
    rest operator
    default value in function]
*/



//Function delaration 
//function xx(xx) {}

//Anonymous Function expression
//let x = function (){};
//let y = x; --- both variables refer to same object
//x; same as y;

//difference: we can call a function before its declaration BUT we can not refer to a variable before it is defined and assigned to be a function
//this is called Hoisting in JS!!
//the js engine moves the function delaration above so we can call the function anywhere before the definition

//JS is a dynamic language (chagne the variable type after it is initiated)

//any function has an argument object (an array with {index: argumentValue} objects)
//this is good for random number of argument without predefine
function sum(){
    let t=0;
    for (let v of arguments){
        t += v;
    }
    return t;
}
console.log(sum(2,5,6,6,9));

//rest operator
function sum1(...args){
    return args.reduce( (total,cur)=> total +=cur);
}
console.log(sum1(2,5,6,6,9));

//default
function interest(principal, rate =3.5, year=5){}

//..... here to exercise 1 was done in bnym laptop

//Exercise 2 calculate area of circle 
const circle ={
    radius:2,
    get area() { return Math.PI * Math.pow(this.radius,2); }
};
circle.radius= 2;
console.log('circle',circle.area);