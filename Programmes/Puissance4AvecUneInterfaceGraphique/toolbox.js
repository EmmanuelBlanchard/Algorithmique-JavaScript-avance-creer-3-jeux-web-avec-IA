// var readline = require("readline-sync");

var toolbox = {
    // saisieString : function(texte) {
    //     return readline.question(texte);
    // },

    /**
     * Permet d'initialiser un tableau de tableau en fonction d'un nombre de lignes et de colonnes passé en paramètre
     * @param {Number} nombreLignes 
     * @param {Number} nombreColonnes 
     * @param {*} caractere 
     */
     initialiserTableauVide : function(nombreLignes,nombreColonnes,caractere = '') {
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
}
// module.exports = toolbox;