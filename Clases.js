class MiClase {
    constructor(atributoPublico, atributoPrivado){
    this.atributoPublico = 8;
    this.atributoPrivado = 9;
}

get privado () {return this.atributoPrivado};
set privado (valor) {this.atributoPrivado= valor}

unMetodoPublico(){return this.atributoPublico}
static unMetodoEstatico() {return 1+2}

}