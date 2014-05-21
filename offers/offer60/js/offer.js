var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Предлагаме двустаен апартамент, напълно обзаведен, в затворен комплекс с басейн, асансьор, ресторант, кафе, магазини и други екстри, близо до хотел Виктория, на 150м от плажа. Апартамента е на етаж 3, и се състои от спалня и дневна с кухненски бокс, баня с тоалетна, тераса с изглед към басейна.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Мы предлагаем однокомнатную квартиру, полностью меблирована в закрытом сообществе с бассейном, ресторан, кафе и других объектов вблизи Victoria Hotel, в 150 метрах от пляжа.Квартира находится на 3-м этаже и состоит из спальни и гостиной с кухней, ванная комната, балкон с видом на бассейн.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "We offer one-bedroom apartment, fully furnished in gated community with pool, restaurant, coffee shops and other facilities near the Victoria Hotel, 150m from the beach. The apartment is on the 3rd floor and consists of a bedroom and living room with kitchenette, bathroom, balcony overlooking the pool.";
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

