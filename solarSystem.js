"use strict";

function SolarSystem() {    
}
SolarSystem.planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
SolarSystem.asteroids = ["Eros", "Geographos", "Hathor", "Hermes"];
SolarSystem.comets = ["ArendRoland", "Biela", "Chiron", "Encke"]; 
 
SolarSystem.prototype.showVision = function () {
    return [].concat(SolarSystem.planets, SolarSystem.asteroids, SolarSystem.comets).join(", ");
};

