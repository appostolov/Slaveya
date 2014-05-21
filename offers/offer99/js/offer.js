var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Параметри Басейн Интернет Паркинг Охрана Мебелировка Комплекс \"Вега Вилидж\" се намира в кк Свети Влас, в непосредствена близост до плажа, на първа линия море. Той предлага на своите клиенти: Паркинг Рецепция Сейф на рецепция Детска площадка Басейн Бар Ресторант Интернет Фитнес Апартамент с 2 спални на 4 етаж, с площ 88м2, напълно мебелиран, с изглед към морето";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Параметры Бассейн Интернет Парковка Охрана Мебелировка Комплекс Вега Вилидж находится в к.к. Свети Влас, в непосредственной близости до пляжа, на первой линии моря. Он предлагает своим клиентам услуги: - Парковка - Рецепция - Сейф на рецепции - Детская площадка - Бассейн - Бар - Ресторан - Интернет - Финтес Апартамент с 2 спальнями на 4 этаже Площадь – 88 кв.м. Полная мебелировка Вид на море";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Parameters Internet Pool Parking Security Complex Furniture \"Vega Village\" is located in the resort Sveti Vlas, near the beach, on the waterfront. It offers to its clients: Parking Reception Safe at the reception Playground Pool Bar Restaurant Internet Fitness 2-bedroom apartment on the 4th floor with an area of ​​88m2, fully furnished, with sea view";
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

