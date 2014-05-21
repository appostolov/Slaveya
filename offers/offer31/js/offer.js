var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Параметри Басейн Охрана Немебелиран Асансьор Комплекс „Crown Fort Club” се намира между Свети Влас и КК Елените. Разположен е на възвишение, от което се открива панорама към Черно море, КК Слънчев бряг и Стария Несебър. Комплекса е обграден от гора. Летището е на 40 км и на 10 км от Несебър. Комплекса разполага с 4 ресторанта, бар и кафе, интернет клуб, салон за красота, масажен център, аренда на автомобили, басейн за възрастни и деца и др. Двете студиа са разположени на втроия етаж, без мебели с изглед към гората Годишна поддръжка 12 Е/м2 с ДДС";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Параметры Бассейн Охрана Немебелирован Лифт Комплекс „Crown Fort Club” находится между Свети Влас и КК Елените. Он расположен на возвышении, с высоты которого открывается панорама на Черное море, КК Солнечный берег и Старый Несебр. Комплекс окружен прекрасными лесами. Международный аэропорт г. Бургас находится в 40 км от комплекса, а исторический город Несебр - в 10 км на юг от комплекса. Комплекс „Crown Fort Club” предлагает собственникам и их гостям самые различные способы для развлечений и отдыха: 4 ресторана , бары и кафе, интернет клуб, салон красоты, массажный центр, аренда машин, бассейны для взрослых и детей и др. Двете студио расположены на втором этаже с площадью 41 кв.м. Без мебели Вид на горы Поддержка в год: 12 € / кв.м. с НДС";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Options Security Unfurnished Pool Elevator complex \"Crown Fort Club\" is located between Sveti Vlas and Elenite QC . It is situated on a hill with a panoramic view of the height of the Black Sea , Sunny Beach and Old Nessebar . The complex is surrounded by beautiful forests . Burgas International Airport is 40 km away, and the historic town of Nessebar - 10 km to the south of the complex. The complex \"Crown Fort Club\" offers owners and guests a variety of ways for entertainment and recreation : 4 restaurants , bars and cafes , internet club, beauty salon, massage center , car rental , swimming pools for adults and children and other studios are located on Dvete second floor with an area of ​​41 sq.m. Unfurnished Mountain View Support in a year: 12 € / sqm VAT included";
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

