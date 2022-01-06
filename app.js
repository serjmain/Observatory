"use strict";

var solarSystem = new SolarSystem();

var nasa = new Telescope("NASA", "Gamma-ray", solarSystem);
var usi = new Telescope("USI", "ray", solarSystem);
var bbs = new Telescope("BBS", "X-ray", solarSystem);

var observatory = new Observatory("OBS", 33, 45, [nasa, usi]);
var observatory2 = new Observatory("OOT", 33, 45, [nasa, usi]);

var gena = new PremiumUser("Gena", "someEmail", "somePassword", 55);

var misha = new PremiumUser("Misha", "someEmail", "somePassword", 55);

var user = new User("Vasya", "someEmail", "somePassword", 320);

console.log(user.getObservatoryList())
user.addObservatory(observatory)
user.addObservatory(observatory2)
console.log(user.getObservatoryList())
console.log (user.getBoughtExcursions())
user.buyExcursionAsync("OOT", function (excursions, cardBalance) {
    console.log(excursions);
    console.log(cardBalance);    
    console.log(user.getBoughtExcursions());
})
 

/* console.log(observatory.getTelescops());
observatory.addTelescope(bbs);
console.log(observatory.getTelescops());
 */

/* console.log(user.getObservatoryList())
user.addObservatory(observatory);
console.log(user.getObservatoryList())
user.addObservatory(observatory2);
console.log(user.getObservatoryList())
console.log(user.getBoughtExcursions())
console.log(user.getCardBalance());
user.buyExcursion('OOT');
console.log(user.getCardBalance());
console.log(user.getBoughtExcursions()); 
 */
/* misha.buyPremium(observatory);
misha.addObservatory(observatory);
misha.pickTelescope('USI', 'OBS');
console.log(misha.watchTelescope());

 */
