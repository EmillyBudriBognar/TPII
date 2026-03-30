/**
 * PADRÃO: BUILDER
 * QUESTÃO 4.9 – Cadastro de Estudantes
 *
 * Problema: Um sistema de cadastro permite definir nome, curso, endereço,
 * e-mail, celular, responsáveis — com preenchimento opcional dos dados.
 *
 * Solução: Builder permite preencher apenas os campos necessários,
 * evitando construtores com muitos parâmetros.
 */

// 1. PRODUTO
class Estudante {
    constructor(builder) {
        // Campos obrigatórios
        this.nome          = builder.nome;
        this.ra            = builder.ra;
        this.curso         = builder.curso;
        // Campos opcionais
        this.email         = builder.email         || null;
        this.celular       = builder.celular        || null;
        this.endereco      = builder.endereco       || null;
        this.responsaveis  = builder.responsaveis   || [];
        this.periodo       = builder.periodo        || null;
        this.ativo         = builder.ativo          !== undefined ? builder.ativo : true;
    }

    toString() {
        const linhas = [
            `Estudante: ${this.nome} (RA: ${this.ra})`,
            `  Curso:       ${this.curso}`,
            `  Período:     ${this.periodo || "N/A"}`,
            `  E-mail:      ${this.email   || "Não informado"}`,
            `  Celular:     ${this.celular || "Não informado"}`,
            `  Endereço:    ${this.endereco || "Não informado"}`,
            `  Responsáveis: ${this.responsaveis.length ? this.responsaveis.join("; ") : "Nenhum"}`,
            `  Status:      ${this.ativo ? "✅ Ativo" : "❌ Inativo"}`,
        ];
        return linhas.join("\n");
    }
}

// 2. BUILDER
class EstudanteBuilder {
    constructor(nome, ra, curso) {
        // Campos obrigatórios no construtor do builder
        this.nome  = nome;
        this.ra    = ra;
        this.curso = curso;
    }

    comEmail(email)         { this.email      = email;    return this; }
    comCelular(cel)         { this.celular    = cel;      return this; }
    comEndereco(end)        { this.endereco   = end;      return this; }
    comPeriodo(p)           { this.periodo    = p;        return this; }
    adicionarResponsavel(r) {
        if (!this.responsaveis) this.responsaveis = [];
        this.responsaveis.push(r);
        return this;
    }
    inativo()               { this.ativo = false;         return this; }

    build() {
        return new Estudante(this);
    }
}

// 3. CLIENTE
console.log("=== Sistema de Cadastro de Estudantes ===\n");

// Cadastro completo
const aluno1 = new EstudanteBuilder("Ana Beatriz Lima", "DSM-2024-001", "Desenvolvimento de Sistemas")
    .comEmail("ana.lima@estudante.fatec.br")
    .comCelular("(11) 99876-5432")
    .comEndereco("R. das Flores, 123 – Diadema/SP")
    .comPeriodo("2º Semestre")
    .adicionarResponsavel("Maria Lima (Mãe) – (11) 98765-4321")
    .build();

console.log(aluno1.toString());
console.log();

// Cadastro mínimo (apenas obrigatórios)
const aluno2 = new EstudanteBuilder("Carlos Souza", "DSM-2024-042", "Desenvolvimento de Sistemas")
    .comPeriodo("1º Semestre")
    .build();

console.log(aluno2.toString());
console.log();

// Cadastro com responsáveis (menor de idade)
const aluno3 = new EstudanteBuilder("Pedro Henrique Neto", "GEO-2024-015", "Gestão Empresarial")
    .comEmail("pedro.neto@estudante.fatec.br")
    .comPeriodo("1º Semestre")
    .adicionarResponsavel("João Neto (Pai) – (11) 91234-5678")
    .adicionarResponsavel("Sandra Neto (Mãe) – (11) 97654-3210")
    .inativo()
    .build();

console.log(aluno3.toString());
