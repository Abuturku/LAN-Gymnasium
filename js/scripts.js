//Der Array Index ist gleichzeitig auch die ID des Schülers, Lehrers, etc...
var lehrer = [];
var schueler = [];
var klassen = [];
var lehrerKlasse = [];
var schuelerKlasse = [];
var notizen = [];
var localStorageLengthOffset = 0;

function ladeStorage() {
    //Jeweils 4 Beispiel Datensätze für jedes Array. Auskommentieren, wenn nötig
    //!!Achtung!! wird bei jedem Aufrufen einer Seite ausgeführt, also falls Datensätze in der Applikation geändert werden, sollte das hier auskommentiert werden!
    localStorage.setItem("0", "");	
	
    localStorage.setItem("1", "k;0;5;a;Klassenfoto.png");
    localStorage.setItem("2", "k;1;5;b;Klassenfoto.png");
    localStorage.setItem("3", "k;2;6;a;Klassenfoto.png");
    localStorage.setItem("4", "k;3;6;b;Klassenfoto.png");
    localStorage.setItem("5", "k;4;6;c;Klassenfoto.png");	
    localStorage.setItem("6", "k;5;7;a;Klassenfoto.png");
    localStorage.setItem("7", "k;6;7;b;Klassenfoto.png");
    localStorage.setItem("8", "k;7;8;a;Klassenfoto.png");
    localStorage.setItem("9", "k;8;9;a;Klassenfoto.png");
    localStorage.setItem("10", "k;9;10;a;Klassenfoto.png");
	
    localStorage.setItem("11", "l;0;Severus;Snape;1234;Profilbild.jpg;ja");
    localStorage.setItem("12", "l;1;Leonardo;da Vinci;1234;Profilbild.jpg;ja");
    localStorage.setItem("13", "l;2;Johann;Goethe;1234;Profilbild.jpg;ja");
    localStorage.setItem("14", "l;3;Isaac;Newton;Passwort;Profilbild.jpg;ja");
    localStorage.setItem("15", "l;4;Adam;Riese;1234;Profilbild.jpg;ja");	
    localStorage.setItem("16", "l;5;Immanuel;Kant;1234;Profilbild.jpg;ja");	
    localStorage.setItem("17", "l;6;Albert;Einstein;1234;Profilbild.jpg;ja");	
    localStorage.setItem("18", "l;7;Carl;Gauß;1234;Profilbild.jpg;ja");	
    localStorage.setItem("19", "l;8;Gottfried;Leibniz;1234;Profilbild.jpg;nein");	
    localStorage.setItem("20", "l;9;Siegmund;Freud;1234;Profilbild.jpg;ja");	
    localStorage.setItem("21", "l;10;Fresh;Dumbledore;jo;Profilbild.jpg;ja");
	
    localStorage.setItem("22", "s;0;Harry;Potter;1234;Schueler.png");
    localStorage.setItem("23", "s;1;Michael;Mittermeier;1234;Schueler.png");
    localStorage.setItem("24", "s;2;Angela;Merkel;1234;Schueler.png");
    localStorage.setItem("25", "s;3;Joachim;Gauck;1234;Schueler.png");
    localStorage.setItem("26", "s;4;Alina;Auster;1234;Schueler.png");
    localStorage.setItem("27", "s;5;Bella;Bowser;1234;Schueler.png");
    localStorage.setItem("28", "s;6;Chantal;Cunz;1234;Schueler.png");
    localStorage.setItem("29", "s;7;Dodo;Dorst;1234;Schueler.png");
    localStorage.setItem("30", "s;8;Elmar;Eder;1234;Schueler.png");
    localStorage.setItem("31", "s;9;Fabian;Furchtlos;1234;Schueler.png");
    localStorage.setItem("32", "s;10;Gina;Gulstenstrom;1234;Schueler.png");
    localStorage.setItem("33", "s;11;Hugo;Hurst;1234;Schueler.png");
    localStorage.setItem("34", "s;12;Inga;Indorf;1234;Schueler.png");
    localStorage.setItem("35", "s;13;Jenny;Jin-Sui;1234;Schueler.png");
    localStorage.setItem("36", "s;14;Kevin;Köstlich;1234;Schueler.png");
    localStorage.setItem("37", "s;15;Lin-Pin;Lee;1234;Schueler.png");
    localStorage.setItem("38", "s;16;Max;Moritz;1234;Schueler.png");
    localStorage.setItem("39", "s;17;Nils;Nimmermann;1234;Schueler.png");
    localStorage.setItem("40", "s;18;Olli;Olsrich;1234;Schueler.png");
    localStorage.setItem("41", "s;19;Peter;Parker;1234;Schueler.png");
    localStorage.setItem("42", "s;20;Quirin;Quietschbunt;1234;Schueler.png");
    localStorage.setItem("43", "s;21;Rudolf;Rentier;1234;Schueler.png");
    localStorage.setItem("44", "s;22;Sarah;Sorglos;1234;Schueler.png");
    localStorage.setItem("45", "s;23;Tina;Teller;1234;Schueler.png");
    localStorage.setItem("46", "s;24;Ulli;Unter;1234;Schueler.png");
    localStorage.setItem("47", "s;25;Vladimir;Voldemort;1234;Schueler.png");
    localStorage.setItem("48", "s;26;Walter;Wurst;1234;Schueler.png");
    localStorage.setItem("49", "s;27;Xenia;Xander;1234;Schueler.png");
    localStorage.setItem("50", "s;28;Yvonne;Yteras;1234;Schueler.png");
    localStorage.setItem("51", "s;29;Zolf;Zwilling;1234;Schueler.png");
    localStorage.setItem("52", "s;30;Wanda;Women;1234;Schueler.png");
    localStorage.setItem("53", "s;31;Clark;Kent;1234;Schueler.png");
    localStorage.setItem("54", "s;32;Cosmo;Ferry;1234;Schueler.png");
    localStorage.setItem("55", "s;33;Wanda;Ferry;1234;Schueler.png");
    localStorage.setItem("56", "s;34;Tony;Stark;1234;Schueler.png");
    localStorage.setItem("57", "s;35;Natascha;Romanov;1234;Schueler.png");
    localStorage.setItem("58", "s;36;Bruce;Wayne;1234;Schueler.png");
    localStorage.setItem("59", "s;37;Max;Mustermann;1234;Schueler.png");
    localStorage.setItem("60", "s;38;Pipi;Langstrumpf;1234;Schueler.png");
    localStorage.setItem("61", "s;39;Benjamin;Blümchen;1234;Schueler.png");
    localStorage.setItem("62", "s;40;Michel;Lönneberga;1234;Schueler.png");
    localStorage.setItem("63", "s;41;Christian;Liljegren;1234;Schueler.png");
    localStorage.setItem("64", "s;42;Arjen;Lucasson;1234;Schueler.png");
    localStorage.setItem("65", "s;43;Bodo;Wartke;1234;Schueler.png");
    localStorage.setItem("66", "s;44;Helene;Fischer;1234;Schueler.png");	
	
    localStorage.setItem("67", "n;0;1;3;Wer sind Sie und was tun Sie hier?;12.12.2012 12:00:00");
    localStorage.setItem("68", "n;1;0;0;Potter.;12.12.2012 12:00:00");
    localStorage.setItem("69", "n;2;37;8;Ich mag Kekse.;12.12.2012 12:00:00");
    localStorage.setItem("70", "n;3;37;6;Nicht vergessen: E=m*c^2.;12.12.2012 12:00:00");
    localStorage.setItem("71", "n;4;1;1;Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.;12.12.2012 12:00:00");
    localStorage.setItem("72", "n;5;2;2;Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.;12.12.2012 12:00:00");
    localStorage.setItem("73", "n;6;3;3;Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.;12.12.2012 12:00:00");
    localStorage.setItem("74", "n;7;4;4;Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.;12.12.2012 12:00:00");
    localStorage.setItem("75", "n;8;5;5;Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.;12.12.2012 12:00:00");
    localStorage.setItem("76", "n;9;6;6;Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.;12.12.2012 12:00:00");
    localStorage.setItem("77", "n;10;7;7;Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.;12.12.2012 12:00:00");
    localStorage.setItem("78", "n;11;8;8;Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.;12.12.2012 12:00:00");
    localStorage.setItem("79", "n;12;9;9;Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.;12.12.2012 12:00:00");
    localStorage.setItem("80", "n;13;10;9;Deine Mudda.;12.12.2012 12:00:00");
    localStorage.setItem("81", "n;14;11;3;Der Apfel fällt nicht weit vom Stamm.;12.12.2012 12:00:00");
    localStorage.setItem("82", "n;15;12;2;Noch einmal so eine Frechheit, und Sie bekommen meine FAUST zu spüren.;12.12.2012 12:00:00");
    localStorage.setItem("83", "n;16;13;2;Allein der Vortrag macht des REdners Glück. Ich fühl' es wohl, noch bin ich weit zurück. Nehmen Sie sich das einmal zu Herzen.;12.12.2012 12:00:00");
    localStorage.setItem("84", "n;17;14;2;Alles Gescheite ist schon gedacht worden, man muss nur versuchen, es noch einmal zu denken.;12.12.2012 12:00:00");
    localStorage.setItem("85", "n;18;15;2;Das Schicksal jedes Volkes und jeder Zeit hängt von den Menschen uner 25 Jahren ab.;12.12.2012 12:00:00");
    localStorage.setItem("86", "n;19;16;2;Der Feige droht nur, wo er sicher ist.;12.12.2012 12:00:00");
    localStorage.setItem("87", "n;20;17;2;Der Wein erfreut des Menschen Herz, und die Freudigkeit ist die Mutter aller Tugenden. Nur sollte man auch seine Grenzen kennen...;12.12.2012 12:00:00");
    localStorage.setItem("88", "n;21;18;2;Die Schwierigkeiten wachsen, je näher man dem Ziele kommt;12.12.2012 12:00:00");
    localStorage.setItem("89", "n;22;19;2;Doch der den Augenblick ergreift, das ist der rechte Mann.;12.12.2012 12:00:00");
    localStorage.setItem("90", "n;23;20;2;Dummheit ist etwas Ursprüngliches.;12.12.2012 12:00:00");

    localStorage.setItem("90", "lk;0;0");
    localStorage.setItem("91", "lk;1;1");
    localStorage.setItem("92", "lk;2;2");
    localStorage.setItem("93", "lk;3;3");
    localStorage.setItem("94", "lk;4;4");
    localStorage.setItem("95", "lk;5;5");
    localStorage.setItem("96", "lk;6;6");
    localStorage.setItem("97", "lk;7;7");
    localStorage.setItem("98", "lk;8;8");
    localStorage.setItem("99", "lk;9;9");
    localStorage.setItem("100", "lk;7;10");	
    localStorage.setItem("101", "lk;9;1");
    localStorage.setItem("102", "lk;8;2");
    localStorage.setItem("103", "lk;7;3");
    localStorage.setItem("104", "lk;6;4");
    localStorage.setItem("105", "lk;5;10");
    localStorage.setItem("106", "lk;4;6");
    localStorage.setItem("107", "lk;3;7");
    localStorage.setItem("108", "lk;2;8");
    localStorage.setItem("109", "lk;1;9");
	localStorage.setItem("110", "lk;0;10");
    
	localStorage.setItem("111", "sk;1;1");
    localStorage.setItem("112", "sk;2;2");
    localStorage.setItem("113", "sk;3;3");
    localStorage.setItem("114", "sk;4;4");
    localStorage.setItem("115", "sk;5;5");
    localStorage.setItem("116", "sk;6;6");
    localStorage.setItem("117", "sk;7;7");
    localStorage.setItem("118", "sk;8;8");
    localStorage.setItem("119", "sk;9;9");
    localStorage.setItem("120", "sk;0;10");
    localStorage.setItem("121", "sk;1;11");
    localStorage.setItem("122", "sk;2;12");
    localStorage.setItem("123", "sk;3;13");
    localStorage.setItem("124", "sk;4;14");
    localStorage.setItem("125", "sk;5;15");
    localStorage.setItem("126", "sk;6;16");
    localStorage.setItem("127", "sk;7;17");
    localStorage.setItem("128", "sk;8;18");
    localStorage.setItem("129", "sk;9;19");
    localStorage.setItem("130", "sk;0;20");
    localStorage.setItem("131", "sk;1;21");
    localStorage.setItem("132", "sk;2;22");
    localStorage.setItem("133", "sk;3;23");
    localStorage.setItem("134", "sk;4;24");
    localStorage.setItem("135", "sk;5;25");
    localStorage.setItem("136", "sk;6;26");
    localStorage.setItem("137", "sk;7;27");
    localStorage.setItem("138", "sk;8;28");
    localStorage.setItem("139", "sk;9;29");
    localStorage.setItem("140", "sk;0;30");
    localStorage.setItem("141", "sk;1;31");
    localStorage.setItem("142", "sk;2;32");
    localStorage.setItem("143", "sk;3;33");
    localStorage.setItem("144", "sk;4;34");
    localStorage.setItem("145", "sk;5;35");
    localStorage.setItem("146", "sk;6;36");
    localStorage.setItem("147", "sk;7;37");
    localStorage.setItem("148", "sk;8;38");
    localStorage.setItem("149", "sk;9;39");
    localStorage.setItem("150", "sk;0;40");
    localStorage.setItem("151", "sk;1;41");
    localStorage.setItem("152", "sk;2;42");
    localStorage.setItem("153", "sk;3;43");
    localStorage.setItem("154", "sk;4;44");
	localStorage.setItem("155", "sk;0;0");
	
    localStorage.setItem("156", "n;24;31;10;Nur ein Statist!;12.12.2012 12:00:00");
}

