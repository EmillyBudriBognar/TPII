// PRODUTOS ABSTRATOS
class RoboMontador {
    operar() { throw new Error("Método abstrato"); }
}

class RoboInspetor {
    operar() { throw new Error("Método abstrato"); }
}

// PRODUTO CONCRETO - LINHA AUTOMOTIVA
class MontadorAutomotivo extends RoboMontador {
    operar() { return "Montador de carros: Montando carcaça do veículo..."; }
}

class InspetorAutomotivo extends RoboInspetor {
    operar() { return "Inspetor de peças automotivas: Verificando alinhamento das portas."; }
}

// PRODUTO CONCRETO - LINHA ELETRÔNICOS
class MontadorEletronico extends RoboMontador {
    operar() { return "Montador de circuitos: Soldando componentes na placa mãe..."; }
}

class InspetorEletronico extends RoboInspetor {
    operar() { return "Inspetor de chips: Testando continuidade do circuito."; }
}

// FABRICA ABSTRATA
class FabricaRobo {
    criarMontador() { throw new Error("Método abstrato"); }
    criarInspetor() { throw new Error("Método abstrato"); }
}

// FABRICAS CONCRETAS
class FabricaAutomotiva extends FabricaRobo {
    criarMontador() { return new MontadorAutomotivo(); }
    criarInspetor() { return new InspetorAutomotivo(); }
}

class FabricaEletronicos extends FabricaRobo {
    criarMontador() { return new MontadorEletronico(); }
    criarInspetor() { return new InspetorEletronico(); }
}

// CLIENTE
function operarLinha(fabrica) {
    const montador = fabrica.criarMontador();
    const inspetor = fabrica.criarInspetor();

    console.log(" -> " + montador.operar());
    console.log(" -> " + inspetor.operar());
    console.log(" ----------------------------");
}

console.log("\n--- PRODUÇÃO DE CARROS ---");
operarLinha(new FabricaAutomotiva());

console.log("\n--- PRODUÇÃO DE ELETRÔNICOS ---");
operarLinha(new FabricaEletronicos());
