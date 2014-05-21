var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Двустаен апартамент - обзаведен. Състои се от:антре, баня с тоалетна, дневна, спалня, кухня, 2 бр климатик, тераса.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Двухкомнатная квартира - с мебелью. Состоит из: прихожая, ванная комната, гостиная, спальня, кухня, 2 кондиционера, терраса.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "One bedroom apartment - furnished. Consists of: entrance hall, bathroom, living room, bedroom, kitchen, 2 air conditioning, terrace.";
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

