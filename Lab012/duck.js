class Duck {
  constructor(flying = false, quaking = false, xPos = 0, yPos = 0) {
    this.flying = flying;
    this.quaking = quaking;
    this.xPos = xPos;
    this.yPos = yPos;
  }

  takeOff() {
    this.flying = true;
  }
  land() {
    this.flying = false;
  }

  startQuacking() {
    this.quaking = true;
  }
  stopQuacking() {
    this.quaking = false;
  }
  moveTo(x, y) {
    let status = "Duck is "
    this.xPos = x;
    this.yPos = y;
    if (this.flying) {
        status += `flying to ${x},${y} `;
    } else {
        status += `swimming to ${x},${y}`;
    }
    if (this.quacking) {
        status += "while quacking";
    }
    console.log(status);
  }
}

module.exports = Duck;
