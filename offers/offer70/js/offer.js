var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Двустаен апартамент - напълно обзаведен , оборудвана кухня, два климатика, хладилник , тераса, подово отопление. В сградата има външен басейн.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Двухкомнатная квартира - полностью меблирована, оборудованная кухня, два кондиционера, холодильник, балкон, полы с подогревом. Открытый бассейн.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "One bedroom apartment - fully furnished, fitted kitchen, two air conditioners, refrigerator, balcony, underfloor heating. The building has an outdoor pool.";
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

