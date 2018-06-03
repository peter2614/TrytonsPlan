class Preference {

    constructor(userID, time, rankBy) {
        this.userID = userID;
        this.time = time;
        this.rankBy = rankBy;
    }

    get getUserID() {
        return this.userID;
    }

    set setUserID(userID) {
        this.userID = userID;
    }

    get getTime() {
        return this.time;
    }

    set setTime(time) {
        this.time = time;
    }

    get getRankBy() {
        return this.rankBy;
    }

    set setRankBy(rankBy) {
        this.rankBy = rankBy;
    }
}

module.exports = Preference;