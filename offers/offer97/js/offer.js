var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Параметри Басейн Интернет Паркинг Охрана Мебелировка Асансьор Balkan Breeze 2 е разположен на чудесно място в западната част на курорт Слънчев бряг, на 5 километра от древния град Нсебър, на 30 км от летището и 35 км от гр. Бургас. Плажът е на 700 м от комплекса. комплексът разполага с 6 етажа, състоящи се от студио, едностайни и двустайни апартаменти, всеки от тях разполага с достатъчно жилищна площ, обезпечаваща качеството и удобството. Към комплексът има просторен басейн, бар, медицински център, салон за красота, интернет зала Апартамента е на 3 етаж с 2 спални Напълно мебелиран Изглед към басейна и парка Годишна поддръжка - 8 Е/м2 с ДДС";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Параметры Бассейн Интернет Парковка Охрана Мебелировка Лифт Комплекс расположен на чудесном месте в западной части курортного комплекса \"Солнечный берег\" - жемчужина болгарского черноморского побережья, в 5 километрах от романтичного и древнего города Несебра, в 19 километрах от аэропорта и в 28 километрах от города Бургаса, самого крупного города на южном черноморском побережье. Пляж находится всего лишь в 700 метрах от комплекса. Комплекс имеет 6 этажей, которые состоят из студий, однокомнатных и двухкомнатных квартир, каждая из которых обладает достаточным жилым пространством, обеспечивая качество и удобство. В качестве дополнения построены бассейн, бар, медицинский центр, салон красоты, парикмахерская и интернет зал. Апартамент на 3 этаже с 2 спальнями Площадь - 87 кв.м. Полная мебелировка Вид бассейн и парк Годовая поддержка- 8 евро/кв.м с НДС";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Parameters Internet Pool Parking Security Furniture Lift Balkan Breeze 2 is a great location in the western part of Sunny Beach resort , 5 km from the ancient city Nsebar , 30 km from the airport and 35 km from Burgas . The beach is 700 meters away. The complex has 6 floors consisting of studio, one and two bedroom apartments, each of them has enough living space , guaranteeing quality and convenience . The complex has a large swimming pool, bar , medical center , beauty salon , internet room apartment is on the third floor with two bedrooms fully furnished overlooking the pool and the park Annual maintenance - 8 E/m2 VAT";
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

