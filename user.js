"use strict"

function User(name, email, password, cardBalance) {
    this._name = name;
    this._email = email;
    this._password = password;
    this._cardBalance = cardBalance;
    this._observatoryList = [];
    this._excursions = [];
};

User.prototype.getName = function () {
    return this._name;
};

User.prototype.setName = function (name) {
    this._name = name;
};

User.prototype.getEmail = function () {
    return this._email;
};

User.prototype.setEmail = function (email) {
    this._email = email;
};

User.prototype.getPassword = function () {
    return this._password;
};

User.prototype.setPassword = function (password) {
    this._password = password;
};

User.prototype.getCardBalance = function () {
    return this._cardBalance;
};

User.prototype.getObservatoryList = function () {
    return this._observatoryList;
};

User.prototype.addObservatory = function (observatory) {
    this._observatoryList.push(observatory)
};

User.prototype.buyExcursion = function (observatory) {
    if (this._cardBalance > observatory._price) {
        this._cardBalance = this._cardBalance - observatory._price
        this._excursions.push(observatory);
    } else {
        throw Error("Not enough money")
    };
};

User.prototype.getBoughtExcursions = function () {
    return this._excursions;
};

