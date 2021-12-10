var ia = {
    positionsPasse : [],

    startIA : function() {
        if(!finJeu){
            this.deplacerPlayer();
            deplacement();
            setTimeout(function() {
                ia.startIA();
            }, 2000);
        }
    },

    deplacerPlayer: function() {
        var possibilites = this.getPossibilites();
        positionPlayer = this.getBestPossibilite(possibilites);
        this.savePositionPlayed(positionPlayer);
        console.log(this.positionsPasse);
    },

    getPossibilites : function() {
        var possibilites = [];
        if(getCellule(positionPlayer[0],positionPlayer[1]).left) {
            possibilites.push([positionPlayer[0],positionPlayer[1]-1]);
        }
        if(getCellule(positionPlayer[0],positionPlayer[1]).right) {
            possibilites.push([positionPlayer[0],positionPlayer[1]+1]);
        }
        if(getCellule(positionPlayer[0],positionPlayer[1]).top) {
            possibilites.push([positionPlayer[0]-1,positionPlayer[1]]);
        }
        if(getCellule(positionPlayer[0],positionPlayer[1]).bottom) {
            possibilites.push([positionPlayer[0]+1,positionPlayer[1]]);
        }
        return possibilites;
    },

    getBestPossibilite: function(possibilites) {
        var randomPossibilite = Math.floor(Math.random() * possibilites.length);
        var positionToPlay = possibilites[randomPossibilite];
        return positionToPlay;
    },

    savePositionPlayed : function(position) {
        var idPositionPasse = this.getPositionPasse(position);
        if(idPositionPasse === -1) {
            position.push(1);
            this.positionsPasse.push(position);
        } else {
            // tableau positionsPasse[ligne,colonne,poids]
            this.positionsPasse[idPositionPasse][2]++;
        }
    },

    getPositionPasse : function(position) {
        for (var i = 0; i < this.positionsPasse.length ; i++) {
            if(this.positionsPasse[i][0] === position[0] && this.positionsPasse[i][1] === position[1]) {
                return i;
            }
        }
        return -1;
    }
}