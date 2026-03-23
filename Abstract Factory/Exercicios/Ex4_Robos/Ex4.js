/**
 * PADRÃO: ABSTRACT FACTORY (FÁBRICA ABSTRATA)
 * 
 * Exercício: Sistema de Fábrica de Robôs.
 * Este exercício mostra como as fábricas abstratas podem garantir que as partes 
 * de um robô (Armadura e Arma) sejam compatíveis com o ambiente de destino.
 */

// 1. PRODUTOS ABSTRATOS
class Armadura {
    exibir() { throw new Error("Método abstrato"); }
}

class Arma {
    exibir() { throw new Error("Método abstrato"); }
}

// 2. PRODUTOS CONCRETOS - FAMÍLIA TERRESTRE
class ArmaduraTanque extends Armadura {
    exibir() { return "Armadura: Blindagem Pesada (Terrestre)."; }
}

class Canhao extends Arma {
    exibir() { return "Arma: Canhão de Longo Alcance."; }
}

// 2. PRODUTOS CONCRETOS - FAMÍLIA ESPACIAL
class ArmaduraLeve extends Armadura {
    exibir() { return "Armadura: Revestimento de Titânio (Espacial)."; }
}

class Laser extends Arma {
    exibir() { return "Arma: Canhão Laser de Precisão."; }
}

// 3. FABRICA ABSTRATA
class FabricaRobo {
    criarArmadura() { throw new Error("Método abstrato"); }
    criarArma() { throw new Error("Método abstrato"); }
}

// 4. FABRICAS CONCRETAS
class FabricaRoboTerrestre extends FabricaRobo {
    criarArmadura() { return new ArmaduraTanque(); }
    criarArma() { return new Canhao(); }
}

class FabricaRoboEspacial extends FabricaRobo {
    criarArmadura() { return new ArmaduraLeve(); }
    criarArma() { return new Laser(); }
}

// 5. CLIENTE
function montarRobo(fabrica) {
    const armadura = fabrica.criarArmadura();
    const arma = fabrica.criarArma();

    console.log(armadura.exibir());
    console.log(arma.exibir());
    console.log(" ----------------------------");
}

console.log("\n--- CONFIGURAÇÃO TERRESTRE ---");
montarRobo(new FabricaRoboTerrestre());

console.log("\n--- CONFIGURAÇÃO ESPACIAL ---");
montarRobo(new FabricaRoboEspacial());
