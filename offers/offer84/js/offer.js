var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Параметри Лифт Мебелировка Охрана Паркинг Интернет Басейн Комплекс Голден Дриймс е расположен в самия център на Слънчев бряг. Той съдържа басейн, асансьор, кафе-ресторант, търговски център, паркинг, зелена зона, охрана. Апартамент с 1 спалня на партерен етаж, площ 60 м2, мебелиран, изглед към басейн. Годишна поддръжка - 8.5 Е/м2";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Параметры Лифт Мебелировка Охрана Парковка Интернет Бассейн Комплекс Голден Дриймс разположен в самом центре к.к. Солнечный берег. Комплекс оснащен: бассейн, лифт, кафе-ресторан, торговый центр, парковка, зеленые зоны, охрана. Апартамент с 1 спальней на партерном этаже Площадь – 60 кв.м. Меблировка Вид на бассейн Годовая поддержка – 8,5 евро/ кв.м.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Parameters Lift Furniture Internet Security Parking Pool Complex Golden Dreams is located in the very center of Sunny Beach. It contains a swimming pool, a cafe-restaurant, shopping center, parking, green area, security. 1 bedroom apartment on the ground floor area of ​​60 m2, furnished, pool view. Annual maintenance - 8.5 E/m2";
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

