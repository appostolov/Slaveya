var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Предлагаме за продажба двустаен апартамент в апарт-хотел, в центъра на Слънчев бряг. В сградата има ресторант, фитнес зала и козметичен център. Апартамента е на втори етаж с разположение: спалня и дневна, в която може да се направи кухненски кът, баня и тоалетна, тераса към улицата.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Мы предлагаем однокомнатную квартиру в апарт-отель на Солнечном Берегу.Здание ресторана, тренажерный зал и салон красоты.Квартира находится на втором месте этаж: спальня и гостиная, где можно сделать кухню, ванную и туалет, балкон на улицу.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "We offer one-bedroom apartment in apart-hotel in Sunny Beach. The building has a restaurant, gym and beauty center. The apartment is on the second floor location: bedroom and living room, where you can make a kitchen, bathroom and toilet, balcony to the street.";
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

