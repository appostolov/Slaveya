var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Малък двустаен апартамент в гр. Поморие, находящ се в Стария град, срещу Санаториума на 3 жилищен етаж. акт 16, до ключ с готова баня с душ кабина и бойлер.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Небольшая квартира в Поморие, расположенный в Старом городе, напротив санатория на 3-ем этаже. Акт 16, с полной отделкой ванной комнаты с душем и нагреватель воды.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Small apartment in Pomorie, located in the Old Town, opposite the Sanitarium on the 3th floor. Act 16, with fully finished bathroom with shower and water heater.";
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

