// creo un callback que busca los usuarios por id
const getUserById = (id, callback) => {

    // objeto
    const user = {
        id, // id: id,
        name: 'janania',
    }

    // se ejecuta 1.5 segundos después
    setTimeout(() => {
        callback(user);
    }, 1500);
}

// llamo a la función
getUserById(10, (user) => {
    console.log(user.name.toUpperCase());
});
