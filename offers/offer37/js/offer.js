var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Параметри Басейн Интернет Паркинг Охрана Немебелиран Асансьор \"Слънчев ден\" 3 се намира на 1000м от красивата плажна ивица на Слънчев бряг, а областния център - Бургас и международното летище се намират на около 30 мин. път с кола.\"Слънчев ден\" 3 заема площ по голяма от 14 000м2 и се състои от 350 съвременни апартамента в 15 жилищни сгради. Комплексът предлага открит басейн, бар, детска площадка, ресторант, магазин, множество парко-места, и красива зелена територия. Студиото е на 3 етаж, площ 30 м2, без мебели. Годишна поддръжка - 480 Е/година с ДДС";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Параметры Бассейн Интернет Парковка Охрана Немебелирован Лифт „Солнечный день” 3 находится всего лишь в 1000 м. от красивой песчаной полосы Солнечного берега , а областной центр Бургас и международный аэропорт находятся на расстоянии 30 минут езды на машине. „Солнечный день” 3 занимает площадь больше 14 000 кв.м.и состоит из 350 современных апартаментов в 15 жилых зданиях. Комплекс предлагает открытый бассейн, бар, детскую площадку, ресторан, магазины, множество мест для стоянки автомашин и красивую зеленую территорию. Студио на 3 этаже Площадь- 30 кв.м. Вид на парк Без мебели Годова поддержка – 480 евро с НДС в год";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Options Pool Internet Parking Elevator Security Unfurnished \"Sunny Day\" 3 is only 1000 meters from the beautiful sandy strip of Sunny Beach and the regional center of Bourgas and the international airport are 30 minutes away by car. \"Sunny Day\" 3 covers an area of ​​14,000 sq meters and more consists of 350 modern apartments in 15 residential buildings. The complex offers an outdoor swimming pool , bar, children's playground , restaurant , shops , lots of parking places and green gardens . Studio on the 3rd floor area is 30 sqm Park view Unfurnished annual support - 480 euros with VAT per year";
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

