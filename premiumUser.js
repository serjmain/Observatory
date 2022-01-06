"use strict";

function PremiumUser(name, email, password, cardBalance) {
    User.call(this, name, email, password, cardBalance);
    this._premiumAccess = false;
    this.__pickedTelescope = null;
}

PremiumUser.prototype = Object.create(User.prototype);
PremiumUser.prototype.constructor = PremiumUser;

PremiumUser.prototype.isAvailablePremiumAccess = function () {
    return this._premiumAccess;
};

PremiumUser.prototype.buyPremium = function (observatory) {
    if (this._cardBalance >= observatory.getPremiumPrice()) {
        this._cardBalance = this._cardBalance - observatory.getPremiumPrice();
        this._premiumAccess = true;
    } else {
        throw Error("Some money error");
    };
};

PremiumUser.prototype.pickTelescope = function (telescopeName, observatoryName) {
    if (!this._premiumAccess) {
        throw Error("u can pick telescope only if you have premium access");
    };
    var observatoryList = this._observatoryList;
    observatoryList.forEach(function (observatory) {
        if (observatory.getName() === observatoryName) {
            var telescops = observatory.getTelescops();
            telescops.forEach(function (telescope) {
                if (telescope.getName() === telescopeName) {
                    this.__pickedTelescope = telescope;
                }
            }.bind(this));
        };
    }.bind(this));
};

PremiumUser.prototype.watchTelescope = function () {
    if (this.__pickedTelescope) {
        return this.__pickedTelescope.getVision();
    }
};

