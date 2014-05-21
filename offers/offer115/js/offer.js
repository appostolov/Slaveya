var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "До селото, парцел, в Парк Сранджа, до гора , на 12 км от гр.Приморско и морето. Чуден климат! Прекрасна панорама!";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Рядам с деревне, участок в Парк Странджа, в лес, 12 км от Приморско и море. Харошей климат! Шикарный вид!";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "To the village land in Srandzha Park, a forest, 12 km from Primorsko and the sea. Wonderful climate! Beautiful view!";
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

