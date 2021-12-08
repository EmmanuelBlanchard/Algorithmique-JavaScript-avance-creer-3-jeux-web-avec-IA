const tour = document.querySelector("#tour");
const alert = document.querySelector(".alert");
var joueurEnCours = 1;
var finJeu = false;

jeu.initialisation();
jeu.afficherPuissance4();

function jouer(colonne) {
    if(!finJeu) {
        var ligneVide = jeu.retournerLigneCaseVideColonne(colonne);
        if(ligneVide !== -1) {
            jeu.jouerCase(joueurEnCours,ligneVide,colonne);
            jeu.afficherPuissance4();
            if(jeu.verificationFinJeu(joueurEnCours)) {
                gererFinJeu();
            }
        
            if(joueurEnCours === 1) {
                joueurEnCours = 2;
                tour.innerHTML = "Tour du joueur 2";
            } else {
                joueurEnCours = 1;
                tour.innerHTML = "Tour du joueur 1";
            }
        }
    }
}

function gererFinJeu() {
    finJeu = true;
    alert.innerHTML = "Fin du jeu";
    alert.classList.remove("d-none");
}