/* le paramètre domaine correspond à la sous catégorie du projet :
  domaine 1 = privé
  domaine 2 = tertiaire
  domaine 3 = paysager
  domaine 4 = intérieur
  domaine 5 = divers
*/

var projets = [
  {
    projet : {
      titre : "Extension d'une maison individuelle",
      description : "Construction d'une extension de maison individuelle et de son garage",
      description_bis : "Construction d'une piscine et de sa terrasse",
      description_ter : "Aménagement paysager",
      lieu : "Quartier des Abatilles - Arcachon (33)",
      annee : "2015",
      ouvrage : "Privé",
      concept : "Dialogue entre une maison traditionnelle arcachonnaise et une architecture contemporaine. Création d’une intimité au sein d’un terrain entouré par la voie publique. Volonté de garder un grand espace paysager.",
      domaine : 1
    },
    images : [
      "images/projets/prive001_1.jpg",
      "images/projets/prive001_2.jpg",
      "images/projets/prive001_3.jpg",
      "images/projets/prive001_4.jpg",
      "images/projets/prive001_5.jpg",
      "images/projets/prive001_6.jpg"
    ],
    couverture : "images/projets/prive001_3.jpg"
  },
  {
    projet : {
      titre : "Extension d'une maison individuelle",
      description : "Construction d'une surélévation et d'une extension de maison individuelle",
      description_bis : "Construction d'une annexe et d'une terrasse sur plusieurs niveaux",
      lieu : "Quartier du Pyla-sur-mer - La Teste de Buch (33)",
      annee : "2016",
      ouvrage : "Privé",
      surface : "220m²",
      concept : "Réorganisation des espaces intérieurs. Création de pièces de nuit supplémentaires et d’appartements autonomes liés à une maison existante rénovée. Besoin de préserver les espaces extérieurs : terrasses basses, hautes et toiture terrasse donnant sur la forêt.",
      domaine : 1
    },
    images : [
      "images/projets/prive002_1.jpg",
      "images/projets/prive002_2.jpg",
      "images/projets/prive002_3.jpg",
      "images/projets/prive002_4.jpg",
      "images/projets/prive002_5.jpg",
      "images/projets/prive002_6.jpg",
      "images/projets/prive002_7.jpg",
      "images/projets/prive002_8.jpg"
    ],
    couverture : "images/projets/prive002_8.jpg"
  },
  {
    projet : {
      titre : "Maison individuelle",
      description : "Construction d'une maison individuelle et de son garage",
      description_bis : "Construction d'une terrasse et de son kioske",
      description_ter : "Aménagement paysager",
      lieu : "Quartier de l'hyper centre - Gujan-Mestras (33)",
      annee : "2016",
      ouvrage : "Privé",
      surface : "115m²",
      concept : "Volonté d’un intérieur ouvert et d’une architecture mêlant anecdotes traditionnelles et touches contemporaines. Diagnostique spacial pour une architecture offrant la meilleure ergonomie. Végétation omni-présente.",
      domaine : 1
    },
    images : [
      "images/projets/prive003_1.jpg",
      "images/projets/prive003_2.jpg",
      "images/projets/prive003_3.jpg",
      "images/projets/prive003_4.jpg",
      "images/projets/prive003_5.jpg",
      "images/projets/prive003_6.jpg"
    ],
    couverture : "images/projets/prive003_6.jpg"
  },
  {
    projet : {
      titre : "Deux maisons individuelles",
      description : "Construction de deux maisons individuelles et de leur terrasse",
      lieu : "Quartier des bordes - La Teste de Buch (33)",
      annee : "2015",
      ouvrage : "Privé",
      surface : "121m² & 99m²",
      concept : "Rentabilisation d’un terrain pour la création de deux maisons d’habitation, l’une en ossature et bardage bois et l’autre en toiture terrasse maçonné.",
      domaine : 1
    },
    images : [
      "images/projets/prive004_1.jpg",
      "images/projets/prive004_2.jpg",
      "images/projets/prive004_3.jpg",
      "images/projets/prive004_4.jpg",
      "images/projets/prive004_5.jpg",
      "images/projets/prive004_6.jpg",
      "images/projets/prive004_7.jpg",
      "images/projets/prive004_8.jpg",
      "images/projets/prive004_9.jpg",
      "images/projets/prive004_910.jpg"
    ],
    couverture : "images/projets/prive004_9.jpg"
  },
  {
    projet : {
      titre : "Maison individuelle",
      description : "Construction d'une maison individuelle et de son garage",
      description_bis : "Construction d'une piscine et de sa terrasse",
      description_ter : "Aménagement paysager",
      lieu : "Quartier des Abatilles - Arcachon (33)",
      annee : "2015",
      ouvrage : "Privé",
      surface : "123m²",
      concept : "Création d’une intimité de maison secondaire. Différents espaces de vie créés pour des perceptions variées de la construction.",
      domaine : 1
    },
    images : [
      "images/projets/prive005_1.jpg",
      "images/projets/prive005_2.jpg",
      "images/projets/prive005_3.jpg",
      "images/projets/prive005_4.jpg",
      "images/projets/prive005_5.jpg",
      "images/projets/prive005_6.jpg",
    ],
    couverture : "images/projets/prive005_6.jpg"
  },
  {
    projet : {
      titre : "Trois maisons individuelles",
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
      "images/projets/prive006_1.jpg",
      "images/projets/prive006_2.jpg",
      "images/projets/prive006_3.jpg",
      "images/projets/prive006_4.jpg",
      "images/projets/prive006_5.jpg",
      "images/projets/prive006_6.jpg",
      "images/projets/prive006_7.jpg"
    ],
    couverture : "images/projets/prive006_7.jpg"
  },
  {
    projet : {
      titre : "Surélévation d'une maison",
      description : "Surélévation d'une maison individuelle",
      lieu : "Quartier de l'Oustalet - La Teste de Buch (33)",
      annee : "2015",
      ouvrage : "Privé",
      surface : "150m²",
      concept : "Agrandissement d’une maison familiale. Volonté de diversification des matériaux pour générer un dialogues entre les volumes.",
      domaine : 1
    },
    images : [
      "images/projets/prive007_1.jpg",
      "images/projets/prive007_2.jpg",
      "images/projets/prive007_3.jpg",
      "images/projets/prive007_4.jpg",
      "images/projets/prive007_5.jpg",
      "images/projets/prive007_6.jpg",
      "images/projets/prive007_7.jpg"
    ],
    couverture : "images/projets/prive007_7.jpg"
  },
  {
    projet : {
      titre : "Maison individuelle",
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
    "images/projets/prive008_1.jpg",
    "images/projets/prive008_2.jpg",
    "images/projets/prive008_3.jpg",
    "images/projets/prive008_4.jpg",
    "images/projets/prive008_5.jpg",
    "images/projets/prive008_6.jpg"
  ],
  couverture : "images/projets/prive008_6.jpg"
},
  {
    projet : {
      titre : "Renovation & extension d'une maison",
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
    "images/projets/prive009_1.jpg",
    "images/projets/prive009_2.jpg",
    "images/projets/prive009_3.jpg",
    "images/projets/prive009_4.jpg",
    "images/projets/prive009_5.jpg",
    "images/projets/prive009_6.jpg",
    "images/projets/prive009_7.jpg"
  ],
  couverture : "images/projets/prive009_7.jpg"
},
  {
    projet : {
      titre : "Surélévation et extension d'une maison",
      description : "Construction d'une surélévation et d'une extension de maison individuelle",
      lieu : "Le Petit-Pressigny (37)",
      annee : "2015",
      ouvrage : "Privé",
      concept : "Terrain dans le périmètre d’une église classée aux Bâtiment de France. Obligation d’intégration de l’extension via une rupture de volume et de matériaux mais en articulation implicite.",
      domaine : 1
  },
  images : [
    "images/projets/prive010_1.jpg",
    "images/projets/prive010_2.jpg",
    "images/projets/prive010_3.jpg",
    "images/projets/prive010_4.jpg",
    "images/projets/prive010_5.jpg",
    "images/projets/prive010_6.jpg",
    "images/projets/prive010_7.jpg"
  ],
  couverture : "images/projets/prive010_7.jpg"
},
  {
    projet : {
      titre : "Maison Individuelle",
      description : "Cnstruction d'une maison individuelle et de son garage",
      lieu : "Quartier de Cazaux - La Teste de Buch (33)",
      annee : "2015",
      ouvrage : "Privé",
      surface : "125 m²",
      concept : "Espace « loft » séparé des pièces de nuit. Espace protégé extérieur dans la continuité de la toiture. Bardage bois ponctuel et jeux des ouvertures pour engendrer d’un rythme en façade.",
      domaine : 1
  },
  images : [
    "images/projets/prive011_1.jpg",
    "images/projets/prive011_2.jpg",
    "images/projets/prive011_3.jpg",
    "images/projets/prive011_4.jpg",
    "images/projets/prive011_5.jpg",
    "images/projets/prive011_6.jpg"
  ],
  couverture : "images/projets/prive011_6.jpg"
},
  {
    projet : {
      titre : "Extension d'une maison en deux logements",
      description : "Construction d'une extension de maison individuelle en deux logements distincts",
      lieu : "Quartier Saint-Exupéry - La Teste de Buch (33)",
      annee : "2015",
      ouvrage : "Privé",
      surface : "265m²",
      concept : "Extension du bâti existant pour son agrandissement et pour la création d’une seconde maison en deuxième ligne. Entrées distinctes de sorte à ce que l'accès de la nouvelle maison s'effectue sans gène en fond de parcelle. Alliance de bardage bois et d’enduit.",
      domaine : 1
  },
  images : [
    "images/projets/prive012_1.jpg",
    "images/projets/prive012_2.jpg",
    "images/projets/prive012_3.jpg",
    "images/projets/prive012_4.jpg",
    "images/projets/prive012_5.jpg",
    "images/projets/prive012_6.jpg",
    "images/projets/prive012_7.jpg"
  ],
  couverture : "images/projets/prive012_5.jpg"
},
  {
    projet : {
      titre : "Extension d'une maison individuelle",
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
    "images/projets/prive013_1.jpg",
    "images/projets/prive013_2.jpg",
    "images/projets/prive013_3.jpg",
    "images/projets/prive013_4.jpg",
    "images/projets/prive013_5.jpg",
    "images/projets/prive013_6.jpg",
    "images/projets/prive013_7.jpg",
    "images/projets/prive013_8.jpg",
    "images/projets/prive013_9.jpg",
    "images/projets/prive013_910.jpg",
    "images/projets/prive013_911.jpg"
  ],
  couverture : "images/projets/prive013_7.jpg"
},
  {
    projet : {
      titre : "Atelier de charpentier",
      description : "Construction d'un atelier de charpentier attenant à des corps de bâtiments anciens",
      lieu : "Le Petit-Pressigny (37)",
      annee : "2015",
      ouvrage : "Privé",
      surface : "630m²",
      concept : "Volume crée pour la pratique d'un artisan charpentier. Espace de bureaux, de création et de stockage.",
      domaine : 2
  },
  images : [
    "images/projets/tertiaire001_1.jpg",
    "images/projets/tertiaire001_2.jpg",
    "images/projets/tertiaire001_3.jpg",
    "images/projets/tertiaire001_4.jpg",
    "images/projets/tertiaire001_5.jpg",
    "images/projets/tertiaire001_6.jpg",
    "images/projets/tertiaire001_7.jpg",
    "images/projets/tertiaire001_8.jpg",
    "images/projets/tertiaire001_9.jpg"
  ],
  couverture : "images/projets/tertiaire001_9.jpg"
},
  {
    projet : {
      titre : "Cabane ostréicole",
      description : "Construction d'une cabane ostréicole",
      lieu : "Prés-salés ouest - port de la Teste de Buch (33)",
      annee : "2015",
      ouvrage : "Privé",
      surface : "72m²",
      concept : "Cabane traditionnelle d'un ostréiculteur, à usage de production d'huîtres. Pignon sur port et bardage bois.",
      domaine : 2
  },
  images : [
    "images/projets/tertiaire002_1.jpg",
    "images/projets/tertiaire002_2.jpg",
    "images/projets/tertiaire002_3.jpg",
    "images/projets/tertiaire002_4.jpg",
    "images/projets/tertiaire002_5.jpg",
    "images/projets/tertiaire002_6.jpg"
  ],
  couverture : "images/projets/tertiaire002_6.jpg"
},
  {
    projet : {
      titre : "Cabane d'exploitation agricole",
      description : "Construction d'une cabane à usage d'exploitation agricole",
      lieu : "Prés-salés ouest - port de La Teste de Buch (33)",
      annee : "2015",
      ouvrage : "Privé",
      surface : "200m²",
      concept : "Cabane traditionnnelle aux dimensions exceptionnelles, à usage d'exploitation agricole liée aux activités maritimes.",
      domaine : 2
  },
  images : [
    "images/projets/tertiaire003_1.jpg",
    "images/projets/tertiaire003_2.jpg",
    "images/projets/tertiaire003_3.jpg",
    "images/projets/tertiaire003_4.jpg",
    "images/projets/tertiaire003_5.jpg",
    "images/projets/tertiaire003_6.jpg"
  ],
  couverture : "images/projets/tertiaire003_5.jpg"
},
  {
    projet : {
      titre : "Garages et Box",
      description : "Construction de garages et de box à usage locatif",
      lieu : "Zone d'activités industrielles - La Teste de Buch (33)",
      annee : "2015",
      ouvrage : "Privé",
      surface : "200m²",
      concept : "Création de locaux locatifs, de type garages et boxs pour stockage.",
      domaine : 2
  },
  images : [
    "images/projets/tertiaire004_1.jpg",
    "images/projets/tertiaire004_2.jpg",
    "images/projets/tertiaire004_3.jpg",
    "images/projets/tertiaire004_4.jpg",
    "images/projets/tertiaire004_5.jpg"
  ],
  couverture : "images/projets/tertiaire004_5.jpg"
},
  {
    projet : {
      titre : "Complexe Sportif",
      description : "Construction d'un bâtiment multiplexe à usage sportif : rugby et foot en salle, squash, musculation, salles de conférence, bar et restaurant.",
      lieu : "Zone de loisirs - quartier de Gujan-Mestras (33)",
      annee : "2015",
      ouvrage : "Privé",
      surface : "16 200m²",
      concept : "Fédérer autour d'un espace dédier au sport.",
      domaine : 2
  },
  images : [
    "images/projets/tertiaire005_1.jpg",
    "images/projets/tertiaire005_2.jpg",
    "images/projets/tertiaire005_3.jpg",
    "images/projets/tertiaire005_4.jpg",
    "images/projets/tertiaire005_5.jpg",
    "images/projets/tertiaire005_6.jpg",
    "images/projets/tertiaire005_7.jpg"
  ],
  couverture : "images/projets/tertiaire005_7.jpg"
},
  {
    projet : {
      titre : "Cabinet médical",
      description : "Mise en conformité d'un cabinet médical aux normes handicapées et incendies ",
      lieu : "Quartier de la gare - La Teste de Buch (33)",
      annee : "2016",
      ouvrage : "Privé",
      surface : "150m²",
      concept : "Dossier de mise en conformité de l'établissement concernant les personnes à mobilité réduite et les normes de sécurité incendie. Réalisation d'un agenda programmé des travaux à effectuer.",
      domaine : 2
  },
  images : [
    "images/projets/tertiaire006_1.jpg",
    "images/projets/tertiaire006_2.jpg",
    "images/projets/tertiaire006_3.jpg",
    "images/projets/tertiaire006_4.jpg"
  ],
  couverture : "images/projets/tertiaire006_4.jpg"
},
  {
    projet : {
      titre : "Cabinet d'osteopathie",
      description : "Mise en conformité d'un cabinet d'osteopathie aux normes handicapées et incendies",
      lieu : "Quartier de la mairie - Biganos (33)",
      annee : "2016",
      ouvrage : "Privé",
      surface : "70m²",
      concept : "Dossier de mise en conformité de l'établissement concernant les personnes à mobilité réduite et les normes de sécurité incendie. Réalisation d'un agenda programmé des travaux à effectuer.",
      domaine : 2
  },
  images : [
    "images/projets/tertiaire007_1.jpg",
    "images/projets/tertiaire007_2.jpg",
    "images/projets/tertiaire007_3.jpg",
    "images/projets/tertiaire007_4.jpg"
  ],
  couverture : "images/projets/tertiaire007_4.jpg"
},
  {
    projet : {
      titre : "Réfection de façade d'hôtel",
      description : "Réfection de façade d'hôtel",
      annee : "2016",
      concept : "",
      ouvrage : "Privé",
      domaine : 2
  },
  images : [
    "images/projets/tertiaire008_1.jpg",
    "images/projets/tertiaire008_2.jpg",
    "images/projets/tertiaire008_3.jpg"
  ],
  couverture : "images/projets/tertiaire008_3.jpg"
},
  {
    projet : {
      titre : "Piscine et annexe de maison",
      description : "Construction d'une annexe de maison individuelle - type cuisine extérieure, garage, serre et atelier - d'une piscine, d'une terrasse, d'un boulodrome et aménagement paysager",
      lieu : "Quartier de la place Thiers, La Teste de Buch (33)",
      annee : "2016",
      ouvrage : "Privé",
      surface : "91m² & 65m² Piscine : 32m²",
      concept : "Construction d'une annexe de jardin, de sa terrasse et d'une piscine intimisant en reproportionnant l'espace longitudinal du jardin. Etude d'un aménagement paysager.",
      domaine : 3
  },
  images : [
    "images/projets/ext001_1.jpg",
    "images/projets/ext001_2.jpg",
    "images/projets/ext001_3.jpg",
    "images/projets/ext001_4.jpg",
    "images/projets/ext001_5.jpg",
    "images/projets/ext001_6.jpg"
  ],
  couverture : "images/projets/ext001_6.jpg"
},
  {
    projet : {
      titre : "Piscine et terrasse",
      description : "Construction d'une piscine et d'une terrasse. Aménagement du dénivelé paysager",
      lieu : "Quartier du Super-Pyla - La Teste de Buch (33)",
      annee : "2016",
      ouvrage : "Privé",
      surface : "50m²  Piscine : 20m²",
      concept : "Nivellement du terrain et aménagement paysager pour la mise en valeur de la piscine et sa terrasse créée.",
      domaine : 3
    },
    images : [
      "images/projets/ext002_1.jpg",
      "images/projets/ext002_2.jpg",
      "images/projets/ext002_3.jpg",
      "images/projets/ext002_4.jpg"
    ],
    couverture : "images/projets/ext002_4.jpg"
  },
  {
    projet : {
      titre : "Rénovation d'un local commercial",
      description : "Rénovation d'un local d'esthéticienne en atelier d'architecture",
      lieu : "Quartier du marché - La Teste de Buch (33)",
      annee : "2015",
      ouvrage : "Privé",
      surface : "30m²",
      concept : "Optimisation de l'espace du local adéquate à l'activité d'une agence d'architecture. Ouverture des espaces, distribution subtile des espaces de réunion, de travail et de vie interne à l'agence.",
      domaine : 4
    },
    images : [
      "images/projets/int001_1.jpg",
      "images/projets/int001_2.jpg",
      "images/projets/int001_3.jpg",
      "images/projets/int001_4.jpg",
      "images/projets/int001_5.jpg"
    ],
    couverture : "images/projets/int001_5.jpg"
  },
  {
    projet : {
      titre : "Rénovation d'un appartement et d'un local commercial",
      description : "Rénovation d'un appartement et d'un salon de coiffure",
      lieu : "Quartier de la place Thiers - La Teste de Buch (33)",
      annee : "2015",
      ouvrage : "Privé",
      surface : "60m² & 50 m²",
      concept : "Remise en état d'un local commercial destiné à la location. Rénovation et aménagement intérieur d'un appartement. Création d'une entrée indépendante et d'une mezzanine dans la salle de vie afin d'optimiser la nouvelle hauteur sous plafond. Valorisation de la charpente.",
      domaine : 4
    },
    images : [
      "images/projets/int002_1.jpg",
      "images/projets/int002_2.jpg",
      "images/projets/int002_3.jpg",
      "images/projets/int002_4.jpg",
      "images/projets/int002_5.jpg",
      "images/projets/int002_6.jpg",
      "images/projets/int002_7.jpg",
      "images/projets/int002_8.jpg",
      "images/projets/int002_9.jpg"
    ],
    couverture : "images/projets/int002_9.jpg"
  },
  {
    projet : {
      titre : "Salle de bain",
      description : "Création d'une salle de bain",
      lieu : "Quartier de la place Thiers - La Teste de Buch (33)",
      annee : "2016",
      ouvrage : "Privé",
      surface : "5m²",
      concept : "Optimiser un petit espace afin qu'il soit le plus fonctionnel possible.",
      domaine : 4
    },
    images : [
      "images/projets/int003_1.jpg",
      "images/projets/int003_2.jpg",
      "images/projets/int003_3.jpg"
    ],
    couverture : "images/projets/int003_1.jpg"
  },
  {
    projet : {
      titre : "Salle de bain",
      description : "Rénovation d'une salle de bain",
      lieu : "Quartier des Abatilles - Arcachon (33)",
      annee : "2015",
      ouvrage : "Privé",
      surface : "2m²",
      concept : "Optimiser un petit espace afin qu'il soit le plus fonctionnel possible.",
      domaine : 4
    },
    images : [
      "images/projets/int004_1.jpg",
      "images/projets/int004_2.jpg",
      "images/projets/int004_3.jpg",
      "images/projets/int004_4.jpg"
    ],
    couverture : "images/projets/int004_4.jpg"
  },
  {
    projet : {
      titre : "Etude d'un aménagement urbain",
      description : "Proposition d'un aménagement urbain de promenade",
      concept : "",
      lieu : "Prés-Salés - Port de la Teste de Buch (33)",
      domaine : 5
    },
    images : [
      "images/projets/div001_1.jpg"
    ],
    couverture : "images/projets/div001_1.jpg"
  },
  {
    projet : {
      titre : "Diplôme de fin d'études d'architecture",
      concept : "",
      domaine : 5
    },
    images : [
      "images/projets/div002_1.jpg",
      "images/projets/div002_2.jpg",
      "images/projets/div002_3.jpg"
    ],
    couverture : "images/projets/div002_1.jpg"
  }
];

