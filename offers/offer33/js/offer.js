var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Параметри Басейн Интернет Паркинг Охрана Мебелировка Асансьор Гарантирана аренда „Barcelo Royal Beach\" – това е нов 5 звезден хотел, разположен в центъра на курорта Слънчев бряг на 50м. от плаж. В него се предлагат 500 апартамента(едностайни, двустайни и студио), в които се съчетава петзвездния лукс и уюта на дома, джакузи под открито небе, воден бар, ресторант до басейна. На територията на комплекса има 3 открити и 1 закрит басейн + детски басейн от които 1 открит и закрития се подгряват, тематически ресторант, пиано бар, воден бар, кафе-сладкарница, лоби бар, СПА център, масажен център, парна баня, скуош зала, солариум, конферентна зала, съвременен търговски център с ескалатор, подземен паркинг, просторно пространство с детска площадка и жив плет около комплекса. Студиото е на 3 етаж с площ 48 м2 Напълно обзаведен Годишна поддръжка - 0.75 Е/м2 в месец";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Параметры Бассейн Интернет Парковка Охрана Мебелировка Лифт Гарантированная рента „Barcelo Royal Beach\" – это новый 5-звездочный комплекс, расположеный в центре курорта Солнечный берег, в 50м. от пляж. Он предлагает 500 апартаментов (однокомнатные, двухкомнатные и студио), в которых сочетаются пятизвездочный люкс с уютом дома, джакузи под открытом небом, водный бар, ресторан у бассейна. На территории комплекса 3 открытых и 1 закрытый бассейн + детский бассейн. Вода в закрытом бассейне и в одном из открытых подогреваемая.Инфраструктура: тематические рестораны, пиано-бар, водный бар,кафе-кандитерская, лобби бар, SPA-центр, массажный центр, паровные бани, скуош-зал, солярии, конференцзалы, современный торговый центр с эскалаторами, подземная парковка, просторные газоны с детскими площадками, живая изгородь вокруг комплекса. Студио на 3 этаже с площадью 48 кв.м. Полная мебелировка Вид на бассейн Годовая поддержка – 0.75 евро/кв.м. в месец";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Options Internet Parking Pool Security Furnishing Lift Guaranteed annuity \"Barcelo Royal Beach\" - is a new 5 - star hotel complex , situated in the center of Sunny Beach resort, 50m . From the beach. It offers 500 apartments ( studios, one-bedroom and studio ) , which combine five-star luxury with comfort at home, outdoor Jacuzzi , pool bar, poolside restaurant. The complex 3 outdoor and 1 indoor swimming pool + children's pool. water in the indoor pool and one of the open подогреваемая.Инфраструктура : themed restaurants , a piano bar , pool bar, cafe- confectioner , lobby bar , SPA- center, massage center, steam baths, squash room, solarium , conference rooms , a modern shopping mall with escalators , underground parking, spacious lawns with playgrounds , a hedge around the complex. Studio on the 3rd floor with an area of ​​48 sqm fully furnished pool View Annual support - 0.75 euro / sq.m. in months";
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

