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
firstVictim();
var moreVictims=confirm("Do you have additional victims to enter?")
}

var volnamesAll = [];
var volnumbersAll = [];
var volstreetsAll = new Array();

function getVolunteers(){
	var volName = prompt("Enter volunteer name: ");
	var volNumber = prompt("Enter volunteer phone number:");
	var volStreet = prompt("Enter volunteer street:");	
	volnamesAll.push(volName);
	volnumbersAll.push(volNumber);
	volstreetsAll.push(volStreet);
}

for (i=0; i<1; i++) {
	getVolunteers();
}

var moreVolunteers=confirm("Do you have additional volunteers to enter?")

while (moreVolunteers===true) {
	getVolunteers();
	var moreVolunteers=confirm("Do you have additional volunteers to enter?")
}

alert("The number of people in need are: "+ names.length + "." +'\n'+
	"The names of victims are: "+ names.toString() + "."+'\n'+
	"The number of volunteers are: "+ volnamesAll.length + "." +'\n'+
	"The name of volunteers are: "+ volnamesAll.toString()+ ".");

var localVictim = prompt("Enter the name of someone in need so we can match with nearby volunteers. ");
var victimIndex = names.indexOf(localVictim);
var victimIndexNum = (Number(victimIndex));
console.log(victimIndexNum);
var localVictimStreet = streets[victimIndexNum];
console.log(localVictimStreet);

var localVolNameAll = [];
var localVolIndexAll = [];

for(i=0; i<volstreetsAll.length; i++) {
	var localVol = volstreetsAll.indexOf(localVictimStreet,i);
	var localVolIndexNum = (Number(localVol));
	console.log(localVolIndexNum);
	var duplicate = localVolIndexAll.indexOf(localVolIndexNum);
	console.log(duplicate);

		if  ((duplicate === -1) || (i = 0)) {
			localVolIndexAll.push(localVolIndexNum);
			console.log(localVolIndexNum);

			var localVolName = volnamesAll[localVolIndexNum];
			localVolNameAll.push(localVolName);
			
			console.log(localVolName);
			console.log(localVolNameAll);
		}
			else {
				break;
				}
			 

	
}
console.log(localVolNameAll.length);
var printlocalVol = localVolNameAll.toString();
var printVolFormat = printlocalVol.replace(/, $/, ".");
alert("These are the names of local volunteer(s) that can help you: "+ printVolFormat.toString());
