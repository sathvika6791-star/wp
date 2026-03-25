hello();
function hello() {
    console.log("Hello world!");
}
function person(name) {
    console.log("Hello Good morning, " + name + "!");
}
person("Sathvii");
function add(a, b) {
    return a - b;
}
let result = add(103, 50);
console.log("The result is: " + result);
function myFunction() {
    let myName = "Volvo";
    let text = "Inside:" + typeof myName + " " + myName;
    console.log(text);
}
myFunction();
function mydemo(x, y = 91) {
    return x + y;
}
console.log("shows default values: " + mydemo(5));
