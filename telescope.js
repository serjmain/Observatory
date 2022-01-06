"use strict";

function Telescope(name, specifications, solarSystem) {
    this._name = name;
    this._specifications = specifications;
    this.__solarSystem = solarSystem;
}

Telescope.prototype.getName = function () {
    return this._name;
};

Telescope.prototype.setName = function (name) {
    this._name = name;
};

Telescope.prototype.getSpecifications = function () {
    return this._name;
};

Telescope.prototype.setSpecifications = function (specifications) {
    this._specifications = specifications;
};

Telescope.prototype.getVision = function () {
    return this.__solarSystem.showVision();
};
