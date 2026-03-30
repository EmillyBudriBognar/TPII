/**
 * PADRÃO: PROTOTYPE
 * QUESTÃO 5.7 – Sistema CAD – Clonagem de Formas Gráficas
 *
 * Problema: Um sistema CAD permite clonar formas gráficas com pequenas
 * alterações. Formas são classes concretas com método clone().
 *
 * Solução: Hierarquia de formas com clone() implementado em cada classe.
 */

// 1. PROTOTYPE BASE
class Forma {
    constructor(cor, posicaoX, posicaoY) {
        this.cor      = cor      || "preto";
        this.posicaoX = posicaoX || 0;
        this.posicaoY = posicaoY || 0;
    }

    clone()     { throw new Error("Método abstrato: clone()"); }
    desenhar()  { throw new Error("Método abstrato: desenhar()"); }

    mover(x, y) {
        this.posicaoX = x;
        this.posicaoY = y;
        return this;
    }

    colorir(cor) {
        this.cor = cor;
        return this;
    }

    _infoBase() {
        return `cor="${this.cor}" pos=(${this.posicaoX}, ${this.posicaoY})`;
    }
}

// 2. FORMAS CONCRETAS
class Circulo extends Forma {
    constructor(raio, cor, x, y) {
        super(cor, x, y);
        this.raio = raio;
    }

    clone() {
        return new Circulo(this.raio, this.cor, this.posicaoX, this.posicaoY);
    }

    desenhar() {
        return `⭕ Círculo [raio=${this.raio}, ${this._infoBase()}]`;
    }
}

class Retangulo extends Forma {
    constructor(largura, altura, cor, x, y) {
        super(cor, x, y);
        this.largura = largura;
        this.altura  = altura;
    }

    clone() {
        return new Retangulo(this.largura, this.altura, this.cor, this.posicaoX, this.posicaoY);
    }

    desenhar() {
        return `▬ Retângulo [${this.largura}x${this.altura}, ${this._infoBase()}]`;
    }
}

class Triangulo extends Forma {
    constructor(base, alturaT, cor, x, y) {
        super(cor, x, y);
        this.base    = base;
        this.alturaT = alturaT;
    }

    clone() {
        return new Triangulo(this.base, this.alturaT, this.cor, this.posicaoX, this.posicaoY);
    }

    desenhar() {
        return `▲ Triângulo [base=${this.base}, altura=${this.alturaT}, ${this._infoBase()}]`;
    }
}

class Linha extends Forma {
    constructor(comprimento, angulo, cor, x, y) {
        super(cor, x, y);
        this.comprimento = comprimento;
        this.angulo      = angulo || 0;
    }

    clone() {
        return new Linha(this.comprimento, this.angulo, this.cor, this.posicaoX, this.posicaoY);
    }

    desenhar() {
        return `— Linha [comp=${this.comprimento}, ângulo=${this.angulo}°, ${this._infoBase()}]`;
    }
}

// 3. CANVAS CAD – gerencia formas
class CanvasCAD {
    constructor() {
        this.formas = [];
    }

    adicionar(forma) {
        this.formas.push(forma);
        return this;
    }

    renderizar() {
        console.log(`Canvas com ${this.formas.length} elemento(s):`);
        this.formas.forEach((f, i) => console.log(`  [${i + 1}] ${f.desenhar()}`));
    }
}

// 4. CLIENTE
console.log("=== Sistema CAD – Clonagem de Formas ===\n");

// Formas originais
const circuloOriginal    = new Circulo(50, "vermelho", 10, 20);
const retanguloOriginal  = new Retangulo(200, 100, "azul", 50, 50);
const trianguloOriginal  = new Triangulo(80, 60, "verde", 30, 80);

const canvas1 = new CanvasCAD()
    .adicionar(circuloOriginal)
    .adicionar(retanguloOriginal)
    .adicionar(trianguloOriginal);

console.log("Canvas 1 (originais):");
canvas1.renderizar();

// Clonagem com pequenas alterações
const circuloClone    = circuloOriginal.clone().colorir("amarelo").mover(300, 50);
const retanguloClone  = retanguloOriginal.clone().mover(10, 200);
const trianguloClone  = trianguloOriginal.clone().colorir("roxo").mover(200, 300);
const linhaExtra      = new Linha(150, 45, "cinza", 100, 100);

const canvas2 = new CanvasCAD()
    .adicionar(circuloClone)
    .adicionar(retanguloClone)
    .adicionar(trianguloClone)
    .adicionar(linhaExtra);

console.log("\nCanvas 2 (clones + modificações):");
canvas2.renderizar();

console.log("\nOriginal inalterado:", circuloOriginal.desenhar());
