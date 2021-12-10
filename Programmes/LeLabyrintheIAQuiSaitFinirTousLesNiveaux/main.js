const monJeu = document.querySelector("#jeu");
const alert = document.querySelector(".alert");
const iaCheckBox = document.querySelector("#IA");

var sizeImage = 150;

var nombreLignes = 4;
var nombreColonnes = 4;

var positionPlayer = [0,0];
var niveauEnCours = 0;

var tableauJeu = null;

var finJeu = false;
var isIAON = false;

lancerNiveauSuivant();

function startIA() {
    iaCheckBox.setAttribute("disabled","disabled");
    isIAON = true;
    ia.startIA();
}

function creationCellule(image) {
    var cellule = {
        image : image,
        left : getLeft(image),
        top : getTop(image),
        right : getRight(image),
        bottom : getBottom(image)
    }
    return cellule;
}

function getLeft(image) {
    if(image === 0 || image === 1 || image === 2 || image === 3 || image === 6 || image === 7 || image === 8 || image === 12) return true;
    return false;
}
function getTop(image) {
    if(image === 0 || image === 2 || image === 3 || image === 4 || image === 5 || image === 8 || image === 9 || image === 14) return true;
    return false;
}
function getRight(image) {
    if(image === 0 || image === 1 || image === 3 || image === 4 || image === 6 || image === 9 || image === 10 || image === 13) return true;
    return false;
}
function getBottom(image) {
    if(image === 0 || image === 1 || image === 2 || image === 4 || image === 5 || image === 7 || image === 10 || image === 11) return true;
    return false;
}

function afficherLabyrinthe(tableauJeu) {
    monJeu.innerHTML = "";
    var content ="<table>";
    for (var i = 0 ; i < tableauJeu.length;i++) {
        content += "<tr>";
        for (var j = 0 ; j < tableauJeu[i].length;j++) {
            content += "<td>";
                content += "<img src='images/"+tableauJeu[i][j].image+".png' style='width:"+sizeImage+"px;height:"+sizeImage+"px;' />";

                if(i === nombreLignes -1 && j === nombreColonnes -1) {
                    var pandaLigne = sizeImage/4 + sizeImage * i;
                    var pandaColonne = sizeImage/4 + sizeImage * j;
                    content += "<img src='images/panda.png' style='width:"+(sizeImage/2)+"px;height:"+(sizeImage/2)+"px;position:absolute;left:"+pandaColonne+"px;top:"+pandaLigne+"px'/>";

                }
                if(i === positionPlayer[0] && j === positionPlayer[1]) {
                    var oursLigne = sizeImage/4 + sizeImage * positionPlayer[0];
                    var oursColonne = sizeImage/4 + sizeImage * positionPlayer[1];
                    content += "<img src='images/bear.png' style='width:"+(sizeImage/2)+"px;height:"+(sizeImage/2)+"px;position:absolute;left:"+oursColonne+"px;top:"+oursLigne+"px'/>";
                }
            content += "</td>";
        }
        content += "</tr>";
    }
    content +="</table>";
    monJeu.innerHTML = content;
}

function getCellule(i,j) {
    return tableauJeu[i][j];
}

addEventListener("keyup", function(event) {
    if(!isIAON) {
        var lignePlayer = positionPlayer[0];
        var colonnePlayer = positionPlayer[1];
        if(event.keyCode === 37 && colonnePlayer > 0) { //gauche
            if(getCellule(positionPlayer[0],positionPlayer[1]).left) {
                colonnePlayer--;
            }
        }
        if(event.keyCode === 38 && lignePlayer > 0) { // haut
            if(getCellule(positionPlayer[0],positionPlayer[1]).top) {
                lignePlayer--;
            }
        }
        if(event.keyCode === 39 && colonnePlayer < nombreColonnes - 1) { // droite
            if(getCellule(positionPlayer[0],positionPlayer[1]).right) {
                colonnePlayer++;
            }
        }
        if(event.keyCode === 40 && lignePlayer < nombreLignes - 1) { // bas
            if(getCellule(positionPlayer[0],positionPlayer[1]).bottom) {
                lignePlayer++;
            }
        }
        positionPlayer = [lignePlayer,colonnePlayer];
        deplacement();
    }
});

function deplacement() {
    afficherLabyrinthe(tableauJeu);
    verificationFinJeu();
}

function verificationFinJeu() {
    if(positionPlayer[0] === nombreLignes-1 && positionPlayer[1] === nombreColonnes-1) {
        var content = "";
        if(niveauEnCours < levels.nombreNiveau) {
            content += "<p>Bien joué ! Passer au niveau : " + (niveauEnCours+1) + " ?</p>";
            content += "<button class='btn btn-primary' onClick='lancerNiveauSuivant()'> Suivant </button>";
        } else {
            content += "Vous avez gagné ! ";
        }
      
        alert.innerHTML = content;
        alert.classList.remove("d-none");
        finJeu = true;
    }
}

function lancerNiveauSuivant() {
    niveauEnCours++;
    alert.classList.add("d-none");
    nombreLignes = levels["level"+niveauEnCours].nombreLignes;
    nombreColonnes = levels["level"+niveauEnCours].nombreColonnes;
    positionPlayer = [0,0];
    tableauJeu = loadLevel();

    afficherLabyrinthe(tableauJeu);
}

function loadLevel() {
    var tableau = [];
    isIAON = false;
    finJeu = false;
    // Reinitialiser le tableau
    ia.positionsPasse = new Array();
    iaCheckBox.removeAttribute("disabled");
    iaCheckBox.checked = false;

    for(var i = 1 ; i <= levels["level"+niveauEnCours].nombreLignes;i++) {
        var ligne = [];
        for(var j = 1 ; j <= levels["level"+niveauEnCours].nombreColonnes; j++) {
            var valeur = levels["level"+niveauEnCours]["ligne"+i]["case"+j];
            ligne.push(creationCellule(valeur));
        }
        tableau.push(ligne);
    }
    return tableau;
}
