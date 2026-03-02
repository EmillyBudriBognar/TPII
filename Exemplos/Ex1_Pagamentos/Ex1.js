// PRODUTOS ABSTRATOS
class GatewayPagamento {
    autorizar(valor) { throw new Error("Método abstrato"); }
}

class Recibo {
    gerar(valor) { throw new Error("Método abstrato"); }
}

// PRODUTOS CONCRETOS - PAYPAL
class GatewayPayPal extends GatewayPagamento {
    autorizar(valor) { return `Paypal: Pagamento de R$ ${valor.toFixed(2)} autorizado.`; }
}

class ReciboPayPal extends Recibo {
    gerar(valor) { return `PayPal: Recibo do pagamento de R$ ${valor.toFixed(2)}.`; }
}

// PRODUTOS CONCRETOS - MERCADOPAGO
class GatewayMercadoPago extends GatewayPagamento {
    autorizar(valor) { return `Mercado Pago: Pagamento de R$ ${valor.toFixed(2)} autorizado.`; }
}

class ReciboMercadoPago extends Recibo {
    gerar(valor) { return `Mercado Pago: Recibo do pagamento de R$ ${valor.toFixed(2)}.`; }
}

// FABRICA ABSTRATA
class FabricaPagamento {
    criarGateway() { throw new Error("Método abstrato"); }
    criarRecibo() { throw new Error("Método abstrato"); }
}

// FABRICAS CONCRETAS
class FabricaPayPal extends FabricaPagamento {
    criarGateway() { return new GatewayPayPal(); }
    criarRecibo() { return new ReciboPayPal(); }
}

class FabricaMercadoPago extends FabricaPagamento {
    criarGateway() { return new GatewayMercadoPago(); }
    criarRecibo() { return new ReciboMercadoPago(); }
}

// CLIENTE
function finalizarCompra(fabrica, valor) {
    const gateway = fabrica.criarGateway();
    const recibo = fabrica.criarRecibo();

    console.log(gateway.autorizar(valor));
    console.log(recibo.gerar(valor));
}

finalizarCompra(new FabricaPayPal(), 100.99);
console.log("*************************");
finalizarCompra(new FabricaMercadoPago(), 3100.99);
