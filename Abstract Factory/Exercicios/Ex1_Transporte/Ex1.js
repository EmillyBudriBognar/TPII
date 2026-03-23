/**
 * PADRÃO: ABSTRACT FACTORY (FÁBRICA ABSTRATA)
 * 
 * Exercício: Sistema de Transporte.
 * O padrão garante que veículos individuais e coletivos pertençam ao mesmo 
 * ambiente (Terrestre ou Aéreo) de forma consistente.
 */

// 1. PRODUTOS ABSTRATOS
class VeiculoIndividual {
    iniciarRota() { throw new Error("Método abstrato"); }
}

class VeiculoColetivo {
    iniciarRota() { throw new Error("Método abstrato"); }
}

// 2. PRODUTOS CONCRETOS - FAMÍLIA TERRESTRE
class Carro extends VeiculoIndividual {
    iniciarRota() { return "Partiu! Carro na pista (Transporte Terrestre Individual)."; }
}

class Onibus extends VeiculoColetivo {
    iniciarRota() { return "Lotou! Ônibus saindo do ponto (Transporte Terrestre Coletivo)."; }
}

// 2. PRODUTOS CONCRETOS - FAMÍLIA AÉREA
class Helicoptero extends VeiculoIndividual {
    iniciarRota() { return "Hélice girando. Decolagem autorizada! (Transporte Aéreo Individual)."; }
}

class Aviao extends VeiculoColetivo {
    iniciarRota() { return "Atenção passageiros, iniciando voo (Transporte Aéreo Coletivo)."; }
}

// 3. FABRICA ABSTRATA
class FabricaTransporte {
    criarVeiculoIndividual() { throw new Error("Método abstrato"); }
    criarVeiculoColetivo() { throw new Error("Método abstrato"); }
}

// 4. FABRICAS CONCRETAS
class FabricaTerrestre extends FabricaTransporte {
    criarVeiculoIndividual() { return new Carro(); }
    criarVeiculoColetivo() { return new Onibus(); }
}

class FabricaAerea extends FabricaTransporte {
    criarVeiculoIndividual() { return new Helicoptero(); }
    criarVeiculoColetivo() { return new Aviao(); }
}

// 5. CLIENTE
function iniciarTransporte(fabrica) {
    const individual = fabrica.criarVeiculoIndividual();
    const coletivo = fabrica.criarVeiculoColetivo();

    console.log(" -> " + individual.iniciarRota());
    console.log(" -> " + coletivo.iniciarRota());
    console.log(" ----------------------------");
}

console.log("\n--- AMBIENTE TERRESTRE ---");
iniciarTransporte(new FabricaTerrestre());

console.log("\n--- AMBIENTE AÉREO ---");
iniciarTransporte(new FabricaAerea());
