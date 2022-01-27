// String
type Name = string;
let value : Name = "Anamika";
console.log(value);

// Number
type Age = Number;
let ageNum : Age = 20;
console.log(ageNum);

//Boolean
type isFetching = Boolean;
let initialVal : isFetching = false;
console.log(initialVal);

// Arrays
type isArr = Array<number>;
let isArr = [1,2,3,4,5];
console.log(isArr);

// Array with generics
type isArrWithString = Array<string>;
let isArrWithString = ['a','b','c','d'];
console.log(isArrWithString);

// tuple 
var user : [string,boolean];
user = ["a",true];
console.log(user);

// enum
enum companyType{
    StartUp,
    Enterprise,
    Enterpreneur,
    Organisation
}
console.log(companyType);
// function
function multiply(a : number, b : number):number{
    return a*b;
}
console.log(multiply(20,30));

// function2
function divide(a : number, b : number):number{
    return a/b;
}
console.log(multiply(20,30));

// function3
function takeName(a :string):void{
    console.log(a);
}
takeName("Anamika");