//Wird bei jedem Laden einer Seite aufgerufen
window.addEventListener("DOMContentLoaded", function(){
    localStorageLengthOffset = 0;
    
    for (i = 1; i <= localStorage.length-1+localStorageLengthOffset; i++){
        
        if (localStorage.getItem(i) === null){
            localStorageLengthOffset++;
            continue;
        }
        
        var item = localStorage.getItem(i);
        var splittedItem = item.split(";");
        
        //Ist das Item ein Lehrer?
        if (splittedItem[0] === "l"){
            if (splittedItem[7] !== undefined){
                var lehrerObject = {vorname:splittedItem[2], nachname:splittedItem[3], passwort:splittedItem[4], bildquelle:splittedItem[5]+";"+splittedItem[6], istAngestellt:splittedItem[7]};
            }else {
                var lehrerObject = {vorname:splittedItem[2], nachname:splittedItem[3], passwort:splittedItem[4], bildquelle:splittedItem[5], istAngestellt:splittedItem[6]};
            }
            
            lehrer.push(lehrerObject);
        }
        
        //Ist das Item ein Schueler?
        if (splittedItem[0] === "s"){
            if (splittedItem[6] !== undefined){
                var schuelerObject = {vorname:splittedItem[2], nachname:splittedItem[3], passwort:splittedItem[4], bildquelle:splittedItem[5]+";"+splittedItem[6]};
            }else {
                var schuelerObject = {vorname:splittedItem[2], nachname:splittedItem[3], passwort:splittedItem[4], bildquelle:splittedItem[5]};
            }
            schueler.push(schuelerObject);
        }
        
        //Ist das Item eine Klasse?
        if (splittedItem[0] === "k"){
            if (splittedItem[5] !== undefined){
                var klassenObject = {stufe:splittedItem[2], buchstabe:splittedItem[3], bildquelle:splittedItem[4]+";"+splittedItem[5]};
            }else {
                var klassenObject = {stufe:splittedItem[2], buchstabe:splittedItem[3], bildquelle:splittedItem[4]};
            }
            
            klassen.push(klassenObject);
        }
        
        //Ist das Item eine Notiz?
        if (splittedItem[0] === "n"){
            var notizObject = {schuelerId: splittedItem[2], lehrerId:splittedItem[3], text:splittedItem[4], zeitstempel:splittedItem[5]};
            notizen.push(notizObject);
        }
        
        //Ist das Item eine Lehrerklasse?
        if (splittedItem[0] === "lk"){
            var lkObject = {klassenId:splittedItem[1], lehrerId:splittedItem[2]};
            lehrerKlasse.push(lkObject);
        }
        
        //Ist das Item eine Schuelerklasse?
        if (splittedItem[0] === "sk"){
            var skObject = {klassenId:splittedItem[1], schuelerId:splittedItem[2]};
            schuelerKlasse.push(skObject);
        }
    }
   
    if(localStorage.getItem(0)===""){
        //console.log(window.location.href.substr(window.location.href.length-10,window.location.href.length));
        if(window.location.href.substr(window.location.href.length-10,window.location.href.length) !== "index.html"){
            window.location.href="index.html";
        }
    }else{
        var splittedItem = localStorage.getItem(0).split(";");
        document.getElementById("logindata").innerHTML="Angemeldet als: <br>"+ splittedItem[2]+ " " + splittedItem[3];
    }
    
    //Macht es möglich, dass mit Drücken der Eingabetaste, die Logindaten überprüft werden
    if(window.location.href.substr(window.location.href.length-10,window.location.href.length) === "index.html"){
        
        var nachname = document.getElementById("loginNachname");
        var vorname = document.getElementById("loginVorname");
        var passwort = document.getElementById("loginPasswort");
        var anmelden = document.getElementById("anmeldenIndex");
    
        nachname.addEventListener("keypress", function() {
            if (event.keyCode === 13) anmelden.click();
        });
        
        vorname.addEventListener("keypress", function() {
            if (event.keyCode === 13) anmelden.click();
        });
        
        passwort.addEventListener("keypress", function() {
            if (event.keyCode === 13) anmelden.click();
        });
    } 
	
    if(window.location.pathname.substr(window.location.pathname.length-15,window.location.pathname.length) === "startseite.html"){
        if(localStorage.getItem(0).substring(0,1) === "a"){
            document.getElementById('myProfil').style.display="none";
            document.getElementById('myLehrer').style.display="none";			
            document.getElementById('myKlassen').style.display="none";
            document.getElementById('myKlasse').style.display="none";
            document.getElementById('mySchueler').style.display="none";
        }
		if(localStorage.getItem(0).substring(0,1) === "l"){
            document.getElementById('myLehrer').style.display="none";
            document.getElementById('myKlasse').style.display="none";
            document.getElementById('myKlasseNew').style.display="none";
            document.getElementById('myLehrerNew').style.display="none";
            document.getElementById('mySchuelerNew').style.display="none";
        }
		if(localStorage.getItem(0).substring(0,1) === "s"){
            document.getElementById('mySchueler').style.display="none";
            document.getElementById('myKlassen').style.display="none";
            document.getElementById('myKlasseNew').style.display="none";
            document.getElementById('myLehrerNew').style.display="none";
            document.getElementById('mySchuelerNew').style.display="none";
        }
	}
	
    if(window.location.pathname.substr(window.location.pathname.length-11,window.location.pathname.length) === "lehrer.html"){
        sucheStufeLehrer();
        sucheKlassenLehrer();
        sucheSchuelerLehrer();
        
        var stufeDdb = document.getElementById('stufe_ddb');
        var klasseDdb = document.getElementById('klasse_ddb');
        var schuelerDdb = document.getElementById('schueler_ddb');
        var lehrerDdb = document.getElementById('lehrer_ddb');
        
        var url = window.location.href;
        var idx = url.indexOf("#");
        var hash = idx !== -1 ? url.substring(idx+1) : "";
        if(hash !== ""){
            if(hash.substring(0,1) === "k"){
                for(var i = 0; i< stufeDdb.children.length;i++){
                    if(stufeDdb.children[i].value === hash.substring(2,hash.length-1)){
                       stufeDdb.children[i].selected = true; 
                    }
                }
                for(var i = 0; i< klasseDdb.children.length;i++){
                    if(klasseDdb.children[i].value === hash.substring(hash.length-1,hash.length)){
                       klasseDdb.children[i].selected = true; 
                    }
                }
            } else if(hash.substring(0,1) === "s"){
                for(var i = 0; i< schuelerDdb.children.length;i++){
                    if(schuelerDdb.children[i].value === hash.substring(2,hash.indexOf(";"))+", " + hash.substring(hash.indexOf(";")+1,hash.length)){
                        schuelerDdb.children[i].selected = true; 
                    }
                }
            }
        }
        sucheLehrerTabelle();
		
        if(localStorage.getItem(0).substring(0,1) === "s"){
            document.getElementById('btnLehrerHinzufuegen').style.display="none";
            document.getElementById('btnLehrerBearbeiten').style.display="none";
            document.getElementById('btnLehrerLoeschen').style.display="none";
        }
    }
    
    if(window.location.pathname.substr(window.location.pathname.length-13,window.location.pathname.length) == "schueler.html"){
        sucheStufeSchueler();
        sucheKlassenSchueler();
        sucheLehrerSchueler();
        
        var stufeDdb = document.getElementById('stufe_ddb');
        var klasseDdb = document.getElementById('klasse_ddb');
        var schuelerDdb = document.getElementById('schueler_ddb');
        var lehrerDdb = document.getElementById('lehrer_ddb');
        
        var url = window.location.href;
        var idx = url.indexOf("#");
        var hash = idx != -1 ? url.substring(idx+1) : "";
        if(hash != ""){
            if(hash.substring(0,1)=="k"){
                for(var i = 0; i< stufeDdb.children.length;i++){
                    if(stufeDdb.children[i].value == hash.substring(2,hash.length-1)){
                       stufeDdb.children[i].selected = true; 
                    }
                }
                for(var i = 0; i< klasseDdb.children.length;i++){
                    if(klasseDdb.children[i].value == hash.substring(hash.length-1,hash.length)){
                       klasseDdb.children[i].selected = true; 
                    }
                }
            }  if(hash.substring(0,1)=="l"){
                for(var i = 0; i< lehrerDdb.children.length;i++){
                    if(lehrerDdb.children[i].value == hash.substring(2,hash.indexOf(";"))+", " + hash.substring(hash.indexOf(";")+1,hash.length)){
                        lehrerDdb.children[i].selected = true; 
                    }
                }
            }
        }
        sucheSchuelerTabelle();
		
        if(localStorage.getItem(0).substring(0,1) === "s"){
            document.getElementById('btnSchuelerHinzufuegen').style.display="none";
            document.getElementById('btnSchuelerBearbeiten').style.display="none";
            document.getElementById('btnSchuelerLoeschen').style.display="none";
        }
    }
    
    if(window.location.pathname.substr(window.location.pathname.length-12,window.location.pathname.length) == "klassen.html"){
        sucheStufeKlassen();
        sucheLehrerKlassen();
        sucheSchuelerKlassen();
        
        var stufeDdb = document.getElementById('stufe_ddb');
        var klasseDdb = document.getElementById('klasse_ddb');
        var schuelerDdb = document.getElementById('schueler_ddb');
        var lehrerDdb = document.getElementById('lehrer_ddb');
        
        
        var url = window.location.href;
        var idx = url.indexOf("#");
        var hash = idx != -1 ? url.substring(idx+1) : "";
        if(hash != ""){
            if(hash.substring(0,1)=="l"){
                for(var i = 0; i< lehrerDdb.children.length;i++){
                    if(lehrerDdb.children[i].value == hash.substring(2,hash.indexOf(";"))+", " + hash.substring(hash.indexOf(";")+1,hash.length)){
                        lehrerDdb.children[i].selected = true; 
                    }
                }
            } else if(hash.substring(0,1)=="s"){
                for(var i = 0; i< schuelerDdb.children.length;i++){
                    if(schuelerDdb.children[i].value == hash.substring(2,hash.indexOf(";"))+", " + hash.substring(hash.indexOf(";")+1,hash.length)){
                        schuelerDdb.children[i].selected = true; 
                    }
                }
            }
        }
        sucheKlassenTabelle();
		
        if(localStorage.getItem(0).substring(0,1) === "s"){
            document.getElementById('btnKlasseHinzufuegen').style.display="none";
            document.getElementById('btnKlasseBearbeiten').style.display="none";
            document.getElementById('btnKlasseLoeschen').style.display="none";
        }
    }
    
    if(window.location.pathname.substr(window.location.pathname.length-22,window.location.pathname.length) === "lehrer_bearbeiten.html"){
		
        if(localStorage.getItem(0).substring(0,1) === "s"){
            window.alert("YOU SHALL NOT PASS!");
            window.open("lehrer.html", "_self");
        }

        var url = window.location.href;
        var idx = url.indexOf("#");
        var hash = idx !== -1 ? url.substring(idx+1) : "";
        var sla = document.getElementById('SLA-Buttons');

        if (hash === "new"){
            //Ausblenden der Notizen, denn ein neuer Lehrer kann noch keine Notizen angelegt haben
            document.getElementById('notiznav').style.display = "none";
            document.getElementById('notizen').style.display = "none";

            //Ausblenden des Löschen Buttons
            sla.children[2].style.display="none";

            var table = document.createElement('table');
            for (var i = 0; i < klassen.length; i++){

                var line = document.createElement('tr');

                var checkBox = document.createElement('td');
                checkBox.setAttribute("id", "cb");
                checkBox.innerHTML ="<input type=\"checkbox\" id=\"check"+i+"\">";

                var klasse = document.createElement('td');
                klasse.innerHTML = ""+klassen[i].stufe+klassen[i].buchstabe+"";

                line.appendChild(checkBox);
                line.appendChild(klasse);
                table.appendChild(line);
            }
            document.getElementById('Tabelle').appendChild(table);
            
            document.getElementById('speichern').onclick = function () { lehrerSpeichern(true); };
        }
        else{
            var vorname = document.getElementById('vorname');
            var nachname = document.getElementById('nachname');
            var img = document.getElementById('bild').children[0];
            
            var table = document.createElement('table');
            for (var i = 0; i < klassen.length; i++){

                var line = document.createElement('tr');

                var checkBox = document.createElement('td');
                checkBox.setAttribute("id", "cb");
                checkBox.innerHTML ="<input type=\"checkbox\" id=\"check"+i+"\">";

                var klassenID = getKlassenID(klassen[i].buchstabe, klassen[i].stufe);
                for (var j = 0; j < lehrerKlasse.length; j++){
                    if (lehrerKlasse[j].lehrerId === hash.split("=")[1]){
                        if (lehrerKlasse[j].klassenId === ""+i){
                            checkBox.children[0].checked = true;
                        }
                    }
                }
                
                var klasse = document.createElement('td');
                klasse.innerHTML = ""+klassen[i].stufe+klassen[i].buchstabe+"";

                line.appendChild(checkBox);
                line.appendChild(klasse);
                table.appendChild(line);
            }
            document.getElementById('Tabelle').appendChild(table);
            
            
            for (var i = 0; i < lehrer.length; i++){
                if (""+i === hash.split("=")[1]){
                    nachname.value = lehrer[i].nachname;
                    vorname.value = lehrer[i].vorname;
                    img.src = lehrer[i].bildquelle;
                    break;
                }
            }
            
            notizenAnzeigenLehrer();
            
            document.getElementById('speichern').onclick = function () { lehrerSpeichern(hash.split("=")[1]); };
            document.getElementById('abbrechen').onclick = function () { window.close(); };
            document.getElementById('loeschen').onclick = function () { lehrerLöschen(hash.split("=")[1]); };
        }

        document.getElementById('fileUploadForm').addEventListener('change', handleFileSelect, false);
    }
    
    if(window.location.pathname.substr(window.location.pathname.length-23,window.location.pathname.length) === "klassen_bearbeiten.html"){
		
        if(localStorage.getItem(0).substring(0,1) === "s"){
            window.alert("YOU SHALL NOT PASS!");
            window.open("klassen.html", "_self");
        }

        var url = window.location.href;
        var idx = url.indexOf("#");
        var hash = idx !== -1 ? url.substring(idx+1) : "";
        var sla = document.getElementById('SLA-Buttons');
        
        var stufe = document.getElementById('stufe');
        var buchstabe = document.getElementById('buchstabe');
        
        if (hash === "new"){			
            //Ausblenden des Löschen Buttons
            sla.children[2].style.display="none";


            var table = document.createElement('table');
            var head = document.createElement('tr');
            head.innerHTML = "<td id=\"header\"></td><td id=\"header\">Nachname</td><td id=\"header\">Vorname</td>";
            table.appendChild(head);

            for (var i = 0; i < lehrer.length; i++){

                var line = document.createElement('tr');

                var checkBox = document.createElement('td');
                checkBox.setAttribute("id", "cb");
                checkBox.innerHTML ="<input type=\"checkbox\" id=\"check"+i+"\">";

                var nachname = document.createElement('td');
                nachname.innerHTML = ""+lehrer[i].nachname;

                var vorname = document.createElement('td');
                vorname.innerHTML = ""+lehrer[i].vorname;

                line.appendChild(checkBox);
                line.appendChild(nachname);
                line.appendChild(vorname);
                table.appendChild(line);
            }
            document.getElementById('Tabelle').appendChild(table);
            
            document.getElementById('speichern').onclick = function () { klasseSpeichern(true); };
            document.getElementById('abbrechen').onclick = function () { window.close(); };
        }else{
            var img = document.getElementById('klassenbild').children[0];
            img.src = klassen[hash.split("=")[1]].bildquelle;
            var table = document.createElement('table');
            var head = document.createElement('tr');
            head.innerHTML = "<td id=\"header\"></td><td id=\"header\">Nachname</td><td id=\"header\">Vorname</td>";
            table.appendChild(head);
            
            
            for (var i = 0; i < lehrer.length; i++){

                var line = document.createElement('tr');

                var checkBox = document.createElement('td');
                checkBox.setAttribute("id", "cb");
                checkBox.innerHTML ="<input type=\"checkbox\" id=\"check"+i+"\">";
                
                if (lehrerKlasse[i].klassenId === hash.split("=")[1]){
                    checkBox.children[0].checked = true;
                }
                                
                var nachname = document.createElement('td');
                nachname.innerHTML = ""+lehrer[i].nachname;

                var vorname = document.createElement('td');
                vorname.innerHTML = ""+lehrer[i].vorname;

                line.appendChild(checkBox);
                line.appendChild(nachname);
                line.appendChild(vorname);
                table.appendChild(line);
            }

            document.getElementById('Tabelle').appendChild(table);
            
            var lehrerTabelle = document.getElementById('Tabelle').children[0];
            
            for (var i = 1; i < lehrerTabelle.children.length; i++){
                var checkBox = document.getElementById('check'+i);
                for (var j = 0; j < lehrerKlasse.length; j++){
                    if (""+i === lehrerKlasse[j].lehrerId && hash.split("=")[1] === lehrerKlasse[j].klassenId){
                        checkBox.checked = true;
                    }
                }
            }
            
            for (var i = 0; i < klassen.length; i++){
                if (""+i === hash.split("=")[1]){
                    for (var j = 1; j < stufe.children.length; j++){
                        if (klassen[i].stufe === stufe.children[j].value){
                            stufe.children[j].selected = true;
                        }
                    }
                    for (var j = 1; j < buchstabe.children.length; j++){
                        if (klassen[i].buchstabe === buchstabe.children[j].value){
                            buchstabe.children[j].selected = true;
                        }
                    }
                    break;
                }
            }
            
            document.getElementById('speichern').onclick = function () { klasseSpeichern(hash.split("=")[1]); };
            document.getElementById('abbrechen').onclick = function () { window.close(); };
            document.getElementById('loeschen').onclick = function () { klasseLoeschen(hash.split("=")[1]); };
        }

        document.getElementById('fileUploadForm').addEventListener('change', handleFileSelect, false);
    
    }
    
    if(window.location.pathname.substr(window.location.pathname.length-24,window.location.pathname.length) === "schueler_bearbeiten.html"){

        if(localStorage.getItem(0).substring(0,1) === "s"){
                window.alert("YOU SHALL NOT PASS!");
                window.open("schueler.html", "_self");
        }

        var url = window.location.href;
        var idx = url.indexOf("#");
        var hash = idx !== -1 ? url.substring(idx+1) : "";
        var sla = document.getElementById('SLA-Buttons');

        if (hash === "new"){
            //Ausblenden der Notizen, denn ein neuer Schüler kann keine Notizen haben
            document.getElementById('notiznav').style.display = "none";
            document.getElementById('notizen').style.display = "none";

            //Ausblenden des Löschen Buttons
            sla.children[2].style.display="none";
            
            document.getElementById('speichern').onclick = function () { schuelerSpeichern(true); };
        //Felder mit Werten belegen
        }else{
            var vorname = document.getElementById('vorname');
            var nachname = document.getElementById('nachname');
            var img = document.getElementById('bild').children[0];
            var selectStufe = document.getElementById('selectSchuelerBearbeitenStufe');
            var selectKlasse = document.getElementById('selectSchuelerBearbeitenBuchstabe');
            var klassenID;
            
            for (var i = 0; i < schueler.length; i++){
                if (""+i === hash.split("=")[1]){
                    nachname.value = schueler[i].nachname;
                    vorname.value = schueler[i].vorname;
                    img.src = schueler[i].bildquelle;
                    break;
                }
            }
            
            for (var i = 0; i < schuelerKlasse.length; i++){
                if (schuelerKlasse[i].schuelerId === hash.split("=")[1]){
                    klassenID = schuelerKlasse[i].klassenId;
                    break;
                }
            }
            
            for (var i = 0; i < klassen.length; i++){
                if (""+i === klassenID){
                    for (var j = 0; j < selectStufe.children.length; j++){
                        if (selectStufe.children[j].value === klassen[klassenID].stufe){
                            selectStufe.children[j].selected = true;
                        }
                    }
                    
                    for (var j = 0; j < selectKlasse.children.length; j++){
                        if (selectKlasse.children[j].value === klassen[klassenID].buchstabe){
                            selectKlasse.children[j].selected = true;
                        }
                    }
                    break;
                }                
            }
            
            document.getElementById('speichern').onclick = function () { schuelerSpeichern(hash.split("=")[1]); };
            document.getElementById('abbrechen').onclick = function () { window.close(); };
        }

        document.getElementById('fileUploadForm').addEventListener('change', handleFileSelect, false);
    }
	
    if(window.location.pathname.substr(window.location.pathname.length-25,window.location.pathname.length) === "lehrer_genaueAnsicht.html"){
        var url = window.location.href;
        var idx = url.indexOf("#");
        var hash = idx !== -1 ? url.substring(idx+1) : "";

        var nachname = document.getElementById('nachnameInput');
        var vorname = document.getElementById('vornameInput');
        var klassenTabelle = document.getElementById('Tabelle');
        var notiznav = document.getElementById('notiznav');
        var notizenDiv = document.getElementById('notizen');
        var img = document.getElementById('bild').children[0];

        if (hash !== ""){
            for (var i = 0; i < lehrer.length; i++){
                if (""+i === hash.split("=")[1]){
                    nachname.value = lehrer[i].nachname;
                    vorname.value = lehrer[i].vorname;
                    img.src = lehrer[i].bildquelle;
                    break;
                }
            }

            var table = document.createElement('table');
            for (var i = 0; i < klassen.length; i++){

                var line = document.createElement('tr');

                var checkBox = document.createElement('td');
                checkBox.setAttribute("id", "cb");
                checkBox.innerHTML ="<input type=\"checkbox\" disabled=\"disabled\" id=\"check"+i+"\">";

                var klassenID = getKlassenID(klassen[i].buchstabe, klassen[i].stufe);
                for (var j = 0; j < lehrerKlasse.length; j++){
                    if (lehrerKlasse[j].lehrerId === hash.split("=")[1]){
                        if (lehrerKlasse[j].klassenId === ""+i){
                            checkBox.children[0].checked = true;
                        }
                    }
                }

                var klasse = document.createElement('td');
                klasse.innerHTML = ""+klassen[i].stufe+klassen[i].buchstabe+"";

                line.appendChild(checkBox);
                line.appendChild(klasse);
                table.appendChild(line);
            }

            klassenTabelle.appendChild(table);
            
            notizenAnzeigenLehrer();
            
            document.getElementById('lehrerBearbeiten').onclick = function () { 
                if(localStorage.getItem(0).substring(0,1) === "s"){
                    window.alert("YOU SHALL NOT PASS!");
                    return;
                }
                window.open("lehrer_bearbeiten.html#"+hash, '_blank'); };
        }
    }
    
    if(window.location.pathname.substr(window.location.pathname.length-27,window.location.pathname.length) === "schueler_genaueAnsicht.html"){
        var url = window.location.href;
        var idx = url.indexOf("#");
        var hash = idx !== -1 ? url.substring(idx+1) : "";
        
        var vorname = document.getElementById('vornameInput');
        var nachname = document.getElementById('nachnameInput');
        var klasse = document.getElementById('klasseInput');
        //var klassenlehrer = document.getElementById('klassenlehrer');
        var notiznav = document.getElementById('notiznav');
        var img = document.getElementById('bild').children[0];
        
        if (hash !== ""){
            for (var i = 0; i < schueler.length; i++){
                if (""+i === hash.split("=")[1]){
                    nachname.value = schueler[i].nachname;
                    vorname.value = schueler[i].vorname;
                    img.src = schueler[i].bildquelle;
                    break;
                }
            }
            
            for (var i = 0; i < schuelerKlasse.length; i++){
                if (schuelerKlasse[i].schuelerId === hash.split("=")[1]){
                    klasse.value = klassen[i].stufe+klassen[i].buchstabe;
                    break;
                }
            }
            
            notizenAnzeigenSchueler();
            
            document.getElementById('schuelerBearbeiten').onclick = function () { 
                if(localStorage.getItem(0).substring(0,1) === "s"){
                    window.alert("YOU SHALL NOT PASS!");
                    return;
                }
                window.open("schueler_bearbeiten.html#"+hash, '_blank'); };
        }
        
    }
});

