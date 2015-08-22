//Der Array Index ist gleichzeitig auch die ID des Schülers, Lehrers, etc...
var lehrer = [];
var schueler = [];
var klassen = [];
var lehrerKlasse = [];
var schuelerKlasse = [];
var notizen = [];

function ladeStorage() {
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
window.addEventListener("DOMContentLoaded", function(){
 
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
        if(window.location.href.substr(window.location.href.length-10,window.location.href.length) !== "index.html"){
            window.location.href="index.html";
        }
    }else{
        var splittedItem = localStorage.getItem(0).split(";");
        document.getElementById("logindata").innerHTML="Angemeldet als: <br>"+ splittedItem[2]+ " " + splittedItem[3];
    }
    
    //Macht es möglich, dass mit Drücken der Eingabetaste, die Logindaten überprüft werden
    if(window.location.href.substr(window.location.href.length-10,window.location.href.length) === "index.html"){
        var nachname = document.getElementById("nachname");
        var vorname = document.getElementById("vorname");
        var passwort = document.getElementById("passwort");
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
    if(window.location.pathname.substr(window.location.pathname.length-11,window.location.pathname.length) == "lehrer.html"){
        sucheStufeLehrer();
        sucheKlassenLehrer();
        sucheSchuelerLehrer();
        var url = window.location.href
        var idx = url.indexOf("#")
        var hash = idx != -1 ? url.substring(idx+1) : "";
        if(hash != ""){
            if(hash.substring(0,1)=="k"){
                for(var i = 0; i< document.getElementById('stufe').children.length;i++){
                    if(document.getElementById('stufe').children[i].value == hash.substring(2,hash.length-1)){
                       document.getElementById('stufe').children[i].selected = true; 
                    }
                }
                for(var i = 0; i< document.getElementById('klasse').children.length;i++){
                    if(document.getElementById('klasse').children[i].value == hash.substring(hash.length-1,hash.length)){
                       document.getElementById('klasse').children[i].selected = true; 
                    }
                }
            } else if(hash.substring(0,1)=="s"){
                for(var i = 0; i< document.getElementById('schueler').children.length;i++){
                    if(document.getElementById('schueler').children[i].value == hash.substring(2,hash.indexOf(";"))+", " + hash.substring(hash.indexOf(";")+1,hash.length)){
                        document.getElementById('schueler').children[i].selected = true; 
                    }
                }
            }
        }
        sucheLehrerTabelle();
    }
    
     if(window.location.pathname.substr(window.location.pathname.length-13,window.location.pathname.length) == "schueler.html"){
        sucheStufeSchueler();
        sucheKlassenSchueler();
        sucheLehrerSchueler();
         
        var url = window.location.href
        var idx = url.indexOf("#")
        var hash = idx != -1 ? url.substring(idx+1) : "";
        if(hash != ""){
            if(hash.substring(0,1)=="k"){
                for(var i = 0; i< document.getElementById('stufe').children.length;i++){
                    if(document.getElementById('stufe').children[i].value == hash.substring(2,hash.length-1)){
                       document.getElementById('stufe').children[i].selected = true; 
                    }
                }
                for(var i = 0; i< document.getElementById('klasse').children.length;i++){
                    if(document.getElementById('klasse').children[i].value == hash.substring(hash.length-1,hash.length)){
                       document.getElementById('klasse').children[i].selected = true; 
                    }
                }
            }  if(hash.substring(0,1)=="l"){
                for(var i = 0; i< document.getElementById('lehrer').children.length;i++){
                    if(document.getElementById('lehrer').children[i].value == hash.substring(2,hash.indexOf(";"))+", " + hash.substring(hash.indexOf(";")+1,hash.length)){
                        document.getElementById('lehrer').children[i].selected = true; 
                    }
                }
            }
        }
        sucheSchuelerTabelle();
    }
    
    if(window.location.pathname.substr(window.location.pathname.length-12,window.location.pathname.length) == "klassen.html"){
        sucheStufeKlassen();
        sucheLehrerKlassen();
        sucheSchuelerKlassen();
        var url = window.location.href
        var idx = url.indexOf("#")
        var hash = idx != -1 ? url.substring(idx+1) : "";
        if(hash != ""){
            if(hash.substring(0,1)=="l"){
                for(var i = 0; i< document.getElementById('lehrer').children.length;i++){
                    if(document.getElementById('lehrer').children[i].value == hash.substring(2,hash.indexOf(";"))+", " + hash.substring(hash.indexOf(";")+1,hash.length)){
                        document.getElementById('lehrer').children[i].selected = true; 
                    }
                }
            } else if(hash.substring(0,1)=="s"){
                for(var i = 0; i< document.getElementById('schueler').children.length;i++){
                    if(document.getElementById('schueler').children[i].value == hash.substring(2,hash.indexOf(";"))+", " + hash.substring(hash.indexOf(";")+1,hash.length)){
                        document.getElementById('schueler').children[i].selected = true; 
                    }
                }
            }
        }
        sucheKlassenTabelle();
    }
   
});
//Wird bei Klick auf Button "Anmelden" aufgerufen
function onclickLogin(form){
    var vorname = form.vorname.value;
    var nachname = form.nachname.value;
    var passwort = form.passwort.value;
    
    if (nachname === "root"){
        if (vorname=== "root"){
            if (passwort === "root"){
                localStorage.setItem("0","s;;Administrator;");
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


//Für die Suche

function zeigeSchuelerLehrer(){
    var tabelle = document.getElementById('table').children[0].children;
    for(var i = 1; i < tabelle.length; i++) {
        var line = tabelle[i];
        if(line.children[0].children[0].checked){
            window.open("schueler.html#l="+line.children[1].outerText+";"+line.children[2].outerText, '_blank');
        }
        
    }
}

function zeigeSchuelerKlassen(){
    var tabelle = document.getElementById('table').children[0].children;
    for(var i = 1; i < tabelle.length; i++) {
        var line = tabelle[i];
        if(line.children[0].children[0].checked){
            window.open("schueler.html#k="+line.children[1].outerText, '_blank');
        }
        
    }
}

function lehrerBearbeiten(){
    var tabelle = document.getElementById('table').children[0].children;
    for(var i = 1; i < tabelle.length; i++) {
        var line = tabelle[i];
        if(line.children[0].children[0].checked){
            window.open("lehrer_bearbeiten.html#l="+line.children[1].outerText+";"+line.children[2].outerText, '_blank');
        }
        
    }
}

function schuelerBearbeiten(){
    var tabelle = document.getElementById('table').children[0].children;
    for(var i = 1; i < tabelle.length; i++) {
        var line = tabelle[i];
        if(line.children[0].children[0].checked){
            window.open("schueler_bearbeiten.html#s="+line.children[1].outerText+";"+line.children[2].outerText, '_blank');
        }
        
    }
}


function klassenBearbeiten(){
    var tabelle = document.getElementById('table').children[0].children;
    for(var i = 1; i < tabelle.length; i++) {
        var line = tabelle[i];
        if(line.children[0].children[0].checked){
            window.open("klassen_bearbeiten.html#k="+line.children[1].outerText, '_blank');
        }
        
    }
}

function lehrerLöschen(){
    var tabelle = document.getElementById('table').children[0].children;
    for(var i = 1; i < tabelle.length; i++) {
        var line = tabelle[i];
        if(line.children[0].children[0].checked){
            var lehrerFound = getLehrerByName(line.children[1].outerText, line.children[2].outerText);
            if(lehrerFound != undefined){
                lehrerFound.istAngestellt = false;
                for (i = 1; i <= localStorage.length-1; i++){
                    var item = localStorage.getItem(i);
                    var splittedItem = item.split(";");
                    if(splittedItem[0]==="l"){
                        if(splittedItem[2]=== lehrerFound.vorname){
                            if(splittedItem[3] === lehrerFound.nachname){
                                localStorage.setItem(i,"l;"+splittedItem[1]+";"+splittedItem[2]+";"+splittedItem[3]+";"+splittedItem[4]+";"+splittedItem[5]+";false"); 
                            }
                        }
                    }
                }
            }
        }
    }
    sucheLehrerTabelle();
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
            window.open("lehrer.html#k="+line.children[1].outerText, '_blank');
        }
        
    }
}

function zeigeLehrerSchueler(){
    var tabelle = document.getElementById('table').children[0].children;
    for(var i = 1; i < tabelle.length; i++) {
        var line = tabelle[i];
        if(line.children[0].children[0].checked){
            window.open("lehrer.html#s="+line.children[1].outerText+";"+line.children[2].outerText, '_blank');
        }
        
    }
}

function zeigeKlassenLehrer(){
    var tabelle = document.getElementById('table').children[0].children;
    for(var i = 1; i < tabelle.length; i++) {
        var line = tabelle[i];
        if(line.children[0].children[0].checked){
            window.open("klassen.html#l="+line.children[1].outerText+";"+line.children[2].outerText, '_blank');
        }
        
    }
}

function zeigeKlassenSchueler(){
    var tabelle = document.getElementById('table').children[0].children;
    for(var i = 1; i < tabelle.length; i++) {
        var line = tabelle[i];
        if(line.children[0].children[0].checked){
            window.open("klassen.html#s="+line.children[1].outerText+";"+line.children[2].outerText, '_blank');
        }
        
    }
}

function sucheLehrerTabelle(){
    var tabelle = document.createElement('table');
    var head = document.createElement('tr');
    head.innerHTML = "<td id=\"header\"></td><td id=\"header\">Nachname</td><td id=\"header\">Vorname</td><td id=\"header\">Ist noch angestellt</td>";
    tabelle.appendChild(head);
  
    
    var gefunden = [];
    
    var lehrer = getLehrer(document.getElementById('klasse').value, document.getElementById('stufe').value);   
    for(var i = 0; i < lehrer.length; i++) {
        if(document.getElementById('schueler').value != "-"){
            var schuelerValue = document.getElementById('schueler').value.split(",")
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
                            if(schuelerKlasse[j].klassenID===lehrerInKlasse[x]){
                                gefunden.push(lehrer[i]);
                            }
                        }
                    }
                }
                
            }
        }else{
            gefunden.push(lehrer[i]);
        }
        
    }
    
    for(var i = 0; i < gefunden.length; i++) {
        var line = document.createElement('tr');
        var checkBox = document.createElement('td');
        checkBox.setAttribute("id", "cb");
        checkBox.innerHTML ="<input type=\"checkbox\" id=\"check"+i+"\">";
        var nachname = document.createElement('td');
        nachname.innerHTML = gefunden[i].nachname;
        var vorname = document.createElement('td');
        vorname.innerHTML = gefunden[i].vorname;
        var istAngestellt = document.createElement('td');
        istAngestellt.innerHTML = gefunden[i].istAngestellt;
        
        
        line.appendChild(checkBox);
        line.appendChild(nachname);
        line.appendChild(vorname);
        line.appendChild(istAngestellt);
        
        tabelle.appendChild(line);
    }
    
    document.getElementById('table').innerHTML = "";
    document.getElementById('table').appendChild(tabelle);
}

