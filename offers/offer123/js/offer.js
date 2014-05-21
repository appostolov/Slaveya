var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Три етажна къща за селски туризъм с десет стаи със собствени сънитарни възли,  външна и вътрешна механа, камина, локално парно, слънчеви батерии, напълно обзаведена.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Три этажный дом с графства десять номеров с ваный и туалет, открытый и закрытый ресторан, камин, центральное отопление, солнечные батареи, полностью меблирована.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Three storey county house with ten rooms with private sanitarni units, indoor and outdoor restaurant, fireplace, central heating, solar panels, fully furnished.";
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

