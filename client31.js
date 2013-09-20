var howMany = prompt("How many disaster victims would you like to enter?");
var howManyNum = (Number(howMany));

var names = [];
var numbers = [];
var streets = new Array();

for (var i=0; i<howManyNum; i++) {
var victimName = prompt("Enter name: ");
var victimNumber = prompt("Enter phone number:");
var victimStreet = prompt("Enter street:");	
names.push(victimName);
numbers.push(victimNumber);
streets.push(victimStreet);
}


var volunteers =prompt("How many volunteers would you like to enter?");
var howManyVol = (Number(volunteers));

var volnamesAll = [];
var volnumbersAll = [];
var volstreetsAll = new Array();

for (var i=0; i<howManyVol; i++) {
var volName = prompt("Enter name: ");
var volNumber = prompt("Enter phone number:");
var volStreet = prompt("Enter street:");	
volnamesAll.push(volName);
volnumbersAll.push(volNumber);
volstreetsAll.push(volStreet);
}

alert("The number of people in need are: "+ names.length + "." +'\n'+
	"The names of victims are: "+ names.toString() + "."+'\n'+
	"The number of volunteers are: "+ volnamesAll.length + "." +'\n'+
	"The name of volunteers are: "+ volnamesAll.toString()+ ".");