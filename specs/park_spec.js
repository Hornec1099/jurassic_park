const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;
  let dinosaur2;

  beforeEach("Park",function () {
    park = new Park( "Isla Nubla", 15)
    dinosaur = new Dinosaur ("T-Rex", "Carnivore", 25)
    dinosaur2 = new Dinosaur ("Triceratops", "Herbivore", 10)
  });

  it('should have a name',function(){
    assert.deepStrictEqual("Isla Nubla", park.name);
  });

  it('should have a ticket price', function(){
    assert.deepStrictEqual(15, park.price)
  });

  it('should have a collection of dinosaurs', function(){
    assert.deepStrictEqual([], park.dinosaurs)
  });

  it('should be able to add a dinosaur to its collection',function(){
    park.addDino(dinosaur);
    assert.deepStrictEqual([dinosaur], park.dinosaurs)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDino(0,1);
    assert.deepStrictEqual([], park.dinosaurs)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDino(dinosaur);
    park.addDino(dinosaur2);
    const comparison = park.compare(park.dinosaurs);
    assert.deepStrictEqual(dinosaur, comparison);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDino(dinosaur);
    park.addDino(dinosaur2);
    const result = park.findDino("T-Rex", park.dinosaurs);
    assert.strictEqual([dinosaur], result)
  });

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
