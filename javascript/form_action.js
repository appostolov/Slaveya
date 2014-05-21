/**
 * автор:Петър Апостолов
 * Този файл е предназначен да приеме избора на клиента.
 * Съдържанието на полетата за въвеждане се валидира, за да може да послужи за избор от оферти.
 * В зависимост от направения избор се създават елементи, отговарящи на засегнатите оферти.
 */
			
			var property_type = document.getElementById("prop_type");
			var property_place = document.getElementById("prop_place");
			var property_price = document.getElementById("prop_price");
			var property_area = document.getElementById("prop_area");
			
			var what_explan = document.getElementById("what_menu_mes");
			
			var where_explan = document.getElementById("where_menu_mes");
			
			var money_explan = document.getElementById("money_menu_mes");
			
			var area_explan = document.getElementById("area_menu_mes");
			
			var opt_what_all = document.getElementById("option_what_all");
			var opt_what_aps = document.getElementById("option_what_aps");
			var opt_what_ind = document.getElementById("option_what_industrial");
			var opt_what_land = document.getElementById("option_what_land");
			var opt_what_house = document.getElementById("option_what_house");
			var opt_what_hotel = document.getElementById("option_what_hotel");
			var opt_what_studio = document.getElementById("option_what_studio");
			
			
			var opt_what_buy = document.getElementById("but_buy");
			var opt_what_rent = document.getElementById("but_rent");
			
			var opt_where_all = document.getElementById("option_where_all");
			var opt_where_alexandrovo = document.getElementById("option_where_alexandrovo");
			var opt_where_ahtopol = document.getElementById("option_where_ahtopol");
			var opt_where_balchik = document.getElementById("option_where_balchik");
			var opt_where_burgas = document.getElementById("option_where_burgas");
			var opt_where_varvara = document.getElementById("option_where_varvara");
			var opt_where_varna = document.getElementById("option_where_varna");
			var opt_where_veselie = document.getElementById("option_where_veselie");
			var opt_where_vizitza = document.getElementById("option_where_vizitza");
			var opt_where_goritza = document.getElementById("option_where_goritza");
			var opt_where_gumoshtnik = document.getElementById("option_where_gumoshtnik");
			var opt_where_dimchevo = document.getElementById("option_where_dimchevo");
			var opt_where_dobrinovo = document.getElementById("option_where_dobrinovo");
			var opt_where_jitosvyat = document.getElementById("option_where_jitosvyat");
			var opt_where_zornitza = document.getElementById("option_where_zornitza");
			var opt_where_isperih = document.getElementById("option_where_isperih");
			var opt_where_kableshkovo = document.getElementById("option_where_kableshkovo");
			var opt_where_kosharitza = document.getElementById("option_where_kosharitza");
			var opt_where_nesebar = document.getElementById("option_where_nesebar");
			var opt_where_pamporovo = document.getElementById("option_where_pamporovo");
			var opt_where_pismenovo = document.getElementById("option_where_pismenovo");
			var opt_where_pomorie = document.getElementById("option_where_pomorie");
			var opt_where_primorsko = document.getElementById("option_where_primorsko");
			var opt_where_prisad = document.getElementById("option_where_prisad");
			var opt_where_ravda = document.getElementById("option_where_ravda");
			var opt_where_rudnik = document.getElementById("option_where_rudnik");
			var opt_where_sveti_vlas = document.getElementById("option_where_sveti_vlas");
			var opt_where_sinemoretz = document.getElementById("option_where_sinemoretz");
			var opt_where_sunny = document.getElementById("option_where_sunny");
			var opt_where_sozopol = document.getElementById("option_where_sozopol");
			var opt_where_suhodol = document.getElementById("option_where_suhodol");
			

			var min_money_ = document.getElementById("min_money");
			var max_money_ = document.getElementById("max_money");
			var min_area_ = document.getElementById("min_area");
			var max_area_ = document.getElementById("max_area");
			
			var what_on = new Array();
			var buy_rent_on = new Array();
			var where_on = new Array();
			
			var all = "Всички";
			var only_numbers = "Само цифри!";
			
			for(var a = 0; a < offers.length; a ++){
				what_on[a] = offers[a].what;
				buy_rent_on[a] = offers[a].buy_rent;
				where_on[a] = offers[a].where;
			}

			var change_to_ru = function(){
				
				all = "Все";
				only_numbers = "Только цифры!";
				
				property_type.innerHTML = "ЧТО";
				property_place.innerHTML = "МЕСТО";
				property_price.innerHTML = "ЦЕНЫ";
				property_area.innerHTML = "ОБЛАСТЬ";
				
				what_explan.innerHTML = "Что недвижимости вас интересует?";
				where_explan.innerHTML = "Мы предлагаем из этих места.";
				money_explan.innerHTML = "Вы можете установить минимальное и максимальное суммы.";
				area_explan.innerHTML = "Вы можете установить минимальный и максимальный размер.";
				
				opt_what_all.innerHTML = all;
				opt_what_aps.innerHTML = "Квартиры";
				opt_what_land.innerHTML = "Земля";
				opt_what_house.innerHTML = "Дома/Виллы";
				opt_what_ind.innerHTML = "Промышленный";
				opt_what_hotel.innerHTML = "Гостиницы";
				opt_what_studio.innerHTML = "Студии";
				
				
				opt_what_buy.innerHTML = "Покупка";
				opt_what_rent.innerHTML =  "Аренда";
				
				opt_where_all.innerHTML = all;
				opt_where_alexandrovo.innerHTML = "Александрово";
				opt_where_ahtopol.innerHTML = "Ахтопол";
				opt_where_balchik.innerHTML = "Балчик";
				opt_where_burgas.innerHTML = "Бургас";
				opt_where_varvara.innerHTML = "Варвара";
				opt_where_varna.innerHTML = "Варна";
				opt_where_veselie.innerHTML = "Веселие";
				opt_where_vizitza.innerHTML = "Визица";
				opt_where_goritza.innerHTML = "Горица";
				opt_where_gumoshtnik.innerHTML = "Гумощник";
				opt_where_dimchevo.innerHTML = "Димчево";
				opt_where_dobrinovo.innerHTML = "Добриново";
				opt_where_jitosvyat.innerHTML = "Житосвят";
				opt_where_zornitza.innerHTML = "Зорница";
				opt_where_isperih.innerHTML = "Исперих";
				opt_where_kableshkovo.innerHTML = "Каблешково";
				opt_where_kosharitza.innerHTML = "Кошарица";
				opt_where_nesebar.innerHTML = "Несебр";
				opt_where_pamporovo.innerHTML = "Пампорово";
				opt_where_pismenovo.innerHTML = "Писменово";
				opt_where_pomorie.innerHTML = "Поморие";
				opt_where_primorsko.innerHTML = "Приморско";
				opt_where_prisad.innerHTML = "Присад";
				opt_where_ravda.innerHTML = "Равда";
				opt_where_rudnik.innerHTML = "Рудник";
				opt_where_sveti_vlas.innerHTML = "Святой Влас";
				opt_where_sinemoretz.innerHTML = "Синеморец";
				opt_where_sunny.innerHTML = "Солнечный берег";
				opt_where_sozopol.innerHTML = "Созополь";
				opt_where_suhodol.innerHTML = "Суходол";
				
				
				
				min_money_.innerHTML = "мин.";
				max_money_.innerHTML = "макс.";
				min_area_.innerHTML = "мин.";
				max_area_.innerHTML = "макс.";

				for(var a = 0; a < offers.length; a ++){
					what_on[a] = offers[a].what_ru;
					where_on[a] = offers[a].where_ru;
				}
				
				find_offers();
				
			};
			
			var change_to_en = function(){
				
				all = "All";
				only_numbers = "Only numbers!";
				
				property_type.innerHTML = "WHAT";
				property_place.innerHTML = "WHERE";
				property_price.innerHTML = "PRICE";
				property_area.innerHTML = "AREA";
				
				what_explan.innerHTML = "What kind of property you are interested in?";
				where_explan.innerHTML = "We have properties in these locations.";
				money_explan.innerHTML = "You can set the minimum and maximum amount.";
				area_explan.innerHTML = "You can set the minimum and maximum area.";
				
				opt_what_all.innerHTML = all;
				opt_what_aps.innerHTML = "Apartments";
				opt_what_land.innerHTML = "Land";
				opt_what_house.innerHTML = "Houses/Villas";
				opt_what_ind.innerHTML = "Industrial";
				opt_what_studio.innerHTML = "Studios";
				opt_what_hotel.innerHTML = "Hotels";
				
				
				opt_what_buy.innerHTML = "Buy";
				opt_what_rent.innerHTML =  "Rent";
				
				opt_where_all.innerHTML = all;
				opt_where_alexandrovo.innerHTML = "Alexandrovo village";
				opt_where_ahtopol.innerHTML = "Ahtopol village";
				opt_where_balchik.innerHTML = "Балчик";
				opt_where_burgas.innerHTML = "Burgas";
				opt_where_varvara.innerHTML = "Varvara village";
				opt_where_varna.innerHTML = "Varna";
				opt_where_veselie.innerHTML = "Veselie village";
				opt_where_vizitza.innerHTML = "Vizitza village";
				opt_where_goritza.innerHTML = "Goritza village";
				opt_where_gumoshtnik.innerHTML = "Gumoshtnik village";
				opt_where_dimchevo.innerHTML = "Dimchevo Village";
				opt_where_dobrinovo.innerHTML = "Dobrinovo village";
				opt_where_jitosvyat.innerHTML = "Jitosvyat village";
				opt_where_zornitza.innerHTML = "Zornitza village";
				opt_where_isperih.innerHTML = "Isperih";
				opt_where_kableshkovo.innerHTML = "Kableshkovo";
				opt_where_kosharitza.innerHTML = "Kosharitza village";
				opt_where_nesebar.innerHTML = "Nesebar";
				opt_where_pamporovo.innerHTML = "Pamporovo";
				opt_where_pismenovo.innerHTML = "Pismenovo village";
				opt_where_pomorie.innerHTML = "Pomorie";
				opt_where_primorsko.innerHTML = "Primorsko";
				opt_where_prisad.innerHTML = "Prisad village";
				opt_where_ravda.innerHTML = "Ravda";
				opt_where_rudnik.innerHTML = "Rudnik village";
				opt_where_sveti_vlas.innerHTML = "St. Vlas";
				opt_where_sinemoretz.innerHTML = "Sinemoretz village";
				opt_where_sunny.innerHTML = "Sunny Beach";
				opt_where_sozopol.innerHTML = "Sozopol";
				opt_where_suhodol.innerHTML = "Suhodol village";
				
				
				
				
				
				
				min_money_.innerHTML = "min.";
				max_money_.innerHTML = "max.";
				min_area_.innerHTML = "min.";
				max_area_.innerHTML = "max.";

				for(var a = 0; a < offers.length; a ++){
					what_on[a] = offers[a].what_en;
					where_on[a] = offers[a].where_en;
				}
				
				find_offers();
				
			};
			
			var change_to_bg = function(){
				
				all = "Всички";
				only_numbers = "Само цифри!";
				
				what_explan.innerHTML = "Какъв имот ви интересува?";
				where_explan.innerHTML = "Имаме предложения на съответните места.";
				money_explan.innerHTML = "Тук можете да зададете минимална и максимална сума.";
				area_explan.innerHTML = "Тук можете да зададете минимална и максимална площ.";
				
				property_type.innerHTML = "ВИД ИМОТ";
				property_place.innerHTML = "МЯСТО";
				property_price.innerHTML = "ЦЕНА";
				property_area.innerHTML = "ПЛОЩ";
				
				opt_what_all.innerHTML = all;
				opt_what_aps.innerHTML = "Апартаменти";
				opt_what_land.innerHTML = "Земя";
				opt_what_house.innerHTML = "Къщи/Вили";
				opt_what_ind.innerHTML = "Промишлени";
				opt_what_studio.innerHTML = "Студиа";
				opt_what_hotel.innerHTML = "Хотели";
				
				
				
				opt_what_buy.innerHTML = "Покупка";
				opt_what_rent.innerHTML =  "Наем";
				
				opt_where_all.innerHTML = all;
				opt_where_alexandrovo.innerHTML = "с.Александрово";
				opt_where_ahtopol.innerHTML = "с.Ахтопол";
				opt_where_balchik.innerHTML = "Балчик";
				opt_where_burgas.innerHTML = "Бургас";
				opt_where_varvara.innerHTML = "с.Варвара";
				opt_where_varna.innerHTML = "Варна";
				opt_where_veselie.innerHTML = "с.Веселие";
				opt_where_vizitza.innerHTML = "с.Визица";
				opt_where_goritza.innerHTML = "с.Горица";
				opt_where_gumoshtnik.innerHTML = "с.Гумощник";
				opt_where_dimchevo.innerHTML = "с.Димчево";
				opt_where_dobrinovo.innerHTML = "с.Добриново";
				opt_where_jitosvyat.innerHTML = "с.Житосвят";
				opt_where_zornitza.innerHTML = "с.Зорница";
				opt_where_isperih.innerHTML = "Исперих";
				opt_where_kableshkovo.innerHTML = "гр.Каблешково";
				opt_where_kosharitza.innerHTML = "с.Кошарица";
				opt_where_nesebar.innerHTML = "Несебър";
				opt_where_pamporovo.innerHTML = "Пампорово";
				opt_where_pismenovo.innerHTML = "с.Писменово";
				opt_where_pomorie.innerHTML = "Поморие";
				opt_where_primorsko.innerHTML = "Приморско";
				opt_where_prisad.innerHTML = "с.Присад";
				opt_where_ravda.innerHTML = "Равда";
				opt_where_rudnik.innerHTML = "с.Рудник";
				opt_where_sveti_vlas.innerHTML = "Свети Влас";
				opt_where_sinemoretz.innerHTML = "с.Синеморец";
				opt_where_sunny.innerHTML = "Слънчев бряг";
				opt_where_sozopol.innerHTML = "Созопол";
				opt_where_suhodol.innerHTML = "с.Суходол";
				
				
				
				
				
				min_money_.innerHTML = "мин.";
				max_money_.innerHTML = "макс.";
				min_area_.innerHTML = "мин.";
				max_area_.innerHTML = "макс.";

				for(var a = 0; a < offers.length; a ++){
					what_on[a] = offers[a].what;
					where_on[a] = offers[a].where;
				}
				
				find_offers();
				
			};

			document.getElementById("input_what").value = all;
					
			document.getElementById("input_where").value = all;
			
			document.getElementById("from_money").value = "";
					
			document.getElementById("to_money").value = "";
			
			document.getElementById("from_area").value = "";
					
			document.getElementById("to_area").value = "";

			for(var a = 0; a < offers.length; a ++){
				var o_а = document.createElement("a");
				o_а.id = "el_"+a;
				o_а.href = offers[a].path;
				o_а.style.backgroundImage = "url("+offers[a].b_path+")";
				document.getElementById("area").appendChild(o_а);
								
				var o_d = document.createElement("div");
				o_d.id = "el_d_"+a;
				document.getElementById("el_"+a).appendChild(o_d);
								
				var o_p = document.createElement("p");
				o_p.id = "el_info_"+a;
				o_p.innerHTML = what_on[a]+"<br />"+where_on[a]+"<br />"+offers[a].price+"€<br />"+offers[a].area+"[m2]";
				o_d.appendChild(o_p);
			}
				
			function find_offers(){
					
				$("#area").empty();
					
				var what_selected = document.getElementById("input_what").value;
					
				var where_selected = document.getElementById("input_where").value;
				
				var for_buy = document.getElementById("input_buy").checked;
				var for_rent = document.getElementById("input_rent").checked;
				
				var from_money_selected = document.getElementById("from_money").value;
				if(isNaN(from_money_selected) == true){
					from_money_selected = 0;
					if(document.getElementById("from_money").value == only_numbers){
						document.getElementById("from_money").value = "";
					}else document.getElementById("from_money").value = only_numbers;
				}
				if(from_money_selected == ""){
					from_money_selected = 0;
					}
					
				var to_money_selected = document.getElementById("to_money").value;
				if(isNaN(to_money_selected) == true){
					to_money_selected = 999999999;
					if(document.getElementById("to_money").value == only_numbers){
						document.getElementById("to_money").value = "";
					}else document.getElementById("to_money").value = only_numbers;
				}
				if(to_money_selected == ""){
					to_money_selected = 999999999;
					}

				var from_area_selected = document.getElementById("from_area").value;
				if(isNaN(from_area_selected) == true){
					from_area_selected = 0;
					if(document.getElementById("from_area").value == only_numbers){
						document.getElementById("from_area").value = "";
					}else document.getElementById("from_area").value = only_numbers;
				}
				if(from_area_selected == ""){
					from_area_selected = 0;
					}
						
				var to_area_selected = document.getElementById("to_area").value;
				if(isNaN(to_area_selected) == true){
					to_area_selected = 999999999;
					if(document.getElementById("to_area").value == only_numbers){
						document.getElementById("to_area").value = "";
					}else document.getElementById("to_area").value = only_numbers;
				}
				if(to_area_selected == ""){
					to_area_selected = 999999999;
					}
				if(what_selected == all && where_selected == all && for_buy == true){
					for(var a = 0; a < offers.length; a ++){
						if(offers[a].price >= from_money_selected && offers[a].price <= to_money_selected && offers[a].area >= from_area_selected && offers[a].area <= to_area_selected && offers[a].buying == true){
							
							var o_а = document.createElement("a");
							o_а.id = "el_"+a;
							o_а.href = offers[a].path;
							o_а.style.backgroundImage = "url("+offers[a].b_path+")";
							document.getElementById("area").appendChild(o_а);
							
							var o_d = document.createElement("div");
							o_d.id = "el_d_"+a;
							document.getElementById("el_"+a).appendChild(o_d);
							
							var o_p = document.createElement("p");
							o_p.id = "el_info_"+a;
							o_p.innerHTML = what_on[a]+"<br />"+opt_what_buy.innerHTML+"<br />"+offers[a].price+"€<br />"+offers[a].area+"[m2]";
							o_d.appendChild(o_p);
							
						}
					}
				}
				
				if(what_selected == all && where_selected == all && for_buy == false){
					for(var a = 0; a < offers.length; a ++){
						if(offers[a].price >= from_money_selected && offers[a].price <= to_money_selected && offers[a].area >= from_area_selected && offers[a].area <= to_area_selected && offers[a].buying == false){
							
							var o_а = document.createElement("a");
							o_а.id = "el_"+a;
							o_а.href = offers[a].path;
							o_а.style.backgroundImage = "url("+offers[a].b_path+")";
							document.getElementById("area").appendChild(o_а);
							
							var o_d = document.createElement("div");
							o_d.id = "el_d_"+a;
							document.getElementById("el_"+a).appendChild(o_d);
							
							var o_p = document.createElement("p");
							o_p.id = "el_info_"+a;
							o_p.innerHTML = what_on[a]+"<br />"+opt_what_rent.innerHTML+"<br />"+where_on[a]+"<br />"+offers[a].price+"€<br />"+offers[a].area+"[m2]";
							o_d.appendChild(o_p);
							
						}
					}opt_what_rent.innerHTML
				}
				
				
				if(what_selected != all && where_selected != all && for_buy == true){
					for(var a = 0; a < offers.length; a ++){
						if(what_on[a] == what_selected && where_on[a] == where_selected && offers[a].price >= from_money_selected && offers[a].price <= to_money_selected && offers[a].area >= from_area_selected && offers[a].area <= to_area_selected && offers[a].buying == true ){
							var o_а = document.createElement("a");
							o_а.id = "el_"+a;
							o_а.href = offers[a].path;
							o_а.style.backgroundImage = "url("+offers[a].b_path+")";
							document.getElementById("area").appendChild(o_а);
							
							var o_d = document.createElement("div");
							o_d.id = "el_d_"+a;
							document.getElementById("el_"+a).appendChild(o_d);
							
							var o_p = document.createElement("p");
							o_p.id = "el_info_"+a;
							o_p.innerHTML = what_on[a]+"<br />"+opt_what_buy.innerHTML+"<br />"+where_on[a]+"<br />"+offers[a].price+"€<br />"+offers[a].area+"[m2]";
							o_d.appendChild(o_p);
						}
					}
				}
				
				if(what_selected != all && where_selected != all && for_buy == false){
					for(var a = 0; a < offers.length; a ++){
						if(what_on[a] == what_selected && where_on[a] == where_selected && offers[a].price >= from_money_selected && offers[a].price <= to_money_selected && offers[a].area >= from_area_selected && offers[a].area <= to_area_selected && offers[a].buying == false){
							var o_а = document.createElement("a");
							o_а.id = "el_"+a;
							o_а.href = offers[a].path;
							o_а.style.backgroundImage = "url("+offers[a].b_path+")";
							document.getElementById("area").appendChild(o_а);
							
							var o_d = document.createElement("div");
							o_d.id = "el_d_"+a;
							document.getElementById("el_"+a).appendChild(o_d);
							
							var o_p = document.createElement("p");
							o_p.id = "el_info_"+a;
							o_p.innerHTML = what_on[a]+"<br />"+opt_what_rent.innerHTML+"<br />"+where_on[a]+"<br />"+offers[a].price+"€<br />"+offers[a].area+"[m2]";
							o_d.appendChild(o_p);
						}
					}
				}
				
				if(what_selected == all && where_selected != all && for_buy == true){
					for(var a = 0; a < offers.length; a ++){
						if(where_on[a] == where_selected && offers[a].price >= from_money_selected && offers[a].price <= to_money_selected && offers[a].area >= from_area_selected && offers[a].area <= to_area_selected && offers[a].buying == true){
							var o_а = document.createElement("a");
							o_а.id = "el_"+a;
							o_а.href = offers[a].path;
							o_а.style.backgroundImage = "url("+offers[a].b_path+")";
							document.getElementById("area").appendChild(o_а);
							
							var o_d = document.createElement("div");
							o_d.id = "el_d_"+a;
							document.getElementById("el_"+a).appendChild(o_d);
							
							var o_p = document.createElement("p");
							o_p.id = "el_info_"+a;
							o_p.innerHTML = what_on[a]+"<br />"+opt_what_buy.innerHTML+"<br />"+where_on[a]+"<br />"+offers[a].price+"€<br />"+offers[a].area+"[m2]";
							o_d.appendChild(o_p);
						}
					}
				}
				
				if(what_selected == all && where_selected != all && for_buy == false){
					for(var a = 0; a < offers.length; a ++){
						if(where_on[a] == where_selected && offers[a].price >= from_money_selected && offers[a].price <= to_money_selected && offers[a].area >= from_area_selected && offers[a].area <= to_area_selected && offers[a].buying == false){
							var o_а = document.createElement("a");
							o_а.id = "el_"+a;
							o_а.href = offers[a].path;
							o_а.style.backgroundImage = "url("+offers[a].b_path+")";
							document.getElementById("area").appendChild(o_а);
							
							var o_d = document.createElement("div");
							o_d.id = "el_d_"+a;
							document.getElementById("el_"+a).appendChild(o_d);
							
							var o_p = document.createElement("p");
							o_p.id = "el_info_"+a;
							o_p.innerHTML = what_on[a]+"<br />"+opt_what_rent.innerHTML+"<br />"+where_on[a]+"<br />"+offers[a].price+"€<br />"+offers[a].area+"[m2]";
							o_d.appendChild(o_p);
						}
					}
				}
				
				if(what_selected != all && where_selected == all && for_buy == true){
					for(var a = 0; a < offers.length; a ++){
						if(what_on[a] == what_selected && offers[a].price >= from_money_selected && offers[a].price <= to_money_selected && offers[a].area >= from_area_selected && offers[a].area <= to_area_selected && offers[a].buying == true){
							var o_а = document.createElement("a");
							o_а.id = "el_"+a;
							o_а.href = offers[a].path;
							o_а.style.backgroundImage = "url("+offers[a].b_path+")";
							document.getElementById("area").appendChild(o_а);
							
							var o_d = document.createElement("div");
							o_d.id = "el_d_"+a;
							document.getElementById("el_"+a).appendChild(o_d);
							
							var o_p = document.createElement("p");
							o_p.id = "el_info_"+a;
							o_p.innerHTML = what_on[a]+"<br />"+opt_what_buy.innerHTML+"<br />"+where_on[a]+"<br />"+offers[a].price+"€<br />"+offers[a].area+"[m2]";
							o_d.appendChild(o_p);
						}
					}
				}
				
				if(what_selected != all && where_selected == all && for_buy == false){
					for(var a = 0; a < offers.length; a ++){
						if(what_on[a] == what_selected && offers[a].price >= from_money_selected && offers[a].price <= to_money_selected && offers[a].area >= from_area_selected && offers[a].area <= to_area_selected && offers[a].buying == false){
							var o_а = document.createElement("a");
							o_а.id = "el_"+a;
							o_а.href = offers[a].path;
							o_а.style.backgroundImage = "url("+offers[a].b_path+")";
							document.getElementById("area").appendChild(o_а);
							
							var o_d = document.createElement("div");
							o_d.id = "el_d_"+a;
							document.getElementById("el_"+a).appendChild(o_d);
							
							var o_p = document.createElement("p");
							o_p.id = "el_info_"+a;
							o_p.innerHTML = what_on[a]+"<br />"+opt_what_rent.innerHTML+"<br />"+where_on[a]+"<br />"+offers[a].price+"€<br />"+offers[a].area+"[m2]";
							o_d.appendChild(o_p);
						}
					}
				}
			}
			
