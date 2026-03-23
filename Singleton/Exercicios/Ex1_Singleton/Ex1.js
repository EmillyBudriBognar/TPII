/**
 * PADRÃO: SINGLETON E PROTOTYPE (EXERCÍCIO SIGA)
 * 
 * Este exercício demonstra o uso do Singleton para gerenciar o sistema SIGA
 * e o Prototype para clonar objetos de Alunos.
 */

// 1. PROTÓTIPO DE ALUNO
class Aluno {
    constructor(curso, nome, periodo, idade, unidade) {
        this.curso = curso;
        this.nome = nome;
        this.periodo = periodo;
        this.idade = idade;
        this.unidade = unidade || "Fatec Diadema";
    }

    // Método de clonagem (Prototype)
    clone() {
        return new Aluno(this.curso, this.nome, this.periodo, this.idade, this.unidade);
    }

    toString() {
        return `Aluno: ${this.nome}, Curso: ${this.curso}, Período: ${this.periodo}, Idade: ${this.idade}, Unidade: ${this.unidade}`;
    }
}

// 2. SINGLETON SIGA (Gerenciador do Sistema)
class Siga {
    constructor() {
        if (Siga.instance) {
            return Siga.instance;
        }
        this.alunos = [];
        Siga.instance = this;
    }

    static getInstance() {
        if (!Siga.instance) {
            new Siga();
        }
        return Siga.instance;
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }

    listarAlunos() {
        return this.alunos.map(a => a.toString()).join("\n");
    }
}

// 3. CLIENTE
const siga = Siga.getInstance();

// Criando aluno original
const aluno1 = new Aluno("DSM", "Stela", "Manhã", 19);
siga.adicionarAluno(aluno1);

// Clonando aluno para criar um novo (Prototype)
const aluno2 = aluno1.clone();
aluno2.nome = "João";
siga.adicionarAluno(aluno2);

console.log("Alunos cadastrados no SIGA:");
console.log(siga.listarAlunos());
