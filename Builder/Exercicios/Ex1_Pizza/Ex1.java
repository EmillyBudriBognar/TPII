// PRODUTO
class Pizza {
    private String tamanho;
    private String massa;
    private String queijo;
    private boolean pepperoni;
    private boolean cogumelos;

    public void setTamanho(String tamanho) { this.tamanho = tamanho; }
    public void setMassa(String massa) { this.massa = massa; }
    public void setQueijo(String queijo) { this.queijo = queijo; }
    public void setPepperoni(boolean pepperoni) { this.pepperoni = pepperoni; }
    public void setCogumelos(boolean cogumelos) { this.cogumelos = cogumelos; }

    @Override
    public String toString() {
        return "Pizza [tamanho=" + tamanho + ", massa=" + massa + ", queijo=" + queijo + ", pepperoni=" + pepperoni + ", cogumelos=" + cogumelos + "]";
    }
}

// BUILDER
class PizzaBuilder {
    private Pizza pizza = new Pizza();

    public PizzaBuilder addTamanho(String tamanho) {
        pizza.setTamanho(tamanho);
        return this;
    }

    public PizzaBuilder addMassa(String massa) {
        pizza.setMassa(massa);
        return this;
    }

    public PizzaBuilder addQueijo(String queijo) {
        pizza.setQueijo(queijo);
        return this;
    }

    public PizzaBuilder addPepperoni() {
        pizza.setPepperoni(true);
        return this;
    }

    public PizzaBuilder addCogumelos() {
        pizza.setCogumelos(true);
        return this;
    }

    public Pizza construir() {
        return pizza;
    }
}

// CLIENTE
public class Ex1 {
    public static void main(String[] args) {
        Pizza pizza1 = new PizzaBuilder()
            .addTamanho("Grande")
            .addMassa("Fina")
            .addQueijo("Mussarela")
            .addPepperoni()
            .construir();

        System.out.println("Pedido 1: " + pizza1);
    }
}
