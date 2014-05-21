var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Параметри Басейн Интернет Паркинг Охрана Мебелировка Асансьор Комплекс Съни Виктори е разположен в северозападната част на кк Слънчев бряг, на 450 м от морето. Той предлага на своите клиенти: хотел, 3 жилищни сгради, 2 открити басейна, зелена зона, ресторант, открит и подземен паркинг, рецепция, целогодишна охрана и видеонаблюдение, магазин, лоби бар, бар в басейна, интернет, кабелна телевизия и др. услуги Апартаментът е в Блок Б на 2 етаж с 1 спалня, площ 57м2, изглед към басейна, напълно мебелиран Годишна поддръжка - 6 Е/м2";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Параметры Бассейн Интернет Парковка Охрана Мебелировка Лифт Комплекс Сани Виктори расположен в северо-западной части Солнечного берега, всего в 450 метрах от моря. Он состоит из: гостиницы и трех жилых домов , два открытых бассейна, зеленая зона, ресторан , открытый и подземный паркинг, рецепция, круглогодичная охрана и видеонаблюдение, магазин, лобби-бар, бар у бассейна, интернет, кабельное телевидение и другие услуги . Апаратамент в Блоке Б на 2 этаже с 1 спальней Площадь 57 кв.м. Вид на бассейн Полная мебелировка Годовая поддержка – 6 евро/ кв.м.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Parameters Internet Pool Parking Security Furniture Elevator Sunny Victory complex is located in the northwestern part of the Sunny Beach resort, 450 m from the sea. It offers to its clients: hotel, 3 houses, 2 outdoor pools, green areas, restaurant, outdoor and underground parking, reception, year-round security and CCTV, shop, lobby bar, pool bar, internet, cable TV and more. service apartment is in Block B on the 2nd floor with 1 bedroom, 57m2 area, overlooking the pool, fully furnished Annual maintenance - 6 E/m2";
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

