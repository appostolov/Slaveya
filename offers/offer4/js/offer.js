var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "ПОД НАЕМ Двустаен апартамент, спалня, дневна с кухня, баня с тоалетна, тераса към морето, подходящ за 4 човека,първа линия море! наем на ден 80лв. - силен сезон 55лв. - слаб сезон и по договаряне.......";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "АРЕНДА Двухкомнатная квартира, спальня, гостиная, кухня, ванная комната, терраса с видом на море, подходит для 4 человек, набережной! в сутки 80лв. - Высокий сезон 55лв. - Низкий сезон договаряне .......";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "One bedroom apartment, bedroom, living room, kitchen, bathroom, terrace overlooking the sea, suitable for 4 persons, waterfront! 80lv day rental. - High Season 55lv. - Low season and negotiable .......";
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

