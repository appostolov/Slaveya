var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Продажба на двустаен апартамент, в планински курорт Пампорово, който се намира в близост до гр.Смолян, в планина Родопи, близо до комплекса има ски-лифт. Може да се използва целогодишно, за зимен и летен отдих. Апартамента е напълно оборудван, състои се от спалня, дневна с кухненски кът, тераса, баня с тоалетна.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Вухкомнатная квартыра для продажи в Пампорово, горный, лыжный курорт, который находится недалеко от города Смолян, в горах Родопи, недалеко от горнолыжного подъемника курорта. Может использоваться круглый год, для зимнего и летнего отдыха.Квартыра полностью меблирована , состоит из спальня, гостиной с кухней, ванная комната с туалетом.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Bedroom apartment for sale in Pamporovo mountain resort, which is located near the town of Smolyan in the Rhodope Mountains, near a ski resort lift. Can be used year round for winter and summer recreation. The apartment is fully furnished and consists of a bedroom, living room with kitchenette, bathroom with toilet.";
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

