var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "ХОТЕЛ в с. РАВДА Жилищна сграда с кафе-еспресо. Намира се на около 500 метра от южния плаж и на 50 метра от централната улица в тих квартал в близост до хотелски комплекс „Емералд”. Сградата е масивна, тухлена, с външна изолация, няма стени, изградени от гипсокартон. Има бойлерно помещение с три големи бойлера по 500 литра всеки. Във фоайето има малко барче за кафе и безалкохолни напитки. Двор – 585 кв.м. Има възможност да се изгради малък басейн. РЗП - 734 кв.м. Всеки етаж е по 191 кв.м. Стаи – 22, от които 7 тройни и 15 двойни. Всяка стая е с тераса, собствен санитарен възел, оборудвана е с хладилник и телевизор.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "ОТЕЛЬ в РАВДЕ Жилой дом с кофе эспрессо. Расположенный примерно в 500 метрах от южного пляжа и в 50 метрах от главной улицы в тихом районе рядом с отелем \"Изумруд\".Здание полнотелый кирпич с утеплителем, нет стен, построенных из гипсокартона. Существует котельной с тремя большими бак 500 литров каждый. В лобби есть небольшой бар для кофе и прохладительные напитки. Участок - 585 м2 Можно построить небольшой бассейн. Площадь - 734 м2 Каждый этаж 191 квадратных метров Номера - 22, в том числе 7 троек и 15 двойных. В каждом номере есть балкон, ванная комната, оснащенная холодильником и телевизором.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Hotel in Ravda Residential building with espresso coffee. Located about 500 meters from the south beach and 50 meters from the main street in a quiet neighborhood near the hotel \"Emerald\". The building is solid brick with insulation, no walls, constructed of plasterboard. There is a boiler room with three large tank of 500 liters each. In the lobby there is a small bar for coffee and soft drinks. Plot - 585 m2 It is possible to build a small pool. Area - 734 m2 Each floor is 191 square meters Rooms - 22, including 7 triples and 15 doubles. Each room has a balcony, bathroom, equipped with a refrigerator and TV.";
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

