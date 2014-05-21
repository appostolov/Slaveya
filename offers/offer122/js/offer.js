var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "м. Пода - 2 парцела- 1,085дка и 5,275дка, 20Е/м2, с лице на главен път и двата парцела.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "м Пода - 2-Ярд 1085 акров и 5275 акров, 20E/m2, перед главной дорогой и два участка.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "m Poda - 2-Yard 1,085 acres and 5,275 acres, 20E/m2, facing the main road and the two plots.";
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

