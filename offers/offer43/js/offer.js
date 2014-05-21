var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "ТОП Оферта!!!! Първа линия море! До комплекс„Роуз Гардън” и Снаториума. Студио 40кв.м, гр.Поморие, до плажа. Находящ се на втори жилищен етаж,изложение запад, с разположение : входно антре, една стая с място за кухненски кът и спалня, тераса, баня с тоалетна, обзаведен до ключ! Подходящ за целогодишно живеене. Цена 33 000евро";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Эксклюзивный!!!! Первая линия море! Рядом с комплекс ,,Роуз Гардан,, Однакомнатная квартира 40,27кв.м, Поморие, рядом с пляжа. Расположенный на втором этаже, с видом на запад, с распределением : прихожая, гостиная с кухней и спальня, один балкон, ванная комната с туалетом, кладовка. Под ключ! Подходит для круглогодичное проживание.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Top Offer!! Sea! The complex \"Rose Garden\" and Snatoriuma. Studio 40.27kv.m, Pomorie beach. Situated on the second floor, facing west, with available entrance hall, a room with space for a kitchen and bedroom, bathroom, furnished turnkey! Suitable for living.";
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

