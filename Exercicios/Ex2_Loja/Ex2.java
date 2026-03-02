// PRODUTOS ABSTRATOS
abstract class CartaoCredito {
    public abstract String pagar(double valor);
}

abstract class Boleto {
    public abstract String pagar(double valor);
}

// PRODUTOS CONCRETOS - BANCO A
class CartaoBancoA extends CartaoCredito {
    @Override
    public String pagar(double valor) {
        return "Banco A: Cobrança de R$ " + String.format("%.2f", valor) + " no cartão feita.";
    }
}

class BoletoBancoA extends Boleto {
    @Override
    public String pagar(double valor) {
        return "Banco A: Boleto de R$ " + String.format("%.2f", valor) + " gerado com sucesso.";
    }
}

// PRODUTOS CONCRETOS - BANCO B
class CartaoBancoB extends CartaoCredito {
    @Override
    public String pagar(double valor) {
        return "Banco B: Pagamento de R$ " + String.format("%.2f", valor) + " aprovado!";
    }
}

class BoletoBancoB extends Boleto {
    @Override
    public String pagar(double valor) {
        return "Banco B: Aqui está seu boleto de R$ " + String.format("%.2f", valor);
    }
}

// FABRICA ABSTRATA
abstract class FabricaBanco {
    public abstract CartaoCredito criarCartao();

    public abstract Boleto criarBoleto();
}

// FABRICAS CONCRETAS
class FabricaBancoA extends FabricaBanco {
    @Override
    public CartaoCredito criarCartao() {
        return new CartaoBancoA();
    }

    @Override
    public Boleto criarBoleto() {
        return new BoletoBancoA();
    }
}

class FabricaBancoB extends FabricaBanco {
    @Override
    public CartaoCredito criarCartao() {
        return new CartaoBancoB();
    }

    @Override
    public Boleto criarBoleto() {
        return new BoletoBancoB();
    }
}

// CLIENTE
public class Ex2 {
    public static void finalizarCompra(FabricaBanco fabrica, double valor) {
        CartaoCredito cartao = fabrica.criarCartao();
        Boleto boleto = fabrica.criarBoleto();

        System.out.println(" -> " + cartao.pagar(valor));
        System.out.println(" -> " + boleto.pagar(valor));
        System.out.println(" ----------------------------");
    }

    public static void main(String[] args) {
        System.out.println("\n--- COMPRA NO BANCO A ---");
        finalizarCompra(new FabricaBancoA(), 420.75);

        System.out.println("\n--- COMPRA NO BANCO B ---");
        finalizarCompra(new FabricaBancoB(), 189.30);
    }
}
