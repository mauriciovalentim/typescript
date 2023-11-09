"use strict";
// 1 - generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData("Testando generic"));
console.log(true);
console.log([]);
console.log([34, 54, 65]);
// 2 - constraint generics
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", color: "blue" };
console.log(showProductName(myObj));
const myCar = { name: "Fusca", wheels: 4, engine: 1.6, color: "red" };
const myPen = { name: "BIC", wheels: false, engine: false, color: "blue" };
// 4 - type parameters
function getSomeKey(obj, key) {
    return `A chave ${key.toString()} tem o valor de ${obj[key]}`;
}
const server = {
    hd: "2TB",
    ram: "32GB",
};
console.log(getSomeKey(server, "ram"));
function showCharKey(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: "Matheus",
    age: 30,
    hasDriveLicense: true,
};
console.log(showCharKey(myChar, "age"));
// 6 - typeof type operator
const userName = "Mauricio";
const userName2 = "João";
const newTruck = {
    km: 1000,
    kg: 5000,
    description: "Caminhão para pouca carga",
};
function showKm(km) {
    console.log(`O veiculo tem a km de : ${km}`);
}
showKm(newTruck.km);
const someVar = 5;
const someVarB = "some text";
const testVar = "Union";
