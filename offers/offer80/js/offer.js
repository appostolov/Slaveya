var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Параметри Лифт Мебелировка Охрана Паркинг Интернет Басейн Апартхотел \"Авалон\" е разположен в западната част на КК Слънчев бряг, срещу хотел Арда и Тунджа. Градът-музей Несебър е на 2 км от хотела. \"Авалон\" е съвременен комплекс с прекрасна архитектура. Той разполага с фитнес зала, масажен център, открит басейн с барове, обменно бюро. Апартамент на 1 етаж с 1 спалня, 63 м2, мебелиран, изглед към басейна. Годишна поддръжка - 10 Е/м2 на година с ДДС";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Параметры Лифт Мебелировка Охрана Парковка Интернет Бассейн Апартотель \"Авалон\" расположен в западной части КК Солнечный берег, напротив отелей \"Арда\" и \"Тунджа\". Город-музей Несебр расположен всего в двух километрах от апартотеля. \"Авалон\" - современный комплекс прекрасной архитектуры. Комплекс располагает следующим: фитнес зал, массажный центр, паркимахерский салон, интернет зал, наружний бассейн с открытым баром, бюро для обмена валюты. Апартамент на 1 этаже с 1 спальней Площадь – 63 кв.м. Меблировка Вид на бассейн Годовая поддержка : 10 евро/кв.м. с НДС в год.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Parameters Lift Furniture Internet Security Parking Pool Aparthotel \"Avalon\" is located in the western part of Sunny Beach, opposite Hotel Arda and Tunja. The town of Nessebar is 2 km from the hotel. \"Avalon\" is a modern complex with splendid architecture. It features a fitness center, massage center, swimming pool with bar, exchange office. Apartment on the first floor with one bedroom, 63 m2, furnished, overlooking the pool. Annual maintenance - 10 E/m2 year VAT";
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

