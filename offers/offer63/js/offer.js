var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "апартамент двустаен 63,84кв.м напълно обзаведен апартамент с интересно архитектурно решение, спалня, дневна с кухня, баня с WC, тераса";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Квартира спальни 63,84 м полностью меблированная квартира с интересной архитектурой, спальня, гостиная с кухней, ванная комната с туалетом, терраса.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Apartment bedroom 63.84 m fully furnished apartment with interesting architecture, bedroom, living room with kitchen, bathroom with WC, terrace.";
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

