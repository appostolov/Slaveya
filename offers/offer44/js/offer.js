var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "МЕСТОПОЛОЖЕНИЕ: Студио , Поморие до Райфайзенбанк, на 100м от морето с изглед към парка, изложение юг/изток. РАЗПРЕДЕЛЕНИЕ: жилищна площ 37.70кв.м с общи части 42.00кв.м, състои се от входно антре, обзаведена баня с тоалетна и душ, стая дневна с кухня, балкон. ОБЗАВЕЖДАНЕ: напълно обзаведено и готово за живеене! ПРЕДИМСТВА на имота: $Отлична инвестиция $Отлично местоположение $Подходящо за отдаване под наем $Може да се експлоатира целогодишно";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "МЕСТОНАХОЖДЕНИЕ: Студия, Поморие рядом с Райфайзенбанк, 100 м от моря с видом на парк, юг / восток. Планировка: жилая площ 37.70kv.m/ 42.00kv.m, прихожая, оборудованная ванная комната с туалетом и душем, гостиная с кухней, балкон. Мебелировка: Полностью меблирована и готова к проживанию! Преимущества комплекса: * Отличная инвестиция * Отличное место * Подходит для аренды * Может использоваться круглогодично";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "LOCATION: Studio to Raiffeisenbank, 100m from the sea with views of the park, east DISTRIBUTION: living area 37.70kv.m 42.00kv.m common areas, entrance hall, fitted bathroom with toilet and shower, living room with kitchen and balcony. Furnishing: Fully furnished and ready to move in! Advantages of the property: * Excellent investment * Excellent location * Suitable for rent * Can be operated year-round";
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

