var toolbox = require("./toolbox.js");

var jeu = {
    puissance4 : [],
    nombreColonnes : 7,
    nombreLignes : 6,
    joueur1Caractere : "x",
    joueur2Caractere : "o",

    /**
     * 
     */
    initialisation : function() {
        this.puissance4 = toolbox.initialiserTableauVide(this.nombreLignes,this.nombreColonnes,0);
    },

    /**
     * Permet d'afficher un tableau de puissance 4 
     */
    afficherPuissance4 : function() {
        for(var i = 0; i < this.puissance4.length ; i++) {
            var ligne = "";
            for(var j = 0; j < this.puissance4[i].length ; j++) {
                ligne += "| ";
                if(this.puissance4[i][j] === 0) {
                    ligne += "_";
                } else if(this.puissance4[i][j] === 1) {
                    ligne += this.joueur1Caractere;
                } else if(this.puissance4[i][j] === 2) {
                    ligne += this.joueur2Caractere;
                }
                ligne += " |";
            }
            console.log(ligne);
        }
    },

    jouerCase : function(joueur,ligne,colonne) {
        this.puissance4[ligne][colonne-1] = joueur;
    },

    /**
     * Fonction permettant de retourner la premiere ligne d'une colonne
     * @param {Number} colonne Retourne -1 si la colonne est pleine
     */
    retournerCaseVideColonne : function(colonne) {
        // Si la colonne est pleine on retourne -1
        for(var i = this.nombreLignes-1; i >= 0; i--) {
            if(this.verificationCaseVide(i,colonne)) return i;
        }
        return -1;
    },

    /**
     * Fonction permettant de retourner si une cellule est vide ou pas (retourne true / false)
     * @param {Number} ligne 
     * @param {Number} colonne 
     */
    verificationCaseVide : function(ligne,colonne) {
        return this.puissance4[ligne][colonne-1] === 0;
    },

    /**
     * Fonction permettant de saisir une colonne
     */
    saisirColonne : function() {
        return parseInt(toolbox.saisieString("Quelle colonne ? "));
    },

    /**
     * Fonction permettant de verifier si un joueur a gagn??
     * @param {Number} joueur 
     */
    verificationFinJeu : function(joueur) {
        if(this.verificationLigneFinJeu(joueur) || this.verificationColonneFinJeu(joueur) || this.verificationDiagonaleFinJeu(joueur)) {
            return true;
        }
        return false;
    },

    /**
     * Fonction permettant de verifier si un joueur a gagn?? sur une ligne
     * @param {Number} joueur 
     */
    verificationLigneFinJeu : function(joueur) {
        for(var i = this.nombreLignes-1; i >= 0; i--) {
            for(var j = 0; j < this.nombreColonnes-3; j++) {
                if( this.puissance4[i][j] === joueur &&
                    this.puissance4[i][j+1] === joueur &&
                    this.puissance4[i][j+2] === joueur &&
                    this.puissance4[i][j+3] === joueur
                    ) {
                    return true;
                }
            }
        }
        return false;
    },

    /**
     * Fonction permettant de verifier si un joueur a gagn?? sur une colonne
     * @param {Number} joueur 
     */
    verificationColonneFinJeu : function(joueur) {
        for(var i = 0; i < this.nombreColonnes; i++) {
            for(var j = this.nombreLignes-4; j >= 0; j--) {
                if( this.puissance4[j][i] === joueur &&
                    this.puissance4[j+1][i] === joueur &&
                    this.puissance4[j+2][i] === joueur &&
                    this.puissance4[j+3][i] === joueur
                    ) {
                    return true;
                }
            }
        }
        return false;
    },

    /**
     * Fonction permettant de verifier si un joueur a gagn?? sur une diagonale
     * @param {Number} joueur 
     */
    verificationDiagonaleFinJeu : function(joueur) {
        for(var i = this.nombreLignes-1; i >= 3; i--) {
            for(var j = 0; j < this.nombreColonnes; j++) {
                if( this.puissance4[i][j] === joueur &&
                    this.puissance4[i-1][j+1] === joueur &&
                    this.puissance4[i-2][j+2] === joueur &&
                    this.puissance4[i-3][j+3] === joueur
                    ) {
                        return true;
                }
                if( this.puissance4[i][j] === joueur &&
                    this.puissance4[i-1][j-1] === joueur &&
                    this.puissance4[i-2][j-2] === joueur &&
                    this.puissance4[i-3][j-3] === joueur
                    ) {
                        return true;
                }
            }
        }
        return false;
    }
}
module.exports = jeu;
