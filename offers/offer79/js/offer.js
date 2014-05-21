var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "Параметри Лифт Мебелировка Охрана Паркинг Интернет Басейн Апартхотел \"Гренада\" е разположен в южната част на КК Слънчев бряг в непосредствена близост до плажа. Архитектурата му е в съвременен стил с плавни форми и пастелени тонове, които са в хармония с морската среда. Комплексът се намира в близост до всички атракции на Слънчев бряг и е на 11,5 км от Несебър. \"Гренада\" предлага много модерни и функционални съоръжения. Освен ресторанта, магазина и фитнес клуба, собствениците на апартамент могат да ползват услугите на парко-салона, масажния салон, интернет зала, обменно бюро. Комплексът съдържа още и лоби-бар и бар от известната верига Hollywood Select, игрална стая за деца, открит басейн и прилежащите външни барове. Апартамента е на 4 етаж с 1 спалня, 66 м2, напълно мебелиран. Изглед към басейна Годишна поддръжка - 12 Е/м2 с ДДС";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "Параметры Лифт Мебелировка Охрана Парковка Интернет Бассейн Апартотель \"Гренада\" расположен в южной части КК Солнечный берег. В непосредственной близости к апартотелю находится пляж. Архитектура апартотеля выполнена в современном стиле. Плавные формы в пастельных тонах, в гармонии с морской средой. Комплекс находится близости всех аттракционах К.К Солнечный берег и в 1,5 км от центральной части г. Несебр . \"Гренада\" предлагает множество фешенебельных и функциональных сооружений. Помимо ресторана, магазина и фитнес клуба, собственники апартаментов имеют возможность пользоваться услугами парикмахерского салона, массажного салона, интернет зала, обменного бюро. Комплекс располагает лоби-баром и бар известной сети Hollywood Select, игровая комната для детей , открытый бассейн, с прилегающим внешним баром. Апартамент на 4 этаже с 1 спальней Плодащь – 66 кв.м. Полная мебелировка Вид на бассейн Годовая поддержка – 12 евро/кв.м. с НДС";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "Parameters Lift Furniture Internet Security Parking Pool Aparthotel \" Grenada \" is located in the southern part of Sunny Beach close to the beach. The architecture is contemporary in style with smooth shapes and pastel colors that are in harmony with the marine environment. The complex is located close to all the attractions of Sunny Beach and is 11.5 km from Nessebar. \" Grenada \" offers very modern and functional facilities. Besides restaurants, shops and fitness clubs , apartment owners can use the services of parking , massage salon , internet room, exchange office . The complex also contains a lobby bar and chain from the famous Hollywood Select, game room for children , an outdoor pool and adjacent outdoor bars . The apartment is on the 4th floor with 1 bedroom, 66 m2 , fully furnished . Overlooking the pool Annual maintenance - 12 E/m2 VAT";
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

