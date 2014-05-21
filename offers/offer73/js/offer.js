var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Параметри Басейн Интернет Охрана Мебелировка Асансьор Green Fort Апарт-хотел е разположен в северната част на курорта Слънчев бряг, на 5 минути от плажа. Прекрасното разположение на комплекса съчетава в себе си море и гора. На територията на комплекса има басейн за възрастни и деца, тенис корт, магазин и ресторант градина. Апартамент В1-43 расположен на партерен етаж с 1 спалня , площ 51 кв Вид на басейн и море. Мебелировка Годишна поддръжка – 12 евро/ кв.м с ДДС";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Параметры Бассейн Интернет Охрана Мебелировка Лифт Green Fort Апарт-отель расположен в северной части курорта Солнечный берег, всего в 5 минутах от пляжа. Прекрасное расположение комплекса сочетает в себе близость к морю и горам.На ерритории комплекса расположены несколько бассейнов для взрослых и детей, детская водная горка, теннисный корт, магазин, сад-ресторан. Апартамент расположен на партерном этаже с 1 спальней , площадь 51 кв Вид на бассейн и море. Мебелировка Годовая поддержка – 12 евро/ кв.м с НДС";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Internet Security Parameters Pool Lift Furniture Green Fort Apart-hotel is located in the northern part of Sunny Beach, 5 minutes from the beach. The wonderful location of the complex combines sea and forest. The complex has a swimming pool for adults and children, tennis court, garden shop and a restaurant. Apartment B1-43 Situated on the ground floor with 1 bedroom, area 51 sq Type of pool and sea. Furniture Annual maintenance - € 12 / sq.m VAT";
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

