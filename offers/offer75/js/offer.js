var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Параметри Басейн Интернет Паркинг Охрана Мебелировка Асансьор Комплекс „ Поло Резорт „ е разположен в западната част на кк. Слънчев бряг, на 300 м от известния плаж Какао бийч. Апартамент с 1 спалня, намиращ се на 3-ти етаж, напълно мебелиран и готов за живеене. Площ 50 м2, изглед към парк. Годишна поддръжка - 10,8 Е/м2 с ДДС";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Параметры Бассейн Интернет Парковка Охрана Мебелировка Лифт Комплекс „ Поло Резорт „ разположен в западной части кк. Солнечный берег, всего в 300 м. от известного пляжа Какао Бийч. Апартамент с 1 спальней находится на 3 этаже. Полностью мебелиран и готово к проживанию. Площадь – 50 кв.м. Вид на парк Годовая поддержка – 10,8 евро/ кв.м. с НДС";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Parameters Internet Pool Parking Security Furniture Lift Complex \"Polo Resort\" is located in the western part of the resort. Sunny Beach, 300 m from Cacao Beach. 1 bedroom apartment located on the third floor, fully furnished and ready for living. 50 m2, overlooking the park. Annual maintenance - 10.8 E/m2 VAT";
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

