//Problem 1
let parent = {
    fname : "AMAN",
    lname : "SINGH",
    age : 25,
    showDetails : function(){
        console.log(this.fname + " " + this.lname + " " + this.age);
    }
}
parent.showDetails();


let child = {
    Name : "Adarsh",
}
child.__proto__  = parent ;
child.showDetails();

console.log(parent);
console.log(child);

//Problem 2
let obj1 = {
    fname : "jack",
    lname : "roy",
    showDetails : function () {
        console.log(this.fname + " " + this.lname);
    }
}
obj1.showDetails();
let obj2 = {
    fname : "jenny",
}
obj2.__proto__ = obj1;
obj2.showDetails();
console.log(obj2);



// //Problem 3
let array =[10,15,20,25];
let arr = {
    getName:function(){
        let red = array.reduce((acc,cur)=>acc = acc + cur,0);
        console.log(red);
    }
}
arr.getName();

// //Problem 4
function newKey(obj) {
    if (!isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    return keys;
}
function isObject(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
function Student(name) {
  this.name = name;
}
Student.prototype.rollno = true;
console.log(newKey(new Student("Pitam")));