var ia = {
    choixColonne() {
        var tabColonne = this.getTableauCellulesPossibles();
        return tabColonne[0];
    },

    getTableauCellulesPossibles : function() {
        var tabColonne = [];
        for (var i = 1; i < jeu.nombreColonnes ; i++) {
            tabColonne.push(this.getPoidsCellule(jeu.retournerLigneCaseVideColonne(i),i));
        }
        return tabColonne;
    },

    getPoidsCellule : function(ligne,colonne) {
        if(ligne === -1) return 0; //la colonne est pleine --> le poids à renvoyer sera de 0

        if(this.verificationGagner(ligne,colonne)) return 100;

        return 1;
        
        // Vérifier si on peut gagner (IA) --> on retourne un poids de 100
        // Vérifier si on peut perdre (le joueur 1 peut gagner) --> on retourne un poids de 99

        // Autres cas 
        // Eviter de faire un coup perdant
        // Defendre (2 jetons adverse à coté --> le bloquer)
        // Attaquer (2 jetons de l'IA à coté)
        // Additionner les poids

    },

    verificationGagner : function(ligne,colonne) {

    }
}