var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Предлагаме за продажба, двустаен апартамент, напълно обзаведен, на 100м от плаж, в нова луксозен комплекс с басейн, с климатизация.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Мы предлагаем для продажи квартыра с одной спальней, полностью меблированная, 100 м от пляжа, в новом комплексе люкс с бассейном, кондиционерами.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "We offer for sale one bedroom apartment, fully furnished, 100m from the beach, a new luxury complex with pool, air conditioning.";
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

