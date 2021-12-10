var nombreLignes = 4;
var nombreColonnes = 4;

var positionPlayer = [0,0];

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
    for (var i = 0 ; i < tableauJeu.length;i++) {
        content += "<tr>";
        for (var j = 0 ; j < tableauJeu[i].length;j++) {
            content += "<td>";
                content += "<img src='images/"+tableauJeu[i][j]+".png' />";
                if(i === nombreLignes -1 && j === nombreColonnes -1) {
                    var pandaLigne = 25 + 100 * i;
                    var pandaColonne = 25 + 100 * j;
                    content += "<img src='images/panda.png' style='width:50px;height:50px;position:absolute;left:"+pandaColonne+"px;top:"+pandaLigne+"px'/>";
                }
                if(i === positionPlayer[0] && j === positionPlayer[1]) {
                    var oursLigne = 25 + 100 * positionPlayer[0];
                    var oursColonne = 25 + 100 * positionPlayer[1];
                    content += "<img src='images/bear.png' style='width:50px;height:50px;position:absolute;left:"+oursColonne+"px;top:"+oursLigne+"px'/>";
                }
            content += "</td>";
        }
        content += "</tr>";
    }
    content +="</table>";
    monJeu.innerHTML = content;
}