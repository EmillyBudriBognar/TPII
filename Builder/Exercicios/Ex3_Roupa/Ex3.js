/**
 * PADRÃO: BUILDER
 * 
 * Exercício: Fábrica de Roupas customizadas.
 * Este exemplo ilustra como o Builder facilita a passagens de múltiplos 
 * atributos (Cor, Tipo, Tamanho, Preço) de forma legível.
 */

// 1. COMPONENTES DO PRODUTO
class Tipo { constructor(tipo) { this.tipo = tipo; } }
class Tamanho { constructor(tamanho) { this.tamanho = tamanho; } }
class Cor { constructor(cor) { this.cor = cor; } }
class Preco { constructor(preco) { this.preco = preco; } }

// 2. PRODUTO FINAL
class Roupa {
    constructor(tipo, cor, tamanho, preco) {
        this.tipo = tipo;
        this.cor = cor;
        this.tamanho = tamanho;
        this.preco = preco;
    }

    toString() {
        return `Roupa [Cor: ${this.cor.cor}, Tipo: ${this.tipo.tipo}, Tamanho: ${this.tamanho.tamanho}, Preço: R$ ${this.preco.preco.toFixed(2)}]`;
    }
}

// 3. BUILDER CONCRETO
class RoupaBuilder {
    constructor() {
        this.tipo = null;
        this.cor = null;
        this.tamanho = null;
        this.preco = null;
    }

    addTipo(tipo) {
        this.tipo = new Tipo(tipo);
        return this;
    }

    addCor(cor) {
        this.cor = new Cor(cor);
        return this;
    }

    addTamanho(tamanho) {
        this.tamanho = new Tamanho(tamanho);
        return this;
    }

    addPreco(preco) {
        this.preco = new Preco(preco);
        return this;
    }

    construir() {
        return new Roupa(this.tipo, this.cor, this.tamanho, this.preco);
    }
}

// 4. CLIENTE
const builder = new RoupaBuilder();
const roupa1 = builder
    .addCor("Verde")
    .addPreco(49.90)
    .addTamanho("G")
    .addTipo("Moleton")
    .construir();

console.log(roupa1.toString());
