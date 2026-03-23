/**
 * PADRÃO: BUILDER
 * 
 * Exercício: Sistema de Pedidos de Pizza.
 * O Builder é ideal aqui porque uma pizza pode ter muitas combinações 
 * de ingredientes (tamanho, massa, queijo, coberturas).
 */

// 1. PRODUTO FINAL
class Pizza {
    String tamanho;
    String massa;
    String queijo;
    String cobertura;

    @Override
    public String toString() {
        return "Pizza [Tamanho: " + tamanho + ", Massa: " + massa + ", Queijo: " + queijo + ", Cobertura: " + cobertura + "]";
    }
}

// 2. BUILDER CONCRETO
class PizzaBuilder {
    private Pizza pizza = new Pizza();

    public PizzaBuilder setTamanho(String tamanho) {
        pizza.tamanho = tamanho;
        return this;
    }

    public PizzaBuilder setMassa(String massa) {
        pizza.massa = massa;
        return this;
    }

    public PizzaBuilder setQueijo(String queijo) {
        pizza.queijo = queijo;
        return this;
    }

    public PizzaBuilder setCobertura(String cobertura) {
        pizza.cobertura = cobertura;
        return this;
    }

    public Pizza construir() {
        return pizza;
    }
}

// 3. CLIENTE
public class Ex1 {
    public static void main(String[] args) {
        // Criando uma Pizza Margherita personalizada
        Pizza p1 = new PizzaBuilder()
            .setTamanho("Grande")
            .setMassa("Fina")
            .setQueijo("Mussarela")
            .setCobertura("Manjericão")
            .construir();

        // Criando uma Pizza Pepperoni
        Pizza p2 = new PizzaBuilder()
            .setTamanho("Média")
            .setMassa("Tradicional")
            .setQueijo("Mussarela")
            .setCobertura("Pepperoni")
            .construir();

        System.out.println("Pedido 1: " + p1);
        System.out.println("Pedido 2: " + p2);
    }
}
