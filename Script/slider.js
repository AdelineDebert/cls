var newImage;
var previous;
var next;
var up;
var down;
var newTitre;

var divPhoto = document.getElementById('photos_projets');
var divDescription = document.getElementById('description_projets');

var current_img_id = 0  ;
var current_project_id = 0;

function affichePhoto(){
  create_precedent();
  create_img();
  create_suivant();
};


function afficheProjet(){
  // create_up();
  create_titre();
  // create_down();
}

/*Création des différents éléments de la partie photo des projets ----------------*/

function create_img(){
  newImage =  document.createElement("img");
  divPhoto.appendChild(newImage);
  newImage.setAttribute("src", projets[current_project_id].images[current_img_id]);
  newImage.setAttribute("class", "img_projet");
};
function create_precedent(){
  previous = document.createElement("img");
  divPhoto.appendChild(previous);
  previous.setAttribute("src", "Images/precedent.png");
  previous.setAttribute("onclick", "precedent()");
};
function create_suivant(){
  next = document.createElement("img");
  divPhoto.appendChild(next);
  next.setAttribute("src", "Images/suivant.png");
  next.setAttribute("onclick", "suivant()");
};

/*Fonctions pour animer les photos de droite à gauche et inversement --------------*/

function precedent(){
  var img_array_lenght = projets[current_project_id].images.length;
  var anciennePhoto = divPhoto.removeChild(newImage);
  var ancien_prec = divPhoto.removeChild(previous);
  var ancien_suiv = divPhoto.removeChild(next);
  current_img_id -= 1;
  if (current_img_id <= 0){
    current_img_id = img_array_lenght -1;
    affichePhoto();
  }else{
    affichePhoto();
  }
};
function suivant(){
  var img_array_lenght = projets[current_project_id].images.length;
  var anciennePhoto = divPhoto.removeChild(newImage);
  var ancien_prec = divPhoto.removeChild(previous);
  var ancien_suiv = divPhoto.removeChild(next);
  current_img_id += 1;
  if (current_img_id >= img_array_lenght){
    console.log("id de l'image" + current_img_id);
    current_img_id = 0;
    affichePhoto();
  }else{
    affichePhoto();
  };
}

/*Création des différents éléments de la description des projets --------------------*/

// function create_up(){
//   up = document.createElement("img");
//   divDescription.appendChild(up);
//   up.setAttribute("src", "Images/up.png");
//   up.setAttribute("onclick", "go_up()");
// };
// function create_down(){
//   down = document.createElement("img");
//   divDescription.appendChild(down);
//   down.setAttribute("src", "Images/down.png");
//   down.setAttribute("onclick", "go_down()");
// };
function create_titre(){
  newTitre = document.createElement("h1");
  divDescription.appendChild(newTitre);
  newTitre.textContent = projets[current_project_id].projet.titre;
}

/*Fonctions animation slider projet ------------------------------------------------*/

function go_up(){
  var ancien_up = divDescription.removeChild(up);
  var ancien_down = divDescription.removeChild(down);
  var ancien_titre = divDescription.removeChild(newTitre);
  var anciennePhoto = divPhoto.removeChild(newImage);
  var ancien_prec = divPhoto.removeChild(previous);
  var ancien_suiv = divPhoto.removeChild(next);
  current_project_id -= 1;
  if(current_project_id < 0){
    current_project_id = 0;
    afficheProjet();
    affichePhoto();
  }else{
    afficheProjet();
    affichePhoto();
  }
}
function go_down(){
  var ancien_up = divDescription.removeChild(up);
  var ancien_down = divDescription.removeChild(down);
  var ancien_titre = divDescription.removeChild(newTitre);
  var anciennePhoto = divPhoto.removeChild(newImage);
  var ancien_prec = divPhoto.removeChild(previous);
  var ancien_suiv = divPhoto.removeChild(next);
  current_project_id +=1;
  if(current_project_id >= projets.length){
    current_project_id = 0;
    afficheProjet();
    affichePhoto();
  }else{
    afficheProjet();
    affichePhoto();
  }
}

function clear_photo(){
  var anciennePhoto = divPhoto.removeChild(newImage);
  var ancien_prec = divPhoto.removeChild(previous);
  var ancien_suiv = divPhoto.removeChild(next);
}
function clear_description(){
  var ancien_up = divDescription.removeChild(up);
  var ancien_down = divDescription.removeChild(down);
  var ancien_titre = divDescription.removeChild(newTitre);
}
