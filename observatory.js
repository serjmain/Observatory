"use strict";

function Observatory(name, excursionPrice, premiumPrice, telescops) {
    this._name = name;
    this._excursionPrice = excursionPrice;
    this._premiumPrice = premiumPrice;
    this._telescops = telescops;
}

Observatory.prototype.getName = function() {
    return this._name;
}

Observatory.prototype.setName = function(name) {
    if (name && typeof name === "string" && name.length > 1 && name.length < 20) {
        this._name = name;
    }
}

Observatory.prototype.getExcursionPrice = function() {
    return this._excursionPrice;
}

Observatory.prototype.setExcursionPrice = function(excursionPrice) {
    if (excursionPrice && typeof price === "number") {
        this._excursionPrice = excursionPrice;
    }
}

Observatory.prototype.getPremiumPrice = function() {
    return this._premiumPrice;
}

Observatory.prototype.setPremiumPrice = function(premiumPrice) {
    if (premiumPrice && typeof premiumPrice === "number") {
        this._premiumPrice = premiumPrice;
    }    
}

Observatory.prototype.getTelescops = function() {
    return this._telescops;
}

Observatory.prototype.addTelescope = function(telescope) {
    this._telescops.push(telescope);
}

Observatory.prototype.deleteTelescopeByName = function(telescopeName) {
    this._telescops = this._telescops.filter(function (telescope) {
        return telescope.getName() !== telescopeName;
    });
};
