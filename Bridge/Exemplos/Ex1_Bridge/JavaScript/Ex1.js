/**
 * PADRÃO: BRIDGE
 * 
 * O padrão Bridge desacopla uma abstração de sua implementação,
 * permitindo que ambas variem independentemente.
 */

// 1. IMPLEMENTAÇÃO (IMPLEMENTOR) - Interface de Cores
class Cor {
    obterCor() {
        throw new Error("Método abstrato: obterCor()");
    }
}

// 2. IMPLEMENTAÇÕES CONCRETAS (CONCRETE IMPLEMENTORS)
class CorVermelho extends Cor {
    obterCor() {
        return "vermelho";
    }
}

class CorAzul extends Cor {
    obterCor() {
        return "azul";
    }
}

class CorVerde extends Cor {
    obterCor() {
        return "verde";
    }
}

// 3. ABSTRAÇÃO (ABSTRACTION) - Interface de Formas
class Forma {
    constructor(cor) {
        this.cor = cor;
    }

    setCor(cor) {
        this.cor = cor;
    }

    desenhar() {
        throw new Error("Método abstrato: desenhar()");
    }
}

// 4. ABSTRAÇÕES REFINADAS (REFINED ABSTRACTIONS)
class Circulo extends Forma {
    desenhar() {
        console.log(`Desenhando um círculo ${this.cor.obterCor()}.`);
    }
}

class Quadrado extends Forma {
    desenhar() {
        console.log(`Desenhando um quadrado ${this.cor.obterCor()}.`);
    }
}

class Triangulo extends Forma {
    desenhar() {
        console.log(`Desenhando um triângulo ${this.cor.obterCor()}.`);
    }
}

// 5. CLIENTE
console.log("=== Demonstração do Padrão Bridge ===\n");

const vermelho = new CorVermelho();
const azul = new CorAzul();
const verde = new CorVerde();

const circuloVermelho = new Circulo(vermelho);
const quadradoVerde = new Quadrado(verde);
const trianguloAzul = new Triangulo(azul);

circuloVermelho.desenhar();
quadradoVerde.desenhar();
trianguloAzul.desenhar();

console.log("\nAlterando a cor do círculo dinamicamente...");
circuloVermelho.setCor(azul);
circuloVermelho.desenhar();