//Wird bei Klick auf Button "Anmelden" aufgerufen
function onclickLogin(form){
    var vorname = form.loginVorname.value;
    var nachname = form.loginNachname.value;
    var passwort = form.loginPasswort.value;
    
    if (nachname === "root"){
        if (vorname=== "root"){
            if (passwort === "root"){
                localStorage.setItem("0","a;;Administrator;");
                window.location.href="startseite.html";
                return;
            }
        }
    }
    
    
    for (var i = 0; i < schueler.length; ++i) {
        if(schueler[i].nachname === nachname){
            if(schueler[i].vorname === vorname){
                if(schueler[i].passwort === passwort){
                    localStorage.setItem("0","s;"+i+";"+vorname+";"+nachname+";"+passwort+";"+schueler[i].bildquelle);
                    window.location.href="startseite.html";
                    return;
                }else{
                    window.alert("Benutzername oder Passwort sind falsch");
                    return;
                }
            }
        } 
    }

    for (var i = 0; i < lehrer.length; ++i) {
        if(lehrer[i].nachname === nachname){
            if(lehrer[i].vorname === vorname){
                if(lehrer[i].passwort === passwort){
                    localStorage.setItem("0","l;"+i+";"+vorname+";"+nachname+";"+passwort+";"+lehrer[i].bildquelle);
                    window.location.href="startseite.html";
                    return;
                }else{
                    window.alert("Benutzername oder Passwort sind falsch");
                    return;
                }
            }
        } 
    }
    window.alert("Benutzername oder Passwort sind falsch");
}

