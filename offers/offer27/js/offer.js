var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "3 броя студиа по 33 кв.м, едно до друго, на 2-ри етаж в Свети Влас. Изглед към морето на 150м от плажа. Атрактивна цена. Цената е без обзавеждане. Студиата се издават до ключ с готова баня и кухненски кът.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "3 студии 33 кв.м. друг с другом на втором этаже Свети Влас. С видом на море в 150 метрах от пляжа. Привлекательные цены.Цена без мебели.Студий выдаются под ключ с ванной комнатой и кухней.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "3 studios of 33 sq.m. each other on the second floor of Sveti Vlas. Overlooking the sea 150m from the beach. Attractive price. The price is unfurnished. The studios are issued turnkey ready with bathroom and kitchenette.";
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

