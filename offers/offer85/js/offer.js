var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Ваканционен комплекс Сарафово е разположен на първа строителна линия на известния бургаски квартал, буквално на метри от брега на морето. Сарафово бързо се превърна в най-атрактивния жилищен квартал на гр.Бургас, главно защото съчетава в себе си удобствата и инфраструктурата на големия град – намира се само на 10 минути от центъра на града, разполага с удобен транспорт, на разположение на живущите в него са голям брой целогодишно работещи магазини и заведения, с предимствата на курортите: четирикилометрова плажна ивица покрита с пясък с доказано лечебно въздействие при различни костни заболявания, с морско дъно подходящо за посещаване и от деца, дълъг плажен сезон – от май до октомври. Притегателна предпоставка за инвестиции в района е също близостта до международното летище в Сарафово, както и до различни популярни морски курорти, включително най-големият български ваканционен курорт Слънчев бряг, намиращ се само на около 20 км. Морски Клуб Сарафово е великолепна резиденция за летен отдих, разгърната върху повече от 4500 кв.м. застроена площ, в която са обособени 65 апартамента и множество удобства и развлечения: • рецепция с лоби бар, • ресторант, • магазин, • многофункционален спа център, • фитнес, • красива градина с детска площадка, • открит басейн с детски кът и мокър бар и т.н. Апартаментите се продават луксозно завършени, с климатици.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Жилой комплекс Сарафово расположен на первой строительной линии популярного бургасского жилого района Сарафово, всего в нескольких десятках метров от берега моря. Сарафово быстро превращается в самый фешенебельный район г.Бургаса, и сочетает в себе удобства и инфраструктуру большого города с праздничной атмосферой лучших морских курортов Болгарии: - 15 минут езды до центра г.Бургаса; - 5 минут езды до аэропорта; - 20 минут езды до Солнечного берега, Несебра; - 5 минут езды до городка Поморье – самого популярного бальнеологического курорта; - регулярный автобусный транспорт; - большое число круглогодично работающих магазинов и кафешек; - 4 км пляжной полосы, покрытой песком, у которого доказанное лечебное воздействие; - Продолжительный пляжный период - с мая до октября. - Морской Клуб Сарафово - великолепная резиденция для летнего отдыха с общей площадью в 4500 кв.м., и состоит из 65 просторных квартир, с уютной планировкой, высококачественной отделкой и прекрасным сантехническим оборудованием: - Студия - от 40 кв.м.; - С 1 спальней – от 65 кв.м; - С 2 спальнями – от 118 кв.м. Квартиры продаются владельцам с высококачественной отделкой, сантехническим оборудованием и кондиционерами. ПРЕКРАСНАЯ ПАНОРАМА НА МОРЕ И БУРГАС. К услугам гостей в комплексе имеется ряд дополнительных удобств: • Круглосуточная охрана; • Парковка; • Ресепшн с лобби баром, • Ресторан, • Магазин, • Спа центр, • Фитнес, • Красивый сад, • Откртый бассейн с детским уголком и водным баром.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Sarafovo Sea Club is an exquisite frontline complex with unobstructed sea views. Located in the famous quarter of Burgas, the complex benefits both the comfort and infrastructure of the big city: only 10 min driving away from the city centre, regular bus transport, shops and restaurants on the disposal of the residents all year round, and the advantages of the seaside resorts: beautiful sandy beach with proven healing qualities, long tourist season – May to October e t c. Sarafovo is also an attractive investment option because of its proximity to the International Airport of Burgas, and to the other popular holiday resorts including the largest Bulgarian seaside resort – Sunny Beach, only 20 km away. Sarafovo Sea Club is an exclusive holiday complex with more than 4500 sq m of built up area, spread into 65 comfortable apartments and a number of facilities and entertainments: • reception desk with lobby bar • restaurant • shop • multifunctional spa centre • gym • beautiful garden with children’s playground • swimming pool with children’s area and a bar e t c.";
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

