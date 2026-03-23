/**
 * PADRÃO: FACTORY METHOD (MÉTODO FÁBRICA)
 * 
 * Este padrão é útil quando uma classe não pode antecipar a classe 
 * de objetos que ela precisa criar.
 */

// 1. PRODUTO ABSTRATO (Simulado com classe base)
class Veiculo {
    constructor(modelo) {
        this.modelo = modelo;
    }

    mostrarDetalhes() {
        console.log(`Veículo Modelo: ${this.modelo}`);
    }
}

// 2. PRODUTOS CONCRETOS
class Carro extends Veiculo {
    constructor(modelo) {
        super(modelo);
    }
}

class Moto extends Veiculo {
    constructor(modelo) {
        super(modelo);
    }
}

// 3. CRIADOR ABSTRATO
class FabricaDeVeiculos {
    // Factory Method
    criarVeiculo(modelo) {
        throw new Error("Este método deve ser sobrescrito pelas subclasses.");
    }
}

// 4. CRIADORES CONCRETOS
class FabricaDeCarros extends FabricaDeVeiculos {
    criarVeiculo(modelo) {
        return new Carro(modelo);
    }
}

class FabricaDeMotos extends FabricaDeVeiculos {
    criarVeiculo(modelo) {
        return new Moto(modelo);
    }
}

// 5. CLIENTE
const fabricaCarros = new FabricaDeCarros();
const fabricaMotos = new FabricaDeMotos();

const v1 = fabricaCarros.criarVeiculo("SUV");
const v2 = fabricaMotos.criarVeiculo("Scooter");

v1.mostrarDetalhes();
v2.mostrarDetalhes();
