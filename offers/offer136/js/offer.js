var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Предлагаме за продажба апартаменти в Свети Влас, етаж 2, с изглед към морето и гората. Апартаментите са предназначени за целогодищно живеене. Сградата е с трислойна изолация, дървена обшивка. Стълбите и балконите са облицовани с тиково дърво. Архитектура в старинен български стил, има градина, място за отдих, басейн, барбекю. Целогодишна охрана, интернет, кабелна телевизия. Напълно обзаведени. Такса подръжка 7Е/кв.м за година.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Предлагаются для продажи апартаменты в Святом Власе.Етаж 2. Все апартаменты с видом на море и лес. Апартаменты предназначены для круглогодичного проживания. Трехслойная изоляция. Деревянная обшивка. Лестница и балконы от тикового дерева./ естественные матереалы/ Архитектура в старинном болгарском стиле. Сад, место для отдыха. Бассейн. Барбекю. Недалеко от моря и яхтпорта Марины. Круглогодичная охрана, интернет, кабельное телевидение. Апартамент4 -76,93 кв.м. Цена 89 000евро Апартаменты с мебелью. Такса поддержка 7 евро/в год.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "We sell apartments in Saint Vlas, 2nd floor, overlooking the sea and forest. The apartments are bookable whole year for living. The building has a three-layer insulation, wood siding. Stairs and balconies are lined with teak. Architecture in old Bulgarian style, a garden, leisure pool, barbecue. Year security, internet, cable TV. Fully furnished. Maintenance Fee 7E/kv.m year.";
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

