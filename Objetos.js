let obj  ={};

obj.Nombre = 'Naely Rubio';
obj.Edad = '25'
obj.alumno = true;
obj.metodo = function () { return 'hola mundo desde el objeto'};
console.log(obj()) 

let objCompleto = {
    Nombre : 'Naely Rubio',
    edad: 25,
    alumno: true, 
    metodo: function() {return 'hola mundo desde el objeto'}
}

objCompleto.Nombre = 'Edgar';

console.log(objCompleto);
