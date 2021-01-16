class shape {
    x = 0;
    y = 0;
    type = "shape";
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.type = this.constructor.name;
    }



}
class rectangle extends shape {
    width = 0;
    length = 0;
    constructor(x, y, length, width) {
        super(x, y);
        this.width = Number(width);
        this.length = Number(length);
    }
    getc() {
        return ((this.length + this.width) * 2);
    }
    geta() {
        return (this.width * this.length);
    }
    log() {
        if (this.length == this.width) {
            // console.log(this);
            console.log(`Circumference: ${this.getc()}, Area:${this.geta()}, Type:${this.type}`);
        } else {
            console.log(`Circumference: ${this.getc()}, Area:${this.geta()}, Type:${this.type}`);
        }

    }
    displayeditor() {
        const mainel = document.querySelector("#oval");
        const inputel1 = document.createElement("input");
        const inputel2 = document.createElement("input");
        const buttonel = document.createElement("button");
        inputel1.placeholder = "enter Width";
        inputel2.placeholder = "enter Length";
        inputel1.type = "number";
        inputel2.type = "number";
        buttonel.innerText = "change";
        console.log(this);
        inputel1.addEventListener('input', this.updateValue);
        inputel2.addEventListener('input', this.updateValue2);

        console.log(this);

        buttonel.addEventListener("click", this.calc);




        mainel.appendChild(inputel1);
        mainel.appendChild(inputel2);
        mainel.appendChild(buttonel);


    }
    calc = (e) => {
        console.log(this);

        document.querySelector("#rarea").innerHTML = this.geta();
        document.querySelector("#rcirc").innerHTML = this.getc();

    }
    updateValue = (e) => {
        this.width = Number(e.target.value);
    }
    updateValue2 = (e) => {
        this.length =Number(e.target.value);
    }




}
class oval extends shape {
    a = 0;
    b = 0;
    constructor(x, y, a, b) {
        super(x, y);
        this.b = b;
        this.a = a;
    }
    getc() {
        return ((this.a + this.b) * 3.14);
    }
    geta() {
        return (this.a * this.b * 3.14);
    }
    log() {
        if (this.a == this.b) {


            console.log(`Circumference: ${this.getc()}, Area:${this.geta()}, ${this.type}`);
        } else {
            console.log(`Circumference: ${this.getc()}, Area:${this.geta()}, ${this.type}`);
        }

    }
    displayeditor() {
        const mainel = document.querySelector("#oval");
        const inputel1 = document.createElement("input");
        const inputel2 = document.createElement("input");
        const buttonel = document.createElement("button");
        inputel1.placeholder = "enter A";
        inputel2.placeholder = "enter B";
        inputel1.type = "number";
        inputel2.type = "number";
        buttonel.innerText = "change";
        console.log(this);
        inputel1.addEventListener('input', this.updateValue);
        inputel2.addEventListener('input', this.updateValue2);

        console.log(this);

        buttonel.addEventListener("click", this.calc);




        mainel.appendChild(inputel1);
        mainel.appendChild(inputel2);
        mainel.appendChild(buttonel);


    }
    calc = (e) => {
        console.log(this);

        document.querySelector("#ovalarea").innerHTML = this.geta();
        document.querySelector("#ovalcirc").innerHTML = this.getc();

    }
    updateValue = (e) => {
        this.a = Number(e.target.value);
    }
    updateValue2 = (e) => {
        this.b = Number(e.target.value);
    }



}

class square extends rectangle {
    constructor(x, y, s) {
        super(x, y, s, s);

    }
    displayeditor() {
        const mainel = document.querySelector("#square");
        const inputel1 = document.createElement("input");
        const buttonel = document.createElement("button");
        buttonel.innerText = "change";
        inputel1.placeholder = "enter Side length";

        inputel1.type = "number";

        console.log(this);
        inputel1.addEventListener('input', this.updateValue);

        console.log(this);

        buttonel.addEventListener("click", this.calc);




        mainel.appendChild(inputel1);

        mainel.appendChild(buttonel);


    }
    calc = (e) => {
        console.log(this);

        document.querySelector("#sarea").innerHTML = this.geta();
        document.querySelector("#scirc").innerHTML = this.getc();

    }
    updateValue = (e) => {
        this.length = Number(e.target.value);
        this.width = Number(e.target.value);
        this.s = Number(e.target.value);

    }

}
class circle extends oval {
    rad = 0;
    constructor(x, y, rad) {
        super(x, y, 2 * rad, 2 * rad);
    }
    displayeditor() {
        const mainel = document.querySelector("#circle");
        const inputel1 = document.createElement("input");
        const buttonel = document.createElement("button");
        buttonel.innerText = "change";
        inputel1.placeholder = "enter raduis";

        inputel1.type = "number";

        console.log(this);
        inputel1.addEventListener('input', this.updateValue);

        console.log(this);

        buttonel.addEventListener("click", this.calc);




        mainel.appendChild(inputel1);

        mainel.appendChild(buttonel);


    }
    calc = (e) => {
        console.log(this);

        document.querySelector("#carea").innerHTML = this.geta();
        document.querySelector("#ccirc").innerHTML = this.getc();

    }
    updateValue = (e) => {
        this.rad = Number(e.target.value);
        this.a = Number(e.target.value);
        this.b =Number(e.target.value);

    }



}
class drawarea {
    shapes = [];
    constructor() {}
    addshapes() {
        for (let s of arguments) {
            this.shapes.push(s);
        }

    }
    logs() {
        for (let s of this.shapes) {
            s.log();
        }
    }


}
rec = new rectangle(0, 0, 10, 5);
sq = new square(0, 0, 5);
ov = new oval(0, 0, 10, 5);
ci = new circle(0, 0, 5);
console.log(rec.geta());
console.log(sq.geta());
console.log(ov.geta());
console.log(ci.geta());
console.log(rec.getc());
console.log(sq.getc());
console.log(ov.getc());
console.log(ci.getc());
rec.log();
sq.log();
ov.log();
ci.log();
let d = new drawarea();
d.addshapes(rec, sq, ov, ci);
d.logs();
rec.displayeditor();
sq.displayeditor();
ov.displayeditor();
ci.displayeditor();