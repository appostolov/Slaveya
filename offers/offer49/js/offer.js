var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "ТОП Оферта!!!! Първа линия море! До комплекс„Роуз Гардън” и Снаториума Двустаен апартамент 73,65кв.м, гр.Поморие, до плажа, с панорама море. Находящ се на втори жилищен етаж,изложение изток/запад, с разположение : входно антре, дневна с място за кухненски кът, спалня, две тераси, баня с тоалетна, складово помещение. Обзаведен до ключ! Подходящ за целогодишно живеене. Цена 68 500Евро";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Эксклюзивный!!!! Первая линия море! Рядом с комплекс ,,Роуз Гардан,, Двухкомнатная квартира 73,65кв.м, Поморие, рядом с пляжа, с видом на море. Расположенный на втором этаже, с видом на восток / запад, с распределением : прихожая, гостиная с кухней, спальня, два балкона, ванная комната с туалетом, кладовка. Под ключ! Подходит для круглогодичное проживание.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Top Offer!! Sea! The complex \"Rose Garden\" and Snatoriuma Bedroom apartment 73.65 sq.m, Pomorie beach with sea view. Situated on the second floor, east / west, with location: entrance hall, living room with kitchenette, bedroom, balcony, bathroom, storage room. Furnished turnkey! Suitable for living.";
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

