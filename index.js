/* 해당 script를 전부 product.js에 복붙하세요*/

// #region product information=======================================
//#region KHAN GOLI info=============================================
const lubricatingOilPro = new Array();
const lubricatingOilObj = new Array();
const lubricatingOilList = new Array();
function lubricatingInit(Product,series,list){
    lubricatingOilPro.push(Product)
    lubricatingOilObj.push(series)
    lubricatingOilList.push(list)
}
var khangoli01 = {
    name: '0W-16',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'API SP-RC / ILSAC GF-6B',
    logo16:'true',
    logoFor:'false',
    logoAPISP:'true',
    logoAPI:'false',
}
var khangoli02 = {
    name: '0W-20',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'API SP-RC / ILSAC GF-6A',
    logo16:'true',
    logoFor:'true',
    logoAPISP: 'false',
    logoAPI:'false',
}
var khangoli03 = {
    name: '0W-30',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'API SP-RC / ILSAC GF-6A',
    logo16:'true',
    logoFor:'true',
    logoAPISP: 'false',
    logoAPI:'false',
}
var khangoli04 = {
    name: '5W-30',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'API SP-RC / ILSAC GF-6A',
    logo16:'true',
    logoFor:'true',
    logoAPISP: 'false',
    logoAPI:'false',
}
var khangoli05 = {
    name: '5W-40',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'API SP-RC',
    logo16:'true',
    logoFor:'true',
    logoAPISP: 'false',
    logoAPI:'false',
}
var khangoli06 = {
    name: '10W-30',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'API SP-RC / ILSAC GF-6A',
    logo16:'true',
    logoFor:'true',
    logoAPISP: 'false',
    logoAPI:'false',
}

