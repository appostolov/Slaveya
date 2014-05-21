var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Параметри Лифт Мебелировка Охрана Паркинг Интернет Басейн Резиденция Sunset Beach 3 е разположен в южния район на големия кк Слънчев бряг. Комплексът се намира на не повече от 250 м от плажа и на около 1 км от централната улица. Характеристики На 3 мин от плажа, открит басейн с място за деца, джакузи, басейн-бар, кафе-бар, рецепция, входен достъп, денонощна целогодишна охрана, кабелна телевизия, обменно бюро, асансьор до всеки етаж, internet, телефон, интерком система, целогодишно обслужване, турситически услуги, трансфери от и до летището. Студио на 5 етаж, 41 м2, мебелиран, изглед към басейна Годишна поддръжка - 8,4 Е/м2 с ДДС";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Параметры Лифт Мебелировка Охрана Парковка Интернет Бассейн Резидентный комплекс Sunset Beach 3 расположен в южном районе большого курортного комплекса на Черноморском побережье Солнечный берег. Комплекс находится всего лишь в 250 м. от пляжа и менее одной км от центральной улицы. Характеристики комплекса В 3 минутах пешком от пляжа. Открытый бассейн с местом для детей, Джакузи, Бассейн - бар, Кафе и бар, Служба приема и размещения Входной доступ, Круглосуточная круглогодичная охрана, Кабельное телевидение, Услуги прачечной и уборщиц, Лифт до всех этажей, Газоны, Интернет/ телефон/, Интерком система и звонок, Круглогодичное обслуживание, Туристические услуги, Трансферты с и до аэропорта Студио на 5 этаже Площадь; 41 кв.м. Меблировка Вид на бассейн Годовая поддержка; 8, 4 евро/кв.м. с НДС";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Furnishing Options Lift Security Parking Internet Pool Sunset Beach resident complex 3 is located in the southern region of a large resort on the Black Sea Sunny Beach . The complex is only 250 meters from the beach and less than one km from the main street . Specifications of a 3-minute walk from the beach . Outdoor swimming pool with children's area , Jacuzzi, Swimming pool - bar, cafe and bar, Reception input access , hour round security , cable TV, laundry and cleaners , elevator to all floors , Lawns, Internet / phone / intercom system and call -year service, Travel Services , Transfers from and to the airport on the 5th floor Studio Area ; 41 sq.m. Furnished Pool View Annual support ; 8, 4 euro / sq.m. VAT included";
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

