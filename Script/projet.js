/* le paramètre domaine correspond à la sous catégorie du projet :
  domaine 1 = privé
  domaine 2 = tertiaire
  domaine 3 = paysager
*/


var projets = [
  {
    projet : {
      titre : "maison 1",
      lieu : "quelquepart",
      livraison : "plaf",
      surface : "100m²",
      domaine : 1
    },
    images : [
      'Images/maison1_1.png',
      'Images/maison1_2.jpg',
      'Images/maison1_3.JPG']
  },
  {
    projet : {
      titre : "maison 2",
      lieu : "quelquepart",
      livraison : "plouf",
      surface : "20m²",
      domaine : 2
    },
    images : [
      'Images/maison2_1.jpg',
      'Images/maison2_2.jpg',
      'Images/maison2_3.jpg']
  },
  {
    projet : {
      titre : "maison 3",
      lieu : "dtc",
      livraison : "200 av JVD",
      surface : "12000m²",
      domaine : 3
    },
    images : [
      'Images/maison3_1.jpg',
      'Images/maison3_2.jpg']
  },
  {
    projet : {
      titre : "maison 2",
      lieu : "quelquepart",
      livraison : "plouf",
      surface : "20m²",
      domaine : 2
    },
    images : [
      'Images/maison2_1.jpg',
      'Images/maison2_2.jpg',
      'Images/maison2_3.jpg']
  },
  {
    projet : {
      titre : "maison 2",
      lieu : "quelquepart",
      livraison : "plouf",
      surface : "20m²",
      domaine : 3
    },
    images : [
      'Images/maison2_1.jpg',
      'Images/maison2_2.jpg',
      'Images/maison2_3.jpg']
  },
  {
    projet : {
      titre : "maison 2",
      lieu : "quelquepart",
      livraison : "plouf",
      surface : "20m²",
      domaine : 1
    },
    images : [
      'Images/maison2_1.jpg',
      'Images/maison2_2.jpg',
      'Images/maison2_3.jpg']
  },
  {
    projet : {
      titre : "maison 2",
      lieu : "quelquepart",
      livraison : "plouf",
      surface : "20m²",
      domaine : 2
    },
    images : [
      'Images/maison2_1.jpg',
      'Images/maison2_2.jpg',
      'Images/maison2_3.jpg']
  },
  {
    projet : {
      titre : "maison 2",
      lieu : "quelquepart",
      livraison : "plouf",
      surface : "20m²",
      domaine : 3
    },
    images : [
      'Images/maison2_1.jpg',
      'Images/maison2_2.jpg',
      'Images/maison2_3.jpg']
  },
  {
    projet : {
      titre : "maison 2",
      lieu : "quelquepart",
      livraison : "plouf",
      surface : "20m²",
      domaine : 2
    },
    images : [
      'Images/maison2_1.jpg',
      'Images/maison2_2.jpg',
      'Images/maison2_3.jpg']
  },
  {
    projet : {
      titre : "maison 2",
      lieu : "quelquepart",
      livraison : "plouf",
      surface : "20m²",
      domaine : 1
    },
    images : [
      'Images/maison2_1.jpg',
      'Images/maison2_2.jpg',
      'Images/maison2_3.jpg']
  }
];

var project_box = document.getElementById("contenu_projets");
var newDiv;
var newSpan;

// -------------------------- Fonction pour faire apparaître les miniatures de la photo
// la plus représentative du projet

function project_gallery(){
  for(var i = 0; i < projets.length; i++){
    giveMeDiv(i);
  }
};

// création de la div avec un background image + écouteur d'évènement pour afficher le
// titre de la photo au hover

function giveMeDiv(i){
  newDiv =  document.createElement("div");
  project_box.appendChild(newDiv);
  newDiv.setAttribute("class", "project_div");
  newDiv.setAttribute("id", "projet_min"+i);
  newDiv.style.backgroundImage = "url("+projets[i].images[0]+")";
  newSpan = document.createElement("span");
  newDiv.appendChild(newSpan);
  newSpan.textContent = projets[i].projet.titre + " - " + projets[i].projet.lieu;
}


// Fonction pour le filtrage des projets rappel :
// 1 -> habitat privé
// 2 -> tertiaire
// 3 -> Paysagers

function filter(n){
  clear_projets(project_box);
  if(n === 0){
    project_gallery();
  }
  for(var i = 0; i <= projets.length; i++){
    if(projets[i].projet.domaine === n){
      giveMeDiv(i);
    }
  }
}

function clear_projets(project_box){
  project_box.innerHTML = "";
}
