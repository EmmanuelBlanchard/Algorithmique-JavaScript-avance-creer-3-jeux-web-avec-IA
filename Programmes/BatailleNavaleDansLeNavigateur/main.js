const tour = document.querySelector("#tour");
const alert = document.querySelector(".alert");
const messageJoueur1 = document.querySelector("#joueur1");
const messageJoueur2 = document.querySelector("#joueur2");
var nombreBateauxSaisie = 0;

var joueurEnCours = 1;
var finJeu = false;

var pointJoueur1 = 0;
var pointJoueur2 = 0;

function jouer(ligne,colonne) {
    jouerCase(ligne,colonne);
    var celluleIA = ia.getCellule();
    jouerCase(celluleIA.ligne,celluleIA.colonne)
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

function initialisationTableau(nombreBateaux) {
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

    jeu.initialisation(nombreBateaux);
    jeu.afficherGrille();
}

function gererFinJeu() {
    finJeu = true;
    var contentAlert = "Partie terminée, le gagnant est : Joueur " + joueurEnCours + " <br />";
    contentAlert += '<button type="button" class="btn btn-secondary" onClick = initialisationTableau('+nombreBateauxSaisie+')>Recommencer</button>';

    afficherAlert(contentAlert,1);
    if(joueurEnCours === 1) {
        pointJoueur1++;
    } else {
        pointJoueur2++;
    }
}

function afficherAlert(texte,type) {
    if(type === 1) {
        alert.classList.add("alert-success");
        alert.classList.remove("alert-danger");
    } else {
        alert.classList.remove("alert-success");
        alert.classList.add("alert-danger");
    }
    alert.innerHTML = texte;
    alert.classList.remove("d-none");
}

function startGame() {
    nombreBateauxSaisie = parseInt(document.querySelector("#nombreBateaux").value);
    if(nombreBateauxSaisie < 2) afficherAlert("Le nombre de bateaux doit être supérieur à 2",2);
    if(nombreBateauxSaisie > 4) afficherAlert("Le nombre de bateaux doit être inférieur à 5",2);
    if(nombreBateauxSaisie >= 2 && nombreBateauxSaisie <= 4) initialisationTableau(nombreBateauxSaisie);
}

addEventListener("click", function(event) {
    console.log(event);
    var target = event.target;
    if(target.id === "play") {
        var image = "<img src='./images/explosion/explosion00.png' id='explosion' style='width:100px;height:100px;position:absolute;top:"+(event.clientY-50)+"px;left:"+(event.clientX-50)+"px' />";
        var body = document.querySelector("body");
        var element = document.createElement("p");
        element.innerHTML = image;
        body.appendChild(element);

        imageExplosion(9);

        function imageExplosion(time) {
            var explosion = document.querySelector("#explosion");
            if(time >=1) {
                if(time===9) explosion.setAttribute("src","./images/explosion/explosion01.png");
                if(time===8) explosion.setAttribute("src","./images/explosion/explosion02.png");
                if(time===7) explosion.setAttribute("src","./images/explosion/explosion03.png");
                if(time===6) explosion.setAttribute("src","./images/explosion/explosion04.png");
                if(time===5) explosion.setAttribute("src","./images/explosion/explosion05.png");
                if(time===4) explosion.setAttribute("src","./images/explosion/explosion06.png");
                if(time===3) explosion.setAttribute("src","./images/explosion/explosion07.png");
                if(time===2) explosion.setAttribute("src","./images/explosion/explosion08.png");
                if(time===1) explosion.remove(this);

                setTimeout(function() {
                    imageExplosion(time-1);
                },25);
            }
        }
    }
});
