var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "УПИ и граничи с имота на 4U Development. Имота е с площ от 6,8 дка. и е с прекрасна пабнорама към морето така и към планината. Лицето му е към пътя и е 40м а ширината с гледка към морето е 222м. Към момента за грепосочената фирма е изработила архитектурен проекти е поискала разрешение от Община Поморие за строеж на 102 къщи. На около 100 м по-надолу Brix Investment/Development планират да изградят друг комплекс от 22 дка.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "УПИ и граничит свойство 4U развития. Свойство имеет площадь 6,8 гектара. и имеет прекрасный море pabnorama и горы. Его лицо на землю и составляет 40 метров, а ширина с видом на море составляет 222 метров. На момент выше компания разработала архитектурные проекты запросил разрешение от Поморие муниципалитета на строительство 102 домов. Около 100 м ниже по шкале Брикса плана Инвестиции / развития построить еще один комплекс 22 акров.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "UPI and borders the property of 4U Development. The property has an area of ​​6.8 acres. and has a wonderful pabnorama sea and the mountains. His face to the ground and is 40 meters and the width overlooking the sea is 222 meters. At the time of above company has developed architectural projects has requested permission from the Pomorie Municipality for the construction of 102 houses. About 100 m below Brix Investment / Development plan to build another complex of 22 acres.";
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

