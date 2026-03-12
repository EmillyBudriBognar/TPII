// CLASSE DE DADO
class Nome {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    toString() { return `${this.nome} ${this.sobrenome}`; }
}

// FABRICA ABSTRATA
class FabricaDeNomes {
    criarNome(texto) { throw new Error("Método abstrato"); }
}

// FABRICAS CONCRETAS
class FabricaDeNomeSimples extends FabricaDeNomes {
    criarNome(texto) {
        const nomes = texto.split(" ");
        return new Nome(nomes[0], nomes[1]);
    }
}

class FabricaDeNomeComVirgula extends FabricaDeNomes {
    criarNome(texto) {
        const nomes = texto.split(",");
        return new Nome(nomes[1].trim(), nomes[0].trim());
    }
}

// CLIENTE
const fabricaSimples = new FabricaDeNomeSimples();
const fabricaVirgula = new FabricaDeNomeComVirgula();

console.log(fabricaSimples.criarNome("Stela Montenegro").toString());
console.log(fabricaVirgula.criarNome("Xavier, Lucas").toString());
