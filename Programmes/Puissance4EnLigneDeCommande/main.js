var readline = require("readline-sync");

var puissance4 = [];
var nombreColonnes = 7;
var nombreLignes = 6;
var joueur1Caractere = "x";
var joueur2Caractere = "o";

puissance4 = initialiserTableauVide(nombreLignes,nombreColonnes,0);
afficherPuissance4(puissance4,joueur1Caractere,joueur2Caractere);

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
        var colonne = saisirColonne();
        var ligneVide = retournerCaseVideColonne(colonne);
    }
    puissance4[ligneVide][colonne-1] = joueur;
    afficherPuissance4(puissance4,joueur1Caractere,joueur2Caractere);
    return verificationFinJeu(joueur);
}

/**
 * Fonction permettant de saisir une colonne
 */
function saisirColonne() {
    return parseInt(readline.question("Quelle colonne ? "));
}

/**
 * Fonction permettant de retourner la premiere ligne d'une colonne
 * @param {Number} colonne Retourne -1 si la colonne est pleine
 */
function retournerCaseVideColonne(colonne) {
    // Si la colonne est pleine on retourne -1
    for(var i = nombreLignes-1; i >= 0; i--) {
        if(verificationCaseVide(i,colonne)) return i;
    }
    return -1;
}

/**
 * Fonction permettant de retourner si une cellule est vide ou pas (retourne true / false)
 * @param {Number} ligne 
 * @param {Number} colonne 
 */
function verificationCaseVide(ligne,colonne) {
    return puissance4[ligne][colonne-1] === 0;
}

/**
 * Fonction permettant de verifier si un joueur a gagné
 * @param {Number} joueur 
 */
function verificationFinJeu(joueur) {
    if(verificationLigneFinJeu(joueur) || verificationColonneFinJeu(joueur) || verificationDiagonaleFinJeu(joueur)) {
        return true;
    }
    return false;
}

/**
 * Fonction permettant de verifier si un joueur a gagné sur une ligne
 * @param {Number} joueur 
 */
function verificationLigneFinJeu(joueur) {
    for(var i = nombreLignes-1; i >= 0; i--) {
        for(var j = 0; j < nombreColonnes-3; j++) {
            if( puissance4[i][j] === joueur &&
                puissance4[i][j+1] === joueur &&
                puissance4[i][j+2] === joueur &&
                puissance4[i][j+3] === joueur
                ) {
                return true;
            }
        }
    }
    return false;
}

function verificationColonneFinJeu(joueur) {
    
}

function verificationDiagonaleFinJeu(joueur) {
    
}

/**
 * Permet d'initialiser un tableau de tableau en fonction d'un nombre de lignes et de colonnes passé en paramètre
 * @param {Number} nombreLignes 
 * @param {Number} nombreColonnes 
 * @param {*} caractere 
 */
function initialiserTableauVide(nombreLignes,nombreColonnes,caractere = '') {
    var tableau = [];
    for(var i = 0; i < nombreLignes ; i++) {
        var ligne = [];
        for(var j = 0; j < nombreColonnes ; j++) {
            ligne.push(caractere);
        }
        tableau.push(ligne);
    }
    return tableau;
}

/**
 * Permet d'afficher un tableau de puissance 4 en fonction d'un nombre de lignes et de colonnes passé en paramètre
 * @param {Array <String>} tableau Tableau de caractères
 * @param {String} joueur1Caractere Le caractere du joueur1
 * @param {String} joueur2Caractere Le caractere du joueur2
 */
function afficherPuissance4(tableau,joueur1Caractere,joueur2Caractere) {
    for(var i = 0; i < tableau.length ; i++) {
        var ligne = "";
        for(var j = 0; j < tableau[i].length ; j++) {
            ligne += "| ";
            if(tableau[i][j] === 0) {
                ligne += "_";
            } else if(tableau[i][j] === 1) {
                ligne += joueur1Caractere;
            } else if(tableau[i][j] === 2) {
                ligne += joueur2Caractere;
            }
            ligne += " |";
        }
        console.log(ligne);
    }
    
}
