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
        // console.log(tabMeilleureColonne);
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
        if(ligne === -1) return 0; // La colonne est pleine --> le poids à renvoyer sera de 0

        // Vérifier si on peut gagner (IA) --> on retourne un poids de 100
        if(this.verificationGagner(ligne,colonne,2)) return 100;
        // Vérifier si on peut perdre (le joueur 1 peut gagner) --> on retourne un poids de 99
        if(this.verificationGagner(ligne,colonne,1)) return 99;
        // Eviter de faire un coup perdant
        if(this.coupPerdant(ligne,colonne,2)) return 0;

        var poids = 0;
        // Defendre (2 jetons adverse à coté --> le bloquer)
        if(this.positionDefensive(ligne,colonne,1)) poids +=20; // Defense
        // Attaquer (2 jetons de l'IA à coté)
        if(this.positionDefensive(ligne,colonne,2)) poids +=20; // Attaque
        // Additionner les poids
        poids += this.getPoidsBase(ligne,colonne);

        return poids;
    },

    getPoidsBase : function(ligne,colonne) {
        var poidsLigne = 0;
        var poidsColonne = 0;
        switch(ligne) {
            case 0 : poidsLigne = 1;
            break;
            case 1 : poidsLigne = 2;
            break;
            case 2 : poidsLigne = 3;
            break;
            case 3 : poidsLigne = 4;
            break;
            case 4 : poidsLigne = 3;
            break;
            case 5 : poidsLigne = 2;
            break;
        }
        switch(colonne) {
            case 0 : poidsColonne = 1;
            break;
            case 1 : poidsColonne = 2;
            break;
            case 2 : poidsColonne = 3;
            break;
            case 3 : poidsColonne = 3;
            break;
            case 4 : poidsColonne = 3;
            break;
            case 5 : poidsColonne = 2;
            break;
            case 6 : poidsColonne = 1;
            break;
        }
        return poidsColonne * poidsLigne;
    },

    positionDefensive : function(ligne,colonne,joueur) {
        var cpt = 1;
        if(jeu.puissance4[ligne][colonne+1] === joueur) {
            cpt++;
            if(jeu.puissance4[ligne][colonne+2] === joueur && jeu.puissance4[ligne][colonne+3] === 0) cpt++;
        }
        if(jeu.puissance4[ligne][colonne-1] === joueur) {
            cpt++;
            if(jeu.puissance4[ligne][colonne-2] === joueur && jeu.puissance4[ligne][colonne-3] === 0) cpt++;      
        }
        
        if(cpt > 2) return true;
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
        var cpt=1;
        if((ligne-1 >=0) && (colonne+1 <= jeu.nombreColonnes) && jeu.puissance4[ligne-1][colonne+1] === joueur) {
            cpt++;
            if((ligne-2 >=0) && (colonne+2 <= jeu.nombreColonnes) && jeu.puissance4[ligne-2][colonne+2] === joueur) {
                cpt++;
                if((ligne-3 >=0) && (colonne+3 <= jeu.nombreColonnes) && jeu.puissance4[ligne-3][colonne+3] === joueur) {
                    cpt++;
                }
            }
        }
        if((ligne+1 < jeu.nombreLignes) && (colonne-1 >= 0) && jeu.puissance4[ligne+1][colonne-1] === joueur) {
            cpt++;
            if((ligne+2 < jeu.nombreLignes) && (colonne-2 >= 0) &&jeu.puissance4[ligne+2][colonne-2] === joueur){
                cpt++;
                if((ligne+3 < jeu.nombreLignes) && (colonne-3 >= 0) &&jeu.puissance4[ligne+3][colonne-3] === joueur){
                    cpt++;
                }
            }
        }
        if(cpt>3) return true;
        cpt=1;
        if((ligne-1 >=0) && (colonne-1 >= 0) && jeu.puissance4[ligne-1][colonne-1] === joueur) {
            cpt++;
            if((ligne-2 >=0) && (colonne-2 >= 0) && jeu.puissance4[ligne-2][colonne-2] === joueur) {
                cpt++;
                if((ligne-3 >=0) && (colonne-3 >= 0) && jeu.puissance4[ligne-3][colonne-3] === joueur) {
                    cpt++;
                }
            }
        }
        if((ligne+1 < jeu.nombreLignes) && (colonne+1 <= jeu.nombreColonnes) && jeu.puissance4[ligne+1][colonne+1] === joueur) {
            cpt++;
            if((ligne+2 < jeu.nombreLignes) && (colonne+2 <= jeu.nombreColonnes) &&jeu.puissance4[ligne+2][colonne+2] === joueur) {
                cpt++;
                if((ligne+3 < jeu.nombreLignes) && (colonne+3 <= jeu.nombreColonnes) &&jeu.puissance4[ligne+3][colonne+3] === joueur) {
                    cpt++;
                }
            }
        }
        if(cpt>3) return true;
    },

    coupPerdant : function(ligne,colonne,joueur) {
        if(ligne-1 > 0) {
            if(this.verificationGagner(ligne-1,colonne,1)) return true;
        }
    }
}