var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Параметри Басейн Интернет Паркинг Охрана Мебелировка Асансьор Комплекс « Dolphin Bay» e разположен на няколко минути от лазурния морски бряг, а също и от големия атракционен курорт Свети Влас - с пристанище за яхти, големи съвременни барове и уютни ресторанти. Комплекс «Dolphin Bay» е разделен на 4 секции, при повечето от апартаментите се открива невероятна гледка към морето, стария град на Несебър и на курорта Слънчев бряг В комплекса има - басейн за възрастни и деца, детска площадка, паркоместа, целогодишна охрана, озеленяване и ландшафт, възможност за мебелиране и отдаване под наем на апартамента. Апартамент с 2 спални на партерен етаж с площ 77м2 Изглед към басейн Годишна поддръжка - 12Е/м2 с ДДС";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Параметры Бассейн Интернет Парковка Охрана Мебелировка Лифт Комплекс « Dolphin Bay» расположен всего лишь в минуту расстояния от лазурного морского берега, а также и от самого крупного аттракциона курорта Святого Власа – пристани для яхт, окруженной современными барами и уютными ресторанами. Комплекс «Dolphin Bay» разделен на 4 секции, при том с большинства квартир открывается невероятный вид на море, старинный город Несебр и на курорт «Солнечный берег». О комплексе: -Бассейн для взрослых и детей; - Детская площадка; - автостоянка; - Круглогодичная охрана; - Озеленение и ландшафт; - Возможность для меблировки и сдачи в аренду квартир. Апартамент с 2 спальнями на партерном этаже Площадь – 77 кв.м. Вид на бассейн и море Годовая поддержка -12 евро/кв.м. с НДС";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Parameters Internet Pool Parking Security Furniture Lift Complex «Dolphin Bay» e located a few minutes from the azure sea and also by the great amusement resort Sveti Vlas - a marina , large modern bars and cozy restaurants . Complex «Dolphin Bay» is divided into four sections , most of the apartments have magnificent views of the sea, the old town of Nessebar and Sunny Beach resort - pool for adults and children, playground , parking , year-round security, landscaping and landscape, opportunity furnishings and rental apartments. 2 bedroom apartment on the ground floor with an area of ​​77m2 overlooking the pool Annual maintenance - 12E/m2 VAT";
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

