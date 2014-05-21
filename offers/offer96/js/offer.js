var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Параметри Басейн Интернет Охрана Немебелиран Лифт Green Fort Апарт-отель разположен в северната част курорта слънчев бряг на 5 минти от плажа. На територията на комплекса има басейн за възрастни и деца, водна пързалка, тенис корт, магазин и ресторант градина. Апартамента е на партерен етаж, с 2 спални, без менели, с изглед към парка Годишна поддръжка 12Е/м2 с ДДС";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Параметры Бассейн Интернет Охрана Немебелирован Лифт Green Fort Апарт-отель расположен в северной части курорта Солнечный берег, всего в 5 минутах от пляжа. Прекрасное расположение комплекса сочетает всебе близость к морю и горам.На территории комплекса расположены несколько бассейнов для взрослых и детей, детская водная горка, теннисный корт, магазин, сад-ресторан. Апартамент расположен на партерном этаже с площадью 73 кв.м. с 2 спальнями. Без мебели Вид на парк. Годовая поддержка – 12 евро/кв.м. с НДС";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Parameters Pool Internet Security Unfurnished Lift Green Fort Apart otel located in the northern part of Sunny Beach 5 Minty from the beach. The complex has a swimming pool for adults and children, water slide, tennis court, garden shop and a restaurant. The apartment is on the ground floor with two bedrooms, without me, overlooking the park Annual maintenance 12E/m2 VAT";
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

