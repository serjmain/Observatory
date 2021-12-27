"use strict"

function Observatory(name, price, solarSystemInformation, telescops) {
    this._name = name;
    this._price = price;
    this._solarSystemInformation = solarSystemInformation;
    this._telescops = telescops;
};

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

Observatory.prototype.getSolarSystemInformation = function () {
    return this._solarSystemInformation;
};

Observatory.prototype.getTelescops = function () {
    return this._telescops;
};

Observatory.prototype.addTelescope = function (telescope) {
    this._telescops.push(telescope);
};
