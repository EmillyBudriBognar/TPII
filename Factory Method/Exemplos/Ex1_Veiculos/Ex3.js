// PRODUTO ABSTRATO
class Veiculo {
    constructor(modelo) {
        this.modelo = modelo;
    }

    mostrarDetalhes() {
        console.log(`Modelo: ${this.modelo}`);
    }
}

// PRODUTOS CONCRETOS
class Carro extends Veiculo { }
class Moto extends Veiculo { }

// FABRICA ABSTRATA
class FabricaDeVeiculos {
    criarVeiculo(modelo) { throw new Error("Método abstrato"); }
}

// FABRICAS CONCRETAS
class FabricaDeCarros extends FabricaDeVeiculos {
    criarVeiculo(modelo) { return new Carro(modelo); }
}

class FabricaDeMotos extends FabricaDeVeiculos {
    criarVeiculo(modelo) { return new Moto(modelo); }
}

// CLIENTE
const fabricaCarros = new FabricaDeCarros();
const fabricaMotos = new FabricaDeMotos();

const v1 = fabricaCarros.criarVeiculo("Sedan");
const v2 = fabricaCarros.criarVeiculo("Hatch");
const v3 = fabricaMotos.criarVeiculo("Esportiva");
const v4 = fabricaMotos.criarVeiculo("Custom");

v1.mostrarDetalhes();
v2.mostrarDetalhes();
v3.mostrarDetalhes();
v4.mostrarDetalhes();
