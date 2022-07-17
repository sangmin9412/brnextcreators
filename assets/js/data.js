var baseURL = "";

function getTopping() {
  const data = `[{"idTopping":1,"name":"그레이엄크래커","path_select":"./images/topping_select/01.png","path_apply":"./images/topping_apply/01_01.png","path_apply2":"./images/topping_apply/01_02.png"},{"idTopping":2,"name":"그래놀라","path_select":"./images/topping_select/02.png","path_apply":"./images/topping_apply/02_01.png","path_apply2":"./images/topping_apply/02_02.png"},{"idTopping":3,"name":"달고나","path_select":"./images/topping_select/03.png","path_apply":"./images/topping_apply/03_01.png","path_apply2":"./images/topping_apply/03_02.png"},{"idTopping":4,"name":"딸기","path_select":"./images/topping_select/04.png","path_apply":"./images/topping_apply/04_01.png","path_apply2":"./images/topping_apply/04_02.png"},{"idTopping":5,"name":"딸기프레첼볼","path_select":"./images/topping_select/05.png","path_apply":"./images/topping_apply/05_01.png","path_apply2":"./images/topping_apply/05_02.png"},{"idTopping":6,"name":"땅콩","path_select":"./images/topping_select/06.png","path_apply":"./images/topping_apply/06_01.png","path_apply2":"./images/topping_apply/06_02.png"},{"idTopping":7,"name":"떡","path_select":"./images/topping_select/07.png","path_apply":"./images/topping_apply/07_01.png","path_apply2":"./images/topping_apply/07_02.png"},{"idTopping":8,"name":"롤리팝캔디","path_select":"./images/topping_select/08.png","path_apply":"./images/topping_apply/08_01.png","path_apply2":"./images/topping_apply/08_02.png"},{"idTopping":9,"name":"마카롱","path_select":"./images/topping_select/09.png","path_apply":"./images/topping_apply/09_01.png","path_apply2":"./images/topping_apply/09_02.png"},{"idTopping":10,"name":"망고","path_select":"./images/topping_select/10.png","path_apply":"./images/topping_apply/10_01.png","path_apply2":"./images/topping_apply/10_02.png"},{"idTopping":11,"name":"블루베리","path_select":"./images/topping_select/11.png","path_apply":"./images/topping_apply/11_01.png","path_apply2":"./images/topping_apply/11_02.png"},{"idTopping":12,"name":"스프링클스","path_select":"./images/topping_select/12.png","path_apply":"./images/topping_apply/12_01.png","path_apply2":"./images/topping_apply/12_02.png"},{"idTopping":13,"name":"아몬드","path_select":"./images/topping_select/13.png","path_apply":"./images/topping_apply/13_01.png","path_apply2":"./images/topping_apply/13_02.png"},{"idTopping":14,"name":"월넛","path_select":"./images/topping_select/14.png","path_apply":"./images/topping_apply/14_01.png","path_apply2":"./images/topping_apply/14_02.png"},{"idTopping":15,"name":"젤리","path_select":"./images/topping_select/15.png","path_apply":"./images/topping_apply/15_01.png","path_apply2":"./images/topping_apply/15_02.png"},{"idTopping":16,"name":"체리","path_select":"./images/topping_select/16.png","path_apply":"./images/topping_apply/16_01.png","path_apply2":"./images/topping_apply/16_02.png"},{"idTopping":17,"name":"초코프레첼볼","path_select":"./images/topping_select/17.png","path_apply":"./images/topping_apply/17_01.png","path_apply2":"./images/topping_apply/17_02.png"},{"idTopping":18,"name":"초콜렛쿠키(오레오)","path_select":"./images/topping_select/18.png","path_apply":"./images/topping_apply/18_01.png","path_apply2":"./images/topping_apply/18_02.png"},{"idTopping":19,"name":"초콜릿칩","path_select":"./images/topping_select/19.png","path_apply":"./images/topping_apply/19_01.png","path_apply2":"./images/topping_apply/19_02.png"},{"idTopping":20,"name":"치즈케이크큐브","path_select":"./images/topping_select/20.png","path_apply":"./images/topping_apply/20_01.png","path_apply2":"./images/topping_apply/20_02.png"},{"idTopping":21,"name":"케이크큐브(빵)","path_select":"./images/topping_select/21.png","path_apply":"./images/topping_apply/21_01.png","path_apply2":"./images/topping_apply/21_02.png"},{"idTopping":22,"name":"팝핑캔디","path_select":"./images/topping_select/22.png","path_apply":"./images/topping_apply/22_01.png","path_apply2":"./images/topping_apply/22_02.png"},{"idTopping":23,"name":"피스타치오","path_select":"./images/topping_select/23.png","path_apply":"./images/topping_apply/23_01.png","path_apply2":"./images/topping_apply/23_02.png"},{"idTopping":24,"name":"피칸","path_select":"./images/topping_select/24.png","path_apply":"./images/topping_apply/24_01.png","path_apply2":"./images/topping_apply/24_02.png"},{"idTopping":25,"name":"주관식","path_select":"./images/topping_select/25.png","path_apply":"./images/topping_apply/25_01.png","path_apply2":"./images/topping_apply/25_02.png"}]`;
  return JSON.parse(data);
}
function getRibbon() {
  const data = `[{"idRibbon":1,"name":"꿀","path_select":"./images/ribbon_select/01.png","path_apply":"./images/ribbon_apply/01_01.png","path_apply2":"./images/ribbon_apply/01_02.png"},{"idRibbon":2,"name":"떡","path_select":"./images/ribbon_select/02.png","path_apply":"./images/ribbon_apply/02_01.png","path_apply2":"./images/ribbon_apply/02_02.png"},{"idRibbon":3,"name":"망고","path_select":"./images/ribbon_select/03.png","path_apply":"./images/ribbon_apply/03_01.png","path_apply2":"./images/ribbon_apply/03_02.png"},{"idRibbon":4,"name":"블루베리","path_select":"./images/ribbon_select/04.png","path_apply":"./images/ribbon_apply/04_01.png","path_apply2":"./images/ribbon_apply/04_02.png"},{"idRibbon":5,"name":"슈크림","path_select":"./images/ribbon_select/05.png","path_apply":"./images/ribbon_apply/05_01.png","path_apply2":"./images/ribbon_apply/05_02.png"},{"idRibbon":6,"name":"스트로베리","path_select":"./images/ribbon_select/06.png","path_apply":"./images/ribbon_apply/06_01.png","path_apply2":"./images/ribbon_apply/06_02.png"},{"idRibbon":7,"name":"초콜릿","path_select":"./images/ribbon_select/07.png","path_apply":"./images/ribbon_apply/07_01.png","path_apply2":"./images/ribbon_apply/07_02.png"},{"idRibbon":8,"name":"카라멜","path_select":"./images/ribbon_select/08.png","path_apply":"./images/ribbon_apply/08_01.png","path_apply2":"./images/ribbon_apply/08_02.png"},{"idRibbon":9,"name":"크래클퍼지리본","path_select":"./images/ribbon_select/09.png","path_apply":"./images/ribbon_apply/09_01.png","path_apply2":"./images/ribbon_apply/09_02.png"},{"idRibbon":10,"name":"팥","path_select":"./images/ribbon_select/10.png","path_apply":"./images/ribbon_apply/10_01.png","path_apply2":"./images/ribbon_apply/10_02.png"},{"idRibbon":11,"name":"주관식","path_select":"./images/ribbon_select/11.png","path_apply":"./images/ribbon_apply/11_01.png","path_apply2":"./images/ribbon_apply/11_02.png"}]`;
  return JSON.parse(data);
}
function getFlavor() {
  const data = `[{"idFlavor":1,"name":"그린티","pathSelect":"./images/flavor_select/01.png","pathApplyWhole":"./images/flavor_apply/01_w.png","pathApplyPart":"./images/flavor_apply/01_p.png"},{"idFlavor":2,"name":"딸기","pathSelect":"./images/flavor_select/02.png","pathApplyWhole":"./images/flavor_apply/02_w.png","pathApplyPart":"./images/flavor_apply/02_p.png"},{"idFlavor":3,"name":"망고","pathSelect":"./images/flavor_select/03.png","pathApplyWhole":"./images/flavor_apply/03_w.png","pathApplyPart":"./images/flavor_apply/03_p.png"},{"idFlavor":4,"name":"다크초콜릿","pathSelect":"./images/flavor_select/04.png","pathApplyWhole":"./images/flavor_apply/04_w.png","pathApplyPart":"./images/flavor_apply/04_p.png"},{"idFlavor":5,"name":"블루베리","pathSelect":"./images/flavor_select/05.png","pathApplyWhole":"./images/flavor_apply/05_w.png","pathApplyPart":"./images/flavor_apply/05_p.png"},{"idFlavor":6,"name":"민트","pathSelect":"./images/flavor_select/06.png","pathApplyWhole":"./images/flavor_apply/06_w.png","pathApplyPart":"./images/flavor_apply/06_p.png"},{"idFlavor":7,"name":"밀크초콜릿","pathSelect":"./images/flavor_select/07.png","pathApplyWhole":"./images/flavor_apply/07_w.png","pathApplyPart":"./images/flavor_apply/07_p.png"},{"idFlavor":8,"name":"바닐라","pathSelect":"./images/flavor_select/08.png","pathApplyWhole":"./images/flavor_apply/08_w.png","pathApplyPart":"./images/flavor_apply/08_p.png"},{"idFlavor":9,"name":"솜사탕블루","pathSelect":"./images/flavor_select/09.png","pathApplyWhole":"./images/flavor_apply/09_w.png","pathApplyPart":"./images/flavor_apply/09_p.png"},{"idFlavor":10,"name":"바나나","pathSelect":"./images/flavor_select/10.png","pathApplyWhole":"./images/flavor_apply/10_w.png","pathApplyPart":"./images/flavor_apply/10_p.png"},{"idFlavor":11,"name":"체리","pathSelect":"./images/flavor_select/11.png","pathApplyWhole":"./images/flavor_apply/11_w.png","pathApplyPart":"./images/flavor_apply/11_p.png"},{"idFlavor":12,"name":"카라멜","pathSelect":"./images/flavor_select/12.png","pathApplyWhole":"./images/flavor_apply/12_w.png","pathApplyPart":"./images/flavor_apply/12_p.png"},{"idFlavor":13,"name":"레몬","pathSelect":"./images/flavor_select/13.png","pathApplyWhole":"./images/flavor_apply/13_w.png","pathApplyPart":"./images/flavor_apply/13_p.png"},{"idFlavor":14,"name":"솜사탕핑크","pathSelect":"./images/flavor_select/14.png","pathApplyWhole":"./images/flavor_apply/14_w.png","pathApplyPart":"./images/flavor_apply/14_p.png"},{"idFlavor":15,"name":"요거트","pathSelect":"./images/flavor_select/15.png","pathApplyWhole":"./images/flavor_apply/15_w.png","pathApplyPart":"./images/flavor_apply/15_p.png"},{"idFlavor":16,"name":"월넛","pathSelect":"./images/flavor_select/16.png","pathApplyWhole":"./images/flavor_apply/16_w.png","pathApplyPart":"./images/flavor_apply/16_p.png"},{"idFlavor":17,"name":"커피","pathSelect":"./images/flavor_select/17.png","pathApplyWhole":"./images/flavor_apply/17_w.png","pathApplyPart":"./images/flavor_apply/17_p.png"},{"idFlavor":18,"name":"솜사탕옐로우","pathSelect":"./images/flavor_select/18.png","pathApplyWhole":"./images/flavor_apply/18_w.png","pathApplyPart":"./images/flavor_apply/18_p.png"},{"idFlavor":19,"name":"시리얼","pathSelect":"./images/flavor_select/19.png","pathApplyWhole":"./images/flavor_apply/19_w.png","pathApplyPart":"./images/flavor_apply/19_p.png"},{"idFlavor":20,"name":"우유","pathSelect":"./images/flavor_select/20.png","pathApplyWhole":"./images/flavor_apply/20_w.png","pathApplyPart":"./images/flavor_apply/20_p.png"},{"idFlavor":21,"name":"인절미","pathSelect":"./images/flavor_select/21.png","pathApplyWhole":"./images/flavor_apply/21_w.png","pathApplyPart":"./images/flavor_apply/21_p.png"},{"idFlavor":22,"name":"피스타치오","pathSelect":"./images/flavor_select/22.png","pathApplyWhole":"./images/flavor_apply/22_w.png","pathApplyPart":"./images/flavor_apply/22_p.png"},{"idFlavor":23,"name":"치즈","pathSelect":"./images/flavor_select/23.png","pathApplyWhole":"./images/flavor_apply/23_w.png","pathApplyPart":"./images/flavor_apply/23_p.png"},{"idFlavor":24,"name":"화이트초콜릿","pathSelect":"./images/flavor_select/24.png","pathApplyWhole":"./images/flavor_apply/24_w.png","pathApplyPart":"./images/flavor_apply/24_p.png"},{"idFlavor":25,"name":"주관식","pathSelect":"./images/flavor_select/25.png","pathApplyWhole":"./images/flavor_apply/25_w.png","pathApplyPart":"./images/flavor_apply/25_p.png"}]`;
  return JSON.parse(data);
}
function getCandidate() {
  const data = `[{"idFlavor1":4,"idFlavor2":13,"idRibbon1":7,"idRibbon2":null,"idTopping1":19,"idTopping2":null,"name":"생각보다 괜찮레몬?","flavorName1":"다크초콜릿","flavorName2":"레몬","ribbonName1":"초콜릿","ribbonName2":null,"toppingName1":"초콜릿칩","toppingName2":null},{"idFlavor1":7,"idFlavor2":4,"idRibbon1":11,"idRibbon2":11,"idTopping1":25,"idTopping2":25,"name":"이것이 내인생","flavorName1":"밀크초콜릿","flavorName2":"다크초콜릿","ribbonName1":"레몬시럽","ribbonName2":"자몽시럽","toppingName1":"레몬시럽 굳히기","toppingName2":"자몽시럽굳히기"},{"idFlavor1":2,"idFlavor2":15,"idRibbon1":6,"idRibbon2":4,"idTopping1":5,"idTopping2":9,"name":"봄이니까","flavorName1":"딸기","flavorName2":"요거트","ribbonName1":"스트로베리","ribbonName2":"블루베리","toppingName1":"딸기프레첼볼","toppingName2":"마카롱"},{"idFlavor1":15,"idFlavor2":7,"idRibbon1":7,"idRibbon2":9,"idTopping1":17,"idTopping2":19,"name":"여행 중 달콤한 아침","flavorName1":"요거트","flavorName2":"밀크초콜릿","ribbonName1":"초콜릿","ribbonName2":"크래클퍼지리본","toppingName1":"초코프레첼볼","toppingName2":"초콜릿칩"},{"idFlavor1":9,"idFlavor2":25,"idRibbon1":8,"idRibbon2":null,"idTopping1":22,"idTopping2":null,"name":"하늘을봐그럼나무가보일거야","flavorName1":"솜사탕블루","flavorName2":"청사과","ribbonName1":"카라멜","ribbonName2":null,"toppingName1":"팝핑캔디","toppingName2":null},{"idFlavor1":2,"idFlavor2":3,"idRibbon1":5,"idRibbon2":6,"idTopping1":4,"idTopping2":10,"name":"빙빙딸망","flavorName1":"딸기","flavorName2":"망고","ribbonName1":"슈크림","ribbonName2":"스트로베리","toppingName1":"딸기","toppingName2":"망고"},{"idFlavor1":15,"idFlavor2":3,"idRibbon1":3,"idRibbon2":8,"idTopping1":10,"idTopping2":24,"name":"요망해주길바래","flavorName1":"요거트","flavorName2":"망고","ribbonName1":"망고","ribbonName2":"카라멜","toppingName1":"망고","toppingName2":"피칸"},{"idFlavor1":3,"idFlavor2":23,"idRibbon1":5,"idRibbon2":null,"idTopping1":10,"idTopping2":20,"name":"요술망치슈","flavorName1":"망고","flavorName2":"치즈","ribbonName1":"슈크림","ribbonName2":null,"toppingName1":"망고","toppingName2":"치즈케이크큐브"},{"idFlavor1":21,"idFlavor2":23,"idRibbon1":1,"idRibbon2":2,"idTopping1":7,"idTopping2":25,"name":"치즈인더트랩","flavorName1":"인절미","flavorName2":"치즈","ribbonName1":"꿀","ribbonName2":"떡","toppingName1":"떡","toppingName2":"소보로"},{"idFlavor1":2,"idFlavor2":8,"idRibbon1":6,"idRibbon2":null,"idTopping1":4,"idTopping2":17,"name":"딸바보 외계인","flavorName1":"딸기","flavorName2":"바닐라","ribbonName1":"스트로베리","ribbonName2":null,"toppingName1":"딸기","toppingName2":"초코프레첼볼"},{"idFlavor1":1,"idFlavor2":24,"idRibbon1":1,"idRibbon2":null,"idTopping1":13,"idTopping2":null,"name":"그린라이트","flavorName1":"그린티","flavorName2":"화이트초콜릿","ribbonName1":"꿀","ribbonName2":null,"toppingName1":"아몬드","toppingName2":null},{"idFlavor1":2,"idFlavor2":6,"idRibbon1":5,"idRibbon2":6,"idTopping1":22,"idTopping2":4,"name":"민트딸기 운명적 사랑","flavorName1":"딸기","flavorName2":"민트","ribbonName1":"슈크림","ribbonName2":"스트로베리","toppingName1":"팝핑캔디","toppingName2":"딸기"},{"idFlavor1":21,"idFlavor2":19,"idRibbon1":2,"idRibbon2":10,"idTopping1":23,"idTopping2":3,"name":"잇츠 투 할무ㄴㅣ..","flavorName1":"인절미","flavorName2":"시리얼","ribbonName1":"떡","ribbonName2":"팥","toppingName1":"피스타치오","toppingName2":"달고나"},{"idFlavor1":6,"idFlavor2":null,"idRibbon1":2,"idRibbon2":7,"idTopping1":4,"idTopping2":null,"name":"민초빙수","flavorName1":"민트","flavorName2":null,"ribbonName1":"떡","ribbonName2":"초콜릿","toppingName1":"딸기","toppingName2":null},{"idFlavor1":2,"idFlavor2":10,"idRibbon1":3,"idRibbon2":null,"idTopping1":4,"idTopping2":25,"name":"딸과나 (딸기와 바나나)","flavorName1":"딸기","flavorName2":"바나나","ribbonName1":"망고","ribbonName2":null,"toppingName1":"딸기","toppingName2":"바나나"},{"idFlavor1":3,"idFlavor2":6,"idRibbon1":3,"idRibbon2":4,"idTopping1":1,"idTopping2":4,"name":"포시즌31","flavorName1":"망고","flavorName2":"민트","ribbonName1":"망고","ribbonName2":"블루베리","toppingName1":"그레이엄크래커","toppingName2":"딸기"},{"idFlavor1":8,"idFlavor2":1,"idRibbon1":3,"idRibbon2":null,"idTopping1":25,"idTopping2":null,"name":"바닐라와 녹차 데이트","flavorName1":"바닐라","flavorName2":"그린티","ribbonName1":"망고","ribbonName2":null,"toppingName1":"녹차가루","toppingName2":null},{"idFlavor1":25,"idFlavor2":25,"idRibbon1":11,"idRibbon2":3,"idTopping1":25,"idTopping2":25,"name":"화이트 바캉스","flavorName1":"리치","flavorName2":"코코넛","ribbonName1":"리치잼","ribbonName2":"망고","toppingName1":"코코넛젤리","toppingName2":"리치"},{"idFlavor1":1,"idFlavor2":11,"idRibbon1":7,"idRibbon2":9,"idTopping1":17,"idTopping2":19,"name":"체리에빠진 녹차왕자","flavorName1":"그린티","flavorName2":"체리","ribbonName1":"초콜릿","ribbonName2":"크래클퍼지리본","toppingName1":"초코프레첼볼","toppingName2":"초콜릿칩"},{"idFlavor1":25,"idFlavor2":null,"idRibbon1":4,"idRibbon2":11,"idTopping1":22,"idTopping2":20,"name":"마음이 복슬복숭해","flavorName1":"복숭아","flavorName2":null,"ribbonName1":"블루베리","ribbonName2":"요거트","toppingName1":"팝핑캔디","toppingName2":"치즈케이크큐브"},{"idFlavor1":1,"idFlavor2":24,"idRibbon1":11,"idRibbon2":null,"idTopping1":9,"idTopping2":20,"name":"그린화이트초콜릿","flavorName1":"그린티","flavorName2":"화이트초콜릿","ribbonName1":"화이트초콜릿","ribbonName2":null,"toppingName1":"마카롱","toppingName2":"치즈케이크큐브"},{"idFlavor1":4,"idFlavor2":7,"idRibbon1":9,"idRibbon2":8,"idTopping1":17,"idTopping2":22,"name":"심연의초콜릿","flavorName1":"다크초콜릿","flavorName2":"밀크초콜릿","ribbonName1":"크래클퍼지리본","ribbonName2":"카라멜","toppingName1":"초코프레첼볼","toppingName2":"팝핑캔디"},{"idFlavor1":9,"idFlavor2":15,"idRibbon1":4,"idRibbon2":null,"idTopping1":20,"idTopping2":25,"name":"윈터스노우","flavorName1":"솜사탕블루","flavorName2":"요거트","ribbonName1":"블루베리","ribbonName2":null,"toppingName1":"치즈케이크큐브","toppingName2":"화이트초콜릿볼"},{"idFlavor1":22,"idFlavor2":23,"idRibbon1":11,"idRibbon2":null,"idTopping1":20,"idTopping2":25,"name":"휙.휘휙 피. 피했지롱","flavorName1":"피스타치오","flavorName2":"치즈","ribbonName1":"연유+휘핑크림","ribbonName2":null,"toppingName1":"치즈케이크큐브","toppingName2":"화이트초코"},{"idFlavor1":12,"idFlavor2":17,"idRibbon1":8,"idRibbon2":null,"idTopping1":25,"idTopping2":25,"name":"커피가 캬라멜을 만나면","flavorName1":"카라멜","flavorName2":"커피","ribbonName1":"카라멜","ribbonName2":null,"toppingName1":"커피사탕","toppingName2":"캬라멜"},{"idFlavor1":21,"idFlavor2":20,"idRibbon1":2,"idRibbon2":1,"idTopping1":7,"idTopping2":null,"name":"인절밀크","flavorName1":"인절미","flavorName2":"우유","ribbonName1":"떡","ribbonName2":"꿀","toppingName1":"떡","toppingName2":null},{"idFlavor1":6,"idFlavor2":null,"idRibbon1":4,"idRibbon2":null,"idTopping1":11,"idTopping2":null,"name":"민트엔 블루베리","flavorName1":"민트","flavorName2":null,"ribbonName1":"블루베리","ribbonName2":null,"toppingName1":"블루베리","toppingName2":null},{"idFlavor1":8,"idFlavor2":24,"idRibbon1":5,"idRibbon2":null,"idTopping1":25,"idTopping2":22,"name":"톡톡 터지는 시리얼!","flavorName1":"바닐라","flavorName2":"화이트초콜릿","ribbonName1":"슈크림","ribbonName2":null,"toppingName1":"코코팝스 시리얼 ","toppingName2":"팝핑캔디"},{"idFlavor1":5,"idFlavor2":9,"idRibbon1":11,"idRibbon2":null,"idTopping1":19,"idTopping2":null,"name":"콕콕퐁퐁","flavorName1":"블루베리","flavorName2":"솜사탕블루","ribbonName1":"연유","ribbonName2":null,"toppingName1":"초콜릿칩","toppingName2":null},{"idFlavor1":2,"idFlavor2":3,"idRibbon1":6,"idRibbon2":3,"idTopping1":4,"idTopping2":null,"name":"벚꽃앤딩","flavorName1":"딸기","flavorName2":"망고","ribbonName1":"스트로베리","ribbonName2":"망고","toppingName1":"딸기","toppingName2":null},{"idFlavor1":8,"idFlavor2":2,"idRibbon1":6,"idRibbon2":null,"idTopping1":5,"idTopping2":4,"name":"딸기가 좋아♡","flavorName1":"바닐라","flavorName2":"딸기","ribbonName1":"스트로베리","ribbonName2":null,"toppingName1":"딸기프레첼볼","toppingName2":"딸기"},{"idFlavor1":4,"idFlavor2":17,"idRibbon1":9,"idRibbon2":7,"idTopping1":4,"idTopping2":22,"name":"딸기뿌링모카초코","flavorName1":"다크초콜릿","flavorName2":"커피","ribbonName1":"크래클퍼지리본","ribbonName2":"초콜릿","toppingName1":"딸기","toppingName2":"팝핑캔디"},{"idFlavor1":15,"idFlavor2":13,"idRibbon1":3,"idRibbon2":5,"idTopping1":10,"idTopping2":20,"name":"레몬에 반한 망고","flavorName1":"요거트","flavorName2":"레몬","ribbonName1":"망고","ribbonName2":"슈크림","toppingName1":"망고","toppingName2":"치즈케이크큐브"},{"idFlavor1":22,"idFlavor2":24,"idRibbon1":7,"idRibbon2":9,"idTopping1":19,"idTopping2":23,"name":"초코러버 다람이","flavorName1":"피스타치오","flavorName2":"화이트초콜릿","ribbonName1":"초콜릿","ribbonName2":"크래클퍼지리본","toppingName1":"초콜릿칩","toppingName2":"피스타치오"},{"idFlavor1":1,"idFlavor2":6,"idRibbon1":1,"idRibbon2":null,"idTopping1":17,"idTopping2":21,"name":"숲속에 민트","flavorName1":"그린티","flavorName2":"민트","ribbonName1":"꿀","ribbonName2":null,"toppingName1":"초코프레첼볼","toppingName2":"케이크큐브(빵)"},{"idFlavor1":4,"idFlavor2":2,"idRibbon1":6,"idRibbon2":7,"idTopping1":18,"idTopping2":null,"name":"딸기타고오레오","flavorName1":"다크초콜릿","flavorName2":"딸기","ribbonName1":"스트로베리","ribbonName2":"초콜릿","toppingName1":"초콜렛쿠키(오레오)","toppingName2":null},{"idFlavor1":13,"idFlavor2":24,"idRibbon1":8,"idRibbon2":7,"idTopping1":19,"idTopping2":21,"name":"레몬나라 초코공주","flavorName1":"레몬","flavorName2":"화이트초콜릿","ribbonName1":"카라멜","ribbonName2":"초콜릿","toppingName1":"초콜릿칩","toppingName2":"케이크큐브(빵)"},{"idFlavor1":15,"idFlavor2":5,"idRibbon1":1,"idRibbon2":null,"idTopping1":17,"idTopping2":21,"name":"블루거트 프레첼","flavorName1":"요거트","flavorName2":"블루베리","ribbonName1":"꿀","ribbonName2":null,"toppingName1":"초코프레첼볼","toppingName2":"케이크큐브(빵)"},{"idFlavor1":1,"idFlavor2":3,"idRibbon1":3,"idRibbon2":null,"idTopping1":19,"idTopping2":null,"name":"그망 맛있어져라","flavorName1":"그린티","flavorName2":"망고","ribbonName1":"망고","ribbonName2":null,"toppingName1":"초콜릿칩","toppingName2":null},{"idFlavor1":25,"idFlavor2":25,"idRibbon1":11,"idRibbon2":11,"idTopping1":25,"idTopping2":null,"name":"안녕? 자두야!","flavorName1":"자두","flavorName2":"복숭아","ribbonName1":"자두 퓨레","ribbonName2":"복숭아 퓨레","toppingName1":"자두 사탕 크러쉬 ","toppingName2":null},{"idFlavor1":11,"idFlavor2":13,"idRibbon1":5,"idRibbon2":4,"idTopping1":4,"idTopping2":16,"name":"꿈의나무","flavorName1":"체리","flavorName2":"레몬","ribbonName1":"슈크림","ribbonName2":"블루베리","toppingName1":"딸기","toppingName2":"체리"},{"idFlavor1":6,"idFlavor2":null,"idRibbon1":5,"idRibbon2":null,"idTopping1":6,"idTopping2":null,"name":"꼬소민트","flavorName1":"민트","flavorName2":null,"ribbonName1":"슈크림","ribbonName2":null,"toppingName1":"땅콩","toppingName2":null},{"idFlavor1":22,"idFlavor2":4,"idRibbon1":9,"idRibbon2":5,"idTopping1":24,"idTopping2":17,"name":"다크치오피칸봉봉","flavorName1":"피스타치오","flavorName2":"다크초콜릿","ribbonName1":"크래클퍼지리본","ribbonName2":"슈크림","toppingName1":"피칸","toppingName2":"초코프레첼볼"},{"idFlavor1":25,"idFlavor2":null,"idRibbon1":11,"idRibbon2":null,"idTopping1":25,"idTopping2":null,"name":"흑당에 당했당","flavorName1":"밀크티","flavorName2":null,"ribbonName1":"흑당 시럽","ribbonName2":null,"toppingName1":"타피오카 펄","toppingName2":null},{"idFlavor1":12,"idFlavor2":23,"idRibbon1":8,"idRibbon2":null,"idTopping1":20,"idTopping2":null,"name":"치카치카","flavorName1":"카라멜","flavorName2":"치즈","ribbonName1":"카라멜","ribbonName2":null,"toppingName1":"치즈케이크큐브","toppingName2":null}]`;
  return JSON.parse(data);
}

