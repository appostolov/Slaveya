var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "2 къщи с общ двор. 1 се продава за 135 000Е без ДДС, РЗП 200 м2 1етаж- хол, кухня, спалня и тоалетна с баня, 2етаж- 3 спални и 2 тоалетни с баня.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "2 дома с общим двором. 1 продается за 135 000 евро без учета НДС, Площадь 200 м2 1-й этаж-гостиная, кухня, спальня и ванная комната с ванной, 2 этаж-3 спальни, 2 туалета и ванной комнаты.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "2 houses with a common courtyard. 1 is sold for 135 000 EUR excluding VAT, Area 200 m2 1st floor-living room, kitchen, bedroom and bathroom with bath, 2etazh-3 bedrooms and 2 toilets with bath.";
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

