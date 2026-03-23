/**
 * PADRÃO: FACTORY METHOD (MÉTODO FÁBRICA)
 * 
 * O Factory Method é útil para encapsular a lógica de criação de objetos 
 * quando essa criação depende do formato dos dados de entrada.
 */

// 1. PRODUTO ABSTRATO (Base)
class Nome {
    constructor() {
        this.nome = "";
        this.sobrenome = "";
    }

    toString() {
        return `Nome: ${this.nome} | Sobrenome: ${this.sobrenome}`;
    }
}

// 2. PRODUTOS CONCRETOS
class NomeSimples extends Nome {
    constructor(s) {
        super();
        this.nome = s;
    }
}

class NomeSobrenome extends Nome {
    constructor(s) {
        super();
        const parts = s.split(",");
        if (parts.length > 1) {
            this.sobrenome = parts[0].trim();
            this.nome = parts[1].trim();
        }
    }
}

// 3. CRIADOR (Fábrica)
class FabricaDeNomes {
    // Factory Method
    getNome(s) {
        if (s.includes(",")) {
            return new NomeSobrenome(s);
        } else {
            return new NomeSimples(s);
        }
    }
}

// 4. CLIENTE
const fabrica = new FabricaDeNomes();

const n1 = fabrica.getNome("Silvio Santos");
const n2 = fabrica.getNome("Lula, Luiz Inácio");

console.log(n1.toString());
console.log(n2.toString());