function on_button_what(){
	
	var b = document.getElementsByClassName("menus");
	for(var s = 0; s < 4; s++){
		b[s].style.display = "none";
	}
	
	var r = document.getElementById("area");
	r.style.opacity = "0.5";
	
	var a = document.getElementById("what_menu");
	a.style.display = "block";
}

function on_button_what_out(){
		var a = document.getElementById("what_menu");
		a.style.display = "none";
		
		var r = document.getElementById("area");
		r.style.opacity = "1";
}

function on_button_where(){
	
	var b = document.getElementsByClassName("menus");
	for(var s = 0; s < 4; s++){
		b[s].style.display = "none";
	}
	
	var r = document.getElementById("area");
	r.style.opacity = "0.5";
	
	var a = document.getElementById("where_menu");
	a.style.display = "block";
}

function on_button_where_out(){
		var a = document.getElementById("where_menu");
		a.style.display = "none";
		
		var r = document.getElementById("area");
		r.style.opacity = "1";
}

function on_button_money(){
	
	var b = document.getElementsByClassName("menus");
	for(var s = 0; s < 4; s++){
		b[s].style.display = "none";
	}
	
	var r = document.getElementById("area");
	r.style.opacity = "0.5";
	
	var a = document.getElementById("money_menu");
	a.style.display = "block";
}
function on_button_money_out(){
		var a = document.getElementById("money_menu");
		a.style.display = "none";
		
		var r = document.getElementById("area");
		r.style.opacity = "1";
}

function on_button_area(){
	
	var b = document.getElementsByClassName("menus");
	for(var s = 0; s < 4; s++){
		b[s].style.display = "none";
	}
	
	var r = document.getElementById("area");
	r.style.opacity = "0.5";
	
	var a = document.getElementById("area_menu");
	a.style.display = "block";
}

function on_button_area_out(){
		var a = document.getElementById("area_menu");
		a.style.display = "none";
		
		var r = document.getElementById("area");
		r.style.opacity = "1";
}

function on_area(){
	
	var b = document.getElementsByClassName("menus");
	for(var s = 0; s < 4; s++){
		b[s].style.display = "none";
	}
	
	var r = document.getElementById("area");
	r.style.opacity = "1";
}


