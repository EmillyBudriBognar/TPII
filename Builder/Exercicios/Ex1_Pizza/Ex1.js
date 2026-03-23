/**
 * PADRÃO: BUILDER
 * 
 * Exercício: Sistema de Pedidos de Pizza.
 * O padrão Builder permite construir a pizza ingrediente por ingrediente, 
 * evitando a necessidade de múltiplos construtores complexos.
 */

// 1. PRODUTO FINAL
class Pizza {
    constructor() {
        this.tamanho = "";
        this.massa = "";
        this.queijo = "";
        this.cobertura = "";
    }

    toString() {
        return `Pizza [Tamanho: ${this.tamanho}, Massa: ${this.massa}, Queijo: ${this.queijo}, Cobertura: ${this.cobertura}]`;
    }
}

// 2. BUILDER CONCRETO
class PizzaBuilder {
    constructor() {
        this.pizza = new Pizza();
    }

    setTamanho(tamanho) {
        this.pizza.tamanho = tamanho;
        return this;
    }

    setMassa(massa) {
        this.pizza.massa = massa;
        return this;
    }

    setQueijo(queijo) {
        this.pizza.queijo = queijo;
        return this;
    }

    setCobertura(cobertura) {
        this.pizza.cobertura = cobertura;
        return this;
    }

    construir() {
        return this.pizza;
    }
}

// 3. CLIENTE
const p1 = new PizzaBuilder()
    .setTamanho("Grande")
    .setMassa("Fina")
    .setQueijo("Mussarela")
    .setCobertura("Manjericão")
    .construir();

const p2 = new PizzaBuilder()
    .setTamanho("Média")
    .setMassa("Tradicional")
    .setQueijo("Gorgonzola")
    .setCobertura("Calabresa")
    .construir();

console.log("Pedido 1:", p1.toString());
console.log("Pedido 2:", p2.toString());
