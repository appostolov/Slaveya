var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Етаж от къща находящ в морската градина на гр. Бургас на 2-ри етаж с прилежаща земя  95 м2.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Этаж от дома, расположенного в Морском саду города Бургас, на втором этаже с прилегающей земли 95 м2.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Floor of a house located in the Sea Garden of Burgas on the second floor with adjoining land 95 m2.";
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

