var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Тристаен апартамент , етаж 4, находящ се в затворен комплекс, със степен на завършеност до ключ, всекидневна+кухненски бокс, две спални , баня и тоалетна, тераса. Комплексът се намира на 300м от морето, разполага с басейн, ресторант, сауна и фитнес зала.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Трехкомнатная квартира, этаж 4, находится в закрытом комплексе, степень отделки под ключ. Состоит из гостиной+кухонный бокс , две спальни, санитарный узел, тераса. Комплекс расположен в 300м от моря, с басейном, рестораном, сауной и фитнес залом.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Bedroom apartment, 4th floor, located in a gated community, with a degree of completeness to the key room + kitchenette, two bedrooms, bathroom, terrace. The complex is located 300m from the sea, has a pool, restaurant, sauna and gym.";
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

