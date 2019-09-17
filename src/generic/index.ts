interface IUser<T> {
    a: T
}

const b1: IUser<[string, string]> = {
    a: ['ahmed', 'ghoul']
}

const b2: IUser<[string]> = {
    a: ['ahmed']
}

const b3: IUser<undefined>= {
    a: undefined
}

const b4: IUser<string>={
    a: "ahmed"
}