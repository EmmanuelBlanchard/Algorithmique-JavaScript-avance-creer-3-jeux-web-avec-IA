
jeu.initialisation();
jeu.afficherGrille();

function jouer(ligne,colonne) {
    // var saisieLigne = toolbox.saisirEntier("Jouer en quelle ligne ? : ");
    // var saisieColonne = toolbox.saisirEntier("Jouer en quelle colonne ? : ");
    console.log(ligne + " : "+ colonne);
    var isOver = jeu.jouerCase(ligne,colonne);
    jeu.afficherGrille();
    return isOver;
}
