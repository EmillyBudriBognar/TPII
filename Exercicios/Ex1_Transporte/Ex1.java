// PRODUTOS ABSTRATOS
abstract class VeiculoIndividual {
    public abstract String iniciarRota();
}

abstract class VeiculoColetivo {
    public abstract String iniciarRota();
}

// PRODUTOS CONCRETOS - TERRESTRE
class Carro extends VeiculoIndividual {
    @Override
    public String iniciarRota() {
        return "Partiu! Carro na pista.";
    }
}

class Onibus extends VeiculoColetivo {
    @Override
    public String iniciarRota() {
        return "Lotou! Ônibus saindo do ponto.";
    }
}

// PRODUTOS CONCRETOS - AEREO
class Helicoptero extends VeiculoIndividual {
    @Override
    public String iniciarRota() {
        return "Hélice girando. Decolagem autorizada!";
    }
}

class Aviao extends VeiculoColetivo {
    @Override
    public String iniciarRota() {
        return "Atenção passageiros, iniciando voo.";
    }
}

// FABRICA ABSTRATA
abstract class FabricaTransporte {
    public abstract VeiculoIndividual criarVeiculoIndividual();

    public abstract VeiculoColetivo criarVeiculoColetivo();
}

// FABRICAS CONCRETAS
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

// CLIENTE
public class Ex1 {
    public static void iniciarTransporte(FabricaTransporte fabrica) {
        VeiculoIndividual individual = fabrica.criarVeiculoIndividual();
        VeiculoColetivo coletivo = fabrica.criarVeiculoColetivo();

        System.out.println(" -> " + individual.iniciarRota());
        System.out.println(" -> " + coletivo.iniciarRota());
        System.out.println(" ----------------------------");
    }

    public static void main(String[] args) {
        System.out.println("\n--- VAI POR TERRA ---");
        iniciarTransporte(new FabricaTerrestre());

        System.out.println("\n--- VAI POR AR ---");
        iniciarTransporte(new FabricaAerea());
    }
}