var names = [];
var numbers = [];
var streets = new Array();


function firstVictim () {
var victimName = prompt("Enter victim name: ");
var victimNumber = prompt("Enter victim phone number:");
var victimStreet = prompt("Enter victim street:");	
names.push(victimName);
numbers.push(victimNumber);
streets.push(victimStreet);}

firstVictim ();

var moreVictims=confirm("Do you have additional victims to enter?")

while (moreVictims===true) 
{
var victimName = prompt("Enter victim name: ");
var victimNumber = prompt("Enter victim phone number:");
var victimStreet = prompt("Enter victim street:");	
names.push(victimName);
numbers.push(victimNumber);
streets.push(victimStreet);
var moreVictims=confirm("Do you have additional victims to enter?")
}

var volnamesAll = [];
var volnumbersAll = [];
var volstreetsAll = new Array();

for (i=0; i<1; i++) {
var volName = prompt("Enter volunteer name: ");
var volNumber = prompt("Enter volunteer phone number:");
var volStreet = prompt("Enter volunteer street:");	
volnamesAll.push(volName);
volnumbersAll.push(volNumber);
volstreetsAll.push(volStreet);
}

var moreVolunteers=confirm("Do you have additional volunteers to enter?")

while (moreVolunteers===true) {
var volName = prompt("Enter name: ");
var volNumber = prompt("Enter phone number:");
var volStreet = prompt("Enter street:");	
volnamesAll.push(volName);
volnumbersAll.push(volNumber);
volstreetsAll.push(volStreet);
var moreVolunteers=confirm("Do you have additional volunteers to enter?")
}

alert("The number of people in need are: "+ names.length + "." +'\n'+
	"The names of victims are: "+ names.toString() + "."+'\n'+
	"The number of volunteers are: "+ volnamesAll.length + "." +'\n'+
	"The name of volunteers are: "+ volnamesAll.toString()+ ".");