"use strict"

function SolarSystem() {
    this.planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
    this.asteroids = ["Eros", "Geographos", "Hathor", "Hermes"];
    this.comets = ["ArendRoland", "Biela", "Chiron", "Encke"];
};

SolarSystem.prototype.showVision = function () {
    return [].concat(this.planets, this.asteroids, this.comets).join(", ");
};


/* function SolarSystem() {
    Object.defineProperties(this, planets, ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"])
    Object.defineProperties(this, asteroids, ["Eros", "Geographos", "Hathor", "Hermes"])
    Object.defineProperties(this, comets, ["ArendRoland", "Biela", "Chiron", "Encke"])    
    SolarSystem.planets[this.planets] = this;
    
};
*/