function ausloggen(){
    window.location.href="index.html";
    localStorage.setItem("0", "");
}

//Für die Suche
function zeigeSchuelerLehrer(){
    var tabelle = document.getElementById('table').children[0].children;
    for(var i = 1; i < tabelle.length; i++) {
        var line = tabelle[i];
        if(line.children[0].children[0].checked){
            window.open("schueler.html#l="+line.children[1].innerHTML+";"+line.children[2].innerHTML, '_blank');
        }
        
    }
}

function zeigeSchuelerKlassen(){
    var tabelle = document.getElementById('table').children[0].children;
    for(var i = 1; i < tabelle.length; i++) {
        var line = tabelle[i];
        if(line.children[0].children[0].checked){
            window.open("schueler.html#k="+line.children[1].innerHTML, '_blank');
        }
        
    }
}

function klassenBearbeiten(){
	if(localStorage.getItem(0).substring(0,1) === "s"){
			window.alert("Keine Berechtigung!");
	}
    var tabelle = document.getElementById('table').children[0].children;
    for(var i = 1; i < tabelle.length; i++) {
        var line = tabelle[i];
        if(line.children[0].children[0].checked){
            window.open("klassen_bearbeiten.html#k="+(i-1), '_blank');
        }
        
    }
}

function lehrerLöschen(id){
    if(localStorage.getItem(0).substring(0,1) === "s"){
        window.alert("Keine Berechtigung!");
        return;
    }
    
    if(window.location.pathname.substr(window.location.pathname.length-11,window.location.pathname.length) === "lehrer.html"){
        var tabelle = document.getElementById('table').children[0].children;
        for(var i = 1; i < tabelle.length; i++) {
            var line = tabelle[i];
            if(line.children[0].children[0].checked){
                var lehrerFound = getLehrerByName(line.children[1].innerHTML, line.children[2].innerHTML);
                if(lehrerFound != undefined){
                    lehrerFound.istAngestellt = "nein";
                    for (i = 1; i <= localStorage.length-1+localStorageLengthOffset; i++){
                        if (localStorage.getItem(i) === null){
                            continue;
                        }
                        var item = localStorage.getItem(i);
                        var splittedItem = item.split(";");
                        if(splittedItem[0]==="l"){
                            if(splittedItem[2]=== lehrerFound.vorname){
                                if(splittedItem[3] === lehrerFound.nachname){
                                    localStorage.setItem(i,"l;"+splittedItem[1]+";"+splittedItem[2]+";"+splittedItem[3]+";"+splittedItem[4]+";"+splittedItem[5]+";nein"); 
                                }
                            }
                        }
                    }
                }
            }
        }
        sucheLehrerTabelle();
    }else if (window.location.pathname.substr(window.location.pathname.length-22,window.location.pathname.length) === "lehrer_bearbeiten.html"){
        for (var i = 0; i < localStorage.length+localStorageLengthOffset; i++){
            if (localStorage.getItem(i) === null){
                continue;
            }
            var splittedItem = localStorage.getItem(i).split(";");
            if (localStorage.getItem(i).substring(0,2) === "l;"){
                if (splittedItem[1] === id){
                    if (splittedItem[6] !== undefined){
                        localStorage.setItem(i, "l;"+splittedItem[1]+";"+splittedItem[2]+";"+splittedItem[3]+";"+splittedItem[4]+";"+splittedItem[5]+";"+splittedItem[6]+";nein");
                    }else {
                        localStorage.setItem(i, "l;"+splittedItem[1]+";"+splittedItem[2]+";"+splittedItem[3]+";"+splittedItem[4]+";"+splittedItem[5]+";nein");
                    }
                }
            }
        }
        window.open("lehrer.html", "_self");
    }
}

function getLehrerByName(nachname, vorname){
     for(var i = 0; i < lehrer.length; i++) {
        if(nachname === lehrer[i].nachname){
            if(vorname === lehrer[i].vorname){
                return lehrer[i];
            }
        }
     }

}

function zeigeLehrerKlassen(){
    var tabelle = document.getElementById('table').children[0].children;
    for(var i = 1; i < tabelle.length; i++) {
        var line = tabelle[i];
        if(line.children[0].children[0].checked){
            window.open("lehrer.html#k="+line.children[1].innerHTML, '_blank');
        }
        
    }
}

function zeigeLehrerSchueler(){
    var tabelle = document.getElementById('table').children[0].children;
    for(var i = 1; i < tabelle.length; i++) {
        var line = tabelle[i];
        if(line.children[0].children[0].checked){
            window.open("lehrer.html#s="+line.children[1].innerHTML+";"+line.children[2].innerHTML, '_blank');
        }
        
    }
}

function zeigeKlassenLehrer(){
    var tabelle = document.getElementById('table').children[0].children;
    for(var i = 1; i < tabelle.length; i++) {
        var line = tabelle[i];
        if(line.children[0].children[0].checked){
            window.open("klassen.html#l="+line.children[1].innerHTML+";"+line.children[2].innerHTML, '_blank');
        }
        
    }
}

function zeigeKlassenSchueler(){
    var tabelle = document.getElementById('table').children[0].children;
    for(var i = 1; i < tabelle.length; i++) {
        var line = tabelle[i];
        if(line.children[0].children[0].checked){
            window.open("klassen.html#s="+line.children[1].innerHTML+";"+line.children[2].innerHTML, '_blank');
        }
        
    }
}

