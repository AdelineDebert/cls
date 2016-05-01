var projet_img = document.getElementById("img_projet");
var projet_des = document.getElementById("description_projet");
var projet_conc = document.getElementById("concept_projet");
var projet_lieu = document.getElementById("lieu_projet");
var projet_annee = document.getElementById("annee_projet");
var projet_ouvr = document.getElementById("ouvrage_projet");
var projet_surface = document.getElementById("surface_projet");


var current_project_id = 1;
var current_img_id = 0;


//---------------------------------------------------------Fonctions pour le contenu des différents éléments depuis l'objet

function background_image(current_img_id){
  projet_img.style.backgroundImage = "url("+projets[current_project_id].images[current_img_id]+")";
};

function description(current_project_id){
  var current_project = projets[current_project_id].projet;
  projet_des.textContent = current_project.description;
  projet_conc.textContent = "Concept : " + current_project.concept;
};

function details(current_project_id){
  var current_project = projets[current_project_id].projet;
  projet_lieu.textContent = current_project.lieu;
  projet_annee.textContent = "Année : " + current_project.annee;
  projet_ouvr.textContent = "Maître d'ouvrage : " + current_project.ouvrage;
  projet_surface.textContent = "Surface : " + current_project.surface;
}



//----------------------------------------------------------Fonctions pour le slider d'images

function precedent(){
  var img_array_lenght = projets[current_project_id].images.length;
  current_img_id -=1;
  if (current_img_id <= 0){
    current_img_id = img_array_lenght -1;
    background_image(current_img_id);
  }else{
    background_image(current_img_id);
  }
};

function suivant(){
  var img_array_lenght = projets[current_project_id].images.length;
  current_img_id +=1;
  if (current_img_id >= img_array_lenght){
    current_img_id = 0;
    background_image(current_img_id);
  }else{
    background_image(current_img_id);
  }
};
