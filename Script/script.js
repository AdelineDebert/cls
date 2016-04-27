/*------------------------ Script pour changement de texte de présentation dans
la partie Atelier*/


function changepres(partie){
  var atelier_texte = document.getElementById("presentation_atelier");
  var carole_texte = document.getElementById("presentation_carole");
  var equipe_texte = document.getElementById("presentation_equipe");

  var atelier = document.getElementById("img_atelier");
  var carole = document.getElementById("img_carole");
  var equipe = document.getElementById("img_equipe");
  atelier.classList.remove("img_click");
  carole.classList.remove("img_click");
  equipe.classList.remove("img_click");
  atelier_texte.style.display = "none";
  carole_texte.style.display = "none";
  equipe_texte.style.display = "none";
  if (partie == 1){
    atelier.classList.add("img_click");
    atelier_texte.style.display = "flex";
  }else if (partie == 2){
    carole.classList.add("img_click");
    carole_texte.style.display = "flex";
  }else{
    equipe.classList.add("img_click");
    equipe_texte.style.display = "flex";
  }
}
