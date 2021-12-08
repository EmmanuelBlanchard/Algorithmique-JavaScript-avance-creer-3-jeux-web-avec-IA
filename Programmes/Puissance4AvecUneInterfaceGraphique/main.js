jeu.initialisation();
jeu.afficherPuissance4();

/**
 * Fonction permettant à un joueur de jouer une case
 * Retourne true si le joueur a gagné
 * @param {Number} joueur 
 */
function jouerCase(joueur) {
    var ligneVide = -1;
    var colonne = -1;
    while(ligneVide === -1 || colonne <= 0 || colonne > 7) {
        console.log("Choisir une colonne à un emplacement vide");
        var colonne = jeu.saisirColonne();
        var ligneVide = jeu.retournerCaseVideColonne(colonne);
    }
    jeu.jouerCase(joueur,ligneVide,colonne);
    jeu.afficherPuissance4();
    return jeu.verificationFinJeu(joueur);
}
