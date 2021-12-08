var toolbox = require("./toolbox.js");
var jeu = require("./jeu.js");

introduction();
jeu.joueur1Caractere = choixCaractere(1);
jeu.joueur2Caractere = choixCaractere(2);
jeu.initialisation();
jeu.afficherPuissance4();

while(true) {
    if(jouerCase(1)) {
        console.log("Joueur 1 a gagné");
        break;
    }
    if(jouerCase(2)) {
        console.log("Joueur 2 a gagné");
        break;
    }
}

function introduction() {
    var texte = "***********************************************************************\n";
    texte += "********************** Bienvenue sur Puissance 4 **********************\n";
    texte += "***********************************************************************\n";
    console.log(texte);
}

function choixCaractere(idJoueur) {
    var texte = "Veuillez choisir le caractere que vous voulez pour joueur " + idJoueur + " : ";
    return toolbox.saisieString(texte);
}

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

