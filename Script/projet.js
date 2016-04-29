/* le paramètre domaine correspond à la sous catégorie du projet :
  domaine 1 = privé
  domaine 2 = tertiaire
  domaine 3 = paysager
*/

var projets = [
  {
    projet : {
      titre : "1 - Extension d'une maison individuelle",
      description : "Construction d'une extension de maison individuelle et de son garage",
      description_bis : "Construction d'une piscine et de sa terrasse",
      description_ter : "Aménagement paysager",
      lieu : "Quartier des Abatilles - Arcachon (33)",
      annee : "2015",
      ouvrage : "Privé",
      surface : "",
      concept : "Dialogue entre une maison traditionnelle arcachonnaise et une architecture contemporaine. Création d’une intimité au sein d’un terrain entouré par la voie publique. Volonté de garder un grand espace paysager.",
      domaine : 1
    },
    images : [
      "Images/prive001_1.JPG",
      "Images/prive001_2.JPG",
      "Images/prive001_3.jpg",
      "Images/prive001_4.jpg",
      "Images/prive001_5.JPG",
      "Images/prive001_6.png"
    ]
  },
  {
    projet : {
      titre : "2 - Extension d'une maison individuelle",
      description : "Construction d'une surélévation et d'une extension de maison individuelle",
      description_bis : "Construction d'une annexe et d'une terrasse sur plusieurs niveaux",
      lieu : "Quartier du Pyla-sur-mer - La Teste de Buch (33)",
      annee : "2016",
      ouvrage : "Privé",
      surface : "220m²",
      concept : "Réorganisation des espaces intérieurs. Création de pièces de nuit supplémentaires et d’appartements autonomes liées à une maison existante rénovée. Besoin de préserver les espaces extérieurs : terrasses basses, hautes et toiture terrasse donnant sur la forêt.",
      domaine : 1
    },
    images : [
      "Images/prive002_1.png",
      "Images/prive002_2.jpg",
      "Images/prive002_3.png",
      "Images/prive002_4.jpg",
      "Images/prive002_5.png",
      "Images/prive002_6.png",
      "Images/prive002_7.png",
    ]
  },
  {
    projet : {
      titre : "3 - Maison individuelle",
      description : "Construction d'une maison individuelle et de son garage",
      description_bis : "Construction d'une terrasse et de son kioske",
      description_ter : "Aménagement paysager",
      lieu : "Quartier de l'hyper centre - Gujan-Mestras (33)",
      annee : "2016",
      ouvrage : "Privé",
      surface : "115m²",
      concept : "Concept : Volonté d’un intérieur ouvert et d’une architecture mélant anecdotes traditionnelles et touches contemporaines. Diagnostique spacial pour une architecture offrant la meilleure ergonomie. Végétation omni-présente.",
      domaine : 1
    },
    images : [
      "Images/prive003_1.png",
      "Images/prive003_2.png",
      "Images/prive003_3.png",
      "Images/prive003_4.png",
      "Images/prive003_5.png",
      "Images/prive003_6.png"
    ]
  },
  {
    projet : {
      titre : "4 - Deux maisons individuelles",
      description : "Construction de deux maisons individuelles et de leur terrasse",
      lieu : "Quartier des bordes - La Teste de Buch (33)",
      annee : "2015",
      ouvrage : "Privé",
      surface : "121m² & 99m²",
      concept : "Rentabilisation d’un terrain pour la création de deux maisons d’habitation, l’une en ossature et bardage bois et l’autre en toiture terrasse maçonné.",
      domaine : 1
    },
    images : [
      "Images/prive004_1.jpg",
      "Images/prive004_2.jpg",
      "Images/prive004_3.jpg",
      "Images/prive004_4.jpg",
      "Images/prive004_5.jpg",
      "Images/prive004_6.jpg",
      "Images/prive004_7.jpg",
      "Images/prive004_8.jpg",
      "Images/prive004_9.jpg",
      "Images/prive004_910.jpg"
    ]
  },
  {
    projet : {
      titre : "5 - Maison individuelle",
      description : "Construction d'une maison individuelle et de son garage",
      description_bis : "Construction d'une piscine et de sa terrasse",
      description_ter : "Aménagement paysager",
      lieu : "Quartier des Abatilles - Arcachon (33)",
      annee : "2015",
      ouvrage : "Privé",
      surface : "123m²",
      concept : "Création d’une intimité de maison secondaire. Différents espaces de vie crées pour des perceptions variées de la construction.",
      domaine : 1
    },
    images : [
      "Images/prive005_1.jpg",
      "Images/prive005_2.jpg",
      "Images/prive005_3.jpg",
      "Images/prive005_4.jpg",
      "Images/prive005_5.jpg",
      "Images/prive005_6.jpg"
    ]
  },
  {
    projet : {
      titre : "6 - Trois maisons individuelles",
      description : "Construction de trois maisons individuelles et de leur terrasse",
      description_bis : "Aménagement paysager",
      lieu : "Quartier de la mairie - Biganos (33)",
      annee : "2015",
      ouvrage : "Privé",
      surface : "3 x 70m²",
      concept : "Logements privés à usage locatif. Rentabilité des espaces et intégration contextuelle. Bâtiment en ossature et bardage bois. Prise en compte des normes handicapés et incendies.",
      domaine : 1
    },
    images : [
      "Images/prive006_1.png",
      "Images/prive006_2.png",
      "Images/prive006_3.png",
      "Images/prive006_4.png",
      "Images/prive006_5.png",
      "Images/prive006_6.png",
      "Images/prive006_7.png",
      "Images/prive006_8.jpg"
    ]
  },
  {
    projet : {
      titre : "7 - Surélévation d'une maison",
      description : "Surélévation d'une maison individuelle",
      lieu : "Quartier de l'Oustalet - La Teste de Buch (33)",
      annee : "2015",
      ouvrage : "Privé",
      surface : "150m²",
      concept : "Agrandissement d’une maison familiale. Volonté de diversification des matériaux pour générer un dialogues entre les volumes.",
      domaine : 1
    },
    images : [
      "Images/prive007_1.png",
      "Images/prive007_2.png",
      "Images/prive007_3.png",
      "Images/prive007_4.png",
      "Images/prive007_5.png",
      "Images/prive007_6.png",
      "Images/prive007_7.png"
    ]
  },
  {
    projet : {
      titre : "8 - Maison individuelle",
      description : "Construction d'une maison individuelle",
      description_bis : "Construction d'une piscine et de sa terrasse",
      lieu : "Commune du Teich - Gujan-Mestras (33)",
      annee : "2015",
      ouvrage : "Privé",
      surface : "115m²",
      concept : "Maison en toiture terrasse contemporaine. Espaces de jour et de nuit dirigés vers l’extérieur et la piscine. Bardage bois ponctuel pour la création d’un rythme de façade.",
      domaine : 1
  },
  images : [
    "Images/prive008_1.png",
    "Images/prive008_2.png",
    "Images/prive008_3.png",
    "Images/prive008_4.png",
    "Images/prive008_5.png",
    "Images/prive008_6.png"
  ]
},
  {
    projet : {
      titre : "9 - Renovation & extension d'une maison",
      description : "Rénovation et construction d'une extension de maison individuelle",
      description_bis : "Construction d'une piscine et de sa terrasse",
      description_ter : "Aménagement paysager",
      lieu : "Quartier des Abatilles - Arcachon (33)",
      annee : "2016",
      ouvrage : "Privé",
      surface : "185m²",
      concept : "Transformation d’une maison renfermée sur elle-même en une maison, spacieuse, ouverte et lumineuse. Mise en valeur de l’espace paysager.",
      domaine : 1
  },
  images : [
    "Images/prive009_1.png",
    "Images/prive009_2.jpg",
    "Images/prive009_3.jpg",
    "Images/prive009_4.png",
    "Images/prive009_5.png",
    "Images/prive009_6.png",
    "Images/prive009_7.png"
  ]
},
  {
    projet : {
      titre : "10 - Surélévation et extension d'une maison",
      description : "Construction d'une surélévation et d'une extension de maison individuelle",
      lieu : "Le Petit-Pressigny (37)",
      annee : "2015",
      ouvrage : "Privé",
      surface : "",
      concept : "Terrain dans le périmètre d’une église classée aux Bâtiment de France. Obligation d’intégration de l’extension via une rupture de volume et de matériaux mais en articulation implicite.",
      domaine : 1
  },
  images : [
    "Images/prive010_1.jpg",
    "Images/prive010_2.jpg",
    "Images/prive010_3.jpg",
    "Images/prive010_4.jpg",
    "Images/prive010_5.jpg",
    "Images/prive010_6.jpg",
    "Images/prive010_7.jpg"
  ]
},
  {
    projet : {
      titre : "11 - Maison Individuelle",
      description : "Cnstruction d'une maison individuelle et de son garage",
      lieu : "Quartier de Cazaux - La Teste de Buch (33)",
      annee : "2015",
      ouvrage : "Privé",
      surface : "125 m²",
      concept : "Espace « loft » séparé des pièces de nuit. Espace protégé extérieur dans la continuité de la toiture. Bardage bois ponctuel et jeux des ouvertures pour engendrer d’un rythme en façade.",
      domaine : 1
  },
  images : [
    "Images/prive011_1.png",
    "Images/prive011_2.png",
    "Images/prive011_3.png",
    "Images/prive011_4.png",
    "Images/prive011_5.png",
    "Images/prive011_6.png",
    "Images/prive011_7.png"
  ]
},
  {
    projet : {
      titre : "12 - Extension d'une maison en deux logements",
      description : "Construction d'une extension de aison individuelle en deux logements distincts",
      lieu : "Quartier Saint-Exupéry - La Teste de Buch (33)",
      annee : "2015",
      ouvrage : "Privé",
      surface : "265m²",
      concept : "Extension du bâti existant pour son agrandissement et pour la création d’une seconde maison en deuxième ligne. Entrées distinctes de sorte à ce que l&#39;accès de la nouvelle maison s&#39;effectue sans gène en fond de parcelle. Alliance de bardage bois et d’enduit.",
      domaine : 1
  },
  images : [
    "Images/prive012_1.png",
    "Images/prive012_2.png",
    "Images/prive012_3.png",
    "Images/prive012_4.png",
    "Images/prive012_5.png",
    "Images/prive012_6.png",
    "Images/prive012_7.png"
  ]
},
  {
    projet : {
      titre : "13 - Extension d'une maison individuelle",
      description : "Construction d'une extension de maison individuelle",
      description_bis : "Aménagement paysager",
      lieu : "Quartier des Abatilles - Arcachon (33)",
      annee : "2016",
      ouvrage : "Privé",
      surface : "160m²",
      concept : "Extension d’une maison, prolongeant les pièces de jours en partie haute et pour la création d’une serre en partie basse. en retrait par rapport au niveau 1. Cadrage sur le jardin depuis l'agrandissement et la terrasse couverte. Proposition d&#39;une variante en ossature et bardage métallique.",
      domaine : 1
  },
  images : [
    "Images/prive013_1.png",
    "Images/prive013_2.png",
    "Images/prive013_3.png",
    "Images/prive013_4.png",
    "Images/prive013_5.png",
    "Images/prive013_6.png",
    "Images/prive013_7.png",
    "Images/prive013_8.png",
    "Images/prive013_9.png",
    "Images/prive013_910.png",
    "Images/prive013_911.png"
  ]
}
//   {
//     projet : {
//       titre : "",
//       lieu : "",
//       annee : "2015",
//       ouvrage : "Privé",
//       surface : "",
//       concept : "",
//       domaine : 1
//   },
//   images : [
//
//   ];
// }
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
  newSpan.textContent = projets[i].projet.titre;
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