function sucheSchuelerTabelle(){
        var tabelle = document.createElement('table');
    var head = document.createElement('tr');
    head.innerHTML = "<td id=\"header\"></td><td id=\"header\">Nachname</td><td id=\"header\">Vorname</td>";
    tabelle.appendChild(head);

    var gefunden = [];
    
    for(var i = 0; i < schueler.length;i++){
        for(var j = 0; j<schuelerKlasse.length; j++){
            if(i == schuelerKlasse[j].schuelerId){
                if(document.getElementById('stufe').value != "-"){
                    if(klassen[schuelerKlasse[j].klassenID].stufe == document.getElementById('stufe').value){
                        if(document.getElementById('klasse').value != "-"){
                            if(klassen[schuelerKlasse[j].klassenID].buchstabe == document.getElementById('klasse').value){
                                if(document.getElementById('lehrer').value != "-"){
                                     for(var x = 0; x<lehrerKlasse.length; x++){
                                        if(lehrerKlasse[x].klassenId == schuelerKlasse[j].klassenID){
                                            var lehrerLine = document.getElementById('lehrer').value.split(",");
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
                            if(document.getElementById('lehrer').value != "-"){
                                for(var x = 0; x<lehrerKlasse.length; x++){
                                    if(lehrerKlasse[x].klassenId == schuelerKlasse[j].klassenID){
                                        var lehrerLine = document.getElementById('lehrer').value.split(",");                                                                        if(getLehrerID(lehrerLine[0].trim(),lehrerLine[1].trim())==lehrerKlasse[j].lehrerId){
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
                      if(document.getElementById('klasse').value != "-"){
                            if(klassen[schuelerKlasse[j].klassenID].buchstabe == document.getElementById('klasse').value){
                                if(document.getElementById('lehrer').value != "-"){
                                     for(var x = 0; x<lehrerKlasse.length; x++){
                                        if(lehrerKlasse[x].klassenId == schuelerKlasse[j].klassenID){
                                            var lehrerLine = document.getElementById('lehrer').value.split(",");
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
                            if(document.getElementById('lehrer').value != "-"){
                                for(var x = 0; x<lehrerKlasse.length; x++){
                                    if(lehrerKlasse[x].klassenId == schuelerKlasse[j].klassenID){
                                        var lehrerLine = document.getElementById('lehrer').value.split(",");                                                                        if(getLehrerID(lehrerLine[0].trim(),lehrerLine[1].trim())==lehrerKlasse[j].lehrerId){
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
    
    for(var i = 0; i < gefunden.length; i++) {
        var line = document.createElement('tr');
        var checkBox = document.createElement('td');
        checkBox.setAttribute("id", "cb");
        checkBox.innerHTML ="<input type=\"checkbox\" id=\"check"+i+"\">";
        var nachname = document.createElement('td');
        nachname.innerHTML = gefunden[i].nachname
        var vorname = document.createElement('td');  
        vorname.innerHTML = gefunden[i].vorname
        
        line.appendChild(checkBox);
        line.appendChild(nachname);
        line.appendChild(vorname); 
        
        tabelle.appendChild(line);
    }
    
    document.getElementById('table').innerHTML = "";
    document.getElementById('table').appendChild(tabelle);
}

function sucheKlassenTabelle(){
    var tabelle = document.createElement('table');
    var head = document.createElement('tr');
    head.innerHTML = "<td id=\"header\"></td><td id=\"header\">Klasse</td><td id=\"header\">Schüleranzahl</td>";
    tabelle.appendChild(head);

    var gefunden = [];
    
    for(var i = 0; i < klassen.length; i++){
        if(document.getElementById('stufe').value != "-"){
            if(klassen[i].stufe == document.getElementById('stufe').value){
                if(document.getElementById('lehrer').value != "-"){
                    var lehrerID = getLehrerID(document.getElementById('lehrer').value.split(",")[0].trim(), document.getElementById('lehrer').value.split(",")[1].trim());   
                    for(var j = 0; j < lehrerKlasse.length; j++){
                        if(lehrerKlasse[j].klassenId == i){
                            for(var y = 0; y < lehrerID.length; y++){
                                if(lehrerID[y] == lehrerKlasse[j].lehrerId){
                                    if(document.getElementById('schueler').value != "-"){
                                        var schuelerID = getSchuelerID(document.getElementById('schueler').value.split(",")[0].trim(), document.getElementById('schueler').value.split(",")[1].trim());
                                        for(var x = 0; x < schuelerKlasse.length; x++){
                                            if(schuelerKlasse[x].klassenID == i){
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
                                    if(document.getElementById('schueler').value != "-"){
                                        var schuelerID = getSchuelerID(document.getElementById('schueler').value.split(",")[0].trim(), document.getElementById('schueler').value.split(",")[1].trim());
                                        for(var x = 0; x < schuelerKlasse.length; x++){
                                            if(schuelerKlasse[x].klassenID == i){
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
                if(document.getElementById('lehrer').value != "-"){
                    var lehrerID = getLehrerID(document.getElementById('lehrer').value.split(",")[0].trim(), document.getElementById('lehrer').value.split(",")[1].trim());   
                    for(var j = 0; j < lehrerKlasse.length; j++){
                        if(lehrerKlasse[j].klassenId == i){
                            for(var y = 0; y < lehrerID.length; y++){
                                if(lehrerID[y] == lehrerKlasse[j].lehrerId){
                                    if(document.getElementById('schueler').value != "-"){
                                        var schuelerID = getSchuelerID(document.getElementById('schueler').value.split(",")[0].trim(), document.getElementById('schueler').value.split(",")[1].trim());
                                        for(var x = 0; x < schuelerKlasse.length; x++){
                                            if(schuelerKlasse[x].klassenID == i){
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
                                    if(document.getElementById('schueler').value != "-"){
                                        var schuelerID = getSchuelerID(document.getElementById('schueler').value.split(",")[0].trim(), document.getElementById('schueler').value.split(",")[1].trim());
                                        for(var x = 0; x < schuelerKlasse.length; x++){
                                            if(schuelerKlasse[x].klassenID == i){
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
    }
    
    for(var i = 0; i < gefunden.length; i++) {
        var line = document.createElement('tr');
        var checkBox = document.createElement('td');
        checkBox.setAttribute("id", "cb");
        checkBox.innerHTML ="<input type=\"checkbox\" id=\"check"+i+"\">";
        var klasse = document.createElement('td');
        klasse.innerHTML = gefunden[i].stufe+gefunden[i].buchstabe;
        var schueleranzahl = document.createElement('td');
        var schuelerInKlasse = 0;
        var klassenID = getKlassenID(gefunden[i].buchstabe,  gefunden[i].stufe);
        for(var j=0; j<schuelerKlasse.length;j++){
            if(schuelerKlasse[j].klassenID==klassenID){
                schuelerInKlasse = schuelerInKlasse+1;
            }
        }
        schueleranzahl.innerHTML = schuelerInKlasse;      
        
        line.appendChild(checkBox);
        line.appendChild(klasse);
        line.appendChild(schueleranzahl); 
        
        tabelle.appendChild(line);
    }
    
    document.getElementById('table').innerHTML = "";
    document.getElementById('table').appendChild(tabelle);
}

function sucheStufeKlassen(){ 
    var stufen = getStufen();    
    var sel = document.getElementById('schueler');
    var selObjekt = sel.value;
    sel.innerHTML = "";
   
    var opt = document.createElement('option');
    opt.innerHTML = "-";
    opt.value = "-";
    sel.appendChild(opt);

    sel = document.getElementById('lehrer');
    selObjekt = sel.value;
    sel.innerHTML = "";
   
    opt = document.createElement('option');
    opt.innerHTML = "-";
    opt.value = "-";
    sel.appendChild(opt);
    
    sel = document.getElementById('stufe');
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
}

function sucheStufeLehrer(){ 
    var stufen = getStufen();    
    var sel = document.getElementById('schueler');
    var selObjekt = sel.value;
    sel.innerHTML = "";
   
    var opt = document.createElement('option');
    opt.innerHTML = "-";
    opt.value = "-";
    sel.appendChild(opt);

    sel = document.getElementById('klasse');
    selObjekt = sel.value;
    sel.innerHTML = "";
   
    opt = document.createElement('option');
    opt.innerHTML = "-";
    opt.value = "-";
    sel.appendChild(opt);
    
    sel = document.getElementById('stufe');
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
}

function sucheStufeSchueler(){ 
    var stufen = getStufen();    
    var sel = document.getElementById('lehrer');
    var selObjekt = sel.value;
    sel.innerHTML = "";
   
    var opt = document.createElement('option');
    opt.innerHTML = "-";
    opt.value = "-";
    sel.appendChild(opt);

    sel = document.getElementById('klasse');
    selObjekt = sel.value;
    sel.innerHTML = "";
   
    opt = document.createElement('option');
    opt.innerHTML = "-";
    opt.value = "-";
    sel.appendChild(opt);
    
    sel = document.getElementById('stufe');
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
}

function sucheKlassenLehrer(){ 
    var klassen = getKlassen(document.getElementById('stufe').value);   
    
    var sel = document.getElementById('schueler');
    var selObjekt = sel.value;
    sel.innerHTML = "";
   
    var opt = document.createElement('option');
    opt.innerHTML = "-";
    opt.value = "-";
    sel.appendChild(opt);

    
    sel = document.getElementById('klasse');
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
}

function sucheKlassenSchueler(){ 
    var klassen = getKlassen(document.getElementById('stufe').value);   
    
    var sel = document.getElementById('lehrer');
    var selObjekt = sel.value;
    sel.innerHTML = "";
   
    var opt = document.createElement('option');
    opt.innerHTML = "-";
    opt.value = "-";
    sel.appendChild(opt);

    
    sel = document.getElementById('klasse');
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
}

function sucheLehrerKlassen(){ 
    var lehrer = getLehrer("-", document.getElementById('stufe').value);   
    
    var sel = document.getElementById('lehrer');
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
}

function sucheLehrerSchueler(){ 
    var lehrer = getLehrer("-", document.getElementById('stufe').value);   
    
    var sel = document.getElementById('lehrer');
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
}

function sucheSchuelerKlassen(){ 
    var schueler = getSchueler("-", document.getElementById('stufe').value);   
    
    var sel = document.getElementById('schueler');
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
}


function sucheSchuelerLehrer(){ 
    var schueler = getSchueler(document.getElementById('klasse').value, document.getElementById('stufe').value);   
    
    var sel = document.getElementById('schueler');
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
            console.log(stufe);
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
                console.log(buchstabe);
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
    var klassenID = getKlassenID(buchstabe, stufe);
    for(var i=0; i<schuelerKlasse.length;i++){
        for(var j=0; j<klassenID.length;j++){
            if(schuelerKlasse[i].klassenID == klassenID[j]){
                rueckgabe.push(schueler[schuelerKlasse[i].schuelerId].nachname+", "+schueler[schuelerKlasse[i].schuelerId].vorname);
            }   
        }
    }
    
    return rueckgabe;
}

function getLehrer(buchstabe, stufe){
    var rueckgabe = [];
    var klassenID = getKlassenID(buchstabe, stufe);
    for(var i=0; i<lehrerKlasse.length;i++){
        for(var j=0; j<klassenID.length;j++){
            if(lehrerKlasse[i].klassenId == klassenID[j]){
                rueckgabe.push(lehrer[lehrerKlasse[i].lehrerId]);
            }    
        }
    }
    
    return rueckgabe;
}
//Ende der Suchfunktionen