var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Двустаен апартамент, разположен на втори жилищен етаж, в новопостроена сграда с Акт 16, на 200 метра от плажа и на 100м от санаториума. Цената на апартамента с мебелите е 45 000 Евро. Изложение: север - изток. Състои се от: входно антре, хол с кухненски бокс, баня с вана и тоалетна, спалня, складово помещение и балкон , напълно обзаведен. В сградата няма годишна такса обслужване. Подходящо за целогодишно живеене имот.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Двухкомнатная квартира расположена на втором этаже в новом здании с Акт 16, в 200 метрах от пляжа и в 100 метрах от санатория. Цены на мебель 45000 евро. Выдержка: северо - восток. Состоит из: прихожая, гостиная с кухней, ванная комната и туалет, кладовка и терраса, полностью меблирован. В здании нет платы за годовое обслуживание. Подходит для круглогодичное проживание.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "One bedroom apartment situated on the second floor in a new building with Act 16, 200 meters from the beach and 100 meters from the sanatorium. The price of furniture is 45,000 Euro. Exposure: north - east. Consists of: entrance hall, living room with kitchenette, bathroom and toilet, storage room and terrace, fully furnished. In the building there is no annual service fee. Suitable for living property.";
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

