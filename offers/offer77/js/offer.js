var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Параметри Басейн Интернет Паркинг Охрана Мебелировка Асансьор Аштан Хол р разположен в центръра на морския курорт Слънчев бряг, на 300 м от морето, в близост до атрактивни барове, дискотеки и ресторанти. Комплексът предлага: открит басейн, детски басейн, богат набор от магазини, бръснар, салон за красота, паркинг. Апартамент на 1 етаж с 1 спалня Площ 61м2 напълно мебелиран с изглед към парка Годишна поддръжка 11 Е/м2 с ДДС";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Параметры Бассейн Интернет Парковка Охрана Мебелировка Лифт Аштан Хол разположен в центре морского курорта Солнечный берег в 300 м. от моря, вблизи известных атракционов, баров, дискотек и ресторанов. Комплексът предлагает: открытый бассейн, детский бассейн, богатый выбор магазинов, парикмахерская, салон красоты, парковка. Апартамент на первом этаже с 1 спальней Площадь - 61 кв.м. Меблировка Вид на парк Годовая поддержка - 11 е/м2 с НДС";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Parameters Internet Pool Parking Security Furniture Lift asta Dr. Hall located in the middle center of Sunny Beach resort, 300 m from the sea, close to the attractive bars, discos and restaurants. Facilities: outdoor swimming pool, children's pool, a wide range of shops, barber, beauty salon, parking. Apartment on the first floor 1 bedroom fully furnished 61m2 area overlooking the park Annual maintenance 11 E/m2 VAT";
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

