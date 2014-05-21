var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Параметри Басейн Интернет Паркинг Охрана Мебелировка Комплекс Del Mar разположен на 120 метра от морето и на 1 км от стария Несебър, недалече от Слънчев бряг, в близост до автобусна спирка. Сградата на комплексът предлага уютна атмосфера и спокойствие през цялата година. Апартаментите са завършени до ключ, напълно мебелирани: кухня, спалня и напълно обурудван санитарен възел, всяки апартамент има климатик. На територията на комплекса има ресторант, Bar-b-Q, басейн, руска баня, фитнес, безплатно ползване на шезлонги от собственика Студиото е на партерен етаж с площ 35 м2, напълно мебелиран, изглед към морето Годишна поддръжка - 10 Е/м2, в което включва безплатна топла вода";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Параметры Бассейн Интернет Парковка Охрана Мебелировка Комплекс Del Mar расположен в 120 метрах от берега моря и в 1 км от Старого Несебра, недалеко от Солнечного Берега, рядом с автобусной остановкой. Комплекс сдан в эксплуатацию, предлагает уютную атмосферу и спокойствие на протяжении года. Апаратемнты завершены под ключ, с полной мебелировкой: кухонная зона, спальня и сан узел полностью мебелированы и оборудованы, в каждой квартире имеются кондиционеры. На територии комплекса: •Ресторан •Барбекю •Бассейн •Русская Баня •Фитнес •Лежаки бесплатного пользования для владельцов •Комплекс для круглогодичного предназначения. Студио на партерном этаже с площадью 35 кв.м. Меблировка Вид на море Обслуживание 10 Евро за кв.м.в год, в которые входит бесплатаная горячая вода.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Options Internet Parking Pool Security Furnishing Complex Del Mar is located 120 meters from the beach and 1 km from the Old Nessebar , close to Sunny Beach , next to the bus stop. The complex was commissioned , offers a cozy atmosphere and tranquility throughout the year. Aparatemnty completed turnkey , fully furnished with : kitchen area , a bedroom and a bathroom with WC are fully furnished and equipped, each apartment has air conditioning. On the territory of the complex : • Restaurant • BBQ • Pool • Sauna • Fitness Russian loungers • free use for owners • Complex for year-round destination. Studio on the ground floor with an area of ​​35 sq.m. Furnishing Sea Service 10 Euro kv.m.v year , which include besplatanaya hot water .";
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

