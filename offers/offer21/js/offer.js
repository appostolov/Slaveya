var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "продавам парцел 45 дка 10 от които са в регулация в региона на гр БАЛЧИК С ЛИЦЕ НА ГЛАВЕН ПЪТ БЛИЭО ДО ГОЛФ ИГРИЩЕ И ПРЕДСТОЯЩО СТРОИТЕЛСТВО НА ТЪРГОВСКИ ЦЕНТЪР.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Продается земельный участок 45 соток, 10 из которых регулируется в районе города Балчик на главной дороге BLIЭO ГОЛЬФ и предстоящих СТРОИТЕЛЬСТВО ТОРГОВЫЙ ЦЕНТР.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Land for sale 45000 m2, 10 of which are regulated in the town of Balchik on the main road BLIEO GOLF and upcoming construction of shopping centers.";
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

