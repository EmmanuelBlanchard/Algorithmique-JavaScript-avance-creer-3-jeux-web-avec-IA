const monJeu = document.querySelector('#jeu');

var ligne1 = [0,0,0];
var ligne2 = [0,0,0];
var ligne3 = [0,0,0];
var tableauJeu = [ligne1,ligne2,ligne3];

afficherGrille();

function afficherGrille() {
    monJeu.innerHTML = "";
    var content = "";

    for(var i = 0 ; i < tableauJeu.length ; i++) {
        content += "<tr>";
        for (var j = 0 ; j < tableauJeu[i].length ; j++) {
            content += "<td>";
                content+= "<img src='images/"+tableauJeu[i][j]+ ".png' id='" + i + "-" + j + "' />";
            content += "</td>";
        }
        content += "</tr>";
    }
    monJeu.innerHTML = content;
}
