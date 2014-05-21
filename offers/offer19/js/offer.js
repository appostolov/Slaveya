var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Продавам земеделска земя на главен път Аксаково-Игнатиево, 2. 851дка,30 м. лице на главен път, на 0. 402м от населено място, в близост ток и вода, на 1. 416км. от автомагистрала\"Хемус\".Имота е пред регулация";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Продажа сельскохозяйственных угодий на главной дороге между деревней Axacovo и Игнатиево vollage. 851300 м2 лицо на дороге, менее половины км к деревенской площади, рядом с электро-и водоснабжением.! 420 м до автобану";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Selling farmland on main road between Axacovo village and Ignatievo vollage. 851300 m2 face on the road, under half km to the village area, near by electricity and water supply.!420 m to autoban";
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

