var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Урегулиран парцел, кв. Крайморие, с лице на съществуващия асфалтов път за квартала, предвиден е за жилищно строителство, с високи показатели!";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Участок Крайморие, стоящие перед существующей асфальтовой дороги в районе, предоставляется жилье, высокая производительность!";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Regulated plot Kraymorie, facing the existing asphalt road to the neighborhood, is provided for housing, high performance!";
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

