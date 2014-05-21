var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Многостаен апартамент, в центъра на Бургас, близо до ул.Богориди и Морската градина, 130кв.м, ет 3, дневна с кухненски кът и изградена кухня, спалня с баня и WC, спалня с дрешник, отделна баня и WC, мокро помещение, две тераси, обзаведен до ключ. Цена 90 000Е.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Большая квартира в центре города Бургас, недалеко от Морского сада и ul.Bogoridi, 130, 3 этаж, комната с кухней и встроенной кухней, спальня с ванной комнатой и туалетом, спальня со шкафом, ванная комната и отдельный туалет, прачечная, два балкона, с мебелью под ключ. Цена 90 000E.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Large apartment in the center of Burgas, near the Sea Garden and ul.Bogoridi, 130, floor 3, room with kitchen area and built a kitchen, bedroom with bathroom and WC, bedroom with closet, bathroom and separate WC, laundry room, two balconies, furnished turnkey. Price 90 000E.";
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

