var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Продавам парцел с ПУП за мелница, 15 000кв.м, с ток и вода, сгради за ремонт. Нова ограда и портална врата, с асфалт и до Първокласен път.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Продажа земли с утвержденным генеральным планом завода 15 000 кв.м., воды и электричества, сграды для ремонт. Новый забор и дверь, с асфальтовым и рядом с дорога Разград Свищов.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Sell ​​land with an approved masterplan for mill 15 000sq.m, water and electricity, building repair. New fence and gate, with asphalt and Premium time Razgrad Svishtov.";
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

