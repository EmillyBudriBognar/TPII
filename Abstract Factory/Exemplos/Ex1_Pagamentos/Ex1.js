/**
 * PADRÃO: ABSTRACT FACTORY (FÁBRICA ABSTRATA)
 * 
 * O padrão Abstract Factory fornece uma interface para criar famílias de objetos 
 * relacionados ou dependentes sem especificar suas classes concretas.
 */

// 1. PRODUTOS ABSTRATOS (Usando classes base para simular interfaces)
class GatewayPagamento {
    autorizar(valor) { throw new Error("Método abstrato deve ser implementado"); }
}

class Recibo {
    gerar(valor) { throw new Error("Método abstrato deve ser implementado"); }
}

// 2. PRODUTOS CONCRETOS - FAMÍLIA PAYPAL
class GatewayPayPal extends GatewayPagamento {
    autorizar(valor) { return `Paypal: Pagamento de R$ ${valor.toFixed(2)} autorizado.`; }
}

class ReciboPayPal extends Recibo {
    gerar(valor) { return `PayPal: Recibo do pagamento de R$ ${valor.toFixed(2)}.`; }
}

// 2. PRODUTOS CONCRETOS - FAMÍLIA MERCADOPAGO
class GatewayMercadoPago extends GatewayPagamento {
    autorizar(valor) { return `Mercado Pago: Pagamento de R$ ${valor.toFixed(2)} autorizado.`; }
}

class ReciboMercadoPago extends Recibo {
    gerar(valor) { return `Mercado Pago: Recibo do pagamento de R$ ${valor.toFixed(2)}.`; }
}

// 3. FABRICA ABSTRATA
class FabricaPagamento {
    criarGateway() { throw new Error("Método abstrato"); }
    criarRecibo() { throw new Error("Método abstrato"); }
}

// 4. FABRICAS CONCRETAS
class FabricaPayPal extends FabricaPagamento {
    criarGateway() { return new GatewayPayPal(); }
    criarRecibo() { return new ReciboPayPal(); }
}

class FabricaMercadoPago extends FabricaPagamento {
    criarGateway() { return new GatewayMercadoPago(); }
    criarRecibo() { return new ReciboMercadoPago(); }
}

// 5. CLIENTE
function finalizarCompra(fabrica, valor) {
    // O cliente utiliza a fábrica para obter os objetos da família
    const gateway = fabrica.criarGateway();
    const recibo = fabrica.criarRecibo();

    console.log(gateway.autorizar(valor));
    console.log(recibo.gerar(valor));
}

// Testando o sistema
finalizarCompra(new FabricaPayPal(), 100.99);
console.log("*************************");
finalizarCompra(new FabricaMercadoPago(), 3100.99);