var project_box = document.getElementById("contenu_projets");
var newDiv;
var newSpan;

var current_project_id;
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
  newDiv.setAttribute("id", i);
  newDiv.addEventListener("click", function(){
    recupId(this.id);
  }) ;
  newDiv.addEventListener("click", function(){
    details(i);
  });
  newDiv.addEventListener("click", function(){
    background_image(0);
  });
  newSpan = document.createElement("span");
  newDiv.appendChild(newSpan);
  newSpan.textContent = projets[i].projet.titre;
  newDiv.style.backgroundImage = "url("+projets[i].couverture+")";
  console.log(projets[i].projet.titre);
}


// Fonction pour le filtrage des projets rappel :
// 1 -> habitat privé
// 2 -> tertiaire
// 3 -> Extérieur
// 4 -> Intérieur
// 5 -> Divers

function filter(n){
  clear_projets(project_box);
  if(n === 0){
    project_gallery();
  }
  for(var i = 0; i < projets.length; i++){
    if(projets[i].projet.domaine === n){
      console.log(projets[i]);
      giveMeDiv(i);
    }
  }
}

function clear_projets(project_box){
  project_box.innerHTML = "";
}



//------------------------------------------------------------Functions pour la partie cachée qui amène aux détails du projet sur lequel on clique

