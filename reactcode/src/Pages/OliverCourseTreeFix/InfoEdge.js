var RADIUS = 28;        // radius of the node

module.exports = class Edge {
    constructor(x1, y1, x2, y2, color, fade) {
        // calculations
        var deltx = x2 - x1;
        var delty = y2 - y1;
        var dist = Math.sqrt(Math.pow(deltx,2) + Math.pow(delty,2));
        var changeX = RADIUS / dist * deltx;
        var changeY = RADIUS / dist * delty;

        // starting point
        this.xStart = x1 + changeX;
        this.yStart = y1 + changeY;
        // end point
        this.xEnd = x2 - changeX;
        this.yEnd = y2 - changeY;

        // style
        this.color = color;
        this.fade = fade;

    }
}