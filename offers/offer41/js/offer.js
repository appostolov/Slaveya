var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Студио в центъра на Несебър! Напълно обзаведено! С разпределение : входно антре, баня с тоалетна, стая с климатик и кухненски бокс, тераса.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Студия в Несебре! Полностью меблирована! С распределением: прихожая, ванная комната, комната с кондиционером , кухеной уголок, терраса.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Studio in Nessebar! Fully furnished! With distribution: entrance hall, bathroom, air-conditioned room and kitchen, terrace.";
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

