// PRODUTOS ABSTRATOS
class VeiculoIndividual {
    iniciarRota() {
        throw new Error("Método abstrato");
    }
}

class VeiculoColetivo {
    iniciarRota() {
        throw new Error("Método abstrato");
    }
}

// PRODUTOS CONCRETOS - TERRESTRE
class Carro extends VeiculoIndividual {
    iniciarRota() {
        return "Partiu! Carro na pista.";
    }
}

class Onibus extends VeiculoColetivo {
    iniciarRota() {
        return "Lotou! Ônibus saindo do ponto.";
    }
}

// PRODUTOS CONCRETOS - AEREO
class Helicoptero extends VeiculoIndividual {
    iniciarRota() {
        return "Hélice girando. Decolagem autorizada!";
    }
}

class Aviao extends VeiculoColetivo {
    iniciarRota() {
        return "Atenção passageiros, iniciando voo.";
    }
}

// FABRICA ABSTRATA
class FabricaTransporte {
    criarVeiculoIndividual() {
        throw new Error("Método abstrato");
    }
    criarVeiculoColetivo() {
        throw new Error("Método abstrato");
    }
}

// FABRICAS CONCRETAS
class FabricaTerrestre extends FabricaTransporte {
    criarVeiculoIndividual() {
        return new Carro();
    }
    criarVeiculoColetivo() {
        return new Onibus();
    }
}

class FabricaAerea extends FabricaTransporte {
    criarVeiculoIndividual() {
        return new Helicoptero();
    }
    criarVeiculoColetivo() {
        return new Aviao();
    }
}

// CLIENTE
function iniciarTransporte(fabrica) {
    const individual = fabrica.criarVeiculoIndividual();
    const coletivo = fabrica.criarVeiculoColetivo();

    console.log(" -> " + individual.iniciarRota());
    console.log(" -> " + coletivo.iniciarRota());
    console.log(" ----------------------------");
}

console.log("\n--- VAI POR TERRA ---");
iniciarTransporte(new FabricaTerrestre());

console.log("\n--- VAI POR AR ---");
iniciarTransporte(new FabricaAerea());
