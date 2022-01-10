"use strict";

function User(name, email, password, cardBalance) {
    this._name = name;
    this._email = email;
    this._password = password;
    this._cardBalance = cardBalance;
    this._observatoryList = [];
    this._boughtExcursions = [];
}

User.prototype.getName = function() {
    return this._name;
}

User.prototype.setName = function(name) {
    if (name && typeof name === "string" && name.length > 1 && name.length < 20) {
        this._name = name;
    }
}

User.prototype.getEmail = function() {
    return this._email;
};

User.prototype.setEmail = function(email) {
    var validation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (validation.test(email)) {
        this._email = email;
    }
}

User.prototype.getPassword = function() {
    return this._password;
}

User.prototype.setPassword = function(password) {
    if (password && typeof password === "string" && typeof password === "number" && password.length > 1 && password.length < 20) {
        this._password = password;
    }
}

User.prototype.getCardBalance = function() {
    return this._cardBalance;
}

User.prototype.getObservatoryList = function() {
    return this._observatoryList;
}

User.prototype.addObservatory = function(observatory) {
    this._observatoryList.push(observatory);
}

User.prototype.buyExcursion = function(observatoryName) {
    if (this._observatoryList.length === 0) {
        return;
    }

    this._observatoryList.forEach(
        function (observatory) {
            var observatoryPrice = observatory.getExcursionPrice();

            if (observatory.getName() === observatoryName && this._cardBalance >= observatoryPrice) {
                this._cardBalance = this._cardBalance - observatoryPrice;
                this._boughtExcursions.push({ name: observatoryName });
            }
        }
            .bind(this)
    )
}

User.prototype.buyExcursionAsync = function(observatoryName, callback) {
    var self = this;
    var delay = 3000;

    var processOfBuying = function () {
        if (self._observatoryList.length === 0) {
            return callback(new Error("some error"), null, null);
        }

        self._observatoryList.forEach(function (observatory) {
            var observatoryPrice = observatory.getExcursionPrice();

            if (observatory.getName() === observatoryName && self._cardBalance >= observatoryPrice) {
                self._cardBalance = self._cardBalance - observatoryPrice;
                self._boughtExcursions.push(observatoryName);
                callback(null, self._boughtExcursions, self._cardBalance);
            }
        });
    }

    setTimeout(processOfBuying, delay);
}

User.prototype.getBoughtExcursions = function() {
    return this._boughtExcursions;
}
