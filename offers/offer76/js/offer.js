var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Параметри Басейн Интернет Паркинг Охрана Мебелировка Асансьор Рейнбол 1 е разположен на територия, находяща се в южната част на най - хубавият курорт по брега на Черно море - Слънчев бряг. Плажът се намира на няколко минути пеша от комплекса. Има първокласен път осигуряващ лесния достъп до комплекса. Летище Бургас се намира на около 30 мин път с кола. Има денонощен медицински пункт. Има и множество атракции и никоя няма да ви разочарова. Множество възможности за спорт: сърф, водни ски и парапланер, водни колела и яхти, ветроходство, скутери, джетове, фитнес зала, тенис корт, , плажен волейбол, спортни площадки, боулинг, спортни съревнования за любители и професионалисти. Истински рай за децата - множество забавления и игри за децата, басейн, картинг, спортна школа,. Специални намаления за деца. денонощна детска градина. Апартамента се намира на 1 етаж с 1 спалня, с площ 46м2, напълно мебелиран с изглед към морето Годишна поддръжка - 10 Е / м2 с ДДС";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Параметры Бассейн Интернет Парковка Охрана Мебелировка Лифт Рейнбоу 1 расположен на территории, находящейся в южной части лучшего курорта на побережье Черного моря – Солнечный берег. Лучший пляж на морском побережье находится в нескольких минут ходьбы от комплекса. Наличие первоклассных дорог обеспечивает легкий доступ к комплексу. Аэропорт Бургас находится в 25 минут езды на машине от комплексe.Есть множество аттракций и никто не будет разочарован. Есть круглосуточный медицинский пункт. Есть множество возможностей для спорта: серф, водные лыжи и парапланеры, водные велосипеды и яхтинг, ветроходство, скутеры, джеты, теннис корты, пляжный волейбол, спортивные площадки, боулинг, фитнес залы, спортивные соревнования для любителей и профессионалов. Настоящий рай для детей - множество забавлений и игр для детей, бассейны, горки, картинг, спортивные школы. Специальные скидки для детей. Круглосуточный детский сад. Апартамент на 1 этаже с 1 спальней Площадь – 46 кв.м. Полная мебелировка Вид на море Годовая поддержка – 10 евро/кв.м. с НДС";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Parameters Internet Pool Parking Security Furniture Lift Rainbow 1 is located in an area located in the southern part of the - beautiful resort on the Black Sea coast - Sunny Beach. The beach is a few minutes walk from the complex. There are first-class road providing easy access to the complex. Bourgas Airport is located about 30 minutes drive away. There are non-stop medical center . There are many attractions and none will not disappoint . Variety of sports : surfing, water skiing and paragliding , pedal boats , sailing, scooters , jet skis, gym, tennis court , beach volleyball, playgrounds , bowling, sports competitions for amateurs and professionals. Genuine children's paradise - plenty of fun and games for children , pool, karting , sports school . Special discounts for children. nonstop kindergarten. The apartment is located on the 1st floor with 1 bedroom, area 46m2 , fully furnished with sea Annual maintenance - 10 € / m2 VAT";
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

