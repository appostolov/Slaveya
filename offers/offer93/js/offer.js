var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Тристаен апартамент -87m2, гр.Поморие - соленото езеро, на 100м от плажа. Находящ се на втори жилищен етаж,изложение запад/юг, с разположение : входно антре, дневна с място за кухненски кът, две спални, тераса, баня с тоалетна, обзаведен до ключ!";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Трехкомнатная квартира Поморие- 87m2 - соленое озеро, в 100 метрах от пляжа. Расположенный на втором этаже, с видом на запад / юг, с распределение : прихожая, гостиная с кухней, две спальни, ванная комната с туалетом, под ключ! Цена 62000Evro";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Duo bedroom apartment Pomorie -87m2 - salt lake, 100m from the beach. Located on the second floor, facing east / south, with location: entrance hall, living room with kitchenette, Duo bedroom, bathroom with toilet, furnished turnkey! price 62000Evro";
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

