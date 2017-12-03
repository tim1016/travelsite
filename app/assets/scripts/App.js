var $ = require('jquery');
var Person = require('./modules/person'); 

alert("This is a test");

var John = new Person("John Doe", "blue");
John.greet();

var Jane = new Person("Jane Smith", "green");
Jane.greet();

$("h1").remove();
