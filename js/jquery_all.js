//Lukas Krämer
// 2020, MIT license

//Haftungsausschausschluss
$(document).ready(function(){
if (sessionStorage.haftungsausschnuss != "true"){
    $("#hauptcontainer").load("disclaimer.html #content" );
}});


//Zeit in millisekunden für die Effekte
const ausblendungszeit = 300;

//zeigt die Erklärung im Rechner
function show_erklareung(hoved_id){
  text= "#erklaerung_"+hoved_id;
  $(text).show(ausblendungszeit);
}
//versteckt die Erklärung im Rechenr
function hide_erklareung(hoved_id){
  text= "#erklaerung_"+hoved_id;
  $(text).hide(ausblendungszeit);
}
//weiterleitung wenn man auf den Haupttitel drückt
$(document).ready(function() {
$( "#haupttitel" ).click(function() {
  window.open('../../index.html','_self');
});
});
//weiterleitung wenn man auf das Thema drück
$(document).ready(function() {
  $( ".untertitel" ).click(function() {
    window.open('willkommen.html','_self');
  });
  });

//versteckt alle Elemte die versteckt beim Start sein sollen  
$(document).ready(function(){
  $('.hidden').hide();
});

//Funktion für Frage Antwort
readable =NaN;
function text_show(id){
    if (readable != "#antwort"+id.slice(-1)){
      $(readable).slideUp(ausblendungszeit);  
    $("#antwort"+id.slice(-1)).slideDown(ausblendungszeit);
    readable= "#antwort"+id.slice(-1)
    }
}