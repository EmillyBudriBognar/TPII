/**
 * PADRÃO: BUILDER
 * 
 * O padrão Builder é utilizado para construir objetos complexos passo a passo. 
 * Este exemplo mostra como montar um carro com diferentes partes, facilitando a 
 * personalização através de uma interface fluente.
 */

// 1. COMPONENTES DO CARRO
class Motor {
    constructor(tipo) { this.tipo = tipo; }
}

class Carroceria {
    constructor(estilo) { this.estilo = estilo; }
}

class Rodas {
    constructor(tamanho) { this.tamanho = tamanho; }
}

class Interior {
    constructor(cor) { this.cor = cor; }
}

// 2. PRODUTO FINAL
class Carro {
    constructor(motor, carroceria, rodas, interior) {
        this.motor = motor;
        this.carroceria = carroceria;
        this.rodas = rodas;
        this.interior = interior;
    }

    mostrarDetalhes() {
        console.log(`Carro composto por:\n` +
            `- Motor: ${this.motor.tipo}\n` +
            `- Carroceria: ${this.carroceria.estilo}\n` +
            `- Rodas: ${this.rodas.tamanho}\n` +
            `- Interior: ${this.interior.cor}\n`);
    }
}

// 3. BUILDER CONCRETO
class CarroBuilder {
    constructor() {
        this.motor = null;
        this.carroceria = null;
        this.rodas = null;
        this.interior = null;
    }

    addMotor(tipo) {
        this.motor = new Motor(tipo);
        return this;
    }

    addCarroceria(estilo) {
        this.carroceria = new Carroceria(estilo);
        return this;
    }

    addRodas(tamanho) {
        this.rodas = new Rodas(tamanho);
        return this;
    }

    addInterior(cor) {
        this.interior = new Interior(cor);
        return this;
    }

    construir() {
        return new Carro(this.motor, this.carroceria, this.rodas, this.interior);
    }
}

// 4. CLIENTE (Usando o Builder para construir diferentes modelos)
const builder = new CarroBuilder();

const pickup = builder
    .addMotor("1.0")
    .addCarroceria("Pickup")
    .addRodas(15)
    .addInterior("Rosa")
    .construir();

const suv = new CarroBuilder()
    .addMotor("2.0")
    .addCarroceria("SUV")
    .addRodas(18)
    .addInterior("Preto")
    .construir();

pickup.mostrarDetalhes();
console.log("-------------------------");
suv.mostrarDetalhes();
