var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "студио 2етаж 57.45кв.м студио с интересно архитектурно решение, обзаведено с мебели, в центъра на Слънчев бряг, близо до хотел Кубан.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "студия 2-й этаж 57.45kv.m Студия с интересной архитектурой, обставлены мебелью в центре Солнечного берега, недалеко от отеля Кубань.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "studio 2st floor 57.45kv.m studio with interesting architecture, furnished with furniture in the center of Sunny Beach, near the Hotel Kuban.";
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

