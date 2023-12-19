
// creo un objeto
const janania = {
    name: 'Jose',
    lastName: 'Anania',
    job: 'developer',

    getJanania() {
        return `${this.name} ${this.lastName} ${this.job}`;
    }
}

console.log(janania.getJanania());

// obtener cada propiedad del objeto

/*
const name = janania.name;
const lastName = janania.lastName;
const job = janania.job;

console.log(name, lastName, job);
*/

// con la desestructuración
const {name, lastName, job, age = 42} = janania;

console.log(name, lastName, job, age);

// otra forma de desestructuración
function showJanania({name, lastName, job}) {

    console.log(name, lastName, job);
}

showJanania(janania);

/************************************************************************************ */

// creo un arreglo
const rockStar = ['Mick', 'Eddie', 'Kurt'];

// obtener cada propiedad del objeto
/*
const rs1 = rockStar[0];
const rs2 = rockStar[1];
const rs3 = rockStar[2];

console.log(rs1, rs2, rs3);
*/

// con la desestructuración
const [rs1, rs2, rs3] = rockStar;

console.log(rs1, rs2, rs3);

// otra forma, evitando elementos del arreglo

const [ , , r3] = rockStar;

console.log(r3);

