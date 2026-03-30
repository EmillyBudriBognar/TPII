/**
 * PADRÃO: PROTOTYPE
 * QUESTÃO 5.5 – Editora Digital (Documentos: Contratos, Cartas, Relatórios)
 *
 * Problema: Uma editora digital usa documentos como contratos, cartas e
 * relatórios. Precisam ser clonados rapidamente com pequenas variações.
 *
 * Solução: Classe Documento base com método clone(), subclasses derivadas.
 */

// 1. PROTOTYPE BASE
class Documento {
    constructor({ titulo, autor, data, conteudo }) {
        this.titulo   = titulo;
        this.autor    = autor;
        this.data     = data || new Date().toLocaleDateString("pt-BR");
        this.conteudo = conteudo;
    }

    // Método de clonagem – cria uma cópia independente
    clone() {
        throw new Error("Método abstrato: clone()");
    }

    toString() {
        return `[${this.constructor.name}]\n  Título:   ${this.titulo}\n  Autor:    ${this.autor}\n  Data:     ${this.data}\n  Conteúdo: ${this.conteudo}`;
    }
}

// 2. SUBCLASSES CONCRETAS

class Contrato extends Documento {
    constructor(dados) {
        super(dados);
        this.partes    = dados.partes    || [];
        this.vigencia  = dados.vigencia  || "12 meses";
    }

    clone() {
        return new Contrato({
            titulo:   this.titulo,
            autor:    this.autor,
            data:     this.data,
            conteudo: this.conteudo,
            partes:   [...this.partes],
            vigencia: this.vigencia,
        });
    }

    toString() {
        return super.toString() +
            `\n  Partes:   ${this.partes.join(" × ")}\n  Vigência: ${this.vigencia}`;
    }
}

class Carta extends Documento {
    constructor(dados) {
        super(dados);
        this.destinatario = dados.destinatario || "A quem possa interessar";
        this.saudacao     = dados.saudacao     || "Prezado(a),";
    }

    clone() {
        return new Carta({
            titulo:       this.titulo,
            autor:        this.autor,
            data:         this.data,
            conteudo:     this.conteudo,
            destinatario: this.destinatario,
            saudacao:     this.saudacao,
        });
    }

    toString() {
        return super.toString() +
            `\n  Para:     ${this.destinatario}\n  Saudação: ${this.saudacao}`;
    }
}

class Relatorio extends Documento {
    constructor(dados) {
        super(dados);
        this.secoes    = dados.secoes    || [];
        this.versao    = dados.versao    || "1.0";
    }

    clone() {
        return new Relatorio({
            titulo:   this.titulo,
            autor:    this.autor,
            data:     this.data,
            conteudo: this.conteudo,
            secoes:   [...this.secoes],
            versao:   this.versao,
        });
    }

    toString() {
        return super.toString() +
            `\n  Seções:  ${this.secoes.join(" | ")}\n  Versão:  v${this.versao}`;
    }
}

// 3. CLIENTE
console.log("=== Editora Digital – Clonagem de Documentos ===\n");

// Modelo original de contrato de prestação de serviços
const contratoModelo = new Contrato({
    titulo:   "Contrato de Prestação de Serviços – Modelo Padrão",
    autor:    "Departamento Jurídico",
    conteudo: "As partes acordam os seguintes termos e condições...",
    partes:   ["Empresa XYZ Ltda.", "[CLIENTE]"],
    vigencia: "12 meses",
});

// Clona e personaliza para cliente específico
const contratoNovo = contratoModelo.clone();
contratoNovo.titulo = "Contrato de Prestação de Serviços – João Silva";
contratoNovo.partes = ["Empresa XYZ Ltda.", "João Silva – CPF 123.456.789-00"];
contratoNovo.data   = "30/03/2026";

console.log("ORIGINAL:");
console.log(contratoModelo.toString());
console.log("\nCLONE PERSONALIZADO:");
console.log(contratoNovo.toString());

// Modelo de carta
console.log("\n" + "─".repeat(50) + "\n");

const cartaModelo = new Carta({
    titulo:       "Carta de Apresentação – Template",
    autor:        "RH",
    conteudo:     "Temos o prazer de apresentar nossa empresa...",
    destinatario: "[DESTINATÁRIO]",
});

const cartaPersonalizada = cartaModelo.clone();
cartaPersonalizada.destinatario = "Diretoria da FATEC Diadema";
cartaPersonalizada.titulo        = "Carta de Apresentação – FATEC";

console.log("CARTA CLONE:");
console.log(cartaPersonalizada.toString());
