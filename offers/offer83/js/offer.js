var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Параметри Лифт Мебелировка Охрана Паркинг Басейн Комплекс \"Sea Grace\" е разположен в западната част на най-популярния по южното българско черноморие комплекс - Слънчев бряг. Сградата се намира на 350 м от известния плаж \"Cacao Beach\". Район с развита инфраструктура, само на 20 мин пеша от старинния град Несебър, центъра на слънчев бряг и аквапарк. За своите гости и собственици на апартаменти , комплексът предлага всички необходими удобства, добре поддържана зелена площ, развлечения за деца и възрастни. Комплексът разполага още и с: Открит басейни, детски басейн, бар, ресторант, пицария, открит охраняем паркинг, асансьор, детска площадка, рецепция. Апартамента е на партерен етаж с 1 стая, площ 53 м2, мебелиран, изглед към парк. Годишна поддръжка - 8 Е/м2";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Параметры Лифт Мебелировка Охрана Парковка Бассейн Курортный комплекс \"Sea Grace\" расположен в западной части одного из самых крупных и популярных по болгарскому южному черноморскому побережью курортов - Солнечный берег, всего в 350 м от известного пляжа \"Cacao Beach\". Район с развитой инфраструктурой, в 20 мин ходьбы находится достопримечательный г. Несебр, центр Солнечного берега и Аквапарк. Комплекс \"Sea Grace\" полностью построен и готов к эксплуатации. Своим гостям и собственникам квартир комплекс предлагает все необходимые удобства, хорошо поддержанные озелененные площадки, развлечения для детей и взрослых. Комплекс располагает с: Открытый бассейн, Детский бассейн, Бар, Ресторан, Пиццерия, Открытый охраняемый паркинг, Лифт, Детская площадка, Рецепция Апартамент на партерном этаже с 1 спальней Площадь – 53 кв.м. Меблировка Вид на парк Годовая поддержка – 8 евро/кв.м.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Parameters Lift Furniture Security Parking Pool Complex \"Sea Grace\" is located in the western part of the most popular on the southern Bulgarian Black Sea resort - Sunny Beach. The building is located 350 meters from the famous beach \"Cacao Beach\". Area with developed infrastructure , just 20 minutes walk from the ancient town of Nessebar, Sunny Beach and waterpark . For guests and owners , it offers all the necessary amenities , landscaped gardens , entertainment for children and adults. The complex also features : outdoor pool , children's pool , bar, restaurant , pizzeria , outdoor parking, elevator , playground , reception. The apartment is on the ground floor with one room , area 53 m2 , furnished , overlooking the park. Annual maintenance - 8 E/m2";
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

