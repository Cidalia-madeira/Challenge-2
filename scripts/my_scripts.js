var today = new Date();

function addLeadingZero(getal) {
	if(getal < 10){
		getal = '0' + getal;
	}

	return getal;
}

document.getElementById('hours').innerHTML = today.getHours();
document.getElementById('minutes').innerHTML= addLeadingZero(today.getMinutes());
document.getElementById('seconds').innerHTML= addLeadingZero(today.getSeconds());
document.getElementById('year').innerHTML= addLeadingZero(today.getFullYear());


// var seconds = 0;

// function count(){
// 	seconds++;
// 	document.getElementById('seconds').innerHTML=seconds;
// }

// setInterval(count, 1000);

// count();