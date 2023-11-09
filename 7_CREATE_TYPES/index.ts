// 1 - generics
function showData<T>(arg: T): string {
    return `O dado é: ${arg}`;
}

console.log(showData(5));
console.log(showData("Testando generic"));
console.log(true);
console.log([]);
console.log([34, 54, 65]);

// 2 - constraint generics
function showProductName<T extends { name: string }>(obj: T) {
    return `O nome do produto é: ${obj.name}`;
}

const myObj = { name: "Porta", color: "blue" };
console.log(showProductName(myObj));

// 3 - generics interface
interface MyObject<T, U, Q> {
    name: string;
    wheels: T;
    engine: U;
    color: Q;
}

type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;
const myCar: Car = { name: "Fusca", wheels: 4, engine: 1.6, color: "red" };
const myPen: Pen = { name: "BIC", wheels: false, engine: false, color: "blue" };

// 4 - type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave ${key.toString()} tem o valor de ${obj[key]}`;
}

const server = {
    hd: "2TB",
    ram: "32GB",
};

console.log(getSomeKey(server, "ram"));

// 5 - keyof type operator
type Character = { name: string; age: number; hasDriveLicense: boolean };

type C = keyof Character;

function showCharKey(obj: Character, key: C): string {
    return `${obj[key]}`;
}

const myChar: Character = {
    name: "Matheus",
    age: 30,
    hasDriveLicense: true,
};

console.log(showCharKey(myChar, "age"));

// 6 - typeof type operator
const userName: string = "Mauricio";

const userName2: typeof userName = "João";

// 7 - indexed access type
type Truck = { km: number; kg: number; description: string };

type Km = Truck["km"];

const newTruck: Truck = {
    km: 1000,
    kg: 5000,
    description: "Caminhão para pouca carga",
};

function showKm(km: Km) {
    console.log(`O veiculo tem a km de : ${km}`);
}

showKm(newTruck.km);

// 8 - conditional types
interface A {}

interface B extends A {}

type myType = B extends A ? number : string;

const someVar: myType = 5;

interface Teste {
    showName(): string;
}

type myTypeB = Teste extends { showName(): string } ? string : boolean;

// 9 - Template literals type
type testA = "text";

type CustomType = `some ${testA}`;

const someVarB: CustomType = "some text"

type a1 = "Testando";

type a2 = "Union";

type a3 = a1 | a2;

const testVar: a3 = "Union";