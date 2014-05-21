var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Продава се имот в местността \"Курт Тепе\" с площ 4200м2 и цена 37 Евро за кв.м";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Недвижимость на продажу в \"Курт Тепе\" площадью 4200m2 и стоить 37 евро за кв.м.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Property for sale in the \"Kurt Tepe\" an area of ​​4200m2 and cost 37 Euro per sq.m.";
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

