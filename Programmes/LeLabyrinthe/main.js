var nombreLignes = 4;
var nombreColonnes = 4;

const monJeu = document.querySelector("#jeu");

var ligne1 = [5,10,1,7];
var ligne2 = [5,14,5,5];
var ligne3 = [4,1,8,5];
var ligne4 = [14,9,12,9];
var tableauJeu = [ligne1,ligne2,ligne3,ligne4];

afficherLabyrinthe(tableauJeu);

function afficherLabyrinthe(tableauJeu) {
    monJeu.innerHTML = "";
    var content ="<table>";
    for (var i = 0 ; i < tableauJeu.length;i++){
        content += "<tr>";
        for (var j = 0 ; j < tableauJeu[i].length;j++){
            content += "<td>";
                content += "<img src='images/"+tableauJeu[i][j]+".png' />";
            content += "</td>";
        }
        content += "</tr>";
    }
    content +="</table>";
    monJeu.innerHTML = content;
}