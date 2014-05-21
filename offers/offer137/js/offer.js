var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Продавам къща с чудесна панорама на 10м от гора и на 20м от река Видима! Намира се в Троянския балкан с прекрасен изглед към връх Ботев.Само мястото си заслужава парите.Направете си подарък!!!!! Местоположение-обл.Ловеч с.Гумощник кв.Беров мост.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Продажа дома с ШИКАРНАЯ панорама 10 м от леса и 20 м от реки Видима! Расположенный в Троянскога Балкана с великолепным видом на гору Botev. Место стоит свои денги.Сделайте себе подарок !!!!! этот дом находиться - обл.Ловеч, д.Гумоштьник, кв.Беров мость.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Selling a house with great panorama of 10m from the forest and 20 m from the river see! Located in the Troyan Balkan with splendid views of Mount Botev.Samo place worth parite.Napravete your gift !!!!! Location-obl.Lovech s.Gumoshtnik kv.Berov bridge.";
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

