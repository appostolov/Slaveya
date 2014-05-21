var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Студио на 100м от морето и от центъра, ул.България, 41,94кв.м, изложение юг, обзаведено с мебели, дневна+спалня+кухненски кът, баня с тоалетна, тераса, ет. 3 от шест. Без такса поддръжка";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Студия , находиться 100м из море и центре городе, ул. Болгария, 41,94кв.м, лицом югу, обставлены мебелью, гостиная + спальня + кухня, ванная комната, балкон, 3 этаж шесть. Без оплата обслуживание в течение года.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Studio 41,94kv.m furnished with furniture, living room + bedroom + kitchen, bathroom, balcony, 4th floor seven, facing west.";
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

