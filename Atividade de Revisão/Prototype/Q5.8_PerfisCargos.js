/**
 * PADRÃO: PROTOTYPE
 * QUESTÃO 5.8 – Sistema de RH – Clonagem de Perfis de Cargos
 *
 * Problema: Uma aplicação de RH precisa clonar perfis de cargos com
 * pequenas variações de requisitos (ex: nível júnior → sênior).
 *
 * Solução: Prototype baseado em modelos de cargo, com clone() permitindo
 * ajustar requisitos sem recriar do zero.
 */

// 1. PROTOTYPE – PerfilCargo
class PerfilCargo {
    constructor({ titulo, nivel, salarioBase, requisitos, beneficios, descricao }) {
        this.titulo       = titulo;
        this.nivel        = nivel;
        this.salarioBase  = salarioBase;
        this.requisitos   = [...(requisitos  || [])];
        this.beneficios   = [...(beneficios  || [])];
        this.descricao    = descricao || "";
    }

    clone() {
        return new PerfilCargo({
            titulo:      this.titulo,
            nivel:       this.nivel,
            salarioBase: this.salarioBase,
            requisitos:  [...this.requisitos],
            beneficios:  [...this.beneficios],
            descricao:   this.descricao,
        });
    }

    // Métodos de customização fluente
    comNivel(nivel)            { this.nivel = nivel;                   return this; }
    comTitulo(titulo)          { this.titulo = titulo;                 return this; }
    comSalario(valor)          { this.salarioBase = valor;             return this; }
    adicionarRequisito(req)    { this.requisitos.push(req);            return this; }
    removerRequisito(req)      { this.requisitos = this.requisitos.filter(r => r !== req); return this; }
    adicionarBeneficio(ben)    { this.beneficios.push(ben);            return this; }
    comDescricao(desc)         { this.descricao = desc;                return this; }

    toString() {
        return [
            `📋 ${this.titulo} (${this.nivel})`,
            `   Salário Base:  R$ ${this.salarioBase.toLocaleString("pt-BR")}`,
            `   Descrição:     ${this.descricao}`,
            `   Requisitos:`,
            ...this.requisitos.map(r => `     • ${r}`),
            `   Benefícios:    ${this.beneficios.join(" | ")}`,
        ].join("\n");
    }
}

// 2. REPOSITÓRIO DE MODELOS (catálogo de protótipos)
const modelosCargo = {
    devJunior: new PerfilCargo({
        titulo:      "Desenvolvedor de Software",
        nivel:       "Júnior",
        salarioBase: 3500,
        descricao:   "Desenvolvimento e manutenção de sistemas sob supervisão.",
        requisitos:  [
            "Graduação em andamento em T.I. ou afins",
            "Conhecimento em JavaScript ou Python",
            "Familiaridade com Git",
            "Lógica de programação sólida",
        ],
        beneficios: ["Vale Refeição", "Vale Transporte", "Plano de Saúde"],
    }),

    analista: new PerfilCargo({
        titulo:      "Analista de Sistemas",
        nivel:       "Pleno",
        salarioBase: 7000,
        descricao:   "Levantamento de requisitos e modelagem de soluções.",
        requisitos:  [
            "Graduação completa em T.I.",
            "3+ anos de experiência",
            "UML e modelagem de processos",
            "Metodologias ágeis (Scrum/Kanban)",
        ],
        beneficios: ["Vale Refeição", "Vale Transporte", "Plano de Saúde", "Gympass"],
    }),
};

// 3. CLIENTE – clonar e variações de cargos
console.log("=== Sistema de RH – Perfis de Cargos ===\n");

// Modelo base
console.log("MODELO ORIGINAL – Desenvolvedor Júnior:");
console.log(modelosCargo.devJunior.toString());

// Criar cargo sênior a partir do júnior
const devSenior = modelosCargo.devJunior.clone()
    .comNivel("Sênior")
    .comSalario(12000)
    .comDescricao("Desenvolvimento autônomo de sistemas e mentoria de juniores.")
    .adicionarRequisito("5+ anos de experiência")
    .adicionarRequisito("Arquitetura de software")
    .adicionarRequisito("Liderança técnica de equipes")
    .removerRequisito("Graduação em andamento em T.I. ou afins")
    .adicionarBeneficio("Bônus anual")
    .adicionarBeneficio("Home Office");

console.log("\nCLONE MODIFICADO – Desenvolvedor Sênior:");
console.log(devSenior.toString());

// Modelo de analista para criar Tech Lead
const techLead = modelosCargo.analista.clone()
    .comTitulo("Tech Lead")
    .comNivel("Sênior")
    .comSalario(16000)
    .comDescricao("Liderança técnica, arquitetura de sistemas e gestão de equipe.")
    .adicionarRequisito("Gestão de pessoas e times ágeis")
    .adicionarRequisito("Arquitetura de microsserviços")
    .adicionarBeneficio("Stock options")
    .adicionarBeneficio("Auxílio educação");

console.log("\nCLONE MODIFICADO – Tech Lead:");
console.log(techLead.toString());

console.log("\n--- Modelos originais inalterados ---");
console.log(`• ${modelosCargo.devJunior.titulo} (${modelosCargo.devJunior.nivel}) – R$ ${modelosCargo.devJunior.salarioBase.toLocaleString("pt-BR")}`);
console.log(`• ${modelosCargo.analista.titulo} (${modelosCargo.analista.nivel}) – R$ ${modelosCargo.analista.salarioBase.toLocaleString("pt-BR")}`);
