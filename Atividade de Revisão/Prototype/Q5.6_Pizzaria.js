/**
 * PADRÃO: PROTOTYPE
 * QUESTÃO 5.6 – Pizzaria com Clonagem de Pedidos
 *
 * Problema: Uma pizzaria usa protótipos de pizzas para clonagem rápida
 * dos pedidos, permitindo alterações no clone (ingredientes extras).
 *
 * Solução: Classe Pizza com método clone() que copia todos os atributos,
 * permitindo customização após a clonagem.
 */

// 1. PROTOTYPE – Pizza
class Pizza {
    constructor({ nome, tamanho, massa, molho, queijo, ingredientes }) {
        this.nome         = nome;
        this.tamanho      = tamanho;
        this.massa        = massa;
        this.molho        = molho;
        this.queijo       = queijo;
        this.ingredientes = [...(ingredientes || [])];
    }

    // Cópia profunda da pizza (garante independência do clone)
    clone() {
        return new Pizza({
            nome:         this.nome,
            tamanho:      this.tamanho,
            massa:        this.massa,
            molho:        this.molho,
            queijo:       this.queijo,
            ingredientes: [...this.ingredientes],
        });
    }

    adicionarIngrediente(ingrediente) {
        this.ingredientes.push(ingrediente);
        return this; // fluent
    }

    removerIngrediente(ingrediente) {
        this.ingredientes = this.ingredientes.filter(i => i !== ingrediente);
        return this;
    }

    renomear(nome) {
        this.nome = nome;
        return this;
    }

    toString() {
        return [
            `🍕 ${this.nome} [${this.tamanho}]`,
            `   Massa:        ${this.massa}`,
            `   Molho:        ${this.molho}`,
            `   Queijo:       ${this.queijo}`,
            `   Ingredientes: ${this.ingredientes.join(", ")}`,
        ].join("\n");
    }
}

// 2. CARDÁPIO – protótipos de pizzas padrão
const cardapio = {
    margherita: new Pizza({
        nome:         "Margherita Clássica",
        tamanho:      "Grande (35cm)",
        massa:        "Fina crocante",
        molho:        "Tomate San Marzano",
        queijo:       "Mozzarella de búfala",
        ingredientes: ["Manjericão fresco", "Azeite"],
    }),

    pepperoni: new Pizza({
        nome:         "Pepperoni Especial",
        tamanho:      "Grande (35cm)",
        massa:        "Tradicional",
        molho:        "Tomate temperado",
        queijo:       "Mozzarella",
        ingredientes: ["Pepperoni", "Pimentão verde"],
    }),
};

// 3. CLIENTE – clonar e personalizar pedidos
console.log("=== Pizzaria – Sistema de Pedidos por Clonagem ===\n");

// Pedido 1: Margherita clássica sem alteração
const pedido1 = cardapio.margherita.clone();
console.log("Pedido #001:");
console.log(pedido1.toString());

// Pedido 2: Margherita com extras (sem alterar o protótipo)
const pedido2 = cardapio.margherita.clone()
    .renomear("Margherita Especial")
    .adicionarIngrediente("Tomate cereja")
    .adicionarIngrediente("Rúcula");
console.log("\nPedido #002 (clone personalizado):");
console.log(pedido2.toString());

// Pedido 3: Pepperoni sem pimentão
const pedido3 = cardapio.pepperoni.clone()
    .renomear("Pepperoni sem Pimentão")
    .removerIngrediente("Pimentão verde")
    .adicionarIngrediente("Cheddar extra");
console.log("\nPedido #003 (clone com remoção + extra):");
console.log(pedido3.toString());

// Verificação: protótipos originais nao foram alterados
console.log("\n--- Protótipo original (deve permanecer inalterado) ---");
console.log(cardapio.margherita.toString());
