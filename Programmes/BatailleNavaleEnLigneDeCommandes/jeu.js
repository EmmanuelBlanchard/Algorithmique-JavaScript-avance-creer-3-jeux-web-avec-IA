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
        var bateau = {};
        var positionTermine = false;
        // Terminer la création du bateau quand toutes les cases sont vides
        while(!positionTermine) {
            // Positionner notre bateau de manière aléatoire
            var xAlea = Math.floor(Math.random() * this.nombreLignes-(taille-1));
            var yAlea = Math.floor(Math.random() * this.nombreColonnes-(taille-1));
            var isHorizontal = Math.floor(Math.random() * 2);
    
            var isCaseVide = true;
            // Generer toutes les cases de notre bateau en fonction de la taille du bateau passer en paramètre de la fonction
            for(var i =1 ; i <= taille && isCaseVide; i++) {
                bateau["case"+i] = this.getCreationBateau(xAlea, yAlea, isHorizontal, i);
                // Si la case n'est pas vide, on sort de la boucle et recommence le cheminement : trouver une position x et y
                isCaseVide = this.verificationCaseVide(bateau["case"+i]);
            }
            if(isCaseVide) positionTermine = true;
        }
        this.enregistrerGrille(bateau,joueur);
    },
    
    getCreationBateau : function(x,y,isHorizontal,numeroCase) {

    },
    
    verificationCaseVide : function(caseBateau) {

    },

    enregistrerGrille : function (bateau,joueur) {

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