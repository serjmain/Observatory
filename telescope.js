"use strict";

function Telescope(name, specifications, solarSystem) {
    this._name = name;
    this._specifications = specifications;
    this.__solarSystem = solarSystem;
}

Telescope.prototype.getName = function() {
    return this._name;
}

Telescope.prototype.setName = function(name) {
    if (name && typeof name === "string" && name.length > 1 && name.length < 20) {
        this._name = name;
    }
}

Telescope.prototype.getSpecifications = function() {
    return this._specifications;
}

Telescope.prototype.setSpecifications = function(specifications) {
    if (specifications && typeof specifications === "string" && specifications.length > 1) {
        this._specifications = specifications;
    }
}

Telescope.prototype.getVision = function() {
    return this.__solarSystem.showVision();
}
