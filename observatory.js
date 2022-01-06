"use strict";

function Observatory(name, price, premiumPrice, telescops) {
    this._name = name;
    this._price = price;
    this._premiumPrice = premiumPrice;
    this._telescops = telescops;
}

Observatory.prototype.getName = function () {
    return this._name;
};

Observatory.prototype.setName = function (name) {
    this._name = name;
};

Observatory.prototype.getPrice = function () {
    return this._price;
};

Observatory.prototype.setPrice = function (price) {
    this._price = price;
};

Observatory.prototype.getPremiumPrice = function () {
    return this._premiumPrice;
};

Observatory.prototype.setPremiumPrice = function (premiumPrice) {
    this._premiumPrice = premiumPrice;
};

Observatory.prototype.getTelescops = function () {
    return this._telescops;
};

Observatory.prototype.addTelescope = function (telescope) {    
        this._telescops.push(telescope);    
};

Observatory.prototype.deleteTelescopeByName = function (telescopeName) {     
    this._telescops = this._telescops.filter(function (telescope) {
      return telescope.getName() !== telescopeName;
   });
}; 