function getFlavorSVG() {
  var svgData = [];
  var path = "./images/svg/flavor_apply/";
  var flavorData = getFlavor();
  flavorData.forEach(function (v, i) {
    var name = v.name;
    var w_split = v.pathApplyWhole.split("/");
    var p_split = v.pathApplyPart.split("/");
    var w_name = w_split[w_split.length - 1].replace("png", "svg");
    var p_name = p_split[p_split.length - 1].replace("png", "svg");
    svgData[i] = {};
    svgData[i].name = name;
    $.ajax({
      url: path + w_name,
      method: "GET",
      // async: false,
      success: function (res) {
        var svg = res.querySelector("svg");
        svgData[i].w_svg = svg;
      },
      error: function (err) {
        console.log(err);
      },
    });
    $.ajax({
      url: path + p_name,
      method: "GET",
      // async: false,
      success: function (res) {
        var svg = res.querySelector("svg");
        svgData[i].p_svg = svg;
      },
      error: function (err) {
        console.log(err);
      },
    });
  });

  return svgData;
}
function getRibbonSVG() {
  var svgData = [];
  var path = "./images/svg/ribbon_apply/";
  var ribbonData = getRibbon();
  ribbonData.forEach(function (v, i) {
    var name = v.name;
    var w_split = v.path_apply.split("/");
    var p_split = v.path_apply2.split("/");
    var w_name = w_split[w_split.length - 1].replace("png", "svg");
    var p_name = p_split[p_split.length - 1].replace("png", "svg");
    svgData[i] = {};
    svgData[i].name = name;
    $.ajax({
      url: path + w_name,
      method: "GET",
      // async: false,
      success: function (res) {
        var svg = res.querySelector("svg");
        svgData[i].w_svg = svg;
      },
      error: function (err) {
        console.log(err);
      },
    });
    $.ajax({
      url: path + p_name,
      method: "GET",
      // async: false,
      success: function (res) {
        var svg = res.querySelector("svg");
        svgData[i].p_svg = svg;
      },
      error: function (err) {
        console.log(err);
      },
    });
  });

  return svgData;
}
function getToppingSVG() {
  var svgData = [];
  var path = "./images/svg/topping_apply/";
  var toppingData = getTopping();
  toppingData.forEach(function (v, i) {
    var name = v.name;
    var w_split = v.path_apply.split("/");
    var p_split = v.path_apply2.split("/");
    var w_name = w_split[w_split.length - 1].replace("png", "svg");
    var p_name = p_split[p_split.length - 1].replace("png", "svg");
    svgData[i] = {};
    svgData[i].name = name;
    $.ajax({
      url: path + w_name,
      method: "GET",
      // async: false,
      success: function (res) {
        var svg = res.querySelector("svg");
        svgData[i].w_svg = svg;
      },
      error: function (err) {
        console.log(err);
      },
    });
    $.ajax({
      url: path + p_name,
      method: "GET",
      // async: false,
      success: function (res) {
        var svg = res.querySelector("svg");
        svgData[i].p_svg = svg;
      },
      error: function (err) {
        console.log(err);
      },
    });
  });

  return svgData;
}

