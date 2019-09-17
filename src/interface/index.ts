interface IMap {
    a: string,
    b?: string
}

let obj: IMap = {
    a: "ahmed",
    b: 'ghoul'
}

function test1(): IMap {
    return { a: "ahmed" }
}


// Optional Properties
interface IOptional1 {
    a: number;
    b?: string;
}


function test2(arg: IOptional1): string {
    return arg.a + '';
}

test2({ a: 1 })


// readonly
interface IPoint {
    readonly x: number,
    readonly y: number
}

let point: IPoint = {
    x: 1,
    y: 2
}
//point.x = 3;

// Function Types
interface Ifct {
    (n1: number, n2: number): number
}

let test3: Ifct = function(n1, n3) {
    return n1 + n3
}

// indexable types
interface IIndex {
    [x: string]: string
}

let index: IIndex = { i: "5" }


//Type
type t = string;
const v: t = "ahmed"

//Extends
interface a1 {
    num: number
}

interface Test1 extends a1 {
    num1: number
}

let vvv: Test1 = {
    num: 1,
    num1: 2
}




interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    return {
        color: config.color || '',
        area: config.width || 1,
    };
}
// type assertion
let mySquare = createSquare(<SquareConfig>{ a: "red", width: 100 });