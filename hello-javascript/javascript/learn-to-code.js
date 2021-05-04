/* var name= "Jack";
var lastName = 'Black';
var age= 23;

var message = "Hi, my name is " + name + " " + lastName + " and I am " + age + " years old";

var students = ["Timmy", "Jannessa", "Arun"];
var naughtyList = [];

naughtyList.push(students[0]);

var index = naughtyList.indexOf("Timmy");
if(index > -1){
    naughtyList = naughtyList.splice(index, 1);
}

console.log(naughtyList); */

/* var students = ["John", "Jacob", "Jingle"];
for(var x=0; x < students.length; x++){
    console.log(students[x]);
} */

/* function area(lenght, width){
    return lenght * width;
}

var area1 = area(10, 15);

var rectanglesAreas = [];
rectanglesAreas.push(area(10,15));
rectanglesAreas.push(area(20,25));
rectanglesAreas.push(area(30,35));
console.log(rectanglesAreas);


var bankBalance = 500;

function makeTransaction(priceOfSale){
    if(priceOfSale <= bankBalance){
        bankBalance -= priceOfSale;
        console.log("Purchase Successful");
    } else {
        console.log("Insufficients funds");
    }
}

console.log(bankBalance);
makeTransaction(79.00);

console.log(bankBalance);
makeTransaction(2.35);

console.log(bankBalance);
makeTransaction(10.45);

console.log(bankBalance);
makeTransaction(450.00);

var transaction = function(priceOfSale){
    if(priceOfSale <= bankBalance){
        bankBalance -= priceOfSale;
        console.log("Purchase Successful");
    } else {
        console.log("Insufficients funds");
    }
};

console.log(bankBalance);
transaction(10);

var printCustomerName = function(first, last){
    console.log("First Name: " + first + " Last Name: " + last);
};

var applyForCreditCard = function(creditScore, soul){

};

var bankOperations = [];
bankOperations.push(transaction);
bankOperations.push(printCustomerName);
bankOperations.push(applyForCreditCard); */

// OBJETOS //

/* var student0 = {
    firstName : "Juan",
    lastName : "Perez",
    age : 3
}

var student1 = new Object();
student1.firstName = "Jose";
student1.lastName = "Lopez";
student1.age = 5;

var student2 = {};
student2.firstName = "Armando Esteban";
student2.lastName = "Quito";
student2.age = 4; */

var students= [];

/* students.push(student0);
students.push(student1);
students.push(student2); */

function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.greeting = function(){
        return "Hi, I'm " + this.firstName + " and I'm " 
        + this.age + " years old";
    }
}

students.push(new Student("Jenny", "Laga", 5));
students.push(new Student("Timmy", "Turner", 10));
students.push(new Student("Carl", "Junior", 4));

/* var s1 = new Student("Jenny", "Laga", 5);
console.log(s1);
console.log(s1.greeting()); */

for(var i=0; i < students.length; i++){
    var student = students[i];
    console.log(students[i].greeting());
}


// OBJETOS //