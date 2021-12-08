jeu.initialisation();
jeu.afficherPuissance4();

var joueurEnCours = 1;

function jouer(colonne){
    var ligneVide = jeu.retournerLigneCaseVideColonne(colonne);
    jeu.jouerCase(joueurEnCours,ligneVide,colonne);
    jeu.afficherPuissance4();

    if(joueurEnCours === 1){
        joueurEnCours = 2;
    } else {
        joueurEnCours = 1;
    }
    // var ligneVide = -1;
    // var colonne = -1;
    // while(ligneVide === -1 || colonne <= 0 || colonne > 7) {
    //     console.log("Choisir une colonne à un emplacement vide");
    //     var colonne = jeu.saisirColonne();
    //     var ligneVide = jeu.retournerCaseVideColonne(colonne);
    // }
    // jeu.jouerCase(joueur,ligneVide,colonne);
    // jeu.afficherPuissance4();
    // return jeu.verificationFinJeu(joueur);
}
