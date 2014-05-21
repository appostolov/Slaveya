var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Параметри Лифт Мебелировка Охрана Паркинг Басейн Комплекс Централ Плаза (Central Plaza) се намира в кк Слънчев бряг и представлява един доста уютен и спокоен закрит комплекс с вътрешни барове, басейни и охраняем паркинг. Разположен е в централната част на Слънчев бряг в непосредствена близост до хотел Кубан и всички развлекателни съоръжения на Слънчев бряг. Комплекс Централ Плаза дава на своите собственици комфорт, съвременно представено в апарт-хотел от закрит тип. Сградата е завършена и въведена в експлоатация в началото на 2007 година. На територията на комплекса работи обособена зона с магазини. Апартаментите се предлагат завършени с обзавеждане. Студио на 4 етаж, площ 38м2, мебелирани, вид към басейн и парк. Годишна поддръжка 6 Е/ м2 с ДДС";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Параметры Лифт Мебелировка Охрана Парковка Бассейн Комплекс Централ Плаза (Central Plaza) находится на Солнечном Берегу и представляет собой уютный и спокойный закрытый комплекс с внутренним баром и бассейном и охраняемым паркингом. Расположенный в центральной части Солнечного Берега в непосредственной близости к гостинице Кубань и всем курортным и развлекательным сооружениям курорта, комплекс Централ Плаза (Central Plaza), даёт своим собственникам комфорт современно спроектированного апарт-отеля закрытого типа. Здание закончено в начале 2007 и воведено в эксплуатацию. На територии комплекса работает обособленная зона с магазинами. Квартиры предлагаются с полной отделкой. Студио на 4 этаже Площадь – 38 кв.м. Меблировка Вид на парк и бассейн Годовая поддержка – 6 евро/ кв.м.с НДС";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Furnishing Options Lift Security Parking Pool Complex Central Plaza (Central Plaza) is located on the Sunshine Coast and is a friendly and quiet gated community with internal bar and swimming pool and secure parking . Located in the central part of Sunny Beach in close proximity to the hotel Kuban and all resort facilities and entertainment resort complex Central Plaza (Central Plaza), gives its owners the comfort of modern designed apartment hotel closed. The building is finished in early 2007 and vovedeno operation . On the territory of the complex is an isolated area with shops . The apartments are fully finished . Studio on the 4th floor Area - 38 sq.m. Furnishing view of the park and pool Annual support - 6 Euro / VAT kv.m.s";
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

