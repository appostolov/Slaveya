var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Продавам вила гр.Варна кв.Галата меснос Боровец-Север ново строителство неизмазана външно.Ток и вода.На 10км. от центъра на Варна,на 2км. от плажа.Състои се от 4 стаи,лятна кухня,гараж и складова пост ...";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Вилла на продажу Варна, Галата Боровец- Северо местность, нового строительства и штукатурка .Електричества и вода . 10 км от центре города, в 2 км. плаже.Имеет 4 комнат, летняя кухня, гараж и склад.80 ..";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Villa for sale Varna Galata Borovets North mesnos new construction and plaster vanshno.Tok voda.Na 10km. from the city center, 2km. by plazha.Sastoi of 4 rooms, summer kitchen, garage and warehouse po ... ";
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

