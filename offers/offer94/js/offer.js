var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Къща с двор. На 45 км. от Бургас или на 15 км. от Средец, китно село не далече и от гр. Ямбол, в близост има язовир, приятно място за спортен риболов и туризъм.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Дом с участок. 45 км. от Бургаса и в 15 км. Средец, красивой деревне недалеко от Ямбол, недалеко от озера, прекрасное место для спортивной рыбалки и туризма.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "45 km. from Bourgas and 15 km. of Sredets pretty village not far from Yambol, near a lake, nice place for sport fishing and tourism.";
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

