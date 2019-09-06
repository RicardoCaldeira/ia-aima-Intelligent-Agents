class World {
    constructor(numFloors) {
        this.location = 0;
        this.floors = [];
        for (let i = 0; i < numFloors; i++) {
            this.floors.push({dirty: false, veryDirty: false});
        }
    }

    markFloorDirty(floorNumber) {
        this.floors[floorNumber].dirty = true;
        this.floors[floorNumber].veryDirty = false;

    }

    markFloorVeryDirty(floorNumber) {
        this.floors[floorNumber].veryDirty = true;
        this.floors[floorNumber].dirty = false;

    }

    simulate(action) {
        switch(action) {
        case 'CLEAN':
            this.floors[this.location].veryDirty = false;
            break;
        
        case 'SUCK':
            this.floors[this.location].dirty = false;
            break;
        
        case 'LEFT'://2
            // se o bloco anterior está sujo, volta ate ele e limpa. Se não, continua o fluxo padrão.
            if (((this.location == 2 && this.floors[3].veryDirty) || (this.location == 2 && this.floors[3].dirty)) == true){
                this.location = 3;
            }else{
                if (this.location == 2){
                    this.location = 0;
                }
            }
            break;
       
        case 'RIGHT'://1
            // se o bloco anterior está sujo, volta ate ele e limpa. Se não, continua o fluxo padrão.
            if (((this.location == 1 && this.floors[0].veryDirty) || (this.location == 1 && this.floors[0].dirty) == true)){
                this.location = 0;
            }else{
                if (this.location == 1){
                    this.location = 3;
                }
            }
            break;
        
        case 'DOWN'://3
            // se o bloco anterior está sujo, volta ate ele e limpa. Se não, continua o fluxo padrão.
            if (((this.location == 3 && this.floors[1].veryDirty) || (this.location == 3 && this.floors[1].dirty) == true)){
                this.location = 1;
            }else{
                if (this.location == 3){
                    this.location = 2;
                }
            }
            break;
        
        case 'UP'://0
            // se o bloco anterior está sujo, volta ate ele e limpa. Se não, continua o fluxo padrão.
            if (((this.location == 0 && this.floors[2].veryDirty) || (this.location == 0 && this.floors[2].dirty) == true)){
                this.location = 2;
            }else{
                if (this.location == 0){
                    this.location = 1;
                }
            }
            break;
        }
        return action;
    }
}

function reflexVacuumAgent(world) {
    
    if (world.floors[world.location].dirty)
        return 'SUCK';
    else if (world.floors[world.location].veryDirty)
        return 'CLEAN';
    else if (world.location == 0)
        return 'UP';
    else if (world.location == 1)
        return 'RIGHT';
    else if (world.location == 2)
        return 'LEFT';
    else if (world.location == 3)
        return 'DOWN';
    
}
