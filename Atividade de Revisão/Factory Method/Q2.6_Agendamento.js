/**
 * PADRÃO: FACTORY METHOD
 * QUESTÃO 2.6 – Agendamento de Serviços
 *
 * Problema: Uma aplicação permite agendar consultas, reparos e entregas.
 * Cada tipo de serviço tem características e procedimentos próprios.
 *
 * Solução: Criador abstrato com factory method e classes concretas
 * para cada tipo de serviço.
 */

// 1. PRODUTO (Interface base)
class Servico {
    agendar(data, horario) {
        throw new Error("Método abstrato: agendar()");
    }

    confirmar() {
        throw new Error("Método abstrato: confirmar()");
    }

    descricao() {
        throw new Error("Método abstrato: descricao()");
    }
}

// 2. PRODUTOS CONCRETOS
class Consulta extends Servico {
    descricao() { return "Consulta médica"; }

    agendar(data, horario) {
        return `Consulta agendada para ${data} às ${horario}. Por favor, chegue 15 min antes.`;
    }

    confirmar() {
        return "Consulta confirmada. Lembre-se de trazer seus documentos e plano de saúde.";
    }
}

class Reparo extends Servico {
    descricao() { return "Serviço de reparo"; }

    agendar(data, horario) {
        return `Reparo agendado para ${data} às ${horario}. Técnico estará no local.`;
    }

    confirmar() {
        return "Reparo confirmado. Um técnico qualificado visitará o endereço informado.";
    }
}

class Entrega extends Servico {
    descricao() { return "Entrega de produto"; }

    agendar(data, horario) {
        return `Entrega agendada para ${data} no período das ${horario}. Alguém deve estar presente.`;
    }

    confirmar() {
        return "Entrega confirmada. Você receberá o código de rastreamento por e-mail.";
    }
}

// 3. CRIADOR ABSTRATO
class AgendadorServico {
    // Factory Method
    criarServico() {
        throw new Error("Método abstrato: criarServico()");
    }

    // Lógica de negócio comum que usa o factory method
    realizarAgendamento(data, horario) {
        const servico = this.criarServico();
        console.log(`[${servico.descricao()}]`);
        console.log(`  → ${servico.agendar(data, horario)}`);
        console.log(`  → ${servico.confirmar()}\n`);
    }
}

// 4. CRIADORES CONCRETOS
class AgendadorConsulta extends AgendadorServico {
    criarServico() { return new Consulta(); }
}

class AgendadorReparo extends AgendadorServico {
    criarServico() { return new Reparo(); }
}

class AgendadorEntrega extends AgendadorServico {
    criarServico() { return new Entrega(); }
}

// 5. CLIENTE
console.log("=== Sistema de Agendamento de Serviços ===\n");

const agendamentos = [
    { agendador: new AgendadorConsulta(), data: "05/04/2026", horario: "14:30" },
    { agendador: new AgendadorReparo(),   data: "06/04/2026", horario: "09:00" },
    { agendador: new AgendadorEntrega(),  data: "07/04/2026", horario: "10:00–18:00" },
];

agendamentos.forEach(({ agendador, data, horario }) => {
    agendador.realizarAgendamento(data, horario);
});
