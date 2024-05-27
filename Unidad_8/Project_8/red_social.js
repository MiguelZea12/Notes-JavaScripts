/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseÃ±a
2. El sistema debe ser capaz de validar si el usuario y contraseÃ±a ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseÃ±a son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseÃ±a son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/

const usersDatabase = [
    {
      username: "andres",
      password: "123",
    },
    {
      username: "caro",
      password: "456",
    },
    {
      username: "mariana",
      password: "789",
    },
  ];
  
const usersTimeline = [
    {
      username: "Estefany",
      timeline: "Me encata Javascript!",
    },
    {
      username: "Oscar",
      timeline: "Bebeloper es lo mejor!",
    },
    {
      username: "Mariana",
      timeline: "A mi me gusta mÃ¡s el cafÃ© que el tÃ©",
    },
    {
      username: "Andres",
      timeline: "Yo hoy no quiero trabajar",
    },
  ];
  

const user = () => prompt('Ingresa tu nombre de usuario: ');
const password = () => prompt('Ingresa tu contraseña: ');

function Validate (user, password) {
    let validate = false;
    for (let i = 0; i < usersDatabase.length; i++){
        if (user === usersDatabase[i].username && password === usersDatabase[i].password) {
            validate = true;
            alert('Tu usuario y contraseña son correctas.');
            break;
        }
    }
    if (validate) {
        for (let j = 0; j < usersTimeline.length; j ++){
            if (user.toLocaleLowerCase() === usersTimeline[j].username.toLocaleLowerCase()) {
                alert(`Bienvenido ${user}, este es el timeline de hoy: ${usersTimeline[j].timeline}`);
                return true;
            }
        }
        alert(`Hola ${user}, no dispones de timeline`);
        return true;
    } else {
        alert('Usuario o contraseña es incorrecta');
        return false;
    }
    
}

const users = user();
const pass = password();
Validate(users, pass);