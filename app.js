"use strict"

var solarSystem = new SolarSystem();

var nasa = new Telescope("NASA", "Gamma-ray", solarSystem);
var usi = new Telescope("USI", "ray", solarSystem);
var bbs = new Telescope("BBS", "X-ray", solarSystem);

var observatory = new Observatory("OBS", 33, "some information about Solar System", [nasa, usi]);

var gena = new PremiumUser("Gena", "3213213123", "3213123", 55);

var premGena = new PremiumUser("superGena", "3213213123", "3213123", 55);

var user = new User("Vasya", "3213213123", "3213123", 55);

console.log(user.getBoughtExcursions())
console.log(user.getCardBalance())
user.buyExcursion(observatory)
console.log(user.getCardBalance())
console.log(user.getBoughtExcursions())

premGena.buyPremium(observatory);
premGena.addObservatory(observatory)
premGena.pickTelescope('USI', 'OBS');
console.log(premGena.watchTelescope());

gena.pickTelescope('USI', 'OBS');
gena.addObservatory(observatory);
console.log(gena.watchTelescope());

