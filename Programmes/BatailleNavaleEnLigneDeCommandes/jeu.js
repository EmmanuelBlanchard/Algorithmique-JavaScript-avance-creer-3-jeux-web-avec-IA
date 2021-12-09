var toolbox = require("./toolbox.js");

var jeu = {
    nombreColonnes : 5,
    nombreLignes : 5,
    grille : [],

    nombreCaseJoueur1 : 0,
    nombreCaseJoueur2 : 0,

    initialisation : function() {
        this.grille = toolbox.initialiserTableauVide(this.nombreLignes,this.nombreColonnes,0);
        this.positionnerBateau(3,1);
        this.nombreCaseJoueur1 += 3;
        this.positionnerBateau(2,1);
        this.nombreCaseJoueur1 += 2;
        this.positionnerBateau(3,2);
        this.nombreCaseJoueur2 += 3;
        this.positionnerBateau(2,2);
        this.nombreCaseJoueur2 += 2;
    },

    positionnerBateau : function(taille,joueur) {

    },

    afficherGrille : function() {
        for(var i = 0 ; i < this.nombreLignes ; i++) {
            var texte = "";
            for(var j = 0 ; j < this.nombreColonnes ; j++){
                texte += "| ";
                if(this.grille[i][j] === 0 ) {
                    texte += "_";
                } else if(this.grille[i][j] === 1 ) {
                    texte += "x";
                } else if(this.grille[i][j] === 2 ) {
                    texte += "o";
                }
                texte += " |";
            }
            console.log(texte);
        }
    },

    jouerCase : function(ligne,colonne) {

    },
}
module.exports = jeu;