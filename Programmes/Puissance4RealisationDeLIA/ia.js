var ia = {
    choixColonne(){
        var tabColonne = this.getTableauCellulesPossibles();
        var meilleureColonne = 0;
        var tabMeilleureColonne = [0];
        for(var i=1;i < tabColonne.length; i++){
            if(tabColonne[i]> tabColonne[meilleureColonne]){
                meilleureColonne = i;
                tabMeilleureColonne = new Array();
                tabMeilleureColonne.push(i);
            } else if(tabColonne[i] === tabColonne[meilleureColonne]){
                tabMeilleureColonne.push(i);
            }
        }
        console.log(tabColonne);
        console.log(tabMeilleureColonne);
        return tabMeilleureColonne[Math.floor(Math.random() * tabMeilleureColonne.length)];
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
        var cpt=1;
        if (ligne < 3 ) {
            if(jeu.puissance4[ligne+1][colonne] === joueur) {
                cpt++;
                if(jeu.puissance4[ligne+2][colonne] === joueur) {
                    cpt++;
                    if(jeu.puissance4[ligne+3][colonne] === joueur) {
                        cpt++;
                    }
                }
            }
        }
        if(cpt>3) return true;
    },

    verificationGagnerDiagonale : function(ligne,colonne,joueur) {

    }
}