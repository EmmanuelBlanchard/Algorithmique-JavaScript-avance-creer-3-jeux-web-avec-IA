const tour = document.querySelector("#tour");
const alert = document.querySelector(".alert");
const messageJoueur1 = document.querySelector("#joueur1");
const messageJoueur2 = document.querySelector("#joueur2");
var joueurEnCours = 1;
var finJeu = false;

var pointJoueur1 = 0;
var pointJoueur2 = 0;

initialisationTableau();

function jouer(ligne,colonne) {
    jouerCase(ligne,colonne);
}

function jouerCase(ligne,colonne) {
    if(!finJeu) {
        jeu.jouerCase(ligne,colonne);
        jeu.afficherGrille();
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

function initialisationTableau() {
    jeu.nombreCaseJoueur1 = 0;
    jeu.nombreCaseJoueur2 = 0;
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
    jeu.afficherGrille();
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
