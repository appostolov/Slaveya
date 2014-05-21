var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Параметри Басейн Интернет Охрана Без мебелировка Асансьор Комплекс «Imperial Fort Club» разположен на възвишение близо до морето, с изглед към Слънчев бряг, и стар град на Несебър Расположение: 500 m. от море, 40 км. от летище Студио на втори етаж Поддръжка в год: 12 € / кв.м с ДДС";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Параметры Бассейн Интернет Охрана Немебелирован Лифт Комплекс «Imperial Fort Club» расположен на возвышенности рядом с морем, и владельцы квартир в этом комплексе будут наслаждаться из своих окон прекраснейшим видом на бухту Солнечного берега и старый город Несебр. Расположение: 500 m. от моря, 40 км. от аэропорта Студио на втором этаже с площадью 35 кв.м. Вид на парк Без мебели Поддержка в год: 12 € / кв.м с НДС";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Options Pool Internet Security Unfurnished Lift Complex «Imperial Fort Club» is located on a hill near the sea, and the owners of apartments in this complex will enjoy from their windows the most spectacular views of the bay of Sunny Beach and the old town of Nessebar. Location: 500 m. from the sea, 40 km. Airport Studio on the second floor with an area of ​​35 sq.m. Park view Unfurnished support year: 12 € / sqm with VAT";
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

