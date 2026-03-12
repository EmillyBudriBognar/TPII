// PRODUTOS ABSTRATOS
class ProdutoModa {
    toString() { throw new Error("Método abstrato"); }
}

class ProdutoEletronico {
    toString() { throw new Error("Método abstrato"); }
}

// PRODUTOS CONCRETOS - FASHION
class CamisaFashion extends ProdutoModa {
    toString() { return "Camisa Fashion"; }
}

class CelularFashion extends ProdutoEletronico {
    toString() { return "Celular Fashion."; }
}

// PRODUTOS CONCRETOS - TECH
class CamisaTech extends ProdutoModa {
    toString() { return "Camisa Tech"; }
}

class CelularTech extends ProdutoEletronico {
    toString() { return "Celular Tech."; }
}

// FABRICA ABSTRATA
class FabricaCombo {
    criarCamisa() { throw new Error("Método abstrato"); }
    criarCelular() { throw new Error("Método abstrato"); }
}

// FABRICAS CONCRETAS
class FabricaComboTech extends FabricaCombo {
    criarCamisa() { return new CamisaTech(); }
    criarCelular() { return new CelularTech(); }
}

class FabricaComboFashion extends FabricaCombo {
    criarCamisa() { return new CamisaFashion(); }
    criarCelular() { return new CelularFashion(); }
}

// CLIENTE
function lojaVirtual(fabrica) {
    const camisa = fabrica.criarCamisa();
    const celular = fabrica.criarCelular();

    console.log(camisa.toString());
    console.log(celular.toString());
}

console.log("Combo fashion: ");
lojaVirtual(new FabricaComboFashion());

console.log("-------");

console.log("Combo tech: ");
lojaVirtual(new FabricaComboTech());
