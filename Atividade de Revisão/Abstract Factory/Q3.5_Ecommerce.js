/**
 * PADRÃO: ABSTRACT FACTORY
 * QUESTÃO 3.5 – E-commerce: Eletrônicos e Moda
 *
 * Problema: Um e-commerce tem duas linhas de produtos (eletrônicos e moda),
 * cada uma com fábricas e interfaces próprias.
 *
 * Solução: Abstract Factory com fábricas concretas para cada linha
 * e interfaces de produto bem definidas.
 */

// 1. INTERFACES DOS PRODUTOS

class Produto {
    descricao() { throw new Error("Método abstrato"); }
    preco()     { throw new Error("Método abstrato"); }
}

class Embalagem {
    tipo() { throw new Error("Método abstrato"); }
}

// 2. FAMÍLIA: ELETRÔNICOS
class Smartphone extends Produto {
    descricao() { return "Smartphone Android 256GB – Câmera 108MP"; }
    preco()     { return "R$ 2.499,00"; }
}

class EmbalagemTecnologia extends Embalagem {
    tipo() { return "Caixa rígida antiestática com lacre de segurança"; }
}

// 3. FAMÍLIA: MODA
class Camiseta extends Produto {
    descricao() { return "Camiseta Algodão Premium – Fit Regular"; }
    preco()     { return "R$ 149,90"; }
}

class EmbalagemModa extends Embalagem {
    tipo() { return "Sacola de papel kraft personalizada com papel de seda"; }
}

// 4. ABSTRACT FACTORY
class FabricaEcommerce {
    criarProduto()   { throw new Error("Método abstrato"); }
    criarEmbalagem() { throw new Error("Método abstrato"); }
}

// 5. FÁBRICAS CONCRETAS
class FabricaEletronicos extends FabricaEcommerce {
    criarProduto()   { return new Smartphone(); }
    criarEmbalagem() { return new EmbalagemTecnologia(); }
}

class FabricaModa extends FabricaEcommerce {
    criarProduto()   { return new Camiseta(); }
    criarEmbalagem() { return new EmbalagemModa(); }
}

// 6. PEDIDO (cliente da fábrica)
class Pedido {
    constructor(fabrica) {
        this.produto   = fabrica.criarProduto();
        this.embalagem = fabrica.criarEmbalagem();
    }

    exibir() {
        console.log(`  Produto:   ${this.produto.descricao()}`);
        console.log(`  Preço:     ${this.produto.preco()}`);
        console.log(`  Embalagem: ${this.embalagem.tipo()}`);
    }
}

// 7. CLIENTE
console.log("=== E-commerce – Gestão de Pedidos ===\n");

console.log("[Linha: Eletrônicos]");
const pedidoEletronico = new Pedido(new FabricaEletronicos());
pedidoEletronico.exibir();

console.log("\n[Linha: Moda]");
const pedidoModa = new Pedido(new FabricaModa());
pedidoModa.exibir();
