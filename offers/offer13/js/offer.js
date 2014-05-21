var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Селото се намира на 8км. от гр.Бургас и летище Бургас, близо е до парк Странджа и гр.Созопол. Парцела е до регулация /НПИ/ панорама ез. Мандра и Бургас, граничи с вилната зона и селото. Тихо и спокойно място за живеене!!!";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Деревня расположена в 8 км. от Бургаса и аэропорта Бургас, недалеко от парка Странджа и Созополь. Участок регулируется / IAS / Вид на озеро Мандра и Бургаса, на границе пригородах и деревня. Тихое место для жизни!";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "The village is situated 8km. from Burgas and Burgas airport, close to park Strandzha and Sozopol. The plot is regulated by / IAS / Lake view. Mandra and Burgas, bordering suburbs and countryside. Quiet place to live!";
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

