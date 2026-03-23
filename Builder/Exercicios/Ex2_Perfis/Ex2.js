/**
 * PADRÃO: BUILDER
 * 
 * Exercício: Sistema de Gerenciamento de Perfis.
 * O Builder permite que o Perfil seja construído de forma flexível, 
 * facilitando a adição de novos campos ou a omissão de campos opcionais.
 */

// 1. PRODUTO FINAL
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

// 2. BUILDER CONCRETO
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

    // 3. MÉTODO DE CONSTRUÇÃO
    construir() {
        return this.perfil;
    }
}

// 4. CLIENTE
const p1 = new PerfilBuilder()
    .addNome("Ricardo Souza")
    .addCargo("Administrativo")
    .addMatricula(998877)
    .addHoraEntrada("08:30")
    .addHoraSaida("18:00")
    .construir();

const p2 = new PerfilBuilder()
    .addNome("Fernanda Lima")
    .addCargo("Coordenadora")
    .addMatricula(112233)
    .construir(); // Campos de horário omitidos

console.log("Perfil 1:", p1.toString());
console.log("Perfil 2:", p2.toString());
