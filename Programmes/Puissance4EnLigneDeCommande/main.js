console.log("coucou");

var puissance4 = [];
var nombreColonnes = 7;
var nombreLignes = 6;

puissance4 = initialiserTableauVide(nombreLignes,nombreColonnes,0);

console.log(puissance4);

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