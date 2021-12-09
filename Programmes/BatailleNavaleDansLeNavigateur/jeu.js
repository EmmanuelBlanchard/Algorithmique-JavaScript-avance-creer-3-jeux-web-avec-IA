var jeu = {
    nombreColonnes : 5,
    nombreLignes : 5,
    grille : [],

    nombreCaseJoueur1 : 0,
    nombreCaseJoueur2 : 0,

    initialisation : function(nombreBateaux) {
        this.nombreColonnes = nombreBateaux * 2 +1;
        this.nombreLignes = nombreBateaux * 2 +1;
        this.grille = toolbox.initialiserTableauVide(this.nombreLignes,this.nombreColonnes,0);

        for(var i = 1 ; i <= nombreBateaux ; i++) {
            this.positionnerBateau((i+1),1);
            this.nombreCaseJoueur1 += i+1;
            this.positionnerBateau((i+1),2);
            this.nombreCaseJoueur2 += i+1;
        }
    },

    positionnerBateau : function(taille,joueur) {
        var bateau = {};
        var positionTermine = false;
        // Terminer la création du bateau quand toutes les cases sont vides
        while(!positionTermine) {
            // Positionner notre bateau de manière aléatoire
            var xAlea = Math.floor(Math.random() * (this.nombreLignes-(taille-1)));
            var yAlea = Math.floor(Math.random() * (this.nombreColonnes-(taille-1)));
            var isHorizontal = Math.floor(Math.random() * 2);
    
            var isCaseVide = true;
            // Generer toutes les cases de notre bateau en fonction de la taille du bateau passer en paramètre de la fonction
            for(var i =1 ; i <= taille && isCaseVide; i++) {
                bateau["case"+i] = this.getCaseCreationBateau(xAlea, yAlea, isHorizontal, i);
                // Si la case n'est pas vide, on sort de la boucle et recommence le cheminement : trouver une position x et y
                isCaseVide = this.verificationCaseVide(bateau["case"+i]);
            }
            if(isCaseVide) positionTermine = true;
        }
        this.enregistrerGrille(bateau,joueur);
    },
    
    getCaseCreationBateau : function(xAlea,yAlea,isHorizontal,numeroCase) {
        var cellule = {};
        if(isHorizontal) {
            cellule.x = xAlea + (numeroCase-1);
            cellule.y = yAlea;
        } else {
            cellule.x = xAlea;
            cellule.y = yAlea + (numeroCase-1);
        }
        return cellule;
    },

    verificationCaseVide : function(caseBateau) {
        if(this.grille[caseBateau.x][caseBateau.y] === 0) return true;
        return false;
    },

    enregistrerGrille : function (bateau,joueur) {
        for(var cellule in bateau) {
            this.grille[bateau[cellule].x][bateau[cellule].y] = joueur;
        }
    },

    afficherGrille : function() {
        const jeu = document.querySelector("#jeu");
        jeu.innerHTML = "";
        var ratio = (100 - (10 * (this.nombreColonnes-5)+1));
        //2 bateaux --> 5 colonnes --> 90 px
        //3 bateaux --> 7 colonnes --> 70px
        //4 bateaux --> 9 colonnes --> 50px

        var content = "<table>";
            for(var i = 0; i < this.nombreLignes ; i++) {
                content += "<tr>";
                for(var j = 0 ; j < this.nombreColonnes ; j++) {
                    content += "<td class='border text-center' style='width:"+ratio+"px;height:"+ratio+"px'>";
                    if(this.grille[i][j] === 0) {
                        content += "<button class='btn btn-secondary' onClick='jouer("+i+","+j+")'>Tirer</button>";
                    }
                    if(this.grille[i][j] === 1) {
                        content += "<img src='./images/J1.png' style='width:"+ratio+"px;height:"+ratio+"px'  class='bg-danger rounded-circle' />";
                    }
                    if(this.grille[i][j] === 2) {
                        content += "<button class='btn btn-secondary' onClick='jouer("+i+","+j+")'>Tirer</button>";
                    }
                    if(this.grille[i][j] === 3) {
                        content += "<img src='./images/croix.png' style='width:"+ratio+"px;height:"+ratio+"px'/>";
                    }
                    if(this.grille[i][j] === 4) {
                        content += "<img src='./images/croix.png' class='bg-danger rounded-circle' style='width:"+ratio+"px;height:"+ratio+"px'/>";
                    } 
                    if(this.grille[i][j] === 5) {
                        content += "<img src='./images/croix.png' class='bg-info rounded-circle' style='width:"+ratio+"px;height:"+ratio+"px'/>";
                    }
                    content += "</td>";
                }
                content += "</tr>";
            }
        content += "</table>";
        jeu.innerHTML = content;
    },

    jouerCase : function(ligne,colonne) {
        if(this.grille[ligne][colonne] === 0) {
            this.grille[ligne][colonne] = 3;
        }
        if(this.grille[ligne][colonne] === 1) {
            this.nombreCaseJoueur1--;
            this.grille[ligne][colonne] = 4;
        }
        if(this.grille[ligne][colonne] === 2) {
            this.nombreCaseJoueur2--;
            this.grille[ligne][colonne] = 5;
        }
    },

    verificationFinJeu : function() {
        if(this.nombreCaseJoueur1 <= 0 || this.nombreCaseJoueur2 <= 0) return true;
    }
}
