
var today = new Date();

function addLeadingZero(getal) {
	if(getal < 10){
		getal = '0' + getal;
	}

	return getal;
}

// document.getElementById('hours').innerHTML = today.getHours();
// document.getElementById('minutes').innerHTML= addLeadingZero(today.getMinutes());
// document.getElementById('seconds').innerHTML= addLeadingZero(today.getSeconds());
document.getElementById('year').innerHTML= addLeadingZero(today.getFullYear());

function clock(){
	var hours = document.getElementById('hours');
	var minutes= document.getElementById('minutes');
	var seconds= document.getElementById('seconds');

	var h = new Date().getHours();
	var m = new Date().getMinutes();
	var s = new Date().getSeconds();

	hours.innerHTML= h;
	minutes.innerHTML=addLeadingZero(m);
	seconds.innerHTML=addLeadingZero(s);

}

var interval= setInterval(clock, 1000);

var currentTime = today.getHours();
	if (currentTime < 6){
		document.body.background= 'images/nightime.png';
		// console.log('nacht');
	}
	else if (currentTime < 12){
		document.body.background= 'images/daylight.png';
		// console.log('ochtend');
	}
	else if (currentTime < 18) {
		document.body.background= 'images/daylight.png';
		// console.log('middag');	
	}
	else {
		document.body.background= 'images/nightime.png';
		// console.log('avond');
	}	



// var seconds = 0;

// function count(){
// 	seconds++;
// 	document.getElementById('seconds').innerHTML=seconds;
// }

// setInterval(count, 1000);

// count();