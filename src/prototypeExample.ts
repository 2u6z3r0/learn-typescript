
let message = 'Welcome to typescript'
console.log(message)
const greet = (name: string) => console.log(`Hello, ${name}`)

greet('Vitthal')

class Person {
    name
    age
    constructor(name:string, age= 16) {
        this.name = name;
        this.age = age
    }
    setName = (name:string) => {
        this.name = name
    }
    getName = () => {
        return this.name
    }
}

const p1 = new Person('Vitthal', 31)
console.log(p1.getName())
p1.setName('Sainath')
console.log(p1.getName())
p1.setName('Sainath')

const arr  = [1,2,3,]
const arr2 = [...arr]

const [first, second, third] = arr;
console.log(first,second, third)

arr2.map(num => console.log(num))
console.log(arr2.filter(el => el > 1))


interface Array<T> {
    myMap(predicate: (el: T, index: number, array:T[]) => void): Array<T>
    myFilter(predicate: (el: T, index: number, array:T[]) => void): Array<T>
    my(predicate: (el: T, index: number, array:T[]) => void): Array<T>
}

Array.prototype.myMap = function(callback:any) {
    const arr = []
    for(let i= 0; i< this.length;i++) {
        console.log(`processing element at index ${i}`)
        arr.push(callback(this[i], i, this))
    }
    return arr
}

Array.prototype.myFilter = function(predicate: any) {
    const arr = []
    for(let i=0; i< this.length; i++) {
        console.log(`checking value: ${this[i]}, index: ${i}`)
        if(!!predicate(this[i],i, this)) arr.push(this[i])
    }
    return arr
}

const squares = arr2.myMap(el => el * el)
console.log(squares)

const filteredVals = arr2.myFilter( el => el > 2)
console.log(filteredVals)

