// creo arreglos de objeto
const employees = [
    {
        id: 1,
        name: 'janania'
    },
    {
        id: 2,
        name: 'Mick'
    },
    {
        id: 3,
        name: 'Eddie'
    }
];

const remunerations = [
    {
        id: 1,
        salary: 1000,
    },
    {
        id: 2,
        salary: 1500
    }
];

// variable para setear el id
const id = 3;

// función para obtener un empleado por id utilizando Promesas
const getEmployeeById = (id) => {

    const employee = employees.find(x => x.id === id);

    const promise = new Promise((resolve, reject) =>{

        if (employee)
            resolve(employee);
        else
            reject(`El empleado con id ${id} no existe`);
    });

    return promise;
};

// función para obtener el salario por id utilizando Promesas
const getRemunerationById = (id) => {

    const salary = remunerations.find(x => x.id ===id);

    const promise = new Promise((resolve, reject) => {

        (salary) ? resolve(salary) : reject (`El salario con id ${id} no existe`);
    }); 

    return promise;
};

// llamo a los métodos
getEmployeeById(id)
    .then(x => console.log(x.name))
    .catch(x => console.log(x));

getRemunerationById(id)
    .then(x => console.log(x.salary))
    .catch(x => console.log(x));