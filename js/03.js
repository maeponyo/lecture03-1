function getHour(a,b){
	if (a > 24 || b > 24){
		console.log(a,b,"hi");
		return null;
	} 
	console.log(a,b);
    return (a + b) % 24;
}

function showTestResult(a){
	if(a == null){
		return "fail";
	}
	return "success";
}