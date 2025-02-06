class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`hola, soy ${this.nombre} y tengo ${this.edad} anios`)
    }

}

class Estudiante extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad)
        curso = curso;
    }


    estudiar(){
        console.log(this.#saluarPrivado())
    }

    #saluarPrivado(){
        return `${this.nombre} esta estudiando ${this.curso}`
    }
}

const estudiante = new Estudiante('Naely', 25, 'Temas emergentes de apps webs')

estudiante.saludar();
estudiante.estudiar();
