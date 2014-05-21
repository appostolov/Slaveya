var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Студио 48кв.м, обзаведено с мебели, дневна+спалня+кухненски кът, баня с тоалетна, тераса, ет. 4 от седем, изложение запад. Апартхотел ПОМОРИЕ БЕЙ, е на първа линия до морето, има басейн, СПА, ресторант, джакузи, солар. Има такса подръжка 460Е за година.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Студия 48kv.m обставлены мебелью, гостиная + спальня + кухня, ванная комната, балкон, 4 этаж семь, лицом к западу. Отель Поморие Бей залива пляж, бассейн, спа, ресторан, джакузи, солнечная. Там 460E плата за обслуживание в течение года.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Studio 48kv.m furnished with furniture, living room + bedroom + kitchen, bathroom, balcony, 4th floor seven, facing west. Hotel Pomorie Bay is a beachfront, a swimming pool, spa, restaurant, jacuzzi, solar. There 460E maintenance fee for the year.";
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

