var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "ГОРАТА СЕ НАМИРА САМО НА 50КМ.ОТ ВАРНА И 4КМ.ОТ.ГР.ДЪЛГОПОЛ,(С.ДЕБЕЛЕЦ М-СТ БУЧЕТО).В БЛИЗОСТ ОТ 600М ИМА ВОДА И ЕЛЕКТРИЧЕСТВО.РАСТИТЕЛНОСТТА В ГОРАТА Е ПРЕДИМНО ИГЛОЛИСТНА.ГОРАТА Е С ЛИЦЕ НА ЯЗ.ЦОНЕВО.ДО НЕЯ СЕ ДОСТИГА ПОСРЕДСТВОМ ЧЕРЕН ПЪТ.ОТ ЕДНАТА Й СТРАНА ИМА ПОЧИВНИ СТАНЦИИ.21ДКА,ВЪЗМОЖНОСТ ЗА ЛОВ,РИБОЛОВ,ВАКАНЦИОННО СЕЛИЩЕ. -ИЗКЛЮЧИТЕЛНА ПАНОРАМА -С ЛИЦЕ НА ЯЗ.ЦОНЕВО -50КМ.ОТ ВАРНА -7 ЕВРО КВ.М.,ИЛИ ЗАМЯНА АПАРТАМЕНТ ВЪВ ВАРНА+ДОПЛАЩАНЕ";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Древесина находится 50 [км] от Варны и в 4 [км] от города Дългопол (деревня Дебелец, Bucheto области), в диапазоне 600 [м] были вода и elictricity, древесина в основном хвойные. Древесина грань на Conevo плотины. Существует черный дорога корыта там. Есть 21000 [м2] станции отдыха, охоты Oportunity, рыбалка, Vacantion деревня, отличная панорама.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "The wood is located 50[km] from Varna and 4[km] from Dulgopol town (Debelets village, Bucheto area), in range of 600[m] have water and elictricity, the wood is mostly coniferous. The wood is facet on Conevo Dam. There is a black road trough there. Have 21000[m2] rest stations, hunt oportunity, fishing, vacantion village, great panorama.";
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

