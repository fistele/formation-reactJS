// variables
const PI = 3.14;

let counter = 0;
 console.log("This is PI", PI);
 console.log("This is counter", counter);

//  PI = 42;
//  console.log("This is New PI",PI);

counter  = 1;
console.log("This is New Counter", counter);

counter += PI
console.log("This is added Counter", counter);

// or


// let newTotal = PI + counter;
// console.log("This is Total", newTotal);

//Fonction tradittionnelle
// function add(a,b){
//     return a+b;
// }

//Fonction fléchée
// const add = (a,b) => a+b;

//sur les objets
const obj = {
    valeur : 42,

    getValeur : function(){
        return this.valeur;
    },

    getValeurFlech: () => this.valeur,
}

console.log(obj.getValeur());
console.log(obj.getValeurFlech());

const table = [1,2,3];
const carre = table.map(chiffre => chiffre * chiffre);

const randy = {name: 'Ismael', age: 22}
const {name, age} = randy;
console.log(name, age);

const displayRandy = ({ name, age }) => console.log(name, ' has ',age,' year old')
displayRandy(randy);


const {name: fullName, age : years} = randy;
console.log(fullName, years);

const [first, second, third] = table;
console.log(first, second, third);

const [, , thir] = table;
console.log(thir);

const table2 = [3];
const [first2, second2 = 2, third2 = 1] = table2;
console.log(first2, second2, third2);

const users = [{name : 'Randy', age : 22}, {name : 'Ismael', age : 23}];
const [{name : firstUser}, {name : secondUser}] = users;
console.log(firstUser)

const data = {info : [1, 2, 3]};
const {info : [first1, second1]} = data;
console.log(first1);