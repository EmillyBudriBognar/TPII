/**
 * PADRÃO: BUILDER
 * QUESTÃO 4.8 – Grade Horária Semanal
 *
 * Problema: Em uma aplicação de educação, o aluno monta sua grade horária
 * semanal com disciplinas, horários e salas de forma flexível.
 *
 * Solução: Builder para construção progressiva e personalizável da grade,
 * com composição fluente.
 */

// 1. PRODUTO – Aula (item da grade)
class Aula {
    constructor({ disciplina, dia, horario, sala, professor }) {
        this.disciplina = disciplina;
        this.dia        = dia;
        this.horario    = horario;
        this.sala       = sala;
        this.professor  = professor || "A definir";
    }

    toString() {
        return `${this.dia.padEnd(12)} ${this.horario.padEnd(14)} ${this.sala.padEnd(10)} ${this.disciplina} (${this.professor})`;
    }
}

// 2. PRODUTO – Grade Horária
class GradeHoraria {
    constructor() {
        this.semestre = null;
        this.aluno    = null;
        this.curso    = null;
        this.aulas    = [];
    }

    toString() {
        const linhas = [
            `${"=".repeat(70)}`,
            `  GRADE HORÁRIA – ${this.semestre || ""}`,
            `  Aluno: ${this.aluno || "N/A"} | Curso: ${this.curso || "N/A"}`,
            `${"=".repeat(70)}`,
            `${"DIA".padEnd(12)} ${"HORÁRIO".padEnd(14)} ${"SALA".padEnd(10)} DISCIPLINA (PROFESSOR)`,
            `${"-".repeat(70)}`,
        ];

        if (this.aulas.length === 0) {
            linhas.push("  Nenhuma aula cadastrada.");
        } else {
            this.aulas.forEach(a => linhas.push("  " + a.toString()));
        }

        linhas.push("=".repeat(70));
        return linhas.join("\n");
    }
}

// 3. BUILDER
class GradeHorariaBuilder {
    constructor() {
        this._grade = new GradeHoraria();
    }

    paraSemestre(s)  { this._grade.semestre = s; return this; }
    paraAluno(nome)  { this._grade.aluno    = nome; return this; }
    paraCurso(c)     { this._grade.curso    = c; return this; }

    adicionarAula({ disciplina, dia, horario, sala, professor }) {
        this._grade.aulas.push(new Aula({ disciplina, dia, horario, sala, professor }));
        return this;
    }

    build() {
        const grade = this._grade;
        this._grade = new GradeHoraria(); // reset
        return grade;
    }
}

// 4. CLIENTE
console.log("=== Sistema de Grade Horária ===\n");

const builder = new GradeHorariaBuilder();

const gradeJoao = builder
    .paraAluno("João Silva")
    .paraCurso("Desenvolvimento de Sistemas (DSM)")
    .paraSemestre("1º Semestre / 2026")
    .adicionarAula({ disciplina: "Técnicas de Programação II", dia: "Segunda", horario: "07:30–09:10", sala: "Lab-03",  professor: "Prof. Heltai" })
    .adicionarAula({ disciplina: "Matemática Discreta",        dia: "Segunda", horario: "09:30–11:10", sala: "Sala-12", professor: "Prof. Santos" })
    .adicionarAula({ disciplina: "Eng. de Software",           dia: "Terça",   horario: "07:30–09:10", sala: "Sala-08", professor: "Prof. Lima" })
    .adicionarAula({ disciplina: "Banco de Dados",             dia: "Quarta",  horario: "07:30–09:10", sala: "Lab-01",  professor: "Prof. Ferreira" })
    .adicionarAula({ disciplina: "Técnicas de Programação II", dia: "Quinta",  horario: "07:30–09:10", sala: "Lab-03",  professor: "Prof. Heltai" })
    .adicionarAula({ disciplina: "UX Design",                  dia: "Sexta",   horario: "07:30–09:10", sala: "Lab-02"  })
    .build();

console.log(gradeJoao.toString());
