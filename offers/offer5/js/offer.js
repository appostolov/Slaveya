var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "ПОД НАЕМ Двустаен апартамент, в стария град, на 100м от морето. Находящ се на втори жилищен етаж,изложение изток/юг, с разположение : входно антре, дневна с място за кухненски кът, спалня, тераса, баня с тоалетна, обзаведен ! Подходящ за 4 човека! наем на ден 80лв. - силен сезон 55лв. - слаб сезон по договаряне................";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "АРЕНДА Двухкомнатная квартира в старой части города, в 100 метрах от моря. Расположенный на втором этаже, с видом на восток / юг в наличии: прихожая, гостиная с кухней, спальня, ванная комната, с мебелью! Подходит для 4-х человек! аренды в сутки 80лв. - Высокий сезон 55лв. - Низкий сезон договаряне ................";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "RENT One bedroom apartment in the old town, 100m from the sea. Situated on the second floor, facing east / south with available: entrance hall, living room with kitchenette, bedroom, bathroom, furnished! Suitable for 4 people! 80lv day rental. - High Season 55lv. - Low season negotiable ................";
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

