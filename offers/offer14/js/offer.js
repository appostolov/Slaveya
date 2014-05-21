var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Хотел в Равда! Отлично разработен и напълно оборудван! РЗП 1000кв.м, с капацитет 80човека, лятно заведение с бар 65кв.м, с капацитет 60човека, два басейна - за възрастни и деца.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Отель в Равде! Прекрасно оформлены и полностью оборудованы! 1000sq.m области мощностью 80choveka, летний бар бар 65kv.m мощностью 60choveka, два бассейна - для взрослых и детей.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Hotel in Ravda! Excellently designed and fully equipped! 1000sq.m area with capacity 80choveka, summer bar bar 65kv.m with capacity 60choveka, two swimming pools - for adults and children";
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

