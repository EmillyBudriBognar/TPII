// PRODUTOS ABSTRATOS
class CartaoCredito {
    pagar(valor) {
        throw new Error("Método abstrato");
    }
}

class Boleto {
    pagar(valor) {
        throw new Error("Método abstrato");
    }
}

// PRODUTOS CONCRETOS - BANCO A
class CartaoBancoA extends CartaoCredito {
    pagar(valor) {
        return `Banco A: Cobrança de R$ ${valor.toFixed(2)} no cartão feita.`;
    }
}

class BoletoBancoA extends Boleto {
    pagar(valor) {
        return `Banco A: Boleto de R$ ${valor.toFixed(2)} gerado com sucesso.`;
    }
}

// PRODUTOS CONCRETOS - BANCO B
class CartaoBancoB extends CartaoCredito {
    pagar(valor) {
        return `Banco B: Pagamento de R$ ${valor.toFixed(2)} aprovado!`;
    }
}

class BoletoBancoB extends Boleto {
    pagar(valor) {
        return `Banco B: Aqui está seu boleto de R$ ${valor.toFixed(2)}`;
    }
}

// FABRICA ABSTRATA
class FabricaBanco {
    criarCartao() { throw new Error("Método abstrato"); }
    criarBoleto() { throw new Error("Método abstrato"); }
}

// FABRICAS CONCRETAS
class FabricaBancoA extends FabricaBanco {
    criarCartao() { return new CartaoBancoA(); }
    criarBoleto() { return new BoletoBancoA(); }
}

class FabricaBancoB extends FabricaBanco {
    criarCartao() { return new CartaoBancoB(); }
    criarBoleto() { return new BoletoBancoB(); }
}

// CLIENTE
function finalizarCompra(fabrica, valor) {
    const cartao = fabrica.criarCartao();
    const boleto = fabrica.criarBoleto();

    console.log(" -> " + cartao.pagar(valor));
    console.log(" -> " + boleto.pagar(valor));
    console.log(" ----------------------------");
}

console.log("\n--- COMPRA NO BANCO A ---");
finalizarCompra(new FabricaBancoA(), 420.75);

console.log("\n--- COMPRA NO BANCO B ---");
finalizarCompra(new FabricaBancoB(), 189.30);
