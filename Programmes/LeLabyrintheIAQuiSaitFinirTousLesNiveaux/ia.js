var ia = {
    positionsPasse : [],

    startIA : function() {
        if(!finJeu){
            this.deplacerPlayer();
            deplacement();
            setTimeout(function() {
                ia.startIA();
            }, 100);
        }
    },

    deplacerPlayer: function() {
        var possibilites = this.getPossibilites();
        positionPlayer = this.getBestPossibilite(possibilites);
        this.savePositionPlayed(positionPlayer);
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
        // var bestPos = possibilites[0];
        var bestPosition = possibilites[0];
        // var tabBestPos = [possibilites[0]];
        var tabBestPositions = [possibilites[0]];
        // var bestPosPoids = this.getPoidsPosition(possibilites[0]);
        var bestPositionPoids = this.getPoidsPosition(possibilites[0]);

        for(var i = 1; i < possibilites.length ; i++) {
            var poids = this.getPoidsPosition(possibilites[i]);
            if(poids < bestPositionPoids ) {
                bestPositionPoids = poids;
                bestPosition = possibilites[i];
                tabBestPositions = new Array();
                tabBestPositions.push(bestPosition);
            } else if (poids === bestPositionPoids) {
                tabBestPositions.push(possibilites[i]);
            }
        }

        var randomPossibilite = Math.floor(Math.random() * tabBestPositions.length);
        var positionToPlay = tabBestPositions[randomPossibilite];
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
    },

    getPoidsPosition : function(position) {
        for (var i = 0; i < this.positionsPasse.length ; i++) {
            if(this.positionsPasse[i][0] === position[0] && this.positionsPasse[i][1] === position[1]) {
                return this.positionsPasse[i][2];
            }
        }
        return 0;
    }
}