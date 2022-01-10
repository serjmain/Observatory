"use strict";

var solarSystem = new SolarSystem();

var nasa = new Telescope("NASA", "Gamma-ray", solarSystem);
var usi = new Telescope("USI", "ray", solarSystem);
var bbs = new Telescope("BBS", "X-ray", solarSystem);

var oot = new Observatory("OOT", 33, 45, [nasa, usi, bbs]);
var obs = new Observatory("OBS", 10, 45, [nasa, usi, bbs]);
var lpg = new Observatory("LPG", 15, 45, [nasa, usi, bbs]);

var gena = new PremiumUser("Gena", "someEmail", "somePassword", 55);

var misha = new PremiumUser("Misha", "someEmail", "somePassword", 355);

var user = new User("Vasya", "someEmail", "somePassword", 320);

//_______________________________CALLBACK HELL_____________________________________________

user.addObservatory(oot);
user.addObservatory(obs);
user.addObservatory(lpg); 

console.log("start");

var processOfBuyingExcursionAsync = function (error, boughtExcursions, cardBalance) {
    if (error) {
        throw error;
    } else {
        console.log("boughtExcursions", boughtExcursions);
        console.log("cardBalance", cardBalance);        
    }
} 

user.buyExcursionAsync("OOT", function (error, boughtExcursions, cardBalance) {
    processOfBuyingExcursionAsync(error, boughtExcursions, cardBalance);    
    user.buyExcursionAsync("OBS", function (error, boughtExcursions, cardBalance) {
        processOfBuyingExcursionAsync(error, boughtExcursions, cardBalance);        
        user.buyExcursionAsync("LPG", function (error, boughtExcursions, cardBalance) {
            processOfBuyingExcursionAsync(error, boughtExcursions, cardBalance);
            console.log("finish async")            
        });
    });
}); 

console.log("async in progress");

//__________________________________________________________________________________________


/* console.log(user.getObservatoryList())
user.addObservatory(observatory)
user.addObservatory(oot)
console.log(user.getObservatoryList())
console.log (user.getBoughtExcursions())
  */


/* console.log(observatory.getTelescops());
observatory.addTelescope(bbs);
console.log(observatory.getTelescops());
console.log(user.getObservatoryList())
user.addObservatory(observatory);
console.log(user.getObservatoryList())
 */
/* 
user.addObservatory(observatory2);
console.log(user.getObservatoryList())
console.log(user.getBoughtExcursions())
console.log(user.getCardBalance());
user.buyExcursion('OOT');
console.log(user.getCardBalance());
console.log(user.getBoughtExcursions()); 
 */

console.log(misha.getCardBalance());
misha.addObservatory(obs);
misha.buyPremium(obs);
misha.pickTelescope('USI', 'OBS');
console.log(misha.watchTelescope());
console.log(misha.getCardBalance());
