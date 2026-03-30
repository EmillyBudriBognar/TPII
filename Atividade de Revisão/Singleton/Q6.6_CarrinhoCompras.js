/**
 * PADRÃO: SINGLETON
 * QUESTÃO 6.6 – Carrinho de Compras (por usuário)
 *
 * Problema: Uma aplicação de vendas online deve garantir um único carrinho
 * de compras por usuário, com consistência nas operações.
 *
 * Solução: Singleton por usuário — cada usuário tem exatamente uma instância
 * do seu carrinho, centralizada no sistema.
 *
 * Nota: Aqui usamos Singleton com mapa de instâncias por userId,
 * que é a abordagem correta para garantir "um carrinho por usuário".
 */

// 1. PRODUTO (Item do carrinho)
class ItemCarrinho {
    constructor(id, nome, preco, quantidade) {
        this.id         = id;
        this.nome       = nome;
        this.preco      = preco;
        this.quantidade = quantidade;
    }

    subtotal() {
        return this.preco * this.quantidade;
    }

    toString() {
        return `  [${this.id}] ${this.nome.padEnd(25)} x${this.quantidade}  R$ ${this.subtotal().toFixed(2).padStart(8)}`;
    }
}

// 2. SINGLETON – CarrinhoCompras (por userId)
class CarrinhoCompras {
    // Mapa estático: userId → instância do carrinho
    static _carrinhos = new Map();

    constructor(userId) {
        this.userId = userId;
        this._itens = new Map(); // id → ItemCarrinho
    }

    static getInstance(userId) {
        if (!CarrinhoCompras._carrinhos.has(userId)) {
            CarrinhoCompras._carrinhos.set(userId, new CarrinhoCompras(userId));
        }
        return CarrinhoCompras._carrinhos.get(userId);
    }

    adicionarItem(id, nome, preco, quantidade = 1) {
        if (this._itens.has(id)) {
            this._itens.get(id).quantidade += quantidade;
        } else {
            this._itens.set(id, new ItemCarrinho(id, nome, preco, quantidade));
        }
        console.log(`  🛒 [${this.userId}] "${nome}" adicionado (qtd: ${this._itens.get(id).quantidade})`);
    }

    removerItem(id) {
        if (this._itens.has(id)) {
            const nome = this._itens.get(id).nome;
            this._itens.delete(id);
            console.log(`  ❌ [${this.userId}] "${nome}" removido`);
        }
    }

    alterarQuantidade(id, novaQtd) {
        if (novaQtd <= 0) {
            this.removerItem(id);
        } else if (this._itens.has(id)) {
            this._itens.get(id).quantidade = novaQtd;
        }
    }

    total() {
        let soma = 0;
        this._itens.forEach(item => { soma += item.subtotal(); });
        return soma;
    }

    exibir() {
        console.log(`\n🛍️  Carrinho do usuário: ${this.userId}`);
        if (this._itens.size === 0) {
            console.log("  Carrinho vazio.");
        } else {
            console.log("  ITEM                      QTD      SUBTOTAL");
            console.log("  " + "─".repeat(50));
            this._itens.forEach(item => console.log(item.toString()));
            console.log("  " + "─".repeat(50));
            console.log(`  TOTAL:                             R$ ${this.total().toFixed(2).padStart(8)}`);
        }
    }

    limpar() {
        this._itens.clear();
        console.log(`  🗑️  Carrinho de ${this.userId} limpo.`);
    }
}

// 3. CLIENTE – múltiplas referências ao carrinho do mesmo usuário
console.log("=== Carrinho de Compras (Singleton por Usuário) ===\n");

// Página de produto (usa carrinho de user-001)
const carrinhoA = CarrinhoCompras.getInstance("user-001");
carrinhoA.adicionarItem("P1", "Smartphone Samsung A55", 2199.90);
carrinhoA.adicionarItem("P2", "Cabo USB-C 2m", 49.90, 2);

// Minicart (também pega o carrinho de user-001)
const carrinhoB = CarrinhoCompras.getInstance("user-001");
carrinhoB.adicionarItem("P1", "Smartphone Samsung A55", 2199.90); // adiciona mais 1 unidade

// Verificação: mesma instância
console.log("\nMesma instância (user-001)?", carrinhoA === carrinhoB); // true

carrinhoA.exibir();

// Outro usuário tem seu próprio carrinho isolado
console.log("\n--- Outro usuário ---");
const carrinhoUser2 = CarrinhoCompras.getInstance("user-002");
carrinhoUser2.adicionarItem("P3", "Fone de Ouvido JBL", 399.90);
carrinhoUser2.exibir();

// Carrinho de user-001 não foi afetado
console.log("\nVerificando isolamento – carrinho user-001:");
carrinhoA.exibir();
