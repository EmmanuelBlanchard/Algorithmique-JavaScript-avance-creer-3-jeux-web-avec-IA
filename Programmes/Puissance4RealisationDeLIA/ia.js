var ia = {
    choixColonne() {
        var tabColonne = this.getTableauCellulesPossibles();
        console.log(tabColonne);
        return tabColonne[0];
    },

    getTableauCellulesPossibles : function() {
        var tabColonne = [];
        for (var i = 0; i < jeu.nombreColonnes ; i++) {
            tabColonne.push(this.getPoidsCellule(jeu.retournerLigneCaseVideColonne(i),i));
        }
        return tabColonne;
    },

    getPoidsCellule : function(ligne,colonne) {
        if(ligne === -1) return 0; //la colonne est pleine --> le poids à renvoyer sera de 0

        if(this.verificationGagner(ligne,colonne,2)) return 100;

        return 1;
        
        // Vérifier si on peut gagner (IA) --> on retourne un poids de 100
        // Vérifier si on peut perdre (le joueur 1 peut gagner) --> on retourne un poids de 99

        // Autres cas 
        // Eviter de faire un coup perdant
        // Defendre (2 jetons adverse à coté --> le bloquer)
        // Attaquer (2 jetons de l'IA à coté)
        // Additionner les poids

    },

    verificationGagner : function(ligne,colonne,joueur) {
        if(this.verificationGagnerLigne(ligne,colonne,joueur)) return true;
        if(this.verificationGagnerColonne(ligne,colonne,joueur)) return true;
        if(this.verificationGagnerDiagonale(ligne,colonne,joueur)) return true;
    },

    verificationGagnerLigne : function(ligne,colonne,joueur) {
        var cpt=1;
        if(jeu.puissance4[ligne][colonne+1] === joueur) {
            cpt++;
            if(jeu.puissance4[ligne][colonne+2] === joueur) {
                cpt++;
                if(jeu.puissance4[ligne][colonne+3] === joueur) {
                    cpt++;
                }
            }
        }
        
        if(jeu.puissance4[ligne][colonne-1] === joueur) {
            cpt++;
            if(jeu.puissance4[ligne][colonne-2] === joueur) {
                cpt++;
                if(jeu.puissance4[ligne][colonne-3] === joueur) {
                    cpt++;
                }
            }
        }
        if(cpt>3) return true;
    },

    verificationGagnerColonne : function(ligne,colonne,joueur) {

    },

    verificationGagnerDiagonale : function(ligne,colonne,joueur) {

    }
}