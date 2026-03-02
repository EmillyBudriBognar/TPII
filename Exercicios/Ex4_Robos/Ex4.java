// PRODUTOS ABSTRATOS
abstract class RoboMontador {
    public abstract String operar();
}

abstract class RoboInspetor {
    public abstract String operar();
}

// PRODUTO CONCRETO - LINHA AUTOMOTIVA
class MontadorAutomotivo extends RoboMontador {
    @Override
    public String operar() {
        return "Montador de carros: Montando carcaça do veículo...";
    }
}

class InspetorAutomotivo extends RoboInspetor {
    @Override
    public String operar() {
        return "Inspetor de peças automotivas: Verificando alinhamento das portas.";
    }
}

// PRODUTO CONCRETO - LINHA ELETRÔNICOS
class MontadorEletronico extends RoboMontador {
    @Override
    public String operar() {
        return "Montador de circuitos: Soldando componentes na placa mãe.";
    }
}

class InspetorEletronico extends RoboInspetor {
    @Override
    public String operar() {
        return "Inspetor de chips: Testando continuidade do circuito.";
    }
}

// FÁBRICA ABSTRATA
abstract class FabricaRobo {
    public abstract RoboMontador criarMontador();

    public abstract RoboInspetor criarInspetor();
}

// FÁBRICAS CONCRETAS
class FabricaAutomotiva extends FabricaRobo {
    @Override
    public RoboMontador criarMontador() {
        return new MontadorAutomotivo();
    }

    @Override
    public RoboInspetor criarInspetor() {
        return new InspetorAutomotivo();
    }
}

class FabricaEletronicos extends FabricaRobo {
    @Override
    public RoboMontador criarMontador() {
        return new MontadorEletronico();
    }

    @Override
    public RoboInspetor criarInspetor() {
        return new InspetorEletronico();
    }
}

// CLIENTE
public class Ex4 {
    public static void operarLinha(FabricaRobo fabrica) {
        RoboMontador montador = fabrica.criarMontador();
        RoboInspetor inspetor = fabrica.criarInspetor();

        System.out.println(" -> " + montador.operar());
        System.out.println(" -> " + inspetor.operar());
        System.out.println(" ----------------------------");
    }

    public static void main(String[] args) {
        System.out.println("\n--- PRODUÇÃO DE CARROS ---");
        operarLinha(new FabricaAutomotiva());

        System.out.println("\n--- PRODUÇÃO DE ELETRÔNICOS ---");
        operarLinha(new FabricaEletronicos());
    }
}
