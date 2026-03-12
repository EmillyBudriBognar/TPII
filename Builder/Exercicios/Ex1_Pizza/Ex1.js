class Pizza {
    constructor() {
        this.tamanho = "";
        this.massa = "";
        this.queijo = "";
        this.pepperoni = false;
        this.cogumelos = false;
    }

    toString() {
        return `Pizza [Tamanho=${this.tamanho}, Massa=${this.massa}, Queijo=${this.queijo}, Pepperoni=${this.pepperoni}, Cogumelos=${this.cogumelos}]`;
    }
}

class PizzaBuilder {
    constructor() {
        this.pizza = new Pizza();
    }

    addTamanho(tamanho) {
        this.pizza.tamanho = tamanho;
        return this;
    }

    addMassa(massa) {
        this.pizza.massa = massa;
        return this;
    }

    addQueijo(queijo) {
        this.pizza.queijo = queijo;
        return this;
    }

    addPepperoni() {
        this.pizza.pepperoni = true;
        return this;
    }

    addCogumelos() {
        this.pizza.cogumelos = true;
        return this;
    }

    construir() {
        return this.pizza;
    }
}

// CLIENTE
const p1 = new PizzaBuilder()
    .addTamanho("Média")
    .addMassa("Tradicional")
    .addQueijo("Cheddar")
    .addCogumelos()
    .construir();

console.log("Pedido 1:", p1.toString());
