//funciones flecha

const suma = (num, num2) => num + num2

//template strings  `${}`



//object declaration
const person = {
    name: 'Juan',
    surname: 'Dominguez',
    lastname: null
};

//funcion anonima autoEjecutable
(() =>{
    //code here
    const name1 = person.name.toString();
    const name = `${person.name}` //de esta manera utilizamos toString() implicitamente
    const lastname = `${person.lastname ? person.lastname : ''}`//operador ternario y validamos si viene null
})()

//array
const roles = []
//arrayList
const roles2 = [
    {
        key:'ADMIN',
        name: 'Super adminitrador'
    },
    {
        key:'USER',
        name: 'Usuario'
    }
]
const roles3 = {}

//prototype

/* push, spi*/


roles.forEach((element, index) => {
    console.log(element.name);
})


const person2 = {
    name: 'Raul',
    age: 19,
    address: {
        street: 'Jose Maria',
        number: 29
    }
}
//ingresar tradicionalmente a un objeto 
console.log(person2.address.street);
(() =>{
    const {name, address:{street}} = person2
    console.log(street);
})