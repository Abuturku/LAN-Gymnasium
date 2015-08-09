//Der Array Index ist gleichzeitig auch die ID des Schülers, Lehrers, etc...
var lehrer = [];
var schueler = [];
var klassen = [];
var lehrerKlasse = [];
var schuelerKlasse = [];
var notizen = [];

function ladeStorage(){
    //Jeweils 4 Beispiel Datensätze für jedes Array. Auskommentieren, wenn nötig
    //!!Achtung!! wird bei jedem Aufrufen einer Seite ausgeführt, also falls Datensätze in der Applikation geändert werden, sollte das hier auskommentiert werden!
    localStorage.setItem("0", "");
    localStorage.setItem("1", "k;0;5;a;bilder/klasse0.jpg");
    localStorage.setItem("2", "k;1;6;b;bilder/klasse1.jpg");
    localStorage.setItem("3", "k;2;5;b;bilder/klasse2.jpg");
    localStorage.setItem("4", "k;3;7;a;bilder/klasse3.jpg");
    localStorage.setItem("5", "l;0;Klaus;Kleber;maus;bilder/lehrer0.jpg;true");
    localStorage.setItem("6", "l;1;Frank;Mueller;elefant;bilder/lehrer1.jpg;true");
    localStorage.setItem("7", "l;2;Peter;Frosch;baum;bilder/lehrer2.jpg;false");
    localStorage.setItem("8", "l;3;Tomate;Stengel;erde;bilder/lehrer3.jpg;true");
    localStorage.setItem("9", "s;0;Tom;Braun;1234;bilder/schueler0.jpg");
    localStorage.setItem("10", "s;1;Andy;Ydna;blabla;bilder/schueler1.jpg");
    localStorage.setItem("11", "s;2;Linda;Adnil;spinnenpower;bilder/schueler2.jpg");
    localStorage.setItem("12", "s;3;Niklas;TheFaggot;binGay;bilder/schueler3.jpg");
    localStorage.setItem("13", "n;0;1;3;Kenn ich net;12.12.2012 12:00:00");
    localStorage.setItem("14", "n;1;0;0;Spielt nie Robocraft;12.12.2012 12:00:00");
    localStorage.setItem("15", "n;2;2;2;Kann kein Robocraft;12.12.2012 12:00:00");
    localStorage.setItem("16", "n;3;3;1;Ist ein richtig geiler Typ;12.12.2012 12:00:00");
    localStorage.setItem("17", "lk;0;3");
    localStorage.setItem("18", "lk;1;1");
    localStorage.setItem("19", "lk;2;2");
    localStorage.setItem("20", "lk;3;0");
    localStorage.setItem("21", "sk;0;2");
    localStorage.setItem("22", "sk;1;1");
    localStorage.setItem("23", "sk;2;3");
    localStorage.setItem("24", "sk;3;0");
}

//Wird bei jedem Laden einer Seite aufgerufen
window.addEventListener("load", reLoad());

function reLoad(){
 
    for (i = 1; i <= localStorage.length-1; i++){
        var item = localStorage.getItem(i);
        var splittedItem = item.split(";");
        
        //Ist das Item ein Lehrer?
        if (splittedItem[0] === "l"){
            var lehrerObject = {vorname:splittedItem[2], nachname:splittedItem[3], passwort:splittedItem[4], bildquelle:splittedItem[5], istAngestellt:splittedItem[6]};
            lehrer.push(lehrerObject);
        }
        
        //Ist das Item ein Schueler?
        if (splittedItem[0] === "s"){
            var schuelerObject = {vorname:splittedItem[2], nachname:splittedItem[3], passwort:splittedItem[4], bildquelle:splittedItem[5]};
            schueler.push(schuelerObject);
        }
        
        //Ist das Item eine Klasse?
        if (splittedItem[0] === "k"){
            var klassenObject = {stufe:splittedItem[2], buchstabe:splittedItem[3], bildquelle:splittedItem[4]};
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
            var skObject = {klassenID:splittedItem[1], schuelerId:splittedItem[2]};
            schuelerKlasse.push(skObject);
        }
    }
    if(localStorage.getItem(0)===""){
        //console.log(window.location.href.substr(window.location.href.length-10,window.location.href.length));
        if(window.location.href.substr(window.location.href.length-10,window.location.href.length) !="index.html"){
            window.location.href="index.html";
        }
    }else{
        document.getElementById("logindata").innerHTML="Angemeldet als:<br>";
    }
}
//Wird bei Klick auf Button "Anmelden" aufgerufen
function onclickLogin(form){
    var vorname = form.vorname.value;
    var nachname = form.nachname.value;
    var passwort = form.passwort.value;
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
                    localStorage.setItem("0","s;"+i+";"+vorname+";"+nachname+";"+passwort+";"+lehrer[i].bildquelle);
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
