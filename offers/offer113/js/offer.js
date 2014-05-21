var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Земеделска зема от почти 10 дка. на цена 7Е. Намира се на гл. път София - Сл. Бряг, на 100м от първите къщи на Каблешкиво и на 200м от регулацията на града. На 500м от имота ще се изгражда \"Black Sea Golg & Country Club\". този проект е най- амбициозния на Община Поморие, отличен със сертификат за Инвеститори Първи клас и ще бъде завършен до 2020г. Проекта включва голф игрище и академия, луксозен хотел, тенис комплекс, басейни, както и ресторанти, заведения и магазини.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Сельское хозяйство земли почти 10 гектаров. цена 7е. Расположенный на начальника. дорога София - Солнечный берег, в 100 метрах от первых домов Kableshkivo и в 200 метрах от регулирования города. В 500 м от собственности будет построен \"Черное море Golg & Country Club\". этот проект является самым амбициозным муниципалитета Поморие, вручен сертификат первого класса инвестора и будет завершено к 2020 году. Проект включает в себя поле для гольфа и академии, роскошный отель, теннисный комплекс, бассейны, рестораны, бары и магазины.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Agriculture land of almost 10 acres. price 7f. Located on the chief. road Sofia - Sunny Beach, 100m from the first houses of Kableshkivo and 200m from the regulation of the city. 500m from the property will be built \"Black Sea Golg & Country Club\". this project is the most ambitious of Pomorie Municipality, awarded a certificate of first class investor and will be completed by 2020. The project includes a golf course and academy, luxury hotel, tennis complex, swimming pools, restaurants, bars and shops.";
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

