var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Двустаен апартамент, напълно оборудван с климатик , кухня с хладилник, печка и пералня, отделна спалня и тераса. наем за ден 70лв. - силен сезон 45лв. - слаб сезон и по договаряне...";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Двухкомнатная квартира, полностью оборудованные кондиционерами, кухня с холодильником, плитой и стиральной машины, отдельной спальней и террасой аренда на сутки 70лв. -Высокий сезон 45лв. - Низкий сезон и по договаряне...";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "One bedroom apartment, fully equipped with air conditioning, kitchen with refrigerator, stove and washing machine, separate bedroom and terrace. 70 BGN";
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

