console.log("connected");

//3 WAYS TO INITIALIZE AN OBJECT
//make an empty object and add to it
var person = {}
person.name = "Travis";
person.age = 21;
person.city = "LA";


//all at once ??object literal
var person = {
    name: "Travis",
    age: 21,
    city: "LA"
};


//not as common, using new Object()
var person = new Object();
person.name = "Travis";
person.age = 21;
person.city = "LA";



// Exercise 1
var someObject = {};

//which of the following are valid
someObject._name = "Hedwig"; //valid
someObject.age = 6; //valid
var prop = "color"
someObject[prop] = "red"; //valid
someObject.123 = true; //NOT valid



// Exercise 2
var someObject = {
    friends: [
        {name: "Malfoy"},
        {name: "Crabbe"},
        {name: "Goyle"}
    ],
    color: "baby blue",
    isEvil: true
};
//access "Malfroy"
someObject.friends[0].name;