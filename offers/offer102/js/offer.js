var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Тристаен апартамент, Меден Рудник, г.Бургас, изложение юг/запад, Нова кооперация с акт.16, етаж втори, с площ 127.81кв.м, с разпределение: коридор, трапезария с кухненски кът, две спални с тераса, баня с WC, отделно WC, мокро помещение, голяма тераса 30кв.м – бонус към апартамента, панорама към езерото.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Трехкомнатная квартира, Меден Рудник г.Бургас, юг / запад, новое здание с акт.16, второй этаж, площадь 127.81кв.м, с распределением: гостиная с кухней, две спальни с балконом, ванная комната с туалетом отдельный туалет, подсобное помещение, большая терраса 30кв.м- бонус люкс, с видом на озеро.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Bedroom apartment, Meden Rudnik g.Burgas, south / west, New building with akt.16, second floor, with an area 127.81kv.m with distribution: living room with kitchen, two bedrooms with balcony, bathroom with WC separate WC, utility room, large terrace 30sq.m - bonus suites, lake view.";
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

