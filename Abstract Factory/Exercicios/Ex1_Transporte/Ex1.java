/**
 * PADRÃO: ABSTRACT FACTORY (FÁBRICA ABSTRATA)
 * 
 * Exercício: Sistema de Transporte.
 * O objetivo é criar famílias de veículos (Individual e Coletivo) 
 * que variam de acordo com o ambiente (Terrestre ou Aéreo).
 */

// 1. PRODUTOS ABSTRATOS
abstract class VeiculoIndividual {
    public abstract String iniciarRota();
}

abstract class VeiculoColetivo {
    public abstract String iniciarRota();
}

// 2. PRODUTOS CONCRETOS - FAMÍLIA TERRESTRE
class Carro extends VeiculoIndividual {
    @Override
    public String iniciarRota() {
        return "Partiu! Carro na pista (Transporte Terrestre Individual).";
    }
}

class Onibus extends VeiculoColetivo {
    @Override
    public String iniciarRota() {
        return "Lotou! Ônibus saindo do ponto (Transporte Terrestre Coletivo).";
    }
}

// 2. PRODUTOS CONCRETOS - FAMÍLIA AÉREA
class Helicoptero extends VeiculoIndividual {
    @Override
    public String iniciarRota() {
        return "Hélice girando. Decolagem autorizada! (Transporte Aéreo Individual).";
    }
}

class Aviao extends VeiculoColetivo {
    @Override
    public String iniciarRota() {
        return "Atenção passageiros, iniciando voo (Transporte Aéreo Coletivo).";
    }
}

// 3. FABRICA ABSTRATA
abstract class FabricaTransporte {
    public abstract VeiculoIndividual criarVeiculoIndividual();
    public abstract VeiculoColetivo criarVeiculoColetivo();
}

// 4. FABRICAS CONCRETAS
class FabricaTerrestre extends FabricaTransporte {
    @Override
    public VeiculoIndividual criarVeiculoIndividual() {
        return new Carro();
    }

    @Override
    public VeiculoColetivo criarVeiculoColetivo() {
        return new Onibus();
    }
}

class FabricaAerea extends FabricaTransporte {
    @Override
    public VeiculoIndividual criarVeiculoIndividual() {
        return new Helicoptero();
    }

    @Override
    public VeiculoColetivo criarVeiculoColetivo() {
        return new Aviao();
    }
}

// 5. CLIENTE
public class Ex1 {
    public static void iniciarTransporte(FabricaTransporte fabrica) {
        // O cliente usa a fábrica para criar os produtos compatíveis
        VeiculoIndividual individual = fabrica.criarVeiculoIndividual();
        VeiculoColetivo coletivo = fabrica.criarVeiculoColetivo();

        System.out.println(" -> " + individual.iniciarRota());
        System.out.println(" -> " + coletivo.iniciarRota());
        System.out.println(" ----------------------------");
    }

    public static void main(String[] args) {
        System.out.println("\n--- AMBIENTE TERRESTRE ---");
        iniciarTransporte(new FabricaTerrestre());

        System.out.println("\n--- AMBIENTE AÉREO ---");
        iniciarTransporte(new FabricaAerea());
    }
}