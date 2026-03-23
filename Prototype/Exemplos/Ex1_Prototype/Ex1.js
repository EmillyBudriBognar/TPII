/**
 * PADRÃO: PROTOTYPE
 * 
 * O padrão Prototype permite criar novos objetos a partir de um objeto modelo (protótipo),
 * permitindo a duplicação de um objeto existente sem depender explicitamente de sua classe.
 */

// 1. PROTÓTIPO CONCRETO
class Pessoa {
    constructor(id, nome, idade) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }
 
    /**
     * método clone para realizar uma cópia do objeto.
     * Em JavaScript, podemos simplesmente instanciar uma nova classe com os mesmos atributos.
     */
    clone() {
        return new Pessoa(this.id, this.nome, this.idade);
    }

    toString() {
        return `Pessoa [ID: ${this.id}, Nome: ${this.nome}, Idade: ${this.idade}]`;
    }
}
 
// 2. REGISTRY (Gerenciador de Protótipos)
class GerenciaPessoa {
    constructor() {
        this.pessoas = {};
    }
 
    // Adiciona uma nova pessoa ao dicionário
    addPessoa(id, nome, idade) {
        const pessoa = new Pessoa(id, nome, idade);
        this.pessoas[id] = pessoa;
    }
 
    // Retorna uma cópia da pessoa pelo id (Prototype em ação)
    getPessoaById(id) {
        const pessoaOriginal = this.pessoas[id];
        if (pessoaOriginal) {
            return pessoaOriginal.clone();
        }
        return null;
    }

    getOriginal(id) {
        return this.pessoas[id];
    }
}
 
// 3. CLIENTE
const gerencia = new GerenciaPessoa();
 
gerencia.addPessoa(1, "João", 30);
gerencia.addPessoa(2, "Maria", 25);
 
// Clonando a primeira pessoa
const pessoaClone = gerencia.getPessoaById(1);
 
// Modificando o clone
if (pessoaClone) {
    pessoaClone.nome = "Novo João";
}
 
// Exibindo resultados
console.log("Pessoa Original:");
console.log(gerencia.getOriginal(1).toString());
 
console.log("Pessoa Clone:");
console.log(pessoaClone ? pessoaClone.toString() : "Não encontrado");
