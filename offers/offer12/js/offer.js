var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Парцел. До регулация /НПИ/ панорама ез. Мандра и Бургас, граничи с вилно селище, допуска се промяна на предназначението на земята!";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Участок, По регулирования / IAS / Вид на озеро. Мандра и Бургаса, на границе деревни комплекса, разрешается регулирования !";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Land. By regulation / IAS / Lake view. Mandra and Burgas, bordering the village complex, allowed to change the land!";
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

