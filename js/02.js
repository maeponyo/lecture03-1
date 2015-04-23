function getMinute(a,b){
	a = a + 60;
	return (a - b) % 60;
}

function getHour(a,b){
	return (a + b) % 24;
}