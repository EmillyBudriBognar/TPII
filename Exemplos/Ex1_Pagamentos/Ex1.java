// PRODUTOS ABSTRATOS
interface GatewayPagamento {
    String autorizar(double valor);
}

interface Recibo {
    String gerar(double valor);
}

// PRODUTOS CONCRETOS - PAYPAL
class GatewayPayPal implements GatewayPagamento {
    public String autorizar(double valor) {
        return String.format("Paypal: Pagamento de R$ %.2f autorizado.", valor);
    }
}

class ReciboPayPal implements Recibo {
    public String gerar(double valor) {
        return String.format("PayPal: Recibo do pagamento de R$ %.2f.", valor);
    }
}

// PRODUTOS CONCRETOS - MERCADOPAGO
class GatewayMercadoPago implements GatewayPagamento {
    public String autorizar(double valor) {
        return String.format("Mercado Pago: Pagamento de R$ %.2f autorizado.", valor);
    }
}

class ReciboMercadoPago implements Recibo {
    public String gerar(double valor) {
        return String.format("Mercado Pago: Recibo do pagamento de R$ %.2f.", valor);
    }
}

// FABRICA ABSTRATA
interface FabricaPagamento {
    GatewayPagamento criarGateway();

    Recibo criarRecibo();
}

// FABRICAS CONCRETAS
class FabricaPayPal implements FabricaPagamento {
    public GatewayPagamento criarGateway() {
        return new GatewayPayPal();
    }

    public Recibo criarRecibo() {
        return new ReciboPayPal();
    }
}

class FabricaMercadoPago implements FabricaPagamento {
    public GatewayPagamento criarGateway() {
        return new GatewayMercadoPago();
    }

    public Recibo criarRecibo() {
        return new ReciboMercadoPago();
    }
}

// CLIENTE
public class Ex1 {
    public static void finalizarCompra(FabricaPagamento fabrica, double valor) {
        GatewayPagamento gateway = fabrica.criarGateway();
        Recibo recibo = fabrica.criarRecibo();

        System.out.println(gateway.autorizar(valor));
        System.out.println(recibo.gerar(valor));
    }

    public static void main(String[] args) {
        finalizarCompra(new FabricaPayPal(), 100.99);
        System.out.println("*************************");
        finalizarCompra(new FabricaMercadoPago(), 3100.99);
        System.out.println("*************************");
        finalizarCompra(new FabricaPayPal(), 180.99);
        System.out.println("*************************");
        finalizarCompra(new FabricaMercadoPago(), 1008.99);
    }
}
