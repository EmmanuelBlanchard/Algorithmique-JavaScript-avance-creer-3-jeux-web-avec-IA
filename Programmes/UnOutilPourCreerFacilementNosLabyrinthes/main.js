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
                content+= "<img src='images/"+tableauJeu[i][j]+ ".png' id='" + i + "-" + j + "' oncontextmenu='return false'/>";
            content += "</td>";
        }
        content += "</tr>";
    }
    monJeu.innerHTML = content;
}

function createLabyrinthe() {
    const nombreLignes = parseInt(document.querySelector("#nombreLignes").value);
    const nombreColonnes = parseInt(document.querySelector("#nombreColonnes").value);
    var tableau= [];
    for(var i = 0 ; i < nombreLignes ; i++) {
        var ligne=[];
        for(var j = 0 ; j < nombreColonnes ; j++) {
            ligne.push(0);
        }
        tableau.push(ligne);
    }
    tableauJeu = tableau;
    afficherGrille();
}

function changeImage(ligne,colonne,add) {
    if(add){
        if(tableauJeu[ligne][colonne] === 15) tableauJeu[ligne][colonne] = 0;
        tableauJeu[ligne][colonne]++;
    } else {
        if(tableauJeu[ligne][colonne] === 0) tableauJeu[ligne][colonne] = 15;
        tableauJeu[ligne][colonne]--;
    }
    afficherGrille();
}

monJeu.addEventListener("click", function() {
    var id = event.target.id;
    var idTiret = id.indexOf("-");
    var ligne = id.substring(0,idTiret);
    var colonne = id.substring((idTiret+1), id.length);
    changeImage(ligne,colonne,true);
});

monJeu.addEventListener("contextmenu", function() {
    var id = event.target.id;
    var idTiret = id.indexOf("-");
    var ligne = id.substring(0,idTiret);
    var colonne = id.substring((idTiret+1), id.length);
    changeImage(ligne,colonne,false);
});

function save() {
    var content = getContent();
    var filename = "level.js";
    var blob = new Blob([content], {
        type : "text/plain;charset=utf-8"
    });
    saveAs(blob, filename);
}

function getContent() {
    var content = "level : {";
    content += "nombreLignes : " + tableauJeu.length + ", ";
    content += "nombreColonnes : " + tableauJeu[0].length+ ", ";
    for(var i = 0 ; i < tableauJeu.length ; i++) {
        content += "ligne"+(i+1) + ": {";
        for(var j = 0 ; j < tableauJeu[i].length ; j++ ) {
            content += "case"+(j+1) + ": "+ tableauJeu[i][j] + ", ";
        }
        content += "},";
    }
    content += "}";
    return content;
}
