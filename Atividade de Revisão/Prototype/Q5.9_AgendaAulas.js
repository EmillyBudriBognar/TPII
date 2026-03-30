/**
 * PADRÃO: PROTOTYPE
 * QUESTÃO 5.9 – Sistema de Agendamento de Aulas
 *
 * Problema: Um sistema usa modelos de horários que são clonados e ajustados.
 * Classe Horario com suporte a clonagem.
 *
 * Solução: Classe Horario como Prototype, permitindo clonar um modelo
 * de horário e ajustar disciplina, sala, professor ou turno.
 */

// 1. PROTOTYPE – Horario
class Horario {
    constructor({ dia, turno, inicio, fim, disciplina, sala, professor, turma }) {
        this.dia         = dia;
        this.turno       = turno;
        this.inicio      = inicio;
        this.fim         = fim;
        this.disciplina  = disciplina  || "A definir";
        this.sala        = sala        || "A definir";
        this.professor   = professor   || "A definir";
        this.turma       = turma       || "A definir";
    }

    clone() {
        return new Horario({
            dia:        this.dia,
            turno:      this.turno,
            inicio:     this.inicio,
            fim:        this.fim,
            disciplina: this.disciplina,
            sala:       this.sala,
            professor:  this.professor,
            turma:      this.turma,
        });
    }

    // Customizações fluentes
    paraDisciplina(d)  { this.disciplina = d; return this; }
    paraSala(s)        { this.sala       = s; return this; }
    paraProfessor(p)   { this.professor  = p; return this; }
    paraTurma(t)       { this.turma      = t; return this; }
    paraHorario(i, f)  { this.inicio = i; this.fim = f; return this; }
    paraDia(d)         { this.dia   = d; return this; }

    toString() {
        return `${this.dia.padEnd(10)} ${this.turno.padEnd(5)} ${this.inicio}-${this.fim}  ` +
               `${this.disciplina.padEnd(30)} ${this.sala.padEnd(10)} ${this.professor.padEnd(20)} [${this.turma}]`;
    }
}

// 2. MODELOS DE HORÁRIO (protótipos reutilizáveis)
const modeloManha = new Horario({
    dia:    "Segunda",
    turno:  "M",
    inicio: "07:30",
    fim:    "09:10",
});

const modeloNoite = new Horario({
    dia:    "Segunda",
    turno:  "N",
    inicio: "19:00",
    fim:    "20:40",
});

// 3. GRADE DA SEMANA – construída via clonagem
class GradeSemanal {
    constructor(curso) {
        this.curso   = curso;
        this.horarios = [];
    }

    adicionar(horario) {
        this.horarios.push(horario);
        return this;
    }

    exibir() {
        const header = "DIA        TURNO HORÁRIO      DISCIPLINA                     SALA       PROFESSOR            TURMA";
        console.log(`\n📅 Grade – ${this.curso}`);
        console.log("─".repeat(header.length));
        console.log(header);
        console.log("─".repeat(header.length));
        this.horarios.forEach(h => console.log(h.toString()));
    }
}

// 4. CLIENTE – monta grade clonando e ajustando horários
console.log("=== Sistema de Agendamento de Aulas ===");

const grade = new GradeSemanal("DSM – 3º Semestre 2026/1");

grade
    .adicionar(modeloManha.clone().paraDia("Segunda").paraDisciplina("Técnicas de Programação II").paraSala("Lab-03").paraProfessor("Prof. Heltai").paraTurma("DSM-3A"))
    .adicionar(modeloManha.clone().paraDia("Segunda").paraHorario("09:30","11:10").paraDisciplina("Banco de Dados II").paraSala("Lab-01").paraProfessor("Prof. Ferreira").paraTurma("DSM-3A"))
    .adicionar(modeloManha.clone().paraDia("Terça").paraDisciplina("Engenharia de Software").paraSala("Sala-08").paraProfessor("Prof. Lima").paraTurma("DSM-3A"))
    .adicionar(modeloManha.clone().paraDia("Quarta").paraDisciplina("Redes de Computadores").paraSala("Lab-02").paraProfessor("Prof. Moura").paraTurma("DSM-3A"))
    .adicionar(modeloNoite.clone().paraDia("Quinta").paraDisciplina("Empreendedorismo").paraSala("Sala-12").paraProfessor("Prof. Alves").paraTurma("DSM-3A"))
    .adicionar(modeloManha.clone().paraDia("Sexta").paraDisciplina("UX Design").paraSala("Lab-04").paraProfessor("Prof. Costa").paraTurma("DSM-3A"));

grade.exibir();

console.log("\n--- Modelo original inalterado ---");
console.log("Manhã:", modeloManha.inicio, "-", modeloManha.fim, "| Dia:", modeloManha.dia);
