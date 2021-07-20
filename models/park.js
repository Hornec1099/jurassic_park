const Park = function(name, ticket_price){
    this.name= name;
    this.price = ticket_price;
    this.dinosaurs = [];
}

Park.prototype.addDino = function(dino){
    this.dinosaurs.push(dino)
};

Park.prototype.removeDino = function(start, end){
    this.dinosaurs.slice(start, end);
};

Park.prototype.compare = function(list){
    let startDino = list[0]
    let highest = startDino;
    for (let dino in list){
        if (dino.guestsAttractedPerDay > startDino.guestsAttractedPerDay){
            highest = dino
        }
    }
    return highest
};

Park.prototype.findDino = function(search, list){
    let results = [];

    for (let dino in list){
        if(dino.species === search){
            results.push(dino)
        }
    }
    return results
}

module.exports = Park;