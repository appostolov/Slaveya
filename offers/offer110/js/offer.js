var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Лозе в местност \"Пъдарска могила\" - 4 Е/м2 панорама към Бургас, на 600 м. от главния път .";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Виноградник в \"Постухой курган\" - 4 Е/м2 вид на Бургаса, в 600 метрах из главной дороги.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Vineyard in \"Padarski mound\" - 4 E/m2 view to Burgas, 600 meters from the main road.";
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

