class User {

    constructor(public name: string = "ahmed") {

    }
}


class A extends User {
    v: number;
    constructor() {
        super('ffff');
        this.v = 2
    }

    hello(){
        console.log(this.v, this.name)
    }
}

const new_a = new A();
new_a.hello();