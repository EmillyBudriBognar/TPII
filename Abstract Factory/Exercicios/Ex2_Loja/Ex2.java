/**
 * PADRÃO: ABSTRACT FACTORY (FÁBRICA ABSTRATA)
 * 
 * Exercício: Sistema de Pagamentos de Loja.
 * O objetivo é garantir que a forma de pagamento (Cartão ou Boleto) 
 * seja processada pelo mesmo banco (Família Banco A ou Banco B).
 */

// 1. PRODUTOS ABSTRATOS
abstract class CartaoCredito {
    public abstract String pagar(double valor);
}

abstract class Boleto {
    public abstract String pagar(double valor);
}

// 2. PRODUTOS CONCRETOS - FAMÍLIA BANCO A
class CartaoBancoA extends CartaoCredito {
    @Override
    public String pagar(double valor) {
        return "Banco A: Cobrança de R$ " + String.format("%.2f", valor) + " no cartão realizada.";
    }
}

class BoletoBancoA extends Boleto {
    @Override
    public String pagar(double valor) {
        return "Banco A: Boleto de R$ " + String.format("%.2f", valor) + " gerado com sucesso.";
    }
}

// 2. PRODUTOS CONCRETOS - FAMÍLIA BANCO B
class CartaoBancoB extends CartaoCredito {
    @Override
    public String pagar(double valor) {
        return "Banco B: Pagamento de R$ " + String.format("%.2f", valor) + " aprovado no cartão!";
    }
}

class BoletoBancoB extends Boleto {
    @Override
    public String pagar(double valor) {
        return "Banco B: Aqui está seu boleto de R$ " + String.format("%.2f", valor);
    }
}

// 3. FABRICA ABSTRATA
abstract class FabricaBanco {
    public abstract CartaoCredito criarCartao();
    public abstract Boleto criarBoleto();
}

// 4. FABRICAS CONCRETAS
class FabricaBancoA extends FabricaBanco {
    @Override
    public CartaoCredito criarCartao() { return new CartaoBancoA(); }
    @Override
    public Boleto criarBoleto() { return new BoletoBancoA(); }
}

class FabricaBancoB extends FabricaBanco {
    @Override
    public CartaoCredito criarCartao() { return new CartaoBancoB(); }
    @Override
    public Boleto criarBoleto() { return new BoletoBancoB(); }
}

// 5. CLIENTE
public class Ex2 {
    public static void finalizarCompra(FabricaBanco fabrica, double valor) {
        // O cliente trabalha com as abstrações fornecidas pela fábrica
        CartaoCredito cartao = fabrica.criarCartao();
        Boleto boleto = fabrica.criarBoleto();

        System.out.println(" -> " + cartao.pagar(valor));
        System.out.println(" -> " + boleto.pagar(valor));
        System.out.println(" ----------------------------");
    }

    public static void main(String[] args) {
        System.out.println("\n--- FINALIZANDO NO BANCO A ---");
        finalizarCompra(new FabricaBancoA(), 420.75);

        System.out.println("\n--- FINALIZANDO NO BANCO B ---");
        finalizarCompra(new FabricaBancoB(), 189.30);
    }
}
