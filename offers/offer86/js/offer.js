var img_hold = document.getElementById("img_hold");
var imgss = img_hold.getElementsByTagName("img");

for(var a = 0; a < imgss.length; a++){
	if(a!=0){
		imgss[a].style.display = "none";
	}	
}

var bg = function(){
	document.getElementById("o_descr").innerHTML = "\"Златни дюни\" - изключително стилен и елегантен жилищен комплекс, разположен на брега на морето в Приморско. Зона, в която се нарича комплекса Дяволския залив, между южния плаж на град Приморско и Международния младежки център. В този момент в изграждането на нисък интензитет и отлични условия за отдих и развлечения: - Ясно и топло море, - Санди крайбрежие е повече от 4 км. - Девствена природа През последните години град Приморско е един от най-популярните ваканционни дестинации по българското крайбрежие на Черно море. Доброто му местоположение между Странджа и красивите български плажове, предлага уникална възможност за една незабравима почивка: - Посещения на различни забележителности на резервата, - Разходка с лодка по река Ропотамо - Исторически и културен туризъм във вечния град Созопол / 18 км /. \"Златни дюни\" се отличават не само за идеалното си местоположение и модерна архитектура, рационално разпределение на пространството, и разнообразна инфраструктура за удобство на посетителите: - красива градина, паркинг, басейн и др. продажба на апартаменти: - Студиа - в размер на 38-45 метра; - С 1 спалня - с площ от 60 квадратни метра; - С две спални - с площ от 115 кв.м. Апартаментите се предлагат за продажба с висококачествени довършителни работи, с инсталирана кухня и санитарно оборудване, както и климатик. Surrender - 31. Юли 2013 г.";
};

var ru = function(){
	document.getElementById("o_descr").innerHTML = "„Золотые дюны”- исключительно стильный и элегантный жилой комплекс, расположенный на самом берегу моря в курорте Приморско. Район, где находится комплекс, называется Дьявольский залив, что между южным пляжем города Приморско и Международным Молодежным Центром. В этом месте малая интенсивность строительства и прекрасные условия для отдыха и развлечений: - чистое и теплое море, - песчаная полоса длиной более 4-х км. - нетронутая природа В последние годы город Приморско стал одним из самых популярнх мест для отдыха на болгарском Черноморье. Его удачное местоположение в границах большого заповеника Странджа и между самыми, пожалуй, живописными болгарскими пляжами, создает уникальные возможности для незабываемого и полноценного отдыха: - посещение разных достопримечательностей заповедника, - прогулка на лодке по реке Ропотамо, - исторический и культурный туризм в вечном городе Созополе /18 км/. „Золотые дюны” отличаются не только своим идеальным местоположением, но и современной архитектурой, рациональным распределением площади, и разнообразной инфраструктурой, обеспечивающей удобства отдыхающим: – красивый сад, парковка, басейн, и т.д. На продажу предлагаются следующие варианты квартир: - Студии – с площадью от 38 до 45 кв.м.; - С 1 спальней – с площадью 60 кв.м.; - С 2 спальнями – с площадью 115 кв.м. Квартиры предлагаются к продаже с внутренней отделкой высокого качества, с установленным кухонным и сантехническим оборудованием, а также с кондиционерами. Сдача – 31. Июль 2013г.";
};

var en = function(){
	document.getElementById("o_descr").innerHTML = "\" Golden Dunes \" - very stylish and elegant residential complex located on the beach in Primorsko . Area in which the complex is called Devil's Bay , between the southern beach town of Primorsko International Youth Center . At this point in the construction of low intensity and excellent conditions for recreation and entertainment: - Clear and warm sea - Sandy Coast is more than 4 km. - Wilderness In recent years, the town of Primorsko is one of the most popular holiday destinations on the Bulgarian Black Sea coast . Good location between Strandja and beautiful Bulgarian beaches, offers a unique opportunity for an unforgettable holiday : - Unique sights Reserve - Boat Ropotamo - Historical and cultural tourism in the eternal city of Sozopol / 18 km / . \" Golden Dunes \" is distinguished not only for its ideal location and modern architecture, rational distribution of space and varied infrastructure for the convenience of visitors : - beautiful garden, pool and more. Apartments for sale : - Studios - amounting to 38-45 meters ; - 1 bedroom - an area of ​​60 square meters ; - Two bedrooms - an area of ​​115 square meters The apartments are offered for sale with high quality finishing, installed kitchen and bathroom equipment, and air conditioning. Surrender - 31 . July 2013";
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

