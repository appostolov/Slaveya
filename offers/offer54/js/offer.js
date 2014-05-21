var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Малък двустаен апартамент, к-с Славейков, ет.8, южно изложение, близо до Била и Кауфланд, обзаведен, баня с WC, кухня отделна, две спални.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Малые апартаменты с одной спальней, Славейков, ет.8, с видом на юг, возле Billa и Kaufland, с мебелью, ванной комнатой с туалетом, отдельная кухня, две спальни.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Small one bedroom apartment, Slaveikov, fl.8, facing south, near the Billa and Kaufland, furnished, bathroom with WC, separate kitchen, two bedrooms";
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

