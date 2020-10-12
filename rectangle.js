class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */

Rectangle.prototype.area = function() {
  console.log(this);
  console.log(this.w);
  console.log(this.h);
  console.log(this.w * this.h);
  return this.w * this.h;
};

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */

class Square extends Rectangle {
    constructor(w) {
        super(w, w);
    }
}

const rec = new Rectangle(3, 4);
const sqr = new Square(3);

console.log(rec.w);
console.log(rec.h);
console.log(sqr.w);
console.log(sqr.h);

console.log(rec.area());
console.log(sqr.area());