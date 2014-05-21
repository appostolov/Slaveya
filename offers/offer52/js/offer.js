var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "1 къща с общ двор с други 3, към всяка приблизително 300 м2 прилежаща земя 1етаж стая с камина и тоалетна, на 2етаж - 2 спални с тоалетна.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "1 дом с общим двором с другие 3, в каждом около 300 м2 земли прилегающей 1-й этаж комната с камином и туалет, 2этаж - 2 спальни с туалетом.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "1 hous with a common yard -3, to approximately 300 m2 each adjoining land 1st floor room with a fireplace and a toilet, a 2etazh - 2 bedrooms with toilet.";
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