function sucheLehrerTabelle(){
    var tabelle = document.createElement('table');
    var head = document.createElement('tr');
    head.innerHTML = "<td id=\"header\"></td><td id=\"header\">Nachname</td><td id=\"header\">Vorname</td><td id=\"header\">Angestellt</td>";
    tabelle.appendChild(head);
  
    var stufeDdb = document.getElementById('stufe_ddb');
    var schuelerDdb = document.getElementById('schueler_ddb');
    var lehrerDdb = document.getElementById('lehrer_ddb');
    
    var gefunden = [];
    
    var lehrer = getLehrer(document.getElementById('klasse_ddb').value, stufeDdb.value);   
    for(var i = 0; i < lehrer.length; i++) {
        if(schuelerDdb.value != "-"){
            var schuelerValue = schuelerDdb.value.split(",")
            var schuelerID = getSchuelerID(schuelerValue[0].trim(),schuelerValue[1].trim());
            if(schuelerID[0]!=undefined){
                var lehrerInKlasse = [];
                for(var j = 0; j < lehrerKlasse.length; j++){
                    if(lehrerKlasse[j].lehrerId == getLehrerID(lehrer[i].nachname,lehrer[i].vorname)[0]){
                        lehrerInKlasse.push(lehrerKlasse[j].klassenId);
                    }
                }
                for(var j = 0; j < schuelerKlasse.length; j++){
                    if(schuelerKlasse[j].schuelerId == schuelerID[0]){
                        for(var x = 0; x < lehrerInKlasse.length; x++){
                            if(schuelerKlasse[j].klassenId===lehrerInKlasse[x]){			
                                var bereitsVorhanden = false;
                                for(var y = 0; y < gefunden.length; y++){
                                    if(lehrer[i] === gefunden[y]){
                                        bereitsVorhanden = true;
                                    }
                                }
                                if(bereitsVorhanden===false){
                                    gefunden.push(lehrer[i]);
                                }
                            }
                        }
                    }
                }
            }
        }else{
            var bereitsVorhanden = false;
			for(var y = 0; y < gefunden.length; y++){
				if(lehrer[i] === gefunden[y]){
					bereitsVorhanden = true;
				}
			}
			if(bereitsVorhanden===false){
				gefunden.push(lehrer[i]);
			}
        }
        
    }
	
    var table = document.getElementById('table');
	
    for(var i = 0; i < gefunden.length; i++) {
        var line = document.createElement('tr');
		
        var nachname = document.createElement('td');
        nachname.innerHTML = gefunden[i].nachname;
		
        var vorname = document.createElement('td');
        vorname.innerHTML = gefunden[i].vorname;
		
        var lehrerID = ""+getLehrerID(nachname.innerHTML, vorname.innerHTML)[0];
		
        var checkBox = document.createElement('td');
        checkBox.setAttribute("id", "cb");
        checkBox.innerHTML ="<input type=\"checkbox\" id=\"check"+lehrerID+"\">";

		
        var istAngestellt = document.createElement('td');
        istAngestellt.innerHTML = gefunden[i].istAngestellt;
		
		
        //nachname.onclick = function () {oeffneGenaueAnsichtLehrer(lehrerID)};
        //vorname.onclick = function () {oeffneGenaueAnsichtLehrer(lehrerID)};
        //istAngestellt.onclick = function () {oeffneGenaueAnsichtLehrer(lehrerID)};

        line.appendChild(checkBox);
        line.appendChild(nachname);
        line.appendChild(vorname);
        line.appendChild(istAngestellt);
        
        tabelle.appendChild(line);
    }
    
    table.innerHTML = "";
    table.appendChild(tabelle);
	
    for (var i = 1; i < table.children[0].children.length; i++) (function(i){
            var cbid = 0;
            var cb = null;
            cb = table.children[0].children[i].children[1];
            cbid = table.children[0].children[i].children[0].children[0].id.substring(5);
            cb.onclick = function () { oeffneGenaueAnsichtLehrer(cbid); };

            cb = table.children[0].children[i].children[2];
            cb.onclick = function () { oeffneGenaueAnsichtLehrer(cbid); };

            cb = table.children[0].children[i].children[3];
            cb.onclick = function () { oeffneGenaueAnsichtLehrer(cbid); };
    })(i);
}

function sucheSchuelerTabelle(){
    var tabelle = document.createElement('table');
    var head = document.createElement('tr');
    head.innerHTML = "<td id=\"header\"></td><td id=\"header\">Nachname</td><td id=\"header\">Vorname</td>";
    tabelle.appendChild(head);

    var gefunden = [];
    
    var stufeDdb = document.getElementById('stufe_ddb');
    var klasseDdb = document.getElementById('klasse_ddb');
    var lehrerDdb = document.getElementById('lehrer_ddb');
    
    for(var i = 0; i < schueler.length;i++){
        for(var j = 0; j<schuelerKlasse.length; j++){
            if(i == schuelerKlasse[j].schuelerId){
                if(stufeDdb.value != "-"){
                    if(klassen[schuelerKlasse[j].klassenId].stufe == stufeDdb.value){
                        if(klasseDdb.value != "-"){
                            if(klassen[schuelerKlasse[j].klassenId].buchstabe == klasseDdb.value){
                                if(lehrerDdb.value != "-"){
                                     for(var x = 0; x<lehrerKlasse.length; x++){
                                        if(lehrerKlasse[x].klassenId == schuelerKlasse[j].klassenId){
                                            var lehrerLine = lehrerDdb.value.split(",");
                                            if(getLehrerID(lehrerLine[0].trim(),lehrerLine[1].trim())==lehrerKlasse[j].lehrerId){
                                                var bereitsVorhanden = false;
                                                for(var y = 0; y < gefunden.length; y++){
                                                        if(schueler[i] === gefunden[y]){
                                                                bereitsVorhanden = true;
                                                        }
                                                }
                                                if(bereitsVorhanden===false){
                                                        gefunden.push(schueler[i]);
                                                }
                                            }
                                        }
                                     }
                                }else{
                                    var bereitsVorhanden = false;
                                    for(var y = 0; y < gefunden.length; y++){
                                            if(schueler[i] === gefunden[y]){
                                                    bereitsVorhanden = true;
                                            }
                                    }
                                    if(bereitsVorhanden===false){
                                            gefunden.push(schueler[i]);
                                    }
                                }
                            }
                        }else{
                            if(lehrerDdb.value != "-"){
                                for(var x = 0; x<lehrerKlasse.length; x++){
                                    if(lehrerKlasse[x].klassenId == schuelerKlasse[j].klassenId){
                                        var lehrerLine = lehrerDdb.value.split(",");                                                                        
                                        if(getLehrerID(lehrerLine[0].trim(),lehrerLine[1].trim())==lehrerKlasse[j].lehrerId){
                                            gefunden.push(schueler[i]);
                                        }
                                    }
                                 }
                            }else{
                                gefunden.push(schueler[i]);
                            }
                            
                        }
                    }
                }else{
                      if(klasseDdb.value != "-"){
                            if(klassen[schuelerKlasse[j].klassenId].buchstabe == klasseDdb.value){
                                if(lehrerDdb.value != "-"){
                                     for(var x = 0; x<lehrerKlasse.length; x++){
                                        if(lehrerKlasse[x].klassenId == schuelerKlasse[j].klassenId){
                                            var lehrerLine = lehrerDdb.value.split(",");
                                            if(getLehrerID(lehrerLine[0].trim(),lehrerLine[1].trim())==lehrerKlasse[j].lehrerId){
                                               gefunden.push(schueler[i]);
                                            }
                                        }
                                     }
                                }else{
                                    gefunden.push(schueler[i]);
                                }
                            }
                        }else{
                            if(lehrerDdb.value != "-"){
                                for(var x = 0; x<lehrerKlasse.length; x++){
                                    if(lehrerKlasse[x].klassenId == schuelerKlasse[j].klassenId){
                                        var lehrerLine = lehrerDdb.value.split(",");                                                                        
                                        if(getLehrerID(lehrerLine[0].trim(),lehrerLine[1].trim())==lehrerKlasse[x].lehrerId){
                                            gefunden.push(schueler[i]);
                                        }
                                    }
                                 }
                            }else{
                                gefunden.push(schueler[i]);
                            }
                        }  
                }
            }
        }
    }
    
    var table = document.getElementById('table');
    
    for(var i = 0; i < gefunden.length; i++) {
        var line = document.createElement('tr');
        
        var nachname = document.createElement('td');
        nachname.innerHTML = gefunden[i].nachname;
        var vorname = document.createElement('td');  
        vorname.innerHTML = gefunden[i].vorname;
        
        var checkBox = document.createElement('td');
        
        var schuelerID = ""+getSchuelerID(nachname.innerHTML, vorname.innerHTML)[0];
        
        checkBox.setAttribute("id", "cb");
        checkBox.innerHTML ="<input type=\"checkbox\" id=\"check"+schuelerID+"\">";
        
        line.appendChild(checkBox);
        line.appendChild(nachname);
        line.appendChild(vorname); 
        
        tabelle.appendChild(line);
    }
    
    table.innerHTML = "";
    table.appendChild(tabelle);
    
    for (var i = 1; i < table.children[0].children.length; i++) (function(i){
            var cbid = 0;
            var cb = null;
            cb = table.children[0].children[i].children[1];
            cbid = table.children[0].children[i].children[0].children[0].id.substring(5);
            cb.onclick = function () { oeffneGenaueAnsichtSchueler(cbid); };

            cb = table.children[0].children[i].children[2];
            cb.onclick = function () { oeffneGenaueAnsichtSchueler(cbid); };
    })(i);
    
}

