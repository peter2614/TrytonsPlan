var GREEN = "#7CFC00";

module.exports = class InfoNode {
    constructor(data, counter) {
        // course informations
        this.corequisites = data.corequisites;
        this.courseID = data.courseID;
        this.description = data.description;
        this.title = data.title;
        this.units = data.units;
        this.prerequisites = data.prerequisites ? data.prerequisites : [];
        this.professors = [];

        // styling
        this.color = data.style.color;
        this.strok = data.style.color;
        this.cx = data.style.cx;
        this.cy = data.style.cy;
        this.fade = false;

        // array of children and parents
        this.children = [];
        this.parents = [];

        // index of this node
        this.index = counter;
        this.goggled = false;
    }

    // add the professor list to this course
    addProf(professor) {
        this.professors.push(professor)
    }

    // add a child to the children array
    addChild(child) {
        this.children.push(child);
    }

    // add a parent to the parents array
    addParent(parent) {
        this.parents.push(parent);
    }

    toggleChild() {
        this.fade = false;
        this.stroke = GREEN;
    }

    // toggle state of fade
    toggleOn() {
            this.fade = false;
            this.stroke = this.color;
    }

    // toggle state of fade
    toggleOff() {
            this.fade = true;
            this.stroke = this.color;
    }
}