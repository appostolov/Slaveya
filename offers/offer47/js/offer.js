var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "8 броя дворни места в село Александрово от 400м2 до 600м2 , 45Е/м2, някои от местата са с проект за къща.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "8 участоки, в деревне Александро, 400м2 - 600m2, все по 45E/m2 , в некоторые есть проектов для дома.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "8 pieces yards in the village Alexandrov from 400m2 to 600m2, 45E/m2, some areas are house project.";
};

var b_l = function(){
	var x;
	for(var a = 0; a < imgss.length; a++){
		if(imgss[a].style.display != "none"){
			imgss[a].style.display = "none";
			if(a > 0){
				imgss[a-1].style.display = "block";
				break;
			}else{
				imgss[imgss.length-1].style.display = "block";
				break;
			}
			
		}	
	}
};

var b_r = function(){
	var x;
	for(var a = 0; a < imgss.length; a++){
		if(imgss[a].style.display != "none"){
			imgss[a].style.display = "none";
			if(a < imgss.length-1){
				imgss[a+1].style.display = "block";
				break;
			}else{
				imgss[0].style.display = "block";
				break;
			}
			
		}	
	}
};

