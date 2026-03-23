/**
 * PADRÃO: SINGLETON
 * 
 * O padrão Singleton garante que uma classe tenha apenas uma única instância
 * e fornece um ponto de acesso global a essa instância.
 */

class Singleton {
    constructor() {
        // 1. VERIFICA SE JÁ EXISTE UMA INSTÂNCIA
        if (Singleton.instance) {
            return Singleton.instance;
        }

        // 2. SE NÃO EXISTIR, CRIA E ARMAZENA A INSTÂNCIA
        this.value = 0;
        console.log("Instância Singleton criada.");
        Singleton.instance = this;
    }

    static getInstance() {
        if (!Singleton.instance) {
            new Singleton();
        }
        return Singleton.instance;
    }

    increment() {
        this.value += 1;
        console.log(`Value: ${this.value}`);
    }
}


// 3. CLIENTE
const s1 = new Singleton(); // Criando a primeira vez
const s2 = Singleton.getInstance(); // Acessando a instância existente

s1.increment();
console.log(`Valor de s2: ${s2.value}`);

console.log(`s1 é estritamente igual a s2? ${s1 === s2}`);
