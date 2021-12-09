var ia = {
    getCellule : function() {
        var celullesPossible = this.getAllCellulesPossible();
        var randomCellule = Math.floor(Math.random() * celullesPossible.length);
        return celullesPossible[randomCellule];
    },

    getAllCellulesPossible : function() {
        var cellulesVide = [];
        for (var i = 0 ; i < jeu.nombreLignes ; i++) {
            for (var j = 0 ; j < jeu.nombreColonnes ; j++) {
                if(jeu.grille[i][j] === 0 || jeu.grille[i][j] === 1) {
                    var cellule = {
                        ligne : i,
                        colonne : j
                    }
                    cellulesVide.push(cellule);
                }
            }
        }
        return cellulesVide;
    }
}