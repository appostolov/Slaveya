var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Параметри Басейн Интернет Паркинг Охрана Мебелировка Асансьор Комплекс „ Поло Резорт „ е разположен в западната част на кк. Слънчев бряг, на 300 м от известния плаж Какао бийч. Студиото е на партерен етаж и е 28 м2, напълно мебелиран и е готов за живеене. Изглед към парка Годишна поддръжка - 10,8 Е/м2 с ДДС";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Параметры Бассейн Интернет Парковка Охрана Мебелировка Лифт Комплекс „ Поло Резорт „ разположен в западной части кк. Солнечный берег, всего в 300 м. от известного пляжа Какао Бийч. Студио находится на партерном этаже с площадью 28 кв.м. Полностью мебелирано и готово к проживанию. Вид на парк Годовая поддержка – 10,8 евро/ кв.м. с НДС";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Options Internet Parking Pool Security Furnishing Lift Complex \"Polo Resort\" is located in the western part kk. Sunny Beach, just 300 meters from the famous beach of Cocoa Beach. The studio is located on the ground floor with an area of ​​28 sq.m. Fully mebelirano and ready to move. Park view Annual support - 10.8 euro / sq.m. VAT included";
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

