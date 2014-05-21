var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Двустаен апартамент 73,00кв.м, гр.Поморие,200м от плажа. Находящ се на втори жилищен етаж, изложение изток/юг, с разположение : входно антре, коридор, дневна с място за кухненски кът, спалня, две тераси, баня с тоалетна. Обзаведен до ключ! Подходящ за целогодишно живеене. Цена 60 000Евро";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Двухкомнатная квартира 73,00 кв.м, в центре Поморие, в 200 метрах от пляжа. Расположенный на втором этаже, с видом на восток / юг, с распределением : прихожая, коридор, гостиная с кухней, спальня, балкон, ванная комната с туалетом. Меблированный под ключ! Подходит для круглогодично проживание. Цена 60 000евро";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Bedroom apartment 73.00 sq.m, Pomorie, 200 meters from the beach. Situated on the second floor, facing east / south with available entrance hall, hallway, living room with kitchenette, bedroom, balcony, bathroom with toilet. Furnished turnkey! Suitable for living. Price 60 000Evro";
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

