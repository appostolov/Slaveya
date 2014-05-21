var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Ателие на 2етаж, 34м2 в к.к. Слънчев Бряг- център, с обзавеждане, в жилищния комплекс има басейн, който може да се ползва.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Ателие, 2 етаж, 34m2 в курортном Солнечный берег центр, с мебелью в жилом комплексе есть бассейн, который может быть использован.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Workshop 2etazh, 34m2 in resort Sunny Beach center, with furniture in the residential complex has a pool which can be used.";
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

