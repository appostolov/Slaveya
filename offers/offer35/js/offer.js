var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Параметри Басейн Интернет Паркинг Охрана Мебелировка Nesebar Fort Club - първият комплекс на курорт Слънчев бряг със собствено голф игрище! Той е разположен непосредствено до най- големия аквапарк в България, на 7-8 минути от плажа на Слънчев бряг. Несебър Форт Клуб предлага множество удобства: 3 ресторанта, басейн за възрастни и деца с различни атракции, магазин, сауна, обменно бюро, детска площадка, тенис корт, футболно игрище, интернет клуб, автомобили под наем, безплатен паркинг Студиото е на 4 етаж Изглед към басейна Без мебели Годишна поддръжка 10 Е/м2 с ДДС";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Параметры Бассейн Интернет Парковка Охрана Мебелировка Nesebar Fort Club – первый комплекс на курорте Солнечный Берег с собственным гольф - полем! Он расположен в непосредственной близости от крупнейшего в Болгарии аквапарка, в 7-10 минутах ходьбы от прекрасных пляжей курорта Солнечный Берег. Несебр Форт Клуб предлагает множество удобств: 3 ресторана , бассейн для взрослых и детей с атракционами, магазины, сауна, обменное бюро, детские площадки , тенис корт, футбольное поле, интернет клуб, машины в аренду, бесплатная парковка. Студио с площадью 48 кв.м. на 4 этаже Вид на бассейн Без мебели Годовая поддержка – 10 евро / кв.м с НДС";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Options Internet Parking Pool Security Furnishing Nesebar Fort Club - the first complex in Sunny Beach resort with its own golf course - field ! It is located in close proximity to the largest aqua park in Bulgaria , 7-10 minutes walk from the beautiful beaches of Sunny Beach. Nessebar Fort Club offers many amenities: 3 restaurants, a pool for adults and children with attractions , shops , sauna, exchange office , playgrounds, tennis court, soccer field , internet club, car rental , free parking. Studio 48 sqm on the 4th floor Pool view Unfurnished Annual support - 10 euro / sq.m with VAT";
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

