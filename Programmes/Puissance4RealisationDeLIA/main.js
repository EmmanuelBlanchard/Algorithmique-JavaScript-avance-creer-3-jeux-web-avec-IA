const tour = document.querySelector("#tour");
const alert = document.querySelector(".alert");
const messageJoueur1 = document.querySelector("#joueur1");
const messageJoueur2 = document.querySelector("#joueur2");
var joueurEnCours = 1;
var finJeu = false;

var pointJoueur1 = 0;
var pointJoueur2 = 0;

var isIAON = false;

initialisationTableau();

function startIA() {
    isIAON = !isIAON;
}

function jouer(colonne) {
    jouerCase(colonne);
    if(isIAON) {
        colonneIA = ia.choixColonne();
        jouerCase(colonneIA);
    }
}

function jouerCase(colonne) {
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

function initialisationTableau() {
    finJeu = false;
    joueurEnCours = 1;
    alert.classList.add("d-none");
    var contentJoueur1 = "<img src='./images/J1.png' class='bg-danger rounded-circle' /><br />";
    contentJoueur1 += pointJoueur1; 
    messageJoueur1.innerHTML = contentJoueur1;
    var contentJoueur2 = "<img src='./images/J2.png' class='bg-info rounded-circle' /><br />";
    contentJoueur2 += pointJoueur2; 
    messageJoueur2.innerHTML = contentJoueur2;

    jeu.initialisation();
    jeu.afficherPuissance4();
}

function gererFinJeu() {
    finJeu = true;
    var contentAlert = "Partie terminée, le gagnant est : Joueur " + joueurEnCours + " <br />";
    contentAlert += '<button type="button" class="btn btn-secondary" onClick = initialisationTableau()>Recommencer</button>';
    alert.innerHTML = contentAlert;
    alert.classList.remove("d-none");
    if(joueurEnCours === 1) {
        pointJoueur1++;
    } else {
        pointJoueur2++;
    }
}
