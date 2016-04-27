var mots = ["Découvrir", "Etre", "Ecouter", "Observer", "Analyser", "S’imprégner",
  "Se questionner", "Savoir", "Aimer", "Comprendre", "Aller", "Ressentir", "Réfléchir",
  "Innover", "Conceptualiser", "Imaginer", "Projeter", "Inventer", "Ecrire", "S’adapter",
  "Chercher", "Optimiser", "Vivre", "Trouver", "Construire", "Surprendre", "Respecter",
  "Se risquer", "Se passionner", "Dessiner", "Rêver", "Communiquer", "Inventer", "Bâtir",
  "Agir", "Anticiper"];


// var mots = [ "Découvrir", "Etre", "Ecouter", "Observer", "Analyser", "S’imprégner","Se questionner", "Savoir", "Aimer"];

var container = document.getElementById("container");
var div_mot;
var current_word = [];
var index_mot;
var animation_delay;

// Fonction pour créer les div qui recevront les mots

function create_div(id){
  wordplace = document.createElement("div");
  container.appendChild(wordplace);
  wordplace.setAttribute("id", "place"+id);
  wordplace.setAttribute("class", "wordplaces");
  wordplace.style.animation = "fadeIn 2.5s";
  random_delay();
  wordplace.style.animationDelay = animation_delay+"s";
  return wordplace;
}

// Fonction pour choisir au hasard un idex dans le tableau de mots

function random_mot(){
  index_mot = Math.floor(Math.random()*mots.length);
  return index_mot;
}

// Fonction pour placer au hasard dans le container

function random_delay(){
  animation_delay = Math.floor(Math.random()*7);
  return animation_delay;
}

//Fonction qui affiche les mots, sort les mots du tableau pour ne pas qu'ils sortent 2 fois

 function affiche_mot(){
   clear(container);
  for(var i = 0; i < 9; i++){
    create_div(i);
    random_mot();
    wordplace.textContent = mots[index_mot];
    current_word.push(mots[index_mot]);
    mots.splice(index_mot,1);
    if(mots[index_mot] === undefined){
      random_mot();
    };
    if(mots.length <= 0){
      for (var j = 0; j < current_word.length; j++){
        mots.push(current_word[j]);
        current_word.splice(j, 1);
        // console.log("mon tableau de mot en cours "+current_word);
      }
    }
  }
};

// Fonction pour clearer le DOM de tous les mots

function clear(container){
  container.innerHTML = "";
};
setInterval(affiche_mot, 8000);
affiche_mot();