var khangoli07 = {
    name: '10W-40',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'API SP-RC',
    logo16:'true',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'false',
}
const khanGoliProduct = [khangoli01,khangoli02,khangoli03,khangoli04,khangoli05,khangoli06,khangoli07]
const khanGoli = jQuery('#khanGoli')
const listKhanGoli = jQuery('#listKhanGoli');
lubricatingInit(khanGoliProduct,khanGoli,listKhanGoli)
//#endregion KHAN GOLI info==================================================
//#region KHAN PAO info==================================================
var khanpao01 = {
    name: '0W-30',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'API SN/CF ACEA C2-12, ACEA A5/B5-12 MB 229.31/229.51, VW 502.00/505.00, BMW LL-04',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khanpao02 = {
    name: '0W-40',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'API SN/CF ACEA C3 MB 229.31/229.51, VW 502.00/505.00, BMW LL-04',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khanpao03 = {
    name: '5W-30',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'API SN ACEA A3/B4 MB229.3, VW502.00 / 505.00',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khanpao04 = {
    name: '5W-40',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'API SN/CF ACEA C3-12, API SN BMW LL-04, MB 229.31/229.51, VW 502.00/505.01',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khanpao05 = {
    name: '0W-20',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'API SN/CF ACEA C3, ACEA A3/B4 MB 229.31/229.51, VW 502.00/505.01, BMW LL-04',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khanpao06 = {
    name: '5W-50',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'API SN/CF ACEA C3, ACEA A3/B4 MB 229.31/229.51, VW 502.00/505.01, BMW LL-04',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
const khanPaoProduct = [khanpao01,khanpao02,khanpao03,khanpao04,khanpao05,khanpao06]
const khanPao = jQuery('#khanPao')
const listKhanPao = jQuery('#listKhanPao');
lubricatingInit(khanPaoProduct,khanPao,listKhanPao);
//#endregion KHAN PAO info==================================================
//#region KHAN G info=======================================================
var khang01 = {
    name: '0W-16',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'API SN, ILSAC GF-5',
    logo16:'false',
    logoFor:'true',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khang02 = {
    name: '0W-20',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'API SN-RC/CF, ILSAC GF-5',
    logo16:'false',
    logoFor:'true',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khang03 = {
    name: '0W-30',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'API SN-RC/CF, ILSAC GF-5',
    logo16:'false',
    logoFor:'true',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khang04 = {
    name: '0W-40',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'API SN/CF',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khang05 = {
    name: ' 5W-20',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'API SN-RC/CF, ILSAC GF-5',
    logo16:'false',
    logoFor:'true',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khang06 = {
    name: '5W-30',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'API SN/CF MB 229.3, VW502.00/505.00 GM dexos1(First Generation)',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khang07 = {
    name: '5W-40',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'API SN/CF',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khang08 = {
    name: '5W-50',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'API SN/CF',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khang09 = {
    name: '10W-30',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'API SN-RC/CF, ILSAC GF-5',
    logo16:'false',
    logoFor:'true',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khang10 = {
    name: '10W-40',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'API SN/CF MB 229.3, VW502.00/505.00',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khang11 = {
    name: '20W-50',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'API SN/CF',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
const khanGProduct = [khang01,khang02,khang03,khang04,khang05,khang06,khang07,khang08,khang09,khang10,khang11]
const khanG = jQuery('#khanG')
const listKhanG = jQuery('#listKhanG');
lubricatingInit(khanGProduct,khanG,listKhanG)
//#endregion KHAN G info==================================================
//#region KHAN G-SL ...waiting...=========================================
var khangsl01={
    name:'5W-30',
    style:'SYNTHETIC GASOLINE',
    level:'API SL',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khangsl02={
    name:'10W-30',
    style:'SYNTHETIC GASOLINE',
    level:'API SL',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khangsl03={
    name:'10W-40',
    style:'SYNTHETIC GASOLINE',
    level:'API SL',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khangsl04={
    name:'15W-40',
    style:'SYNTHETIC GASOLINE',
    level:'API SL',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khangsl05={
    name:'20W-50',
    style:'SYNTHETIC GASOLINE',
    level:'API SL',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
const khanGslProduct=[khangsl01,khangsl02,khangsl03,khangsl04,khangsl05]
const khanGsl = jQuery('#khanGsl')
const listKhanGsl = jQuery('#listKhanGsl');
lubricatingInit(khanGslProduct,khanGsl,listKhanGsl)
//#endregion KHAN G-SL ...waiting...======================================
//#region KHAN D info=====================================================
var khand01 = {
    name: 'C3 5W-30',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'ACEA C3, ACEA A3/B4 MB 229.31, 229.51 / VW 502.00, 505.01 /BMW LL-04',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khand02 = {
    name: 'C4 5W-30',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'ACEA C4 | ACEA C2 | Renault RN0720',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khand03 = {
    name: 'C4 5W-40',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'ACEA C4 | Renault RN0720',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khand04 = {
    name: 'C5 0W-20',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'ACEA C5',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khand05 = {
    name: 'C5 5W-20',
    style:'FULLY SYNTHETIC GASOLINE',
    level:'ACEA C5',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
const khanDProduct = [khand01,khand02,khand03,khand04,khand05]
const khanD = jQuery('#khanD')
const listKhanD = jQuery('#listKhanD');
lubricatingInit(khanDProduct,khanD,listKhanD)
//#endregion KHAN D info==================================================
//#region KHAN C-8 ...waiting......=======================================
var khanc801 = {
    name: '10W-30',
    style:'SYNTHETIC DIESEL',
    level:'API CK-4 ACEA E7, E9 MERCEDES-BENZ : MB 228.31 Cummins : CES 20086 Volvo : VDS-4.5  Mack : EO-S-4.5 MTU : Category 2.1 Renault Truck : RLD-4 Detroit : DFS93K222 Caterpillar : ECF-3 Deutz : DQC lll-10 LA  Ford WSS-M2C171-F1',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khanc802 = {
    name: '10W-40',
    style:'FULL SYNTHETIC DIESEL',
    level:'API CK-4 ACEA E7, E9 MERCEDES-BENZ : MB 228.31 Cummins : CES 20086 Volvo : VDS-4.5  Mack : EO-S-4.5 MTU : Category 2.1 Renault Truck : RLD-4 Detroit : DFS93K222 Caterpillar : ECF-3 Deutz : DQC lll-10 LA  Ford WSS-M2C171-F1',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
const khanC8Product=[khanc801,khanc802]
const khanC8 = jQuery('#khanC8')
const listKhanC8 = jQuery('#listKhanC8');
lubricatingInit(khanC8Product,khanC8,listKhanC8)
//#endregion KHAN C-8 ...waiting......====================================
//#region KHAN C-7========================================================
var khanc701 = {
    name: '10W-30',
    style:'SYNTHETIC DIESEL',
    level:'API CJ-4, CI-4 PLUS, CI-4, SM, ACEA E9-12 VDS-4, Mack EO-O Premium Plus, Renault RLD-3 , CES 20081, MB 228.31, Cat ECF-3, ECF-2, ECF-1-A, MAN 3575, Detroit Diesel DDC 93K218 ',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khanc702 = {
    name: '10W-40',
    style:'SYNTHETIC DIESEL',
    level:'API CJ-4/SN | ACEA E9 MAN 3275 | Cummins CES20081 | Caterpillar ECF-3 | DDC 93K218 | Mack EO-N Premium Plus 03',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khanc703 = {
    name: '15W-40',
    style:'SYNTHETIC DIESEL',
    level:'API CJ-4, CI-4 PLUS, CI-4, SM, ACEA E9-12 VDS-4, Mack EO-O Premium Plus, Renault RLD-3 , CES 20081, MB 228.31, Cat ECF-3, ECF-2, ECF-1-A, MAN 3575, Detroit Diesel DDC 93K218',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
const khanC7Product = [khanc701,khanc702,khanc703]
const khanC7 = jQuery('#khanC7')
const listKhanC7 = jQuery('#listKhanC7');
lubricatingInit(khanC7Product,khanC7,listKhanC7)
//#endregion KHAN C-7================================================================
//#region KHAN C-6 ...waiting......==================================================
var khanc601 = {
    name: '10W-30',
    style:'SYNTHETIC DIESEL',
    level:'API CI-4/SL | ACEA E7 VDS-3, MB 228.3, MAN 3275, MTU Type 2, Mack EO-M Plus, Renault RLD-2, CES 20076, 77, 78, Cat ECF 2, ECF 1-a, Global DHD-1',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khanc602 = {
    name: '10W-40',
    style:'SYNTHETIC DIESEL',
    level:'API CI-4/SL | ACEA E7 VDS-3, MB 228.3, MAN 3275, MTU Type 2, Mack EO-M Plus, Renault RLD-2, CES 20078 CES 20076,77, Cat ECF 2, ECF 1-a, Global DHD-1',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khanc603 = {
    name: '15W-40',
    style:'SYNTHETIC DIESEL',
    level:'API CI-4/SL | ACEA E7 VDS-3, MB 228.3, MAN 3275, MTU Type 2,Mack EO-M Plus, Renault RLD-2, CES 20078 CES 20076,77, Cat ECF 2, ECF 1-a, Global DHD-1 ',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khanc604 = {
    name: '20W-50',
    style:'SYNTHETIC DIESEL',
    level:'API CI-4/SL | ACEA E7 VDS-3, MB 228.3, MAN 3275, MTU Type 2, Mack EO-M Plus, Renault RLD-2, CES 20076, 77, 78, Cat ECF 2, ECF 1-a, Global DHD-1',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
const khanC6Product = [khanc601,khanc602,khanc603,khanc604];
const khanC6 = jQuery('#khanC6');
const listKhanC6 = jQuery('#listKhanC6');
lubricatingInit(khanC6Product,khanC6,listKhanC6)
//#endregion KHAN C-6 ...waiting......===============================================
//#region KHAN C-5 ...waiting......==================================================
var khanc501 = {
    name: '10W-30',
    style:'SYNTHETIC DIESEL',
    level:'API CH-4/SJ, ACEA E7-12 VDS-2, MB 228.1, Mack EO-M Plus, RLD-2, Cat ECF 1-a, Allison C-4',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khanc502 = {
    name: '10W-40',
    style:'SYNTHETIC DIESEL',
    level:'API CH-4/SJ, ACEA E7-12 VDS-2, MB 228.1, Mack EO-M Plus, RLD-2, Cat ECF 1-a, Allison C-4',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khanc503 = {
    name: '15W-40',
    style:'SYNTHETIC DIESEL',
    level:'API CH-4/SJ, ACEA E7-12 MB 228.3, MAN 3275, MTU 2.0, Mack EO-M Plus, CES 20077, Cat ECF-1a',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khanc504 = {
    name: '20W-50',
    style:'SYNTHETIC DIESEL',
    level:'API CH-4/SJ, ACEA E7-12 MB 228.3, MAN 3275, MTU 2.0, Mack EO-M Plus, CES 20077, Cat ECF-1a',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
const khanC5Product = [khanc501,khanc502,khanc503,khanc504]
const khanC5 = jQuery('#khanC5')
const listKhanC5 = jQuery('#listKhanC5');
lubricatingInit(khanC5Product,khanC5,listKhanC5)
//#endregion KHAN C-5 ...waiting......===============================================
//#region KHAN C-3 ...waiting......==================================================
var khanc301 = {
    name: '5W-30',
    style:'SYNTHETIC DIESEL',
    level:'API CF-4/SG Allison C-4, CAT TO-2',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khanc302 = {
    name: '10W-30',
    style:'SYNTHETIC DIESEL',
    level:'API CF-4/SG Allison C-4, CAT TO-2',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khanc303 = {
    name: '10W-40',
    style:'SYNTHETIC DIESEL',
    level:'API CF/SF',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khanc304 = {
    name: '15W-40',
    style:'SYNTHETIC DIESEL',
    level:'API CF/SF',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
var khanc305 = {
    name: '20W-50',
    style:'SYNTHETIC DIESEL',
    level:'API CF-4/SG Allison C-4, CAT TO-2',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
}
const khanC3Product = [khanc301,khanc302,khanc303,khanc304,khanc305]
const khanC3 = jQuery('#khanC3')
const listKhanC3 = jQuery('#listKhanC3');
lubricatingInit(khanC3Product,khanC3,listKhanC3)
//#endregion KHAN C-3 ...waiting......===============================================
//#region KHAN BIKE 4T===============================================================
var khanbike01 = {
    name: '10W-40',
    style:'FULLY SYNTHETIC BIKE',
    level:'API SN JASO MB',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
    description: 'KHAN BIKE SUPER 4T is a premium motorcycle engine oil designed to meet  JASO MA2, API SN standards. It is also specifically designed for use in four-stroke motorcycles and portable power equipment requiring high output engines operating in severe service. Thanks to this, it provides excellent shear stability and ride quality unter extreme driving conditions.',
}
var khanbike02 = {
    name: '20W-50',
    style:'FULLY SYNTHETIC BIKE',
    level:'API SL JASO MA2',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
    description: 'KHAN BIKE SUPER 4T is a premium motorcycle engine oil designed to meet  JASO MA2, API SN standards. It is also specifically designed for use in four-stroke motorcycles and portable power equipment requiring high output engines operating in severe service. Thanks to this, it provides excellent shear stability and ride quality unter extreme driving conditions.',
}
var khanbike03 = {
    name: '10W-30',
    style:'FULLY SYNTHETIC BIKE',
    level:'API SL/CF JASO MA',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
    description: 'KHAN BIKE 4T is a premium motorcycle engine oil designed to meet  JASO MA, API SL/CF standards. It is also specifically designed for use in four-stroke motorcycles and portable power equipment requiring high output engines operating in severe service. Thanks to this, it provides excellent shear stability and ride quality unter extreme driving conditions.',
}
var khanbike04 = {
    name: '10W-40',
    style:'FULLY SYNTHETIC BIKE',
    level:'API SL/CF JASO MA',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
    description: 'KHAN BIKE 4T is a premium motorcycle engine oil designed to meet  JASO MA, API SL/CF standards. It is also specifically designed for use in four-stroke motorcycles and portable power equipment requiring high output engines operating in severe service. Thanks to this, it provides excellent shear stability and ride quality unter extreme driving conditions.',
}
var khanbike05 = {
    name: '20W-40',
    style:'FULLY SYNTHETIC BIKE',
    level:'API SL/CF JASO MA',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
    description: 'KHAN BIKE 4T is a premium motorcycle engine oil designed to meet  JASO MA, API SL/CF standards. It is also specifically designed for use in four-stroke motorcycles and portable power equipment requiring high output engines operating in severe service. Thanks to this, it provides excellent shear stability and ride quality unter extreme driving conditions.',
}
var khanbike06 = {
    name: '20W-50',
    style:'FULLY SYNTHETIC BIKE',
    level:'API SL/CF JASO MA',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    logoAPI:'true',
    description: 'KHAN BIKE 4T is a premium motorcycle engine oil designed to meet  JASO MA, API SL/CF standards. It is also specifically designed for use in four-stroke motorcycles and portable power equipment requiring high output engines operating in severe service. Thanks to this, it provides excellent shear stability and ride quality unter extreme driving conditions.',
}
const khanBikeProduct = [khanbike01,khanbike02,khanbike03,khanbike04,khanbike05,khanbike06]
const khanBike = jQuery('#khanBike')
const listKhanBike = jQuery('#listKhanBike');
lubricatingInit(khanBikeProduct,khanBike,listKhanBike)
//#endregion KHAN BIKE 4T===============================================================
//#region KHAN MTF GL-5==================================================
var khanmtf01 = {
    name: '75W-90',
    style:'Manual Transmission Fluid',
    level:'API GL-5 MIL-L-2105D',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
}
var khanmtf02 = {
    name: '80W-90',
    style:'Manual Transmission Fluid',
    level:'API GL-5 MIL-L-2105D',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false'
}
var khanmtf03 = {
    name: '85W-140',
    style:'Manual Transmission Fluid',
    level:'API GL-5 MIL-L-2105D',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false'
}
const khanMtfProduct = [khanmtf01,khanmtf02,khanmtf03]
const khanMtf = jQuery('#khanMtf')
const listKhanMtf = jQuery('#listKhanMtf');
lubricatingInit(khanMtfProduct,khanMtf,listKhanMtf)
//#endregion KHAN MTF GL-5==================================================
//#region KHAN ATF3==========================================================
var khanatf301 = {
    name: 'KHAN ATF 3',
    style:'SYNTHETIC ATF',
    level:'Dexron IIIH/M | Allison C-4',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false'
}
const khanAtf3Product = [khanatf301]
const khanAtf3 = jQuery('#khanAtf3')
const listKhanAtf3 = jQuery('#listKhanAtf3');
lubricatingInit(khanAtf3Product,khanAtf3,listKhanAtf3)
//#endregion KHAN ATF3=======================================================
//#region KHAN ATF==========================================================
var khanatfmulti01 = {
    name: 'KHAN ATF MULTI',
    style:'SYNTHETIC ATF',
    level:'ATF MULTI',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false'
}
const khanAtfMultiProduct = [khanatfmulti01]
const khanAtfMulti = jQuery('#khanAtfMulti')
const listKhanAtfMulti = jQuery('#listKhanAtfMulti');
lubricatingInit(khanAtfMultiProduct,khanAtfMulti,listKhanAtfMulti)
//#endregion KHAN ATF=======================================================
//#region KHAN HYDRAULIC AW=================================================
var khanaw01 = {
    name: 'AW-32',
    style:'',
    level:'ISO VG 32',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    description: 'KHAN HYDRAULIC AW 32 is a high quality anti-wear hydraulic fluid to designed for providing not only outstanding protection and performance but also excellent thermal and oxidation stability with the latest additives technology. It is suitable for use in most industrial hydraulic and mobile equipment operations including high pressure hydraulic systems.',
}
var khanaw02 = {
    name: 'AW-46',
    style:'',
    level:'ISO VG 46',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    description: 'KHAN HYDRAULIC AW 46 is a high quality anti-wear hydraulic fluid to designed for providing not only outstanding protection and performance but also excellent thermal and oxidation stability with the latest additives technology. It is suitable for use in most industrial hydraulic and mobile equipment operations including high pressure hydraulic systems.',
}
var khanaw03 = {
    name: 'AW-68',
    style:'',
    level:'ISO VG 68',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    description: 'KHAN HYDRAULIC AW 68 is a high quality anti-wear hydraulic fluid to designed for providing not only outstanding protection and performance but also excellent thermal and oxidation stability with the latest additives technology. It is suitable for use in most industrial hydraulic and mobile equipment operations including high pressure hydraulic systems.',
}
const khanAwProduct = [khanaw01,khanaw02,khanaw03]
const khanAw = jQuery('#khanAw')
const listKhanAw = jQuery('#listKhanAw');
lubricatingInit(khanAwProduct,khanAw,listKhanAw)
//#end region KHAN HYDRAULIC AW=========================================
//#region KHAN HYDRAULIC HV ...waiting...===============================
var khanhv01 = {
    name: 'HV-32',
    style:'',
    level:'ISO VG 32',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    description: 'KHAN HYDRAULIC HV 32 is a high viscosity hydraulic fluid to designed for providing not only outstanding protection and performance but also excellent thermal and oxidation stability with the latest additives technology. It is suitable for use in most industrial hydraulic and mobile equipment operations including high pressure hydraulic systems.',
}
var khanhv02 = {
    name: 'HV-46',
    style:'',
    level:'ISO VG 46',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    description: 'KHAN HYDRAULIC HV 46 is a high viscosity hydraulic fluid to designed for providing not only outstanding protection and performance but also excellent thermal and oxidation stability with the latest additives technology. It is suitable for use in most industrial hydraulic and mobile equipment operations including high pressure hydraulic systems.',
}
var khanhv03 = {
    name: 'HV-68',
    style:'',
    level:'ISO VG 68',
    logo16:'false',
    logoFor:'false',
    logoAPISP: 'false',
    description: 'KHAN HYDRAULIC HV 68 is a high viscosity hydraulic fluid to designed for providing not only outstanding protection and performance but also excellent thermal and oxidation stability with the latest additives technology. It is suitable for use in most industrial hydraulic and mobile equipment operations including high pressure hydraulic systems.',
}
const khanHvProduct = [khanhv01,khanhv02,khanhv03]
const khanHv = jQuery('#khanHv')
const listKhanHv = jQuery('#listKhanHv');
lubricatingInit(khanHvProduct,khanHv,listKhanHv)
//#endregion KHAN HYDRAULIC HV ...waiting...============================
// #endregion product information=======================================
const khanPrepare = jQuery('#khanPrepare')
const listKhanPrepare = jQuery('#listKhanPrepare');
//#region making object event===========================================
function insertPdBtn(parent,product){//parent=jquery-selector, product=array
    for(i=0;i<product.length;i++){
        var name = product[i].name;
        var style = product[i].style;
        var level = product[i].level;
        var logo1 = product[i].logo16;
        var logo2 = product[i].logoFor;
        var logo3 = product[i].logoAPISP;
        var logo4 = product[i].logoAPI;
        logo4 ? logo4 : 'false'
        if(product[i].description){
            var description = product[i].description
            var li = jQuery(`<li
            data-style="${style}"
            data-level="${level}"
            data-logo1="${logo1}"
            data-logo2="${logo2}"
            data-logo3="${logo3}"
            data-logo4="${logo4}"
            data-desc="${description}"
            class="series__product_text6listitem">
            ${name}
            </li>`);
        }else{
            var li = jQuery(`<li
            data-style="${style}"
            data-level="${level}"
            data-logo1="${logo1}"
            data-logo2="${logo2}"
            data-logo3="${logo3}"
            data-logo4="${logo4}"
            class="series__product_text6listitem">
            ${name}
            </li>`); 
        }
        parent.find('.series__product_text6list').append(li.clone())
    }
    parent.find('.series__product_text6listitem:first-child').addClass('clicked')
}
for(let i=0; i<lubricatingOilObj.length; i++){
    insertPdBtn(lubricatingOilObj[i],lubricatingOilPro[i])
}
//#endregion making object event===========================================

//#region main event==============================================================================
function selectAppear(series){
    var idx = lubricatingOilObj.indexOf(series)
    series.addClass('selected')
    lubricatingOilList[idx].addClass('selected')
    lubricatingOilList[idx].addClass('appear')
}
function prepare(){
    khanPrepare.addClass('selected')
}
jQuery('.series__name_big_list li').click(function(){
    var idx = jQuery(this).index()
    jQuery('.series__name_big_list li').removeClass('selected')
    jQuery(this).addClass('selected')
    jQuery('.series__name_list li').removeClass('appear')
    jQuery('.series__name_listitem').removeClass('selected')
    jQuery('li.series__product_listitem').removeClass('selected')
    if(idx==0){//passenger car
        selectAppear(khanGoli)
        listKhanPao.addClass('appear')
        listKhanG.addClass('appear')
        listKhanGsl.addClass('appear')
    }else if(idx==1){//passenger diesel
        selectAppear(khanD)
    }else if(idx==2){//heavy duty
        selectAppear(khanC7)
        listKhanC8.addClass('appear')
        listKhanC6.addClass('appear')
        listKhanC5.addClass('appear')
        listKhanC3.addClass('appear')
    }else if(idx==3){//atf transmission
        selectAppear(khanAtf3)
        listKhanAtfMulti.addClass('appear')
    }else if(idx==4){//cvt transmission
        prepare()
    }else if(idx==5){//mtf transmission
        selectAppear(khanMtf)
    }else if(idx==6){//hydraulic oil
        selectAppear(khanAw)
        listKhanHv.addClass('appear')
    }else if(idx==7){//motor cycle
        selectAppear(khanBike)
    }
})
jQuery('.series__name_listitem').click(function(){//product menu fn
    var idx = jQuery(this).index()
    jQuery('.series__name_listitem').removeClass('selected')
    jQuery(this).addClass('selected')
    jQuery('li.series__product_listitem').removeClass('selected')
    jQuery('li.series__product_listitem').eq(idx).addClass('selected')
})
jQuery('.series__product_text6listitem').click(function(){//product model fn
    var parent = jQuery(this).closest('li.series__product_listitem');
    var style = jQuery(this).attr('data-style');
    var level = jQuery(this).attr('data-level');
    var logo1 = jQuery(this).attr('data-logo1');
    var logo2 = jQuery(this).attr('data-logo2');
    var logo3 = jQuery(this).attr('data-logo3');
    var logo4 = jQuery(this).attr('data-logo4');
    var description = jQuery(this).attr('data-desc');
    parent.find('.series__product_text4').text(level)
    parent.find('.series__product_text9').text(style)
    if(description){//bike는 디스크립션이 다른 제품이 있습니다.
        parent.find('.series__product_text10').text(description)
    }
    parent.find('.series__product_text11 .series__product_logo').removeClass('true')
    parent.find('.series__product_text11 .series__product_logo').removeClass('false')
    parent.find('.series__product_text11 .series__product_logo1').addClass(logo1)
    parent.find('.series__product_text11 .series__product_logo2').addClass(logo2)
    parent.find('.series__product_text11 .series__product_logo3').addClass(logo3)
    parent.find('.series__product_text11 .series__product_logo4').addClass(logo4)
    parent.find('.series__product_text6listitem').removeClass('clicked')
    jQuery(this).addClass('clicked')
})
jQuery('.series__product_text8 .volume_size').click(function(){
    var parent = jQuery(this).closest('li.series__product_listitem');
    var dataType = jQuery(this).attr('data-type');
    var dataSize = jQuery(this).attr('data-size');
    parent.find('.series__product_text8 .volume_size').removeClass('clicked')
    jQuery(this).addClass('clicked')
    parent.find('.series__product_image_listitem').removeClass('selected')
    parent.find('.series__product_image_listitem_'+dataType+dataSize).addClass('selected')
})
//#endregion main event==============================================================================