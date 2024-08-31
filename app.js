// for loop -> davtalt
for(var i=1; i<=10; i++){
	console.log("Hello"+i);
}
for(var i=10;i>=1; i--){
	console.log(i+"s");
}
for(var i=1;i<=20; i++){
	if(i%2==0){
		console.log(i+"a");
	}
}
for(var i=1;i<=30; i++){
	if(i%3==0 && i%5==0){
		console.log(i+"b");
	}
}
for(var i=1;i<=10; i++){
	var a=10;
	console.log(a+"*"+i+"="+a*i);
}
for(var i=1;i<=10; i++){
	if(i=10){
		console.log("1-10 hurtelh toonii urjver:"+(i*(i-1)*(i-2)*(i-3)*(i-4)*(i-5)*(i-6)*(i-7)*(i-8)*(i-9)));
		console.log("1-10 hurtelh toonii niilber:"+(i+(i-1)+(i-2)+(i-3)+(i-4)+(i-5)+(i-6)+(i-7)+(i-8)+(i-9)));
	}
}
var niilber=0;
for(var i=1;i<=10; i++){
	niilber = niilber+i;
}
console.log(niilber);
var niilber1=1;
for(var i=1;i<=10; i++){
	niilber1 = niilber1*i;
}
console.log(niilber1);
var random=Math.floor(Math.random()*10)+1;
console.log(random);
for(var i=1;i<=3; i++){
	var myNumber=+prompt("1-10 iin hoorond too oroolna uu?")
	if(random==myNumber){
		alert("You win of "+i+" try");
		break;
	}else if(myNumber>random){
		alert("Baga too");
	}else if(myNumber<random){
		alert("Ih too");
	}else{
		alert("Wrong number");
	}
	if(i==3){
		alert("You lose");
	}
}