/**
 * PADRÃO: FACTORY METHOD
 * QUESTÃO 2.4 – Sistema Educacional de Provas
 *
 * Problema: Um sistema educacional precisa criar diferentes tipos de provas
 * (objetiva, dissertativa, prática) de forma dinâmica.
 *
 * Solução: Interface Prova com variantes concretas e Factory Method
 * para instanciar dinamicamente o tipo correto.
 */

// 1. PRODUTO (Interface/Base)
class Prova {
    aplicar() {
        throw new Error("Método abstrato: aplicar()");
    }

    corrigir() {
        throw new Error("Método abstrato: corrigir()");
    }
}

// 2. PRODUTOS CONCRETOS
class ProvaObjetiva extends Prova {
    aplicar() {
        return "Aplicando prova OBJETIVA: questões de múltipla escolha com gabarito.";
    }

    corrigir() {
        return "Correção automática via gabarito (A, B, C, D, E).";
    }
}

class ProvaDissertativa extends Prova {
    aplicar() {
        return "Aplicando prova DISSERTATIVA: respostas abertas e argumentativas.";
    }

    corrigir() {
        return "Correção manual por banca avaliadora com critérios de nota.";
    }
}

class ProvaPratica extends Prova {
    aplicar() {
        return "Aplicando prova PRÁTICA: execução de tarefa em laboratório.";
    }

    corrigir() {
        return "Correção baseada em rubricas de desempenho observado.";
    }
}

// 3. CRIADOR ABSTRATO
class CriadorDeProva {
    // Factory Method
    criarProva() {
        throw new Error("Método abstrato: criarProva()");
    }

    realizarAvaliacao() {
        const prova = this.criarProva();
        console.log(`→ ${prova.aplicar()}`);
        console.log(`→ ${prova.corrigir()}\n`);
    }
}

// 4. CRIADORES CONCRETOS
class CriadorProvaObjetiva extends CriadorDeProva {
    criarProva() {
        return new ProvaObjetiva();
    }
}

class CriadorProvaDissertativa extends CriadorDeProva {
    criarProva() {
        return new ProvaDissertativa();
    }
}

class CriadorProvaPratica extends CriadorDeProva {
    criarProva() {
        return new ProvaPratica();
    }
}

// 5. CLIENTE – seleção dinâmica do tipo de prova
function obterCriador(tipo) {
    const tipos = {
        objetiva: new CriadorProvaObjetiva(),
        dissertativa: new CriadorProvaDissertativa(),
        pratica: new CriadorProvaPratica(),
    };
    if (!tipos[tipo]) throw new Error(`Tipo de prova desconhecido: ${tipo}`);
    return tipos[tipo];
}

console.log("=== Sistema Educacional de Avaliações ===\n");

["objetiva", "dissertativa", "pratica"].forEach(tipo => {
    console.log(`Tipo de prova: ${tipo.toUpperCase()}`);
    const criador = obterCriador(tipo);
    criador.realizarAvaliacao();
});
