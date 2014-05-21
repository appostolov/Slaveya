var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Двустаен апартамент, разположен на втори жилищен етаж, в новопостроена сграда с Акт 16, на 150 метра от плажа и на 200 от центъра на Стрия град. Цената на апартамента с мебелите е 61 000 Евро. Изложение: юг - изток. Състои се от: входно антре, хол с кухненски бокс, баня с тоалетна и общ балкон за двете стаи. В сградата няма годишна такса обслужване. Подходящо за целогодишно живеене.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Двухкомнатная квартира расположена на втором этаже в новом здании с Акт 16, в 150 метрах от пляжа и в 200 м от центра города . Цены на мебель 61000 евро. С видом: юго - восток. Состоит из: прихожая, гостиная с кухней, ванной комнатой и балконом для обеих комнатах. В здании нет платы годовое обслуживание. Подходит для круглогодичное проживания.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "One bedroom apartment situated on the second floor in a new building with Act 16, 150 meters from the beach and 200m from the center of Stryn town. The price of furniture is 61,000 Euro. Facing: south - east. Consists of: entrance hall, living room with kitchenette, bathroom and a balcony for both rooms. In the building there is no annual service fee. Suitable for living.";
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

