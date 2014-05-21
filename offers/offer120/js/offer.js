var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Къща двуетажна в с. Синеморец, със самостоятелно дворно място от 400кв.м, напълно обзаведена, на първи етаж дневна с кухня, баня с тоалетна, на втори етаж две спални с баня и тоалетна , РЗП 175кв.м. , с парно отопление и климатици. ПЪРВА линия море, до рибарското пристанище! Панорама море!";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Двухэтажный дом в Синеморец, участок 400 кв.м., полностью меблирована, первом этаже гостиная, кухня, ванная комната, второй этаж две спальни с ванной комнатой, застроеная площ 175 м2, С отопления для зима и кондиционери. Первая линия моря, недалеко от рыбного порта! Вид на море";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Two storey house in Sinemorets, self-yard of 400 sq.m., fully furnished, first floor living room, kitchen, bathroom, second floor bedroom with bathroom, living area 175 m2 With heating and air conditioning. First line sea, near the fishing port! Sea view!";
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

