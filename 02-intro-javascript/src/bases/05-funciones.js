// Funciones en JS
const saludar = function saludar(nombre) {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola, Mundo`;

//console.log(saludar("Goku"));
console.log(saludar2("Juan"));
console.log(saludar3("Goku"));
console.log(saludar4());

const getUser = () => ({
  uid: "ABC123",
  username: "El_Peapi1502",
});
const user = getUser();
console.log(user);

// Tarea
// Transformar a funcion de flecha
// Tiene que retornar un objeto implicito
// Prueba

/*function getUsuarioActivo(nombre) {
  return {
    uid: "ABC567",
    username: nombre,
  };
}
*/
const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Fernando");
console.log(usuarioActivo);
