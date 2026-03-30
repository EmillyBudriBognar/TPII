/**
 * PADRÃO: BUILDER
 * QUESTÃO 4.7 – Sistema de Relatórios
 *
 * Problema: Um sistema permite montar documentos com capa, sumário,
 * conteúdo e gráficos, passo a passo, usando Director e Builder.
 *
 * Solução: Builder com Director que orquestra a construção de
 * diferentes estilos de relatório.
 */

// 1. PRODUTO
class Relatorio {
    constructor() {
        this.capa      = null;
        this.sumario   = [];
        this.secoes    = [];
        this.graficos  = [];
        this.rodape    = null;
    }

    toString() {
        const linhas = ["━".repeat(50)];

        if (this.capa) linhas.push(this.capa);
        linhas.push("━".repeat(50));

        if (this.sumario.length) {
            linhas.push("SUMÁRIO:");
            this.sumario.forEach((item, i) => linhas.push(`  ${i + 1}. ${item}`));
            linhas.push("");
        }

        if (this.secoes.length) {
            this.secoes.forEach(s => {
                linhas.push(`[SEÇÃO] ${s}`);
                linhas.push("");
            });
        }

        if (this.graficos.length) {
            linhas.push("GRÁFICOS:");
            this.graficos.forEach(g => linhas.push(`  📊 ${g}`));
            linhas.push("");
        }

        if (this.rodape) {
            linhas.push("━".repeat(50));
            linhas.push(this.rodape);
        }

        return linhas.join("\n");
    }
}

// 2. BUILDER (interface)
class RelatorioBuilder {
    construirCapa()     { throw new Error("Método abstrato"); }
    construirSumario()  { throw new Error("Método abstrato"); }
    construirConteudo() { throw new Error("Método abstrato"); }
    construirGraficos() { throw new Error("Método abstrato"); }
    construirRodape()   { throw new Error("Método abstrato"); }
    getResultado()      { throw new Error("Método abstrato"); }
}

// 3. CONCRETE BUILDER – Relatório Executivo
class RelatorioExecutivoBuilder extends RelatorioBuilder {
    constructor() {
        super();
        this._relatorio = new Relatorio();
    }

    construirCapa() {
        this._relatorio.capa = "  📁 RELATÓRIO EXECUTIVO – Q1 2026\n     Confidencial | Diretoria";
        return this;
    }

    construirSumario() {
        this._relatorio.sumario = [
            "Visão Geral do Trimestre",
            "Indicadores de Desempenho (KPIs)",
            "Análise Financeira",
        ];
        return this;
    }

    construirConteudo() {
        this._relatorio.secoes = [
            "Visão Geral: Crescimento de 12% nas receitas em relação ao Q1 2025.",
            "KPIs: NPS 72 | CAC R$380 | LTV R$4.200 | Churn 2,3%",
            "Financeiro: Receita bruta R$2,4M | EBITDA R$620K | Margem 25,8%",
        ];
        return this;
    }

    construirGraficos() {
        this._relatorio.graficos = [
            "Gráfico de barras – Receita mensal (jan–mar)",
            "Gráfico de pizza – Distribuição de despesas operacionais",
        ];
        return this;
    }

    construirRodape() {
        this._relatorio.rodape = "  Gerado automaticamente em 30/03/2026 | Uso Interno";
        return this;
    }

    getResultado() {
        return this._relatorio;
    }
}

// 4. CONCRETE BUILDER – Relatório Técnico
class RelatorioTecnicoBuilder extends RelatorioBuilder {
    constructor() {
        super();
        this._relatorio = new Relatorio();
    }

    construirCapa() {
        this._relatorio.capa = "  🔧 RELATÓRIO TÉCNICO – Sistema v3.2.1\n     Time de Engenharia";
        return this;
    }

    construirSumario() {
        this._relatorio.sumario = [
            "Arquitetura do Sistema",
            "Bugs Resolvidos",
            "Performance & Benchmarks",
        ];
        return this;
    }

    construirConteudo() {
        this._relatorio.secoes = [
            "Arquitetura: Microserviços em Node.js com comunicação via gRPC.",
            "Bugs: 47 issues fechados | 3 críticos corrigidos (segurança).",
            "Performance: P95 latency 120ms | Throughput 4.200 req/s.",
        ];
        return this;
    }

    construirGraficos() {
        this._relatorio.graficos = [
            "Gráfico de linha – Latência P95 ao longo do sprint",
            "Heatmap – Distribuição de erros por endpoint",
        ];
        return this;
    }

    construirRodape() {
        this._relatorio.rodape = "  v3.2.1 | Build #2847 | CI/CD Jenkins";
        return this;
    }

    getResultado() {
        return this._relatorio;
    }
}

// 5. DIRECTOR
class DiretorRelatorio {
    constructor(builder) {
        this._builder = builder;
    }

    setBuilder(builder) {
        this._builder = builder;
    }

    // Relatório completo (todas as seções)
    construirCompleto() {
        this._builder
            .construirCapa()
            .construirSumario()
            .construirConteudo()
            .construirGraficos()
            .construirRodape();
        return this._builder.getResultado();
    }

    // Relatório resumido (somente capa + conteúdo)
    construirResumido() {
        this._builder
            .construirCapa()
            .construirConteudo();
        return this._builder.getResultado();
    }
}

// 6. CLIENTE
console.log("=== Sistema de Relatórios ===\n");

const diretor = new DiretorRelatorio(new RelatorioExecutivoBuilder());
console.log("RELATÓRIO EXECUTIVO COMPLETO:");
console.log(diretor.construirCompleto().toString());

console.log("\n");

diretor.setBuilder(new RelatorioTecnicoBuilder());
console.log("RELATÓRIO TÉCNICO COMPLETO:");
console.log(diretor.construirCompleto().toString());
