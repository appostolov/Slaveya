var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Бургас до морската градина, къща с двор за ремонт, в най-хубавата част на Бургас, 2 етажа + мансарден етаж - 3 студия";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Бургас до Морского сада, дома с двором для ремонта в самой красивой части Бургаса, 2 этажа + мансарда - 3 студии";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Burgas to the sea garden, a house with a yard for repairs in the most beautiful part of Burgas, 2 floors + attic - 3 studios";
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

