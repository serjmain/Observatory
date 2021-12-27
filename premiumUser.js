"use strict"

function PremiumUser(name, email, password, cardBalance) {
    User.call(this, name, email, password, cardBalance);
    this._premiumAccess = false;
    this._pickedTelescope = null;
};

PremiumUser.prototype = Object.create(User.prototype);
PremiumUser.prototype.constructor = PremiumUser;

PremiumUser.prototype.isAvailablePremiumAccess = function () {
    return this._premiumAccess;
};

PremiumUser.prototype.buyPremium = function (observatory) {
    if (this._cardBalance > observatory._price) {
        this._cardBalance = this._cardBalance - observatory._price;
        this._premiumAccess = true;
    } else {
        throw Error("Some money error")
    };
};

PremiumUser.prototype.pickTelescope = function (telescopeName, observatoryName) {
    if (!this._premiumAccess) {
        throw Error("u can pick telescope only if u have premium access");
    };
    var observatoryList = this.getObservatoryList()
    for (var i = 0; i < observatoryList.length; i++) {
        if (observatoryList[i]._name === observatoryName) {
            var telescops = observatoryList[i].getTelescops();
            for (var j = 0; j < telescops.length; j++) {
                if (telescops[j]._name === telescopeName) {
                    this._pickedTelescope = telescops[j];
                    break;
                };
            };
        };
    };
};

PremiumUser.prototype.watchTelescope = function () {
    if (this._pickedTelescope) {
        return this._pickedTelescope.getVision()
    } else {
        throw Error("Some error")
    };

};

