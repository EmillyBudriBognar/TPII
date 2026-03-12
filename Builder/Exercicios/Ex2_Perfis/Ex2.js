class Perfil {
    constructor() {
        this.nome = "";
        this.cargo = "";
        this.matricula = 0;
        this.horaEntrada = "";
        this.horaSaida = "";
    }

    toString() {
        return `Perfil [Nome: ${this.nome}, Cargo: ${this.cargo}, Matrícula: ${this.matricula}, Entrada: ${this.horaEntrada}, Saída: ${this.horaSaida}]`;
    }
}

class PerfilBuilder {
    constructor() {
        this.perfil = new Perfil();
    }

    addNome(nome) {
        this.perfil.nome = nome;
        return this;
    }

    addCargo(cargo) {
        this.perfil.cargo = cargo;
        return this;
    }

    addMatricula(matricula) {
        this.perfil.matricula = matricula;
        return this;
    }

    addHoraEntrada(hora) {
        this.perfil.horaEntrada = hora;
        return this;
    }

    addHoraSaida(hora) {
        this.perfil.horaSaida = hora;
        return this;
    }

    construir() {
        return this.perfil;
    }
}

// CLIENTE
const p1 = new PerfilBuilder()
    .addNome("Ricardo Souza")
    .addCargo("Administrativo")
    .addMatricula(998877)
    .addHoraEntrada("08:30")
    .addHoraSaida("18:00")
    .construir();

console.log(p1.toString());
