var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Предлагаме за продажба двустаен апартамент напълно обзаведен, в затворен комплекс с басейн, ресторант,магазин и други екстри, комплекса се намира близо до хотел Виктория, на 150м от плажа. Апартамента ... ";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Мы предлагаем полностью меблированные апартаменты с одной спальней в закрытом сообществе с бассейном, ресторан, магазин и другие сооружения, комплекс расположен недалеко от отеля Victoria, в 150 метра ...";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "We offer fully furnished one bedroom apartment in a gated community with pool, restaurant, shop and other facilities, the complex is located near the Victoria Hotel, 150m from the beach. The apartment ... ";
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

