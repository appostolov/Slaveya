var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Парцел в местност \"Пъдарска могила\" - лозе до регулация - 14 м. лице на главен път за Сл. бряг.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Земля в \"Постухой Курган\" - виноградник рядом с регулирования - 14 метров перед главной дороге в Солнечный берег.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Land in \"Padarski Mound\" - a vineyard to regulation - 14 meters facing the main road to Sunny Beach.";
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