function sucheKlassenTabelle(){
    var tabelle = document.createElement('table');
    var head = document.createElement('tr');
    head.innerHTML = "<td id=\"header\"></td><td id=\"header\">Klasse</td><td id=\"header\">Schüleranzahl</td>";
    tabelle.appendChild(head);

    var gefunden = [];
    var stufeDdb = document.getElementById('stufe_ddb');
    var schuelerDdb = document.getElementById('schueler_ddb');
    var lehrerDdb = document.getElementById('lehrer_ddb');
        
    for(var i = 0; i < klassen.length; i++){
        if(stufeDdb.value != "-"){
            if(klassen[i].stufe == stufeDdb.value){
                if(lehrerDdb.value != "-"){
                    var lehrerID = getLehrerID(lehrerDdb.value.split(",")[0].trim(), lehrerDdb.value.split(",")[1].trim());   
                    for(var j = 0; j < lehrerKlasse.length; j++){
                        if(lehrerKlasse[j].klassenId == i){
                            for(var y = 0; y < lehrerID.length; y++){
                                if(lehrerID[y] == lehrerKlasse[j].lehrerId){
                                    if(schuelerDdb.value != "-"){
                                        var schuelerID = getSchuelerID(schuelerDdb.value.split(",")[0].trim(), schuelerDdb.value.split(",")[1].trim());
                                        for(var x = 0; x < schuelerKlasse.length; x++){
                                            if(schuelerKlasse[x].klassenId == i){
                                                for( var z = 0; z <schuelerID.length; z++){
                                                    if(schuelerID[z] == schuelerKlasse[j].schuelerId){
                                                        gefunden.push(klassen[i]);
                                                    }
                                                }
                                            }
                                        }
                                    }else{
                                        gefunden.push(klassen[i]);   
                                    }
                                }
                            }
                        }
                    }
                }else{
                    var lehrerID = getLehrerID("-","-");   
                    for(var j = 0; j < lehrerKlasse.length; j++){
                        if(lehrerKlasse[j].klassenId == i){
                            for(var y = 0; y < lehrerID.length; y++){
                                if(lehrerID[y] == lehrerKlasse[j].lehrerId){
                                    if(schuelerDdb.value != "-"){
                                        var schuelerID = getSchuelerID(schuelerDdb.value.split(",")[0].trim(), schuelerDdb.value.split(",")[1].trim());
                                        for(var x = 0; x < schuelerKlasse.length; x++){
                                            if(schuelerKlasse[x].klassenId == i){
                                                for( var z = 0; z <schuelerID.length; z++){
                                                    if(schuelerID[z] == schuelerKlasse[j].schuelerId){
                                                        gefunden.push(klassen[i]);
                                                    }
                                                }
                                            }
                                        }
                                    }else{
                                        gefunden.push(klassen[i]);   
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }else{
                if(lehrerDdb.value != "-"){
                    var lehrerID = getLehrerID(lehrerDdb.value.split(",")[0].trim(), lehrerDdb.value.split(",")[1].trim());   
                    for(var j = 0; j < lehrerKlasse.length; j++){
                        if(lehrerKlasse[j].klassenId == i){
                            for(var y = 0; y < lehrerID.length; y++){
                                if(lehrerID[y] == lehrerKlasse[j].lehrerId){
                                    if(schuelerDdb.value != "-"){
                                        var schuelerID = getSchuelerID(schuelerDdb.value.split(",")[0].trim(), schuelerDdb.value.split(",")[1].trim());
                                        for(var x = 0; x < schuelerKlasse.length; x++){
                                            if(schuelerKlasse[x].klassenId == i){
                                                for( var z = 0; z <schuelerID.length; z++){
                                                    if(schuelerID[z] == schuelerKlasse[j].schuelerId){
                                                        gefunden.push(klassen[i]);
                                                    }
                                                }
                                            }
                                        }
                                    }else{
                                        gefunden.push(klassen[i]);   
                                    }
                                }
                            }
                        }
                    }
                }else{
                    var lehrerID = getLehrerID("-","-");   
                    for(var j = 0; j < lehrerKlasse.length; j++){
                        if(lehrerKlasse[j].klassenId == i){
                            for(var y = 0; y < lehrerID.length; y++){
                                if(lehrerID[y] == lehrerKlasse[j].lehrerId){
                                    if(schuelerDdb.value != "-"){
                                        var schuelerID = getSchuelerID(schuelerDdb.value.split(",")[0].trim(), schuelerDdb.value.split(",")[1].trim());
                                        for(var x = 0; x < schuelerKlasse.length; x++){
                                            if(schuelerKlasse[x].klassenId == i){
                                                for( var z = 0; z <schuelerID.length; z++){
                                                    if(schuelerID[z] == schuelerKlasse[x].schuelerId){
                                                        gefunden.push(klassen[i]);
                                                    }
                                                }
                                            }
                                        }
                                    }else{
                                        gefunden.push(klassen[i]);   
                                    }
                                }
                            }
                        }
                    }
                }   
        }
    }
	
	//hier werden doppelte Einträge aus Array "gefunden" entfernt
	var zwischenspeicher = [];
	var eintragNeu = true;
	for(var x = 0; x < gefunden.length; x++) {
		for(var y = 0; y < zwischenspeicher.length; y++) {
			if (gefunden[x] === zwischenspeicher[y]){
					eintragNeu = false;
					break;
			}
		}
		if(eintragNeu) {
			zwischenspeicher.push(gefunden[x]);
		}
		eintragNeu = true;
	}
	gefunden = zwischenspeicher;
	zwischenspeicher = null;
	//Ende doppelte Einträge entfernen
    
    for(var i = 0; i < gefunden.length; i++) {
        var line = document.createElement('tr');

        var klasse = document.createElement('td');
        klasse.innerHTML = gefunden[i].stufe+gefunden[i].buchstabe;
        
        var schueleranzahl = document.createElement('td');
        var schuelerInKlasse = 0;
        
        var klassenId = getKlassenID(gefunden[i].buchstabe,  gefunden[i].stufe);
        
        for(var j=0; j<schuelerKlasse.length;j++){
            if(schuelerKlasse[j].klassenId==klassenId){
                schuelerInKlasse = schuelerInKlasse+1;
            }
        }
        schueleranzahl.innerHTML = schuelerInKlasse;      
        
        var checkBox = document.createElement('td');
        checkBox.setAttribute("id", "cb");
        checkBox.innerHTML ="<input type=\"checkbox\" id=\"check"+klassenId+"\">";
        
        line.appendChild(checkBox);
        line.appendChild(klasse);
        line.appendChild(schueleranzahl); 
        
        tabelle.appendChild(line);
    }
    
    var table = document.getElementById('table');
    
    
    table.innerHTML = "";
    table.appendChild(tabelle);
    
    for (var i = 1; i < table.children[0].children.length; i++) (function(i){
            var cbid = 0;
            var cb = null;
            cb = table.children[0].children[i].children[1];
            cbid = table.children[0].children[i].children[0].children[0].id.substring(5);
            cb.onclick = function () { oeffneGenaueAnsichtKlasse(cbid); };

            cb = table.children[0].children[i].children[2];
            cb.onclick = function () { oeffneGenaueAnsichtKlasse(cbid); };
    })(i);
}

function sucheStufeKlassen(){ 
    var stufen = getStufen();    
    var sel = document.getElementById('schueler_ddb');
    var selObjekt = sel.value;
    sel.innerHTML = "";
   
    var opt = document.createElement('option');
    opt.innerHTML = "-";
    opt.value = "-";
    sel.appendChild(opt);

    sel = document.getElementById('lehrer_ddb');
    selObjekt = sel.value;
    sel.innerHTML = "";
   
    opt = document.createElement('option');
    opt.innerHTML = "-";
    opt.value = "-";
    sel.appendChild(opt);
    
    sel = document.getElementById('stufe_ddb');
    selObjekt = sel.value;
    sel.innerHTML = "";
   
    opt = document.createElement('option');
    opt.innerHTML = "-";
    opt.value = "-";
    sel.appendChild(opt);
    
    for(var i = 0; i < stufen.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = stufen[i];
        opt.value = stufen[i];
        if(selObjekt == stufen[i]){
            opt.selected = true;
        }
        sel.appendChild(opt);
    }
    sucheKlassenTabelle();
}

function sucheStufeLehrer(){ 
    var stufen = getStufen();    
    var sel = document.getElementById('schueler_ddb');
    var selObjekt = sel.value;
    sel.innerHTML = "";
   
    var opt = document.createElement('option');
    opt.innerHTML = "-";
    opt.value = "-";
    sel.appendChild(opt);

    sel = document.getElementById('klasse_ddb');
    selObjekt = sel.value;
    sel.innerHTML = "";
   
    opt = document.createElement('option');
    opt.innerHTML = "-";
    opt.value = "-";
    sel.appendChild(opt);
    
    sel = document.getElementById('stufe_ddb');
    selObjekt = sel.value;
    sel.innerHTML = "";
   
    opt = document.createElement('option');
    opt.innerHTML = "-";
    opt.value = "-";
    sel.appendChild(opt);
    
    for(var i = 0; i < stufen.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = stufen[i];
        opt.value = stufen[i];
        if(selObjekt == stufen[i]){
            opt.selected = true;
        }
        sel.appendChild(opt);
    }
    sucheLehrerTabelle();
}

function sucheStufeSchueler(){ 
    var stufen = getStufen();    
    var sel = document.getElementById('lehrer_ddb');
    var selObjekt = sel.value;
    sel.innerHTML = "";
   
    var opt = document.createElement('option');
    opt.innerHTML = "-";
    opt.value = "-";
    sel.appendChild(opt);

    sel = document.getElementById('klasse_ddb');
    selObjekt = sel.value;
    sel.innerHTML = "";
   
    opt = document.createElement('option');
    opt.innerHTML = "-";
    opt.value = "-";
    sel.appendChild(opt);
    
    sel = document.getElementById('stufe_ddb');
    selObjekt = sel.value;
    sel.innerHTML = "";
   
    opt = document.createElement('option');
    opt.innerHTML = "-";
    opt.value = "-";
    sel.appendChild(opt);
    
    for(var i = 0; i < stufen.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = stufen[i];
        opt.value = stufen[i];
        if(selObjekt == stufen[i]){
            opt.selected = true;
        }
        sel.appendChild(opt);
    }
    sucheSchuelerTabelle()
}

function sucheKlassenLehrer(){ 
    var klassen = getKlassen(document.getElementById('stufe_ddb').value);   
    
    var sel = document.getElementById('schueler_ddb');
    var selObjekt = sel.value;
    sel.innerHTML = "";
   
    var opt = document.createElement('option');
    opt.innerHTML = "-";
    opt.value = "-";
    sel.appendChild(opt);

    
    sel = document.getElementById('klasse_ddb');
    selObjekt = sel.value;
    sel.innerHTML = "";
   
    opt = document.createElement('option');
    opt.innerHTML = "-";
    opt.value = "-";
    sel.appendChild(opt);
    
    for(var i = 0; i < klassen.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = klassen[i];
        opt.value = klassen[i];
        if(selObjekt == klassen[i]){
            opt.selected = true;
        }
        sel.appendChild(opt);
    }
    
    sucheLehrerTabelle();
}

function sucheKlassenSchueler(){ 
    var klassen = getKlassen(document.getElementById('stufe_ddb').value);   
    
    var sel = document.getElementById('lehrer_ddb');
    var selObjekt = sel.value;
    sel.innerHTML = "";
   
    var opt = document.createElement('option');
    opt.innerHTML = "-";
    opt.value = "-";
    sel.appendChild(opt);

    
    sel = document.getElementById('klasse_ddb');
    selObjekt = sel.value;
    sel.innerHTML = "";
   
    opt = document.createElement('option');
    opt.innerHTML = "-";
    opt.value = "-";
    sel.appendChild(opt);
    
    for(var i = 0; i < klassen.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = klassen[i];
        opt.value = klassen[i];
        if(selObjekt == klassen[i]){
            opt.selected = true;
        }
        sel.appendChild(opt);
    }
    sucheSchuelerTabelle()
}

function sucheLehrerKlassen(){ 
    var lehrer = getLehrer("-", document.getElementById('stufe_ddb').value);   
    
    var sel = document.getElementById('lehrer_ddb');
    var selObjekt = sel.value;
    sel.innerHTML = "";
   
    var opt = document.createElement('option');
    opt.innerHTML = "-";
    opt.value = "-";
    sel.appendChild(opt);
    
    for(var i = 0; i < lehrer.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = lehrer[i].nachname+", "+lehrer[i].vorname;
        opt.value = lehrer[i].nachname+", "+lehrer[i].vorname;
        if(selObjekt == lehrer[i].nachname+", "+lehrer[i].vorname){
            opt.selected = true;
        }
        sel.appendChild(opt);
    }
    sucheKlassenTabelle();
}

function sucheLehrerSchueler(){ 
    var lehrer = getLehrer("-", document.getElementById('stufe_ddb').value);   
    
    var sel = document.getElementById('lehrer_ddb');
    var selObjekt = sel.value;
    sel.innerHTML = "";
   
    var opt = document.createElement('option');
    opt.innerHTML = "-";
    opt.value = "-";
    sel.appendChild(opt);
    
    for(var i = 0; i < lehrer.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = lehrer[i].nachname+", "+lehrer[i].vorname;
        opt.value = lehrer[i].nachname+", "+lehrer[i].vorname;
        if(selObjekt == lehrer[i].nachname+", "+lehrer[i].vorname){
            opt.selected = true;
        }
        sel.appendChild(opt);
    }
    sucheSchuelerTabelle();
}

function sucheSchuelerKlassen(){ 
    var schueler = getSchueler("-", document.getElementById('stufe_ddb').value);   
    
    var sel = document.getElementById('schueler_ddb');
    var selObjekt = sel.value;
    sel.innerHTML = "";
   
    var opt = document.createElement('option');
    opt.innerHTML = "-";
    opt.value = "-";
    sel.appendChild(opt);
    
    for(var i = 0; i < schueler.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = schueler[i];
        opt.value = schueler[i];
        if(selObjekt == schueler[i]){
            opt.selected = true;
        }
        sel.appendChild(opt);
    }
    sucheKlassenTabelle();
}

function sucheSchuelerLehrer(){ 
    var schueler = getSchueler(document.getElementById('klasse_ddb').value, document.getElementById('stufe_ddb').value);   
    
    var sel = document.getElementById('schueler_ddb');
    var selObjekt = sel.value;
    sel.innerHTML = "";
   
    var opt = document.createElement('option');
    opt.innerHTML = "-";
    opt.value = "-";
    sel.appendChild(opt);
    
    for(var i = 0; i < schueler.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = schueler[i];
        opt.value = schueler[i];
        if(selObjekt == schueler[i]){
            opt.selected = true;
        }
        sel.appendChild(opt);
    }
    sucheLehrerTabelle()
}

function getStufen(){
    var rueckgabe = [];
    for(var i=0; i<klassen.length;i++){
        var stufe = klassen[i].stufe; 
        var istGesetzt = false;
        for(var j=0; j<rueckgabe.length;j++){
            if(stufe===rueckgabe[j]){
                istGesetzt = true;
                break;
            }
        }
        if(!istGesetzt){
            rueckgabe.push(stufe);
            //console.log(stufe);
        }
    }
    return rueckgabe;
}

function getKlassen(stufe){
    var rueckgabe = [];
    for(var i=0; i<klassen.length;i++){
        var buchstabe = klassen[i].buchstabe; 
        var istGesetzt = false;
        for(var j=0; j<rueckgabe.length;j++){
            if(buchstabe===rueckgabe[j]){
                istGesetzt = true;
                break;
            }
        }
        if(!istGesetzt){
            if(stufe == "-"){
                rueckgabe.push(buchstabe);
            }  else if(stufe == klassen[i].stufe){ 
                rueckgabe.push(buchstabe);
                //console.log(buchstabe);
            }
        }
    }
    return rueckgabe;
}

function getKlassenID(buchstabe, stufe){
    var rueckgabe = [];
    for(var i=0; i<klassen.length;i++){
        if(buchstabe == '-'){
            if(stufe == '-'){
                rueckgabe.push(i);
            }else if(klassen[i].stufe===stufe){
                rueckgabe.push(i);
            }
        }else if(klassen[i].buchstabe===buchstabe){
            if(stufe == '-'){
                rueckgabe.push(i);
            }else if(klassen[i].stufe===stufe){
                rueckgabe.push(i);
            }
        }
    }
    return rueckgabe;
}

function getLehrerID(nachname, vorname){ 
    var rueckgabe = [];
    for(var i=0; i<lehrer.length;i++){
        if(nachname == '-'){
            if(vorname == '-'){
                rueckgabe.push(i);
            }else if(lehrer[i].nachname===nachname){
                rueckgabe.push(i);
            }
        }else if(lehrer[i].nachname===nachname){
            if(vorname == '-'){
                rueckgabe.push(i);
            }else if(lehrer[i].vorname===vorname){
                rueckgabe.push(i);
            }
        }
    }
    return rueckgabe;
}
    
function getSchuelerID(nachname, vorname){ 
    var rueckgabe = [];
    for(var i=0; i<schueler.length;i++){
        if(nachname == '-'){
            if(vorname == '-'){
                rueckgabe.push(i);
            }else if(schueler[i].nachname===nachname){
                rueckgabe.push(i);
            }
        }else if(schueler[i].nachname===nachname){
            if(vorname == '-'){
                rueckgabe.push(i);
            }else if(schueler[i].vorname===vorname){
                rueckgabe.push(i);
            }
        }
    }
    return rueckgabe;
}
    
function getSchueler(buchstabe, stufe){
    var rueckgabe = [];
    var klassenId = getKlassenID(buchstabe, stufe);
    for(var i=0; i<schuelerKlasse.length;i++){
        for(var j=0; j<klassenId.length;j++){
            if(schuelerKlasse[i].klassenId == klassenId[j]){
                rueckgabe.push(schueler[schuelerKlasse[i].schuelerId].nachname+", "+schueler[schuelerKlasse[i].schuelerId].vorname);
            }   
        }
    }
    
    return rueckgabe;
}

function getLehrer(buchstabe, stufe){
    var rueckgabe = [];
    var klassenId = getKlassenID(buchstabe, stufe);
    for(var i=0; i<lehrerKlasse.length;i++){
        for(var j=0; j<klassenId.length;j++){
            if(lehrerKlasse[i].klassenId == klassenId[j]){
                rueckgabe.push(lehrer[lehrerKlasse[i].lehrerId]);
            }    
        }
    }
    
    return rueckgabe;
}
//Ende der Suchfunktionen

function lehrerBearbeiten(){
    if(localStorage.getItem(0).substring(0,1) === "s"){
        window.alert("Keine Berechtigung!");
    }
    var tabelle = document.getElementById('table').children[0].children;
    for(var i = 1; i < tabelle.length; i++) {
        var line = tabelle[i];
        if(line.children[0].children[0].checked){
            window.open("lehrer_bearbeiten.html#l="+(getLehrerID(line.children[1].innerHTML, line.children[2].innerHTML)), '_blank');
        }
    }
}

function schuelerBearbeiten(){
    var tabelle = document.getElementById('table').children[0].children;
    for(var i = 1; i < tabelle.length; i++) {
        var line = tabelle[i];
        if(line.children[0].children[0].checked){
            window.open("schueler_bearbeiten.html#s="+(i-1), '_blank');
        }
        
    }
}

function lehrerHinzufuegen(){
    window.open("lehrer_bearbeiten.html#new", '_self');
}

function klasseHinzufuegen(){
    window.open("klassen_bearbeiten.html#new", '_self');
}

function schuelerHinzufuegen(){
    window.open("schueler_bearbeiten.html#new", '_self');
}

function lehrerSpeichern(neu){
    var vorname = document.getElementById('vorname').value;
    var nachname = document.getElementById('nachname').value;
    var imgSource = document.getElementById('bild').children[0].src;
    var klassenTabelle = document.getElementById('Tabelle').children[0];
    var klassenID;
    //var unterrichteteKlassen = [];

    if(vorname === "" || nachname === ""){
        window.alert("Bitte dem Lehrer einen vollständigen Namen geben!");
        return;
    }

    var keineKlasse = true;
    if (neu === true){
        for(var i = 0; i < klassenTabelle.children.length; i++) {
            var line = klassenTabelle.children[i];

            if(line.children[0].children[0].checked){
                if(klassenTabelle.children[i].children[1].innerHTML.length === 2){
                    klassenID = getKlassenID(klassenTabelle.children[i].children[1].innerHTML.charAt(1), klassenTabelle.children[i].children[1].innerHTML.charAt(0));
                }else{
                    //Weil eine Klasse mit Stufe >= 10 mehr Zeichen hat, kann man das da oben nicht mehr anwenden... Deswegen den String aufteilen
                    var klasse = klassenTabelle.children[i].children[1].innerHTML;
                    klassenID = getKlassenID(klasse.substring(2,3), klasse.substring(0,2));
                }

                localStorage.setItem(localStorage.length+localStorageLengthOffset, "lk;"+klassenID+";"+lehrer.length);
                //unterrichteteKlassen.push(klassenID);
                keineKlasse = false;
            }
        
            if(keineKlasse === true){
                window.alert("Der Lehrer muss mindestens eine Klasse unterrichten!");
                return;
            }

            localStorage.setItem(localStorage.length+localStorageLengthOffset, "l;"+lehrer.length+";"+vorname+";"+nachname+";ändermich;"+imgSource+";ja");
        }
        
        window.open("lehrer.html", "_self");      
        
    }else{
        var ausgewaehlteKlassen = [];
        for(var i = 0; i < klassenTabelle.children.length; i++){
            var line = klassenTabelle.children[i];

            if(line.children[0].children[0].checked){
                if(klassenTabelle.children[i].children[1].innerHTML.length === 2){
                    ausgewaehlteKlassen.push(getKlassenID(klassenTabelle.children[i].children[1].innerHTML.charAt(1), klassenTabelle.children[i].children[1].innerHTML.charAt(0)));
                }else{
                    //Weil eine Klasse mit Stufe >= 10 mehr Zeichen hat, kann man das da oben nicht mehr anwenden... Deswegen den String aufteilen
                    var klasse = klassenTabelle.children[i].children[1].innerHTML;
                    ausgewaehlteKlassen.push(getKlassenID(klasse.substring(2,3), klasse.substring(0,2)));
                }
                keineKlasse = false;
            }
        }
        
        if(keineKlasse === true){
                window.alert("Der Lehrer muss mindestens eine Klasse unterrichten!");
                return;
        }
        
        //Wenns kein neuer Lehrer ist, den Localstorage durchlaufen...
        for (var i = 1; i < localStorage.length-1+localStorageLengthOffset; i++){
            if (localStorage.getItem(i) === null){
                continue;
            }
            var splittedItem = localStorage.getItem(i).split(";");
            //...bis man einen Lehrer gefunden hat...
            if (localStorage.getItem(i).substring(0,2) === "l;"){
                //... und lehrerID im link mit dem aus dem localstorage übereinstimmt
                if (splittedItem[1] === ""+neu){
                    if (splittedItem[7] !== undefined){
                        localStorage.setItem(i, "l;"+splittedItem[1]+";"+vorname+";"+nachname+";"+splittedItem[4]+";"+imgSource+";"+splittedItem[7]);
                    }else{
                        localStorage.setItem(i, "l;"+splittedItem[1]+";"+vorname+";"+nachname+";"+splittedItem[4]+";"+imgSource+";"+splittedItem[6]);
                    }
                }
            }else if (localStorage.getItem(i).substring(0,2) === "lk"){
                if (splittedItem[2] === ""+neu){
                    localStorageLengthOffset++;
                    localStorage.removeItem(i);
                }
            }
        }
        
        for (var i = 0; i < ausgewaehlteKlassen.length; i++){
            localStorage.setItem(localStorage.length+localStorageLengthOffset, "lk;"+ausgewaehlteKlassen[i]+";"+neu);
        }
        
        window.close();
        location.reload();
    }
}

function schuelerSpeichern(neu){
    var vorname = document.getElementById('vorname').value;
    var nachname = document.getElementById('nachname').value;
    var imgSource = document.getElementById('bild').children[0].src;

    if(vorname === "" || nachname === ""){
        window.alert("Bitte dem Schüler einen vollständigen Namen geben!");
        return;
    }

    var selectStufe = document.getElementById('selectSchuelerBearbeitenStufe');
    var selectKlasse = document.getElementById('selectSchuelerBearbeitenBuchstabe');
    
    if (selectStufe.value === "Stufe" || selectKlasse.value === "Buchstabe"){
        window.alert("Der Schüler muss einer Klasse zugewiesen werden!");
        return;
    }
    
    
    var neueKlassenId = getKlassenID(selectKlasse.options[selectKlasse.selectedIndex].value, selectStufe.options[selectStufe.selectedIndex].value);
    if (neueKlassenId.length === 0){
        window.alert("Die Klasse gibt es nicht!");
        return;
    }
    
    if (neu === true){
        localStorage.setItem(localStorage.length+localStorageLengthOffset, "s;"+schueler.length+";"+vorname+";"+nachname+";ändermich;"+imgSource);
        localStorage.setItem(localStorage.length+localStorageLengthOffset, "sk;"+getKlassenID(selectKlasse.value, selectStufe.value)+";"+schueler.length);
    }else{
        //Wenns kein neuer Schüler ist, den Localstorage durchlaufen...
        for (var i = 1; i < localStorage.length+localStorageLengthOffset; i++){
            if (localStorage.getItem(i) === null){
                continue;
            }
            var splittedItem = localStorage.getItem(i).split(";");
            //...bis man einen Schüler gefunden hat...
            if (localStorage.getItem(i).substring(0,2) === "s;"){
                //... und SchülerID im localStorage mit der SchülerID aus dem Link übereinstimmt
                if (splittedItem[1] === ""+neu){
                    localStorage.setItem(i, "s;"+splittedItem[1]+";"+vorname+";"+nachname+";"+splittedItem[4]+";"+imgSource);
                }
            //... bis man eine Schülerklasse gefunden hat...
            }else if (localStorage.getItem(i).substring(0,2) === "sk"){
                //...dann Klasse finden, in der der Schüler ist...
                if (splittedItem[2] === ""+neu){
                    
                    //... und den Eintrag im localStorage ändern
                    localStorage.setItem(i, "sk;"+neueKlassenId[0]+";"+splittedItem[2]);
                }
            }
        }
    }

    window.open("schueler.html", "_self");
}

function klasseSpeichern(neu){
    var stufe = document.getElementById('stufe').value;
    var buchstabe = document.getElementById('buchstabe').value;
    var imgSource = document.getElementById('klassenbild').children[0].src;
    var lehrerTabelle = document.getElementById('Tabelle').children[0];
    
    if (stufe === "Stufe" || buchstabe === "Buchstabe"){
        window.alert("Bitte Stufe/Buchstabe zuweisen!");
        return;
    }
    
    var keinLehrer = true;
    
//    var lehrerNachname;
//    var lehrerVorname;
    var lehrerId;
    var ausgewaehlteLehrer = [];
    
    for (var i = 1; i < lehrerTabelle.children.length; i++){
        //var line = lehrerTabelle.children[i];

        if(lehrerTabelle.children[i].children[0].children[0].checked){
//            lehrerNachname = lehrerTabelle.children[i].children[1].innerHTML;
//            lehrerVorname = lehrerTabelle.children[i].children[2].innerHTML;
            lehrerId = lehrerTabelle.children[i].children[0].children[0].id.substring(5);
            ausgewaehlteLehrer.push(lehrerId);
            //localStorage.setItem(localStorage.length+localStorageLengthOffset, "lk;"+klassen.length+";"+lehrerId);
            keinLehrer = false;
        }
    }
    
    if (keinLehrer === true){
        window.alert("Der Klasse muss mindestens ein Lehrer zugewiesen werden!");
        return;
    } 
    
    if (neu === true){
        localStorage.setItem(localStorage.length+localStorageLengthOffset, "k;"+klassen.length+";"+stufe+";"+buchstabe+";"+imgSource);

        window.open("klassen.html", "_self");
        
        for (var i = 0; i < ausgewaehlteLehrer.length; i++){
            localStorage.setItem(localStorage.length+localStorageLengthOffset, "lk;"+klassen.length+";"+ausgewaehlteLehrer[i]);
        }
    }else{
        for (var i = 1; i < localStorage.length+localStorageLengthOffset; i++){
            if (localStorage.getItem(i) === null){
                continue;
            }
            
            var splittedItem = localStorage.getItem(i).split(";");
            //...bis man einen Schüler gefunden hat...
            if (localStorage.getItem(i).substring(0,2) === "k;"){
                if (splittedItem[1] === ""+neu){
                    localStorage.setItem(i, "k;"+splittedItem[1]+";"+stufe+";"+buchstabe+";"+imgSource);
                }
            }else if (localStorage.getItem(i).substring(0,2) === "sk"){
                if (splittedItem[1] === ""+neu){
                    localStorageLengthOffset++;
                    localStorage.removeItem(i);
                }
            }
        }
        
        for (var i = 0; i < ausgewaehlteLehrer.length; i++){
            localStorage.setItem(localStorage.length+localStorageLengthOffset, "lk;"+neu+";"+ausgewaehlteLehrer[i]);
        }
        
        window.close();
        location.reload();
    }

}

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.

    for (var i = 0, f; f = files[i]; i++) {

		// Only process image files.
		if (!f.type.match('image.*')) {
			continue;
		}

		var reader = new FileReader();

		// Closure to capture the file information.
		reader.onload = (function(theFile) {
			return function(e) {
				// Render thumbnail.
				var img = document.getElementById('bild');
				var form = document.getElementById('fileUploadForm');
				img.innerHTML = ['<img src="', e.target.result, '" title="', escape(theFile.name), '"/>'].join('');
				//document.getElementById('bild').insertBefore(img, null);
				img.appendChild(form);
			};
		})(f);

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
    }
}

//Funktionen der myLAN-Leiste auf der Startseite

function meinProfilStartseite() {
	var id = localStorage.getItem(0).split(";")[1];
	if(localStorage.getItem(0).substring(0,1) === "l"){
		window.open("lehrer_genaueAnsicht.html#l="+id, '_self');
	}
	if(localStorage.getItem(0).substring(0,1) === "s"){
		window.open("schueler_genaueAnsicht.html#s="+id, '_self');
	}	
}

function meineLehrerStartseite() {
	if(localStorage.getItem(0).substring(0,1) === "s"){ 							//nur für Schüler erreichbar
		var sVorname = localStorage.getItem(0).split(";")[2];						//Vorname abspeichern
		var sNachname = localStorage.getItem(0).split(";")[3];						//Nachname abspeichen
		var sName = ""+sNachname+", "+sVorname;										//Namen-String zur Befüllung der Dropdownbox erzeugen
	
		window.open("lehrer.html", '_self');										//öffnen der Lehrer.html zum filtern nach lehrern des eingeloggten schülers
		document.getElementById('schueler_ddb').value = sName;						//Wertzuweisung an Dropdownbox
		sucheSchuelerLehrer();														//Simulation onClick-Event
	}	
}

function meineKlassenStartseite() {
	
	
	
}

function meineKlasseStartseite() {
	if(localStorage.getItem(0).substring(0,1) === "s"){ 							//nur für Schüler erreichbar
		var sId = localStorage.getItem(0).split(";")[1];							//ID des eingeloggten Schülers
		
		for (i = 1; i <= localStorage.length-1+localStorageLengthOffset; i++){		//array nach sk durchsuchen
			if (localStorage.getItem(i) === null){
				continue;
			}
			if(localStorage.getItem(i).substring(0,2) === "sk") {					//bei sk
				if(localStorage.getItem(i).split(";")[2] === sId) {					//überprüfen ob es die zuweisung für eingeloggten schüler ist
					var kId = localStorage.getItem(i).split(";")[1];				//Klassen-ID abspeichern
				}
			}
		}
		window.open("klassen_genaueAnsicht.html#k="+kId, '_self');					//öffnen des Fensters der Klassenansicht des eingeloggten Schülers
	}	
}

function meineSchuelerStartseite() {
	
	
	
}

function passwortAendern(){
    window.open("pw_aendern.html", '_self');
}
//Ende MyLAN Funktionen

function oeffneGenaueAnsichtLehrer(id){
    window.open("lehrer_genaueAnsicht.html#l="+id, "_self");
}

function oeffneGenaueAnsichtSchueler(id){
    window.open("schueler_genaueAnsicht.html#s="+id, "_self");
}

function oeffneGenaueAnsichtKlasse(id){
    window.open("klassen_genaueAnsicht.html#k="+id, "_self");
}

function notizenAnzeigenLehrer(){ 
    var url = window.location.href;
    var idx = url.indexOf("#");
    var hash = idx !== -1 ? url.substring(idx+1) : "";
        
    var notizenDiv = document.getElementById('notizen');
    var notizenTabelle = document.createElement('table');
    var head = document.createElement('tr');
    head.innerHTML = "<td id=\"header\"></td><td id=\"header\">Erstelldatum</td><td id=\"header\">Schüler</td><td id=\"header\">Klasse</td>";
    notizenTabelle.appendChild(head);

    for (var i = 0; i < notizen.length; i++){
        if (notizen[i].lehrerId === hash.split("=")[1]){
            var line = document.createElement('tr');
            var checkBox = document.createElement('td');
            checkBox.setAttribute("id", "cb");
            checkBox.innerHTML ="<input type=\"checkbox\" id=\"check"+i+"\">";

            var spalteErstelldatum = document.createElement('td');
            spalteErstelldatum.innerHTML = notizen[i].zeitstempel;

            var spalteSchuelerName = document.createElement('td');
            var schuelerID = notizen[i].schuelerId;
            spalteSchuelerName.innerHTML = schueler[schuelerID].vorname+" "+schueler[schuelerID].nachname;

            var klassenID;
            for (var j = 0; j < schuelerKlasse.length; j++){
                if (schuelerKlasse[j].schuelerId === schuelerID){
                    klassenID = schuelerKlasse[j].klassenId;
                    break;
                }
            }

            var spalteKlasse = document.createElement('td');
            for (var j = 0; j < klassen.length; j++){
                if (""+j === ""+klassenID){
                    spalteKlasse.innerHTML = klassen[j].stufe+klassen[j].buchstabe;
                    break;
                }
            }

            line.appendChild(checkBox);
            line.appendChild(spalteErstelldatum);
            line.appendChild(spalteSchuelerName);
            line.appendChild(spalteKlasse);

            notizenTabelle.appendChild(line);
        }
    }

    notizenDiv.appendChild(notizenTabelle);
}

function notizenAnzeigenSchueler(){
    var url = window.location.href;
    var idx = url.indexOf("#");
    var hash = idx !== -1 ? url.substring(idx+1) : "";
        
    var notizenDiv = document.getElementById('notizen');
    var notizenTabelle = document.createElement('table');
    var head = document.createElement('tr');
    head.innerHTML = "<td id=\"header\"></td><td id=\"header\">Erstelldatum</td><td id=\"header\">Lehrer</td>";
    notizenTabelle.appendChild(head);

    for (var i = 0; i < notizen.length; i++){
        if (notizen[i].schuelerId === hash.split("=")[1]){
            var line = document.createElement('tr');
            var checkBox = document.createElement('td');
            checkBox.setAttribute("id", "cb");
            checkBox.innerHTML ="<input type=\"checkbox\" id=\"check"+i+"\">";

            var spalteErstelldatum = document.createElement('td');
            spalteErstelldatum.innerHTML = notizen[i].zeitstempel;

            var spalteLehrerName = document.createElement('td');
            var lehrerID = notizen[i].lehrerId;
            spalteLehrerName.innerHTML = lehrer[lehrerID].vorname+" "+lehrer[lehrerID].nachname;

            line.appendChild(checkBox);
            line.appendChild(spalteErstelldatum);
            line.appendChild(spalteLehrerName);

            notizenTabelle.appendChild(line);
        }
    }

    notizenDiv.appendChild(notizenTabelle);
}

function notizOeffnen(){
    
}

function notizHinzufuegen(){
    
}

function notizBearbeiten(){
    
}

function notizLoeschen(){
    
}