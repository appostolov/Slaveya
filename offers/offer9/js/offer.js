var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Хотел Слънчев бряг Терен 528кв.м РЗП на хотела 1500кв.м, ресторант 260кв.м, фитнес, сауна и стая за масаж, На етаж от 1 до 3 - 306кв.м – 7 двойни и 2 апарт/стандарт и лукс/ Четвърти етаж 260кв.м 1.малките стаи са -26.56кв.м.x 650 evro=17265 evro; (това са с ъгловите спални) 29.33 кв.м x 650 evro=19065 evro; 2. по-големите стаи са -36.86 кв.м.x650 evro=23310 evro; (те са с отделните легла) 35.80 кв.м.x 650evro=23 270 evro; 3.Aпартамента е -55.91 кв.м. x 650 evro=36342 evro; 4.Цял етаж (има 5 стаи + 1 Апарт.) е 219кв.м.x 650 evro=142 350 evro. Може да се извърши продажба на отделни стаи и апартаменти , на цял етаж или на целия Хотел цената е 800 000Е";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Отель Солнечный берег Ландшафт 528kv.m Площадь 1500 квадратных метров гостиниц, ресторанов 260kv.m, тренажерный зал, сауна и массажный кабинет, На этаже с 1 по 3 - 306kv.m - 7 двухместных номеров и 2 квартиры / стандарт и люкс / Четвертый этаж 260kv.m 1.malkite номеров 26.56kv.m.x-650 Евро = 17265 Евро; (это угол спальни) 29,33 х 650 м Евро = 19065 Евро; 2. большие номера -36,86 kv.m.x650 Евро = 23310 Евро; (у них есть отдельные кровати) 35,80 kv.m.x 650evro = 23270 Евро; 3.Apartamenta является -55,91 м2 х 650 Евро = 36342 Евро; 4.Tsyal этаж (Есть 5 комнат + 1 друг от друга.) Является 219kv.m.x Евро = 650 142 350 Евро. Вы можете сделать продажу отдельных номеров и люксов Полный полу или полную стоимость отеля составляет 800 000 евро";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Hotel Sunny Beach terrain 528kv.m Area 1500 square meters of hotel, restaurant 260kv.m, gym, sauna and massage room, On floor 1 to 3 - 306kv.m - 7 double rooms and 2 apartment / standard and luxury / Fourth Floor 260kv.m 1.malkite rooms 26.56kv.m.x-650 evro = 17265 evro; (this is a corner bedroom) 29.33 x 650 m evro = 19065 evro; 2. larger rooms are -36.86 kv.m.x650 evro = 23310 evro; (they have separate beds) 35.80 kv.m.x 650evro = 23270 evro; 3.Apartamenta is -55.91 m2 x 650 evro = 36342 evro; 4.Tsyal floor (there are 5 rooms + 1 apart.) Is 219kv.m.x evro = 650 142 350 evro. You can make sale of individual rooms and suites Full floor or the entire hotel price is 800 000 EUR";
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

