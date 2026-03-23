/**
 * PADRÃO: ABSTRACT FACTORY (FÁBRICA ABSTRATA)
 * 
 * Exercício: Sistema de Fábrica de Robôs.
 * O objetivo é criar famílias de componentes (Armadura e Arma) 
 * que variam de acordo com o ambiente de operação (Terrestre ou Espacial).
 */

// 1. PRODUTOS ABSTRATOS
interface Armadura {
    String exibir();
}

interface Arma {
    String exibir();
}

// 2. PRODUTOS CONCRETOS - FAMÍLIA TERRESTRE
class ArmaduraTanque implements Armadura {
    public String exibir() { return "Armadura: Blindagem Pesada (Terrestre)."; }
}

class Canhao implements Arma {
    public String exibir() { return "Arma: Canhão de Longo Alcance."; }
}

// 2. PRODUTOS CONCRETOS - FAMÍLIA ESPACIAL
class ArmaduraLeve implements Armadura {
    public String exibir() { return "Armadura: Revestimento de Titânio (Espacial)."; }
}

class Laser implements Arma {
    public String exibir() { return "Arma: Canhão Laser de Precisão."; }
}

// 3. FABRICA ABSTRATA
interface FabricaRobo {
    Armadura criarArmadura();
    Arma criarArma();
}

// 4. FABRICAS CONCRETAS
class FabricaRoboTerrestre implements FabricaRobo {
    public Armadura criarArmadura() { return new ArmaduraTanque(); }
    public Arma criarArma() { return new Canhao(); }
}

class FabricaRoboEspacial implements FabricaRobo {
    public Armadura criarArmadura() { return new ArmaduraLeve(); }
    public Arma criarArma() { return new Laser(); }
}

// 5. CLIENTE
public class Ex4 {
    public static void montarRobo(FabricaRobo fabrica) {
        Armadura armadura = fabrica.criarArmadura();
        Arma arma = fabrica.criarArma();

        System.out.println(armadura.exibir());
        System.out.println(arma.exibir());
        System.out.println(" ----------------------------");
    }

    public static void main(String[] args) {
        System.out.println("\n--- CONFIGURAÇÃO TERRESTRE ---");
        montarRobo(new FabricaRoboTerrestre());

        System.out.println("\n--- CONFIGURAÇÃO ESPACIAL ---");
        montarRobo(new FabricaRoboEspacial());
    }
}
