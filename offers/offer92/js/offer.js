var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "На 35 км. от Бургас, китно селце, комбинация от планина с гора и езеро за риболов и отдих, не далече от тракийски и римски крепости в местност Русокастрон.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "35 км.до Бургаса, живописной деревне, сочетание горного леса и озера для рыбалки и отдыха, недалеко от фракийской и римской крепости в районе Русокастрон.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "35 km. of Burgas, a picturesque village, a combination of mountain forest and a lake for fishing and recreation, not far from Thracian and Roman fortresses in the area Rusokastron.";
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

