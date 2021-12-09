var ia = {
    getCellule : function() {
        var cellulesPossible = this.getAllCellulesPossible();
        var cellule = this.getBestRandomCelluleAvecPoids(cellulesPossible);
        return cellule;
    },

    getAllCellulesPossible : function() {
        var cellulesVide = [];
        for (var i = 0 ; i < jeu.nombreLignes ; i++) {
            for (var j = 0 ; j < jeu.nombreColonnes ; j++) {
                if(jeu.grille[i][j] === 0 || jeu.grille[i][j] === 1) {
                    var cellule = {
                        ligne : i,
                        colonne : j,
                        poids : this.getPoidsCellule(i,j)
                    }
                    cellulesVide.push(cellule);
                }
            }
        }
        return cellulesVide;
    },

    getPoidsCellule : function(ligne,colonne) {
        var poidsCellule = 1;
        if((colonne+1 < jeu.nombreColonnes) && jeu.grille[ligne][colonne+1] === 4) poidsCellule++;
        if((colonne-1 >= 0) && jeu.grille[ligne][colonne-1] === 4) poidsCellule++;
        if((ligne+1 < jeu.nombreLignes) && jeu.grille[ligne+1][colonne] === 4) poidsCellule++;
        if((ligne-1 >= 0) && jeu.grille[ligne-1][colonne] === 4) poidsCellule++;
        return poidsCellule;
    },

    getBestRandomCelluleAvecPoids : function(cellules) {
        var bestCellule = 0;
        var bestCellules = [0];
        for (var i = 1 ; i < cellules.length; i++) {
            if(cellules[i].poids > cellules[bestCellule].poids) {
                bestCellule = i;
                bestCellules = new Array();
                bestCellules.push(i);
            } else if(cellules[i].poids === cellules[bestCellule].poids) {
                bestCellules.push(i);
            }
        }
        var randomCellule = Math.floor(Math.random() * bestCellules.length);
        return cellules[bestCellules[randomCellule]];
    }
}