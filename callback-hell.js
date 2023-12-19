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

// función para obtener un empleado por id
const getEmployeeById = (id, callback) => {

    const employee = employees.find(x => x.id === id);

    if (employee)
        callback(null, employee);
    else
        callback(`Empleado con id ${id} no existe`);
};

// función para obtener un salario por id
const getRemunerationById = (id, callback) => {

    const salary = remunerations.find(x => x.id === id);

    if (salary)
        callback(null, salary);
    else
        callback(`Salario con id ${id} no existe`);
}

// llamo a la función de empleados
getEmployeeById(id, (err, employee) => {

    if(err)
        return console.log(err);

    console.log(employee.name);  
}); 

// llamo a la función de remuneraciones
getRemunerationById(id, (err, salary) => {

    if (err)
        return console.log(err);

    console.log(salary.salary);
});
