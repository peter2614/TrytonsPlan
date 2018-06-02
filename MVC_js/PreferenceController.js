class PreferenceController {

    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    get getUserID() {
        return this.model.getUserID;
    }

    set setUserID(userID) {
        this.model.setUserID = userID;
    }

    get getTime() {
        return this.model.getTime;
    }

    set setTime(time) {
        this.model.setTime = time;
    }

    get getRankBy() {
        return this.model.getRankBy;
    }

    set setRankBy(rankBy) {
        this.model.setRankBy = rankBy;
    }

    updataView() {
        return this.view.printInfo;
    }
}

module.exports = PreferenceController;