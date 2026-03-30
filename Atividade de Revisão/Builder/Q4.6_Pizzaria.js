/**
 * PADRÃO: BUILDER
 * QUESTÃO 4.6 – Pizzaria Personalizada
 *
 * Problema: Um sistema de pizzaria permite montar pizza com diferentes
 * ingredientes, separando cada etapa da montagem em métodos do Builder.
 *
 * Solução: Builder com métodos encadeados (fluent interface) para
 * montar pizzas passo a passo.
 */

// 1. PRODUTO
class Pizza {
    constructor() {
        this.tamanho     = null;
        this.massa       = null;
        this.molho       = null;
        this.queijo      = null;
        this.ingredientes = [];
        this.extra       = [];
    }

    toString() {
        return [
            `🍕 Pizza [${this.tamanho}]`,
            `   Massa:        ${this.massa}`,
            `   Molho:        ${this.molho}`,
            `   Queijo:       ${this.queijo}`,
            `   Ingredientes: ${this.ingredientes.join(", ")}`,
            this.extra.length ? `   Extras:       ${this.extra.join(", ")}` : "",
        ].filter(Boolean).join("\n");
    }
}

// 2. BUILDER
class PizzaBuilder {
    constructor() {
        this._pizza = new Pizza();
    }

    tamanho(t)       { this._pizza.tamanho = t;         return this; }
    massa(m)         { this._pizza.massa = m;            return this; }
    molho(m)         { this._pizza.molho = m;            return this; }
    queijo(q)        { this._pizza.queijo = q;           return this; }
    adicionarIngrediente(i) { this._pizza.ingredientes.push(i); return this; }
    adicionarExtra(e)       { this._pizza.extra.push(e);        return this; }

    build() {
        if (!this._pizza.tamanho) throw new Error("Tamanho é obrigatório!");
        if (!this._pizza.massa)   throw new Error("Tipo de massa é obrigatório!");
        const pizza = this._pizza;
        this._pizza = new Pizza(); // reseta para a próxima pizza
        return pizza;
    }
}

// 3. CLIENTE – montagem fluente
console.log("=== Pizzaria Personalizada ===\n");

const builder = new PizzaBuilder();

const pizzaMargherita = builder
    .tamanho("Grande (35cm)")
    .massa("Fina e crocante")
    .molho("Tomate San Marzano")
    .queijo("Mozzarella de búfala")
    .adicionarIngrediente("Manjericão fresco")
    .adicionarIngrediente("Azeite extra virgem")
    .build();

console.log(pizzaMargherita.toString());
console.log();

const pizzaFrango = builder
    .tamanho("Média (28cm)")
    .massa("Grossa e macia")
    .molho("Cream cheese")
    .queijo("Catupiry")
    .adicionarIngrediente("Frango desfiado")
    .adicionarIngrediente("Cheddar")
    .adicionarIngrediente("Cebola caramelizada")
    .adicionarExtra("Borda recheada com catupiry")
    .build();

console.log(pizzaFrango.toString());
