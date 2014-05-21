var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Параметри Басейн Интернет Охрана Мебелировка Асансьор \"Сарафово Резиденс\" 4 звезден апарт-хотел класа лукс, намиращ се в кв.Сарафово, гр. Бургас, предлага множество удобства, лукс и прекрасна възможност за пълноценен отдих и постоянно пребиваване. На територията на комплекса има басейн, рецепция, фитнес зала, сауна, СПА, ресторант, бар, паркинг Апартамента е на партерен етаж, с 1 спалня и дневна, напълно мебелиран с изглед към басейна Годишна поддръжка - 720 Е/ на година с ДДС";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Параметры Бассейн Интернет Охрана Мебелировка Лифт \"Сарафово Резиденс\" 4-х звездный апарт-отель класа люкс , предлагающий множество удобств,уют и прекрасную возможность для полноценного отдыха и постоянного проживания. На територията на комплекса находятся: бассейн, рецепция, фитнес центр, сауна, СПА, ресторан,бар, парковка. Апартамент на партерном этаже с площадью 41,17 кв.м. с 1 спальней Полная мебелировка Вид на бассейн Годовая поддержка - 720 евро/в год с НДС";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Parameters Pool Internet Security Furniture Lift \"Sarafovo Residence\" 4 star apart-hotel luxury class, located in Sarafovo, Burgas offers many amenities, luxury and a wonderful opportunity for recreation and residency. The complex has a swimming pool, reception, gym, sauna, spa, restaurant, bar, parking The apartment is on the ground floor, with one bedroom and living room, fully furnished with pool view Annual maintenance - 720 € / year VAT";
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

