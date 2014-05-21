var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Парцел с панорама към морето! Свети Влас, местност ЮРТА, урегулиран парцел 1000кв.м, с показатели за застрояване Плътност 35% Кинт . = 1.20 Н = 10.00м с отреждане за жилищно строителство!";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Участок с видом на море! Святой Влас , Юрта, Регулируемый участок 1000кв.м, с показателями для строительства Плотность 35% Кинт. = 1,20 H = 10,00 м с акцентом на жилье!";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Plot with sea view! Sveti Vlas area Yurta Regulated plot of land 1000sq.m, with indicators for construction Density 35% Kint. = 1.20 H = 10.00 m with emphasis on housing!";
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