var _icecream_common = {
  data: {
    flavor: getFlavor(),
    ribbon: getRibbon(),
    topping: getTopping(),
    candidate: getCandidate(),
  },
  method: {
    resultVisualSVGRender: function (obj, target) {
      var target = $(target);
      var title = obj.title;
      var flavor_svg_01 = obj.flavorSvg01;
      var flavor_svg_02 = obj.flavorSvg02;
      var ribbon_svg_01 = obj.ribbonSvg01;
      var ribbon_svg_02 = obj.ribbonSvg02;
      var topping_svg_01 = obj.toppingSvg01;
      var topping_svg_02 = obj.toppingSvg02;
      var selectedFlavor = obj.selectedFlavor;
      var selectedRibbon = obj.selectedRibbon;
      var selectedTopping = obj.selectedTopping;
      var $title = target.find(".title");
      var $img01 = target.find(".img-01");
      var $img02 = target.find(".img-02");
      var $img03 = target.find(".img-03");
      var $img04 = target.find(".img-04");
      var $img05 = target.find(".img-05");
      var $img06 = target.find(".img-06");
      var $selectedFlavor = target.find(".selected-flavor span");
      var $selectedRibbon = target.find(".selected-ribbon span");
      var $selectedTopping = target.find(".selected-topping span");

      if ($.trim(selectedRibbon) === "#undefined")
        $selectedRibbon.parent().hide();
      if ($.trim(selectedTopping) === "#undefined")
        $selectedTopping.parent().hide();

      $title.text(title);
      $img01.append(flavor_svg_01);
      $img02.append(flavor_svg_02);
      $img03.append(ribbon_svg_01);
      $img04.append(ribbon_svg_02);
      $img05.append(topping_svg_01);
      $img06.append(topping_svg_02);
      $selectedFlavor.text(selectedFlavor);
      $selectedRibbon.text(selectedRibbon);
      $selectedTopping.text(selectedTopping);
    },
    resultVisualRender: function (obj, target) {
      var target = $(target);
      var title = obj.title;
      var flavor_path_01 = obj.flavorPath01;
      var flavor_path_02 = obj.flavorPath02;
      var ribbon_path_01 = obj.ribbonPath01;
      var ribbon_path_02 = obj.ribbonPath02;
      var topping_path_01 = obj.toppingPath01;
      var topping_path_02 = obj.toppingPath02;
      var selectedFlavor = obj.selectedFlavor;
      var selectedRibbon = obj.selectedRibbon;
      var selectedTopping = obj.selectedTopping;
      var $title = target.find(".title");
      var $img01 = target.find(".img-01");
      var $img02 = target.find(".img-02");
      var $img03 = target.find(".img-03");
      var $img04 = target.find(".img-04");
      var $img05 = target.find(".img-05");
      var $img06 = target.find(".img-06");
      var $selectedFlavor = target.find(".selected-flavor span");
      var $selectedRibbon = target.find(".selected-ribbon span");
      var $selectedTopping = target.find(".selected-topping span");

      $title.text(title);
      $img01.css("background-image", "url(" + flavor_path_01 + ")");
      $img02.css("background-image", "url(" + flavor_path_02 + ")");
      $img03.css("background-image", "url(" + ribbon_path_01 + ")");
      $img04.css("background-image", "url(" + ribbon_path_02 + ")");
      $img05.css("background-image", "url(" + topping_path_01 + ")");
      $img06.css("background-image", "url(" + topping_path_02 + ")");
      $selectedFlavor.text(selectedFlavor);
      $selectedRibbon.text(selectedRibbon);
      $selectedTopping.text(selectedTopping);
    },
    getResultData: function (obj, ext) {
      if (ext === "svg") {
        console.log(this.data.svg);
      }
      var data = {};
      var selectedFlavor = "#";
      var selectedRibbon = "#";
      var selectedTopping = "#";
      var flavor_path_01 = this.getIcecream(
        "flavor",
        obj.idFlavor1
      ).pathApplyWhole;
      var flavor_path_02 = "";
      var ribbon_path_01 = this.getIcecream("ribbon", obj.idRibbon1).path_apply;
      var ribbon_path_02 = "";
      var topping_path_01 = this.getIcecream(
        "topping",
        obj.idTopping1
      ).path_apply;
      var topping_path_02 = "";

      if (ext === "svg") {
        var flavor_svg_01;
        var flavor_svg_02;
        var ribbon_svg_01;
        var ribbon_svg_02;
        var topping_svg_01;
        var topping_svg_02;

        flavor_svg_01 = this.getFlavorSVGOne(
          this.getIcecream("flavor", obj.idFlavor1).name
        )[0].w_svg;
        ribbon_svg_01 = obj.idRibbon1
          ? this.getRibbonSVGOne(
              this.getIcecream("ribbon", obj.idRibbon1).name
            )[0].w_svg
          : "";
        topping_svg_01 = obj.idTopping1
          ? this.getToppingSVGOne(
              this.getIcecream("topping", obj.idTopping1).name
            )[0].w_svg
          : "";
      }

      if (obj.idFlavor1 === 25) {
        selectedFlavor += obj.flavorName1 + " ";
      }
      if (obj.idFlavor1 !== 25) {
        selectedFlavor += this.getIcecream("flavor", obj.idFlavor1).name + " ";
      }
      if (obj.idFlavor2 === 25) {
        selectedFlavor += "#" + obj.flavorName2;
        flavor_path_02 = this.getIcecream(
          "flavor",
          obj.idFlavor2
        ).pathApplyPart;
        if (ext === "svg") {
          flavor_svg_02 = this.getFlavorSVGOne(
            this.getIcecream("flavor", obj.idFlavor2).name
          )[0].p_svg;
        }
      }
      if (obj.idFlavor2 && obj.idFlavor2 !== 25) {
        selectedFlavor += "#" + this.getIcecream("flavor", obj.idFlavor2).name;
        flavor_path_02 = this.getIcecream(
          "flavor",
          obj.idFlavor2
        ).pathApplyPart;
        if (ext === "svg") {
          flavor_svg_02 = this.getFlavorSVGOne(
            this.getIcecream("flavor", obj.idFlavor2).name
          )[0].p_svg;
        }
      }

      if (obj.idRibbon1 === 11) {
        selectedRibbon += obj.ribbonName1 + " ";
      }
      if (obj.idRibbon1 !== 11) {
        selectedRibbon += this.getIcecream("ribbon", obj.idRibbon1).name + " ";
      }
      if (obj.idRibbon2 === 11) {
        selectedRibbon += "#" + obj.ribbonName2;
        ribbon_path_02 = this.getIcecream("ribbon", obj.idRibbon2).path_apply2;
        if (ext === "svg") {
          ribbon_svg_02 = this.getRibbonSVGOne(
            this.getIcecream("ribbon", obj.idRibbon2).name
          )[0].p_svg;
        }
      }
      if (obj.idRibbon2 && obj.idRibbon2 !== 11) {
        selectedRibbon += "#" + this.getIcecream("ribbon", obj.idRibbon2).name;
        ribbon_path_02 = this.getIcecream("ribbon", obj.idRibbon2).path_apply2;
        if (ext === "svg") {
          ribbon_svg_02 = this.getRibbonSVGOne(
            this.getIcecream("ribbon", obj.idRibbon2).name
          )[0].p_svg;
        }
      }

      if (obj.idTopping1 === 25) {
        selectedTopping += obj.toppingName1 + " ";
      }
      if (obj.idTopping1 !== 25) {
        selectedTopping +=
          this.getIcecream("topping", obj.idTopping1).name + " ";
      }
      if (obj.idTopping2 === 25) {
        selectedTopping += "#" + obj.toppingName2;
        topping_path_02 = this.getIcecream(
          "topping",
          obj.idTopping2
        ).path_apply2;
        if (ext === "svg") {
          topping_svg_02 = this.getToppingSVGOne(
            this.getIcecream("topping", obj.idTopping2).name
          )[0].p_svg;
        }
      }
      if (obj.idTopping2 && obj.idTopping2 !== 25) {
        selectedTopping +=
          "#" + this.getIcecream("topping", obj.idTopping2).name;
        topping_path_02 = this.getIcecream(
          "topping",
          obj.idTopping2
        ).path_apply2;
        if (ext === "svg") {
          topping_svg_02 = this.getToppingSVGOne(
            this.getIcecream("topping", obj.idTopping2).name
          )[0].p_svg;
        }
      }

      data.title = obj.title;
      data.flavorPath01 = flavor_path_01;
      data.flavorPath02 = flavor_path_02;
      data.ribbonPath01 = ribbon_path_01;
      data.ribbonPath02 = ribbon_path_02;
      data.toppingPath01 = topping_path_01;
      data.toppingPath02 = topping_path_02;
      data.flavorSvg01 = flavor_svg_01;
      data.flavorSvg02 = flavor_svg_02;
      data.ribbonSvg01 = ribbon_svg_01;
      data.ribbonSvg02 = ribbon_svg_02;
      data.toppingSvg01 = topping_svg_01;
      data.toppingSvg02 = topping_svg_02;
      data.selectedFlavor = selectedFlavor;
      data.selectedRibbon = selectedRibbon;
      data.selectedTopping = selectedTopping;
      return data;
    },
    getIcecream: function (type, id) {
      var _id = "";
      var obj = "";
      if (type === "flavor") {
        _id = "idFlavor";
        this.data.flavor.filter(function (v) {
          if (v[_id] === id) {
            obj = v;
            return;
          }
        });
        return obj;
      }
      if (type === "ribbon") {
        _id = "idRibbon";
        this.data.ribbon.filter(function (v) {
          if (v[_id] === id) {
            obj = v;
            return;
          }
        });
        return obj;
      }
      if (type === "topping") {
        _id = "idTopping";
        this.data.topping.filter(function (v) {
          if (v[_id] === id) {
            obj = v;
            return;
          }
        });
        return obj;
      }
    },
    getFlavorSVGOne: function (name) {
      return this.data.svg.flavor.filter(function (v) {
        return v.name === name;
      });
    },
    getRibbonSVGOne: function (name) {
      return this.data.svg.ribbon.filter(function (v) {
        return v.name === name;
      });
    },
    getToppingSVGOne: function (name) {
      return this.data.svg.topping.filter(function (v) {
        return v.name === name;
      });
    },
  },
};
