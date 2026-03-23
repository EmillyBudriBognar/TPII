/**
 * PADRÃO: ABSTRACT FACTORY (FÁBRICA ABSTRATA)
 * 
 * O Abstract Factory é um padrão de projeto criacional que permite produzir famílias 
 * de objetos relacionados (neste caso, Gateway e Recibo) sem especificar suas classes concretas.
 */

// 1. PRODUTOS ABSTRATOS (Interfaces que definem o que os produtos fazem)
interface GatewayPagamento {
    String autorizar(double valor);
}

interface Recibo {
    String gerar(double valor);
}

// 2. PRODUTOS CONCRETOS - FAMÍLIA PAYPAL
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

// 2. PRODUTOS CONCRETOS - FAMÍLIA MERCADOPAGO
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

// 3. FABRICA ABSTRATA (Interface que define como criar os produtos da família)
interface FabricaPagamento {
    GatewayPagamento criarGateway();
    Recibo criarRecibo();
}

// 4. FABRICAS CONCRETAS (Implementam a criação para cada família específica)
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

// 5. CLIENTE (Usa as fábricas sem se preocupar com as classes concretas)
public class Ex1 {
    public static void finalizarCompra(FabricaPagamento fabrica, double valor) {
        // O cliente trabalha com as interfaces, não com implementações
        GatewayPagamento gateway = fabrica.criarGateway();
        Recibo recibo = fabrica.criarRecibo();

        System.out.println(gateway.autorizar(valor));
        System.out.println(recibo.gerar(valor));
    }

    public static void main(String[] args) {
        // Executando com a família PayPal
        finalizarCompra(new FabricaPayPal(), 100.99);
        System.out.println("*************************");
        
        // Executando com a família Mercado Pago
        finalizarCompra(new FabricaMercadoPago(), 3100.99);
    }
}
