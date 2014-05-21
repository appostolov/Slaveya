var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Къща-Хотел намира се в гр.Приморско ,на една от най хубавите улици,на 2 мин от южния плаж и на 4 мин от северния плаж на града,на 1 мин от центъра от западните тераси се открива гледка към Аквапарка на града,а от източните към залива на града.,по пътя за резиденция Перла . КЪЩАТА Е С ПЛОЩ ОТ 420 КВ,РАЗПРЕДЕЛЕНИ В 4 ЕТАЖА КЪЩАТА Е ПОСТРОЕНА ПРЕЗ 2008 Г.ОТ ТРИ ГОДИНИ ФУНКЦИОНИРА КАТО ХОТЕЛ,НА РАЗПОЛОЖЕНИЕ СА ОБЩО 9 СТАИ. НА ТРИ ЖИЛИЩНИ ЕТАЖА ПО 2 ДВОЙНИ СТАИ ВСЯКА С ТЕРАСА,САМОСТОЯТЕЛЕН САНИТАРЕН ВЪЗЕЛ,ТЕЛЕВИЗОР,КАБЕЛНА, ИНТЕРНЕТ,ХЛАДИЛНИК. В КЪЩАТА ИМ 4 СТУДИА /2+2/-ВСЯКО ИМА ПО 2 ТЕРАСИ,САМОСТОЯТЕЛЕН САНТАРЕН ВЪЗЕЛ,ТЕЛЕВИЗОР,ХЛАДИЛНИК,КАБЕЛНА ТЕЛЕВИЗИЯ. НА ПАРТЕРА НА КЪЩАТА ИМА ОЩЕ 1 СТАЯ /2+2 ЛЕГЛА/. НА ПАТЕРА СЕ НАМИРА И ТЪРГОВСКА ПЛОЩ ОТ 40 КВ.+ ДВОР ,КОЙТО ПРИНАДЛЕЖИ КЪМ ТЪРГОВСКАТА ПЛОЩ 20 КВ. ТОПЛАТА ВОДА В КЪЩАТА СЕ ОСИГУРЯВА ОТ 2 БОЙЛЕРА ОТ ПО 500 ЛИТРА. стълбището в имота е от гранитни плочи рязани на място,външната мазилка е на вебер,къщата има изолация/санирана е/ ";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "ДОМ-ОТЕЛЬ расположенных в городе Приморске, одном из самых красивых улиц, в 2 минутах ходьбы от Южного пляжа и в 4 минутах от северного пляжа, 1 мин от Западные балконы с видом города аквапарк и на востоке залива. На пути к резиденции Перл. Дом площадью 420 КБ в 4 этажа Дом был построен в 2008 году в течение трех лет работает как гостиница, отель предлагает 9 номеров. Из трех жилых этажей, 2 двухместных номера каждый с балконом, SAMOSTOYATELENSANITAREN ванная комната, телевизор, кабельное, Интернет, холодильник. В доме есть 4 студии / 2 +2 /-у каждого есть 2 балкона, ванная комната АВТОНОМНОГО Сантара, телевизор, холодильник, кабельное телевидение. На первом этаже дома есть еще 1 комната / 2 +2 кровати /. Н. А. Патер IS и коммерческой площадью 40 Кб. + Courtyard, что принадлежность к бизнес-площади в 20 КБ. Теплой воды в дом обеспечивается двумя водонагреватели от 500 литров. Лестница в собственности режется гранитные плиты на месте, является наружное покрытие Вебера, дом изолирован / изолированы в /";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "House Hotel located in Primorsko, one of the most beautiful streets, 2 minutes from South Beach and 4 minutes from the north beach, 1 min from Western balconies overlooking a city of the Aquapark and to the east bay. on the way to Pearl Residence. The house has an area of ​​420 KB in 4 floors House was built in 2008 for three years running as a hotel, The hotel offers 9 rooms. OF THE three residential floors 2 double rooms each with balcony, SAMOSTOYATELENSANITAREN bathroom, TV, cable, internet, refrigerator. The house has 4 studio / 2 +2 /-each has 2 balconies, STANDALONE SANTARA bathroom, TV, refrigerator, cable TV. On the ground floor of the house has 1 more room / 2 +2 beds / .NA Pater IS and commercial area of ​​40 KB. + Courtyard that belonging to a business area of ​​20 KB. WARM WATER IN THE HOUSE is provided by two water heaters of 500 liters. staircase in the property is cut granite slabs on the spot, is outer coating of Weber, the house is isolated / insulated f /";
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

