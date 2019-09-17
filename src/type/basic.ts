const a: boolean = true;
const b: [string, number] = ['ahmed', 26]
enum g {
    t1 = 0,
    t2 = 1
}


function hello(): void {
    alert("hello ahmed")
}

function hello2(): never {
   throw Error('error')
}

let ch: any =  "welcome"

let strLength1: number = (ch as string).length;