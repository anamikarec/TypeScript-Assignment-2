var value = "Anamika";
console.log(value);
var ageNum = 20;
console.log(ageNum);
var initialVal = false;
console.log(initialVal);
var isArr = [1, 2, 3, 4, 5];
console.log(isArr);
var isArrWithString = ['a', 'b', 'c', 'd'];
console.log(isArrWithString);
// tuple 
var user;
user = ["a", true];
console.log(user);
// enum
var companyType;
(function (companyType) {
    companyType[companyType["StartUp"] = 0] = "StartUp";
    companyType[companyType["Enterprise"] = 1] = "Enterprise";
    companyType[companyType["Enterpreneur"] = 2] = "Enterpreneur";
    companyType[companyType["Organisation"] = 3] = "Organisation";
})(companyType || (companyType = {}));
console.log(companyType);
// function
function multiply(a, b) {
    return a * b;
}
console.log(multiply(20, 30));
// function2
function divide(a, b) {
    return a / b;
}
console.log(multiply(20, 30));
// function3
function takeName(a) {
    console.log(a);
}
takeName("Anamika");
