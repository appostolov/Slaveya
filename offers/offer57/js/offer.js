var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Продава се къща на груб строеж с дворно място 1210 кв.м. в центъра на с. Горица, община Поморие, обл. Бургас. Селото се намира на 20 км. от морето. Възможно е да се продаде само половината място 605 кв.м. със или без къщата. Цена по договаряне.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Продается дом в процессе строительства с двором 1210 м2 в центре Горица муниципалитета Поморие муниципалитета. Бургас. Деревня находится в 20 км. от моря. Можно продать только полупространстве 605 м2 с или без дома. Цена договорная.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "We offer for sale a house with yard 1210 sq.m. located in the center of Goritsa Village, municipality of Pomorie, district of Burgas. The village is located 20 km. from the sea. We also can sell only half of the land 605 sq.m with or without the house. Price negotiation.";
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