var projet_img = document.getElementById("img_projet");
var projet_des = document.getElementById("description_projet");
var projet_conc = document.getElementById("concept_projet");
var projet_lieu = document.getElementById("lieu_projet");
var projet_annee = document.getElementById("annee_projet");
var projet_ouvr = document.getElementById("ouvrage_projet");
var projet_surface = document.getElementById("surface_projet");

var slider_projet = document.getElementById("slider_projet");

var current_img_id = 0;

function recupId(id)
{
  current_project_id = id;
  console.log("je suis dans recupId" + id);
  // return current_project_id;
};

//---------------------------------------------------------Fonctions pour le contenu des différents éléments depuis l'objet

function background_image(current_img_id){
  console.log("current_project_id "+current_project_id);
  projet_img.style.backgroundImage = "url("+projets[current_project_id].images[current_img_id]+")";
};


function details(index){
  slider_projet.style.visibility = "visible";
  var current_project = projets[index].projet;
  projet_des.textContent = current_project.description;
  if (current_project.concept != undefined){
    projet_conc.textContent = "Concept : " + current_project.concept;
  }
  projet_lieu.textContent = current_project.lieu;
  if (current_project.annee != undefined){
    projet_annee.textContent = "Année : " + current_project.annee;
  }
  if (current_project.ouvrage != undefined){
    projet_ouvr.textContent = "Maître d'ouvrage : " + current_project.ouvrage;
  }
  if (current_project.surface != undefined){
    projet_surface.textContent = "Surface : " + current_project.surface;
  }
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

function cachetoi(){
  slider_projet.style.visibility = "hidden";
};
