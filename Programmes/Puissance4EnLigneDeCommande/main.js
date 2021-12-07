var puissance4 = [];
var nombreColonnes = 7;
var nombreLignes = 6;
var joueur1Caractere = "x";
var joueur2Caractere = "o";

puissance4 = initialiserTableauVide(nombreLignes,nombreColonnes,0);
afficherPuissance4(puissance4,joueur1Caractere,joueur2Caractere);
puissance4[3][3] = 1;
puissance4[4][4] = 2;
afficherPuissance4(puissance4,joueur1Caractere,joueur2Caractere);

/*
Tant que pasTerminé
    jouer(Joueur1)
    jouer(Joueur2)
Fin Tant Que
*/

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

function jouerCase(joueur) {
    console.log("Le joueur %d joue", joueur);
    if(joueur === 2) {
        return true;
    }
    return false;
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
