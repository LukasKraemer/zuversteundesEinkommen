
//ausblenden aller Erklärungen
$(document).ready(function() {
    $(".erklaerung").hide();
});

//Die bereits eingegeben Werte werden wieder in ihre Spalten gelegt, beim weiderbesuchen der Seite
function vorbelegung(rechnerseite="none"){

        //wenn man die erste Seite des Rechner öffnet
    if (rechnerseite =="einkunft"){
        $('#input_forst').val(sessionStorage.forst);
        $('#input_gewerbe').val(sessionStorage.gewerbe);
        $('#input_nichtselbstaendiger').val(sessionStorage.nichtselbststaendiger);
        $('#input_kapitalvermoegen').val(sessionStorage.kapital);
        $('#input_selbststaendiger').val(sessionStorage.selbststaendiger);
        $('#input_miete').val(sessionStorage.miete);
        $('#input_sonstiges').val(sessionStorage.sonsitges);
        console.log("fertig");
    }
    //wenn man die zweite Seite öffnet
    else if(rechnerseite =="abzuege") {
        $('#input_altersentlastung').val(sessionStorage.altersentlastung);
        $('#input_entlastungsbetrag_alleinerziehende').val(sessionStorage.entlastungsbetrag_alleinerziehende);
        $('#input_freibetrag_verlustabzugwirte').val(sessionStorage.freibetrag_verlustabzugwirte);
        $('#input_verlustabzug').val(sessionStorage.verlustabzug);
        $('#input_sonderausgaben').val(sessionStorage.sonderausgaben);
        $('#input_außergewoehnliche_belastungen').val(sessionStorage.außergewoehnliche_belastungen);
        console.log("fertig");
    }

    else{
        console.error("FEHLER!!!!");
    }

}
//Funktioen für die Seite Seite des Rechner
function rechner_einkommen(){
    
    if (sessionStorage.einkunft != 'undefined') {
        vorbelegung("einkunft");
      }
    else{
        console.log("keine werte");
        sessionStorage.abzuege="0";
    }  
$(document).ready(function () { //beim start
    
    setInterval(function () { //sicherhetishalber noch ein intervall - der nciht benötigt wird
        
        sessionStorage.forst = $('#input_forst').val(); //wert
        sessionStorage.gewerbe = $('#input_gewerbe').val(); //wert
        sessionStorage.nichtselbststaendiger = $('#input_nichtselbstaendiger').val(); //wert
        sessionStorage.kapital = $('#input_kapitalvermoegen').val(); //wert
        sessionStorage.selbststaendiger = $('#input_selbststaendiger').val(); //wert
        sessionStorage.miete = $('#input_miete').val(); //wert
        sessionStorage.sonsitges = $('#input_sonstiges').val(); //wert

        //addition von den Eingaben
        sessionStorage.einkunft = Number(sessionStorage.forst) + Number(sessionStorage.gewerbe) + Number(sessionStorage.nichtselbststaendiger) + Number(sessionStorage.kapital) + Number(sessionStorage.miete) + Number(sessionStorage.sonsitges);
        //ausgabe des Ergbniss am Ende des Dokument
        $("#ergebniss_einkunft").text(Math.round((Number(sessionStorage.einkunft) + Number.EPSILON) * 100) / 100);
        $("#ergebniss_abzuege").text(Math.round((Number(sessionStorage.abzuege) + Number.EPSILON) * 100) / 100);
        sessionStorage.gesamt = Number(sessionStorage.einkunft) - Number(sessionStorage.abzuege);
        $("#ergebniss_gesamt").text(Math.round((Number(sessionStorage.gesamt) + Number.EPSILON) * 100) / 100);
    })
}, 2000); //2sek
}


function rechner_abzuege(){
    $(document).ready(function () { //beim start
        if (typeof sessionStorage.abzuege !== 'undefined') {
            vorbelegung("abzuege");
          }
                        
        setInterval(function () { //sicherhetishalber noch ein intervall - der nciht benötigt wird
            sessionStorage.altersentlastung = $('#input_altersentlastung').val(); //wert
            sessionStorage.entlastungsbetrag_alleinerziehende = $('#input_entlastungsbetrag_alleinerziehende').val(); //wert
            sessionStorage.freibetrag_verlustabzugwirte = $('#input_freibetrag_verlustabzugwirte').val(); //wert
            sessionStorage.verlustabzug = $('#input_verlustabzug').val(); //wert
            sessionStorage.sonderausgaben = $('#input_sonderausgaben').val(); //wert
            sessionStorage.außergewoehnliche_belastungen = $('#input_außergewoehnliche_belastungen').val(); //wert

            //addition von den Eingaben
            sessionStorage.abzuege = Number(sessionStorage.altersentlastung) + Number(sessionStorage.entlastungsbetrag_alleinerziehende) + Number(sessionStorage.freibetrag_verlustabzugwirte) + Number(sessionStorage.verlustabzug) + Number(sessionStorage.sonderausgaben)+ Number(sessionStorage.außergewoehnliche_belastungen);

            //ausgabe des Ergbniss am Ende des Dokument
            $("#ergebniss_einkunft").text(Math.round((Number(sessionStorage.einkunft) + Number.EPSILON) * 100) / 100);
            $("#ergebniss_abzuege").text(Math.round((Number(sessionStorage.abzuege) + Number.EPSILON) * 100) / 100);
            sessionStorage.gesamt = Number(sessionStorage.einkunft) - Number(sessionStorage.abzuege);
            $("#ergebniss_gesamt").text(Math.round((Number(sessionStorage.gesamt) + Number.EPSILON) * 100) / 100);
        })
    }, 2000); //2sek

}
//zurücksetzen der Werte
function reset_einkunft(){
        sessionStorage.forst = 0;
        $('#input_forst').val(0);
        sessionStorage.gewerbe = 0;
        $('#input_gewerbe').val(0);
        sessionStorage.nichtselbststaendiger = 0;
        $('#input_nichtselbstaendiger').val(0);
        sessionStorage.kapital = 0;
        $('#input_kapitalvermoegen').val(0);
        sessionStorage.selbststaendiger = 0;
        $('#input_selbststaendiger').val(0);
        sessionStorage.miete = 0;
        $('#input_miete').val(0);
        sessionStorage.sonsitges = 0;
        $('#input_sonstiges').val(0);
        delete sessionStorage.einkunft;
        console.log("Alle Einkünfte sind gelöscht");
}
//zurücksetzen der Werte
function reset_abzuege(){
    sessionStorage.altersentlastung = 0;
    $('#input_altersentlastung').val(0); 
    sessionStorage.entlastungsbetrag_alleinerziehende = 0;
    $('#input_entlastungsbetrag_alleinerziehende').val(0); 
    sessionStorage.freibetrag_verlustabzugwirte =0 ;
    $('#input_freibetrag_verlustabzugwirte').val(0); 
    sessionStorage.verlustabzug = 0;
    $('#input_verlustabzug').val(0); 
    sessionStorage.sonderausgaben = 0;
    $('#input_sonderausgaben').val(0); 
    sessionStorage.außergewoehnliche_belastungen = 0;
    $('#input_außergewoehnliche_belastungen').val(0);
    delete sessionStorage.abzuege;
    console.log("Alle Abzüge sind gelöscht");
}
