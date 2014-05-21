var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Парцел в местност \"Минералния извор\" до ПУП в комуникации, черен път покрай парцела - 6.972 дка по 30 Е/м2";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Земельный участок в \"весна\", чтобы DSP ​​в области связи, грунтовой дороге вдоль земли - 6972кв.м 30 Е/м2";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Plot in \"spring\" to the DSP in communications, dirt road along the land - 6972 acres 30 E/m2";
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

