// premitive types are string,number,boolean

const name: string='vitthal' 
// NOTE: as we are assigning value, it's advised that 
// we should not declare the type,
console.log('name',name)

const  age = 5 
// here type will be automatically inferred by typescript.
// if we are assigning a value while declaring the variable,then its
// better not mention type explicitely
console.log('age',age)

let isValid: boolean;
isValid = true
console.log('isValid, ', isValid)


// TODO should be fixed block scope re-declaration issue
// below line is to fix scope issues temporarely,
export {}