var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Парцела е разположен на 8км от Бургас и летище Бургас, не далеко от Парк Странджа и Созопол, Панорама езеро Мандра и Бургас, до брега на езерото, до новопроектиран комплекс от къщи. Може да се урегулира. Тихо и спокойно място за живеене!!!";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Участок расположен в 8 км. от Бургаса и аэропорта Бургас, недалеко от парка Странджа и Созополь.Участок регулируется / IAS / Вид на озеро Мандра и Бургаса, на берегу озеро, на границе пригородах . Тихое место для жизни!";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "The plot is situated at 8km from Bourgas and Bourgas Airport, not far from Park Strandja and Sozopol Panorama Lake Mandra and Burgas to the lake, to the newly designed complex of houses. Can be regulated. Quiet place to live!";
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

