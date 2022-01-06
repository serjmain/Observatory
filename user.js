"use strict";

function User(name, email, password, cardBalance) {
    this._name = name;
    this._email = email;
    this._password = password;
    this._cardBalance = cardBalance;
    this._observatoryList = [];
    this._excursions = [];
}

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
    this._observatoryList.push(observatory);
};

User.prototype.buyExcursion = function (observatoryName) {
    if (this._observatoryList.length > 0) {
        this._observatoryList.forEach(function (observatory) {
            if (observatory.getName() === observatoryName && this._cardBalance >= observatory.getPrice()) {
                this._cardBalance = this._cardBalance - observatory.getPrice();
                this._excursions.push(observatoryName);
            }
        }.bind(this));
    };
};

User.prototype.buyExcursionAsync = function (observatoryName, callback) {
    if (this._observatoryList.length > 0) {
        this._observatoryList.forEach(function (observatory) {            
            if (observatory.getName() === observatoryName && this._cardBalance >= observatory.getPrice()) {
                setTimeout(function () {
                    this._cardBalance = this._cardBalance - observatory.getPrice();
                    this._excursions.push(observatoryName);
                    callback(this._excursions, this._cardBalance);
                }.bind(this), 5000)
            }; 
            if (this._cardBalance < observatory.getPrice()) {
                throw new Error ("some error")
            }
        }.bind(this));
    };
};

User.prototype.getBoughtExcursions = function () {
    return this._excursions;
};

