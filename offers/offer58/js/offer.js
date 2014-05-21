var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Две къщи в село Горица РЗП 115м2 , РЗП 130м2 в 1 двор от 400 м2 разположението на стаите е еднакво- 1етаж- 1 голяма стая, баня с тоалетна, камина, 2етаж- 2 спални с голяма баня. Всяка къща има гараж. Недовършени са 65 000Е и 70 000Е, довършени се предлагат съответно на 71 000Е и 76 000Е. Предлага се и договор за поддръжка и охрана.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Два дома в деревня Горица, площадь 115m2, 130m2 жилой площади в сад 400 м2 красивая комната такая же, 1 этаж, 1 большая комната, ванная, камин, 2etazh-2 спальни с большой ванной комнатой. Каждый дом имеет гараж.В готовый вид 71 000Е и 76 000E.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Two houses in the village of Gorica area 115m2, 130m2 living area in a garden of 400 m2 The beautiful room is the same, 1st floor, 1 large room, bathroom, fireplace, 2etazh-2 bedrooms with large bathroom. Each house has a garage. Unfinished are 65 000E and 70 000E, respectively, are offered completed 71 000E and 76 000E. There is also a contract for maintenance and security.";
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

