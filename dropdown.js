function checkValue(){
 	
 	
 	if (depstation == "Route 59" ) {
 		var oneWay = 7.00;
 		var tenRide = 63.00;
 		var monthly = 199.50;
 		
 		
 				if (rider == "stu" ){
 					var ticketPriceO = oneWay / 2 ;
 					var ticketPriceT = tenRide / 2 ; 
 					var ticketPriceM = monthly / (57/35);
 					
 					
 							if (fare == "oneway" ){
 								document.getElementById("ticketPage").innerHTML += ticketPriceO;
 								
 								}
 								
 							
 							if 	(fare == "tenday" ){
 								document.getElementById("ticketPage").innerHTML += ticketPriceT;
 								}
 								
 							if (fare  == "mon" ){
 								document.getElementById("ticketPage").innerHTML += ticketPriceM;
 								}
 					
 				}
 		
 		
 				if (rider == "adu" ){
 					var oneWay = 7.00;
 					var tenRide = 31.50;
 					var monthly = 199.50;
 			
 							if (fare == "oneway" ){
 								document.getElementById("ticketPage").innerHTML += oneWay ;
 								}
 								
 							
 							if 	(fare == "tenday" ){
 								document.getElementById("ticketPage").innerHTML += tenRide;
 								}
 								
 							if (fare == "mon" ){
 								document.getElementById("ticketPage").innerHTML += monthly;
 								}
 				}
 	}



if (depstation == "Levrgne" ) {
 		var oneWay = 3.50;
 		var tenRide = 31.50;
 		var monthly = 99.75;
 		
			if (rider  == "stu" ){
 					var ticketPriceO = oneWay / 2 ;
 					var ticketPriceT = tenRide /2 ; 
 					var ticketPriceM = monthly / (57/35);
 					
 					
 							if (fare  == "oneway" ){
 								document.getElementById("ticketPage").innerHTML += ticketPriceO;
 								}
 								
 							
 							if 	(fare == "tenday" ){
 								document.getElementById("ticketPage").innerHTML += ticketPriceT;
 								}
 								
 							if (fare == "mon" ){
 								 document.getElementById("ticketPage").innerHTML += ticketPriceM;
 
 								}
 					
 				}
 		
 		
 				if (rider  == "adu" ){
 					var oneWay = 3.50;
 					var tenRide = 31.50;
 					var monthly = 99.70;
 			
 							if (fare == "oneway" ){
 								document.getElementById("ticketPage").innerHTML += oneWay;
 								}
 								
 							
 							if 	(fare == "tenday" ){
 								document.getElementById("ticketPage").innerHTML += tenRide;
 								}
 								
 							if (fare == "mon" ){
 								document.getElementById("ticketPage").innerHTML += monthly;
 								}
 				}



	}

	if (depstation == "Bellwood" ) {
 		var oneWay = 4.75;
 		var tenRide = 42.75;
 		var monthly = 135.50;
 		
			if (rider == "stu" ){
 					var ticketPriceO = oneWay ;
 					var ticketPriceT = tenRide /(19/9) ; 
 					var ticketPriceM = monthly / (542/315);
 					
 					
 							if (fare == "oneway" ){
 								document.getElementById("ticketPage").innerHTML += ticketPriceO;
 								}
 								
 							
 							if 	(fare == "tenday" ){
 								document.getElementById("ticketPage").innerHTML += ticketPriceT;
 
 								}
 								
 							if (fare == "mon" ){
 								document.getElementById("ticketPage").innerHTML += ticketPriceM;
 
 								}
 					
 				}
 		
 		
 				if (rider == "adu" ){
 					var oneWay = 4.75;
 					var tenRide = 42.75;
 					var monthly = 135.50;
 			
 							if (fare == "oneway" ){
 								document.getElementById("ticketPage").innerHTML += oneWay;
 								}
 								
 							
 							if 	(fare == "tenday" ){
 								document.getElementById("ticketPage").innerHTML += tenRide;
 								}
 								
 							if (fare == "mon" ){
 								document.getElementById("ticketPage").innerHTML += monthly;
 								}
 				}
	}
 
 
}


function RiderOption (rider){
var x = document.getElementById("rider");
console.log(x.innerHTML);
console.log(rider); 
var riderPrint="default";
	if (rider =="stu"){
		 riderPrint = "Student" ;
	}
	if (rider =="adu" ){
		 riderPrint = "Adult";
	}
	console.log("rider print = " + riderPrint);
	document.getElementById("rider").innerHTML += riderPrint;
	
} // close function 



function FareOption(fare){
console.log(fare);
 farePrint="default";
	if (fare == "mon" ){
 		 farePrint = "Monthly" ;
 	}
 	if (fare == "tenday" ){
 		 farePrint = "Ten Day" ;
 	}	
 	if (fare == "oneway" ){
 		 farePrint = "One Way" ;
 	}
 	console.log(farePrint);
 	document.getElementById("fare").innerHTML += farePrint;
 }// end function 
 
 function DepStation(depstation){
 console.log(depstation);
 var depstationPrint="default";
 	if (depstation == "Levrgne" ){
 		depstationPrint = "Levrgne";
 		console.log(depstationPrint);
 	}
 	if (depstation == "Bellwood" ){
 		depstationPrint = "Bellwood" ;
 		console.log(depstationPrint);
 		
 	}
 	
	if (depstation == "Route+59" ){
 		depstationPrint = "Route 59" ;
 		console.log(depstationPrint);
 	}
 	document.getElementById("station").innerHTML += depstationPrint;
 	console.log(depstationPrint);
}// close function 



function AvStation(avstation){
console.log(avstation);
var avstationPrint="default";
 	if (station== "UnSt" ){
 		 avstationPrint = "Union Station";
 	}
	document.getElementById("station").innerHTML += avstationPrint;
}// close function 

var url= window.location.href;

function queryize(sampleurl){
    var tokens = sampleurl.split('?')[1].split('&');
    var result = {};

    for(var i=0; i<tokens.length; i++){
        result[tokens[i].split('=')[0]] = tokens[i].split('=')[1];
    }

    return result;
}


var rider = queryize(window.location.href)['rider']; //returns John
var fare = queryize(window.location.href)['fare']; //returns 20
var depstation = queryize(window.location.href)['station']; //returns Male
var avstation = queryize(window.location.href)['avstation']; //returns Male



alert(depstation);
//RiderOption(rider);
alert(rider);
//FareOption(fare);
//DepStation(depstation);


function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        var url= window.location.href;
		var ticketnumber = "ticket" + localStorage.clickcount;
		localStorage.setItem(ticketnumber, url ); 
		alert(localStorage.getItem(ticketnumber));
}
}



function printTicket(){
	for (var i = 1; i< localStorage.length; i++ ){
	alert(localStorage.getItem("ticket"+i));
		var rider = queryize(localStorage.getItem("ticket"+i))['rider'];
		var fare = queryize(localStorage.getItem("ticket" + i ))['fare']; 
		var depstation = queryize(localStorage.getItem("ticket" + i ))['station'];
		var avstation = queryize(window.location.href)['avstation'];
		localStorage.getItem(localStorage.key(i)); 
			document.getElementById("tickets").innerHTML += depstation; 
			document.getElementById("tickets").innerHTML += "<p></p>" 
			
	}
}  
