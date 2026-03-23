/**
 * PADRÃO: ABSTRACT FACTORY (FÁBRICA ABSTRATA)
 * 
 * Este exemplo mostra como criar combos de produtos relacionados (Moda e Eletrônico)
 * garantindo consistência entre eles através de fábricas específicas.
 */

// 1. PRODUTOS ABSTRATOS
class ProdutoModa {
    exibirDetalhes() { throw new Error("Método abstrato"); }
}

class ProdutoEletronico {
    exibirDetalhes() { throw new Error("Método abstrato"); }
}

// 2. PRODUTOS CONCRETOS - FAMÍLIA FASHION
class CamisaFashion extends ProdutoModa {
    exibirDetalhes() { return "Camisa Fashion: Estampa moderna."; }
}

class CelularFashion extends ProdutoEletronico {
    exibirDetalhes() { return "Celular Fashion: Design elegante."; }
}

// 2. PRODUTOS CONCRETOS - FAMÍLIA TECH
class CamisaTech extends ProdutoModa {
    exibirDetalhes() { return "Camisa Tech: Tecido inteligente."; }
}

class CelularTech extends ProdutoEletronico {
    exibirDetalhes() { return "Celular Tech: Alta performance."; }
}

// 3. FABRICA ABSTRATA
class FabricaCombo {
    criarCamisa() { throw new Error("Método abstrato"); }
    criarCelular() { throw new Error("Método abstrato"); }
}

// 4. FABRICAS CONCRETAS
class FabricaComboFashion extends FabricaCombo {
    criarCamisa() { return new CamisaFashion(); }
    criarCelular() { return new CelularFashion(); }
}

class FabricaComboTech extends FabricaCombo {
    criarCamisa() { return new CamisaTech(); }
    criarCelular() { return new CelularTech(); }
}

// 5. CLIENTE
function lojaVirtual(fabrica) {
    const camisa = fabrica.criarCamisa();
    const celular = fabrica.criarCelular();

    console.log(camisa.exibirDetalhes());
    console.log(celular.exibirDetalhes());
}

// Testando os combos
console.log("Combo Fashion:");
lojaVirtual(new FabricaComboFashion());

console.log("-------");

console.log("Combo Tech:");
lojaVirtual(new FabricaComboTech());
