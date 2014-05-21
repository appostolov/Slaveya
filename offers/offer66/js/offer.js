var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Двустаен апартамент , етаж 3 , находящ се в затворен комплекс, със степен на завършеност до ключ, всекидневна+кухненски бокс,спалня, баня и тоалетна, тераса. Комплексът се намира на 300м от морето, располага с басейн, ресторант, сауна и фитнес зала.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Двухкомнатная квартира , этаж 3 , находится в закрытом комплексе, степень отделки под ключ. Состоит из гостиной+кухонный бокс, спалня и санитарный узел, тераса. Комплекс расположен в 300м от моря, с басейном, рестораном, сауной и фитнес залом.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Apartment, 3rd floor, located in a gated community with a degree of turn-key, living room and kitchenette, bedroom, bathroom, terrace. The complex is located 300m from the sea disposal a pool, restaurant, sauna and gym.";
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

