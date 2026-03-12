// PRODUTO ABSTRATO
class Perfil {
    constructor(tipo, nome, nivel) {
        this.tipo = tipo;
        this.nome = nome;
        this.nivel = nivel;
    }

    toString() {
        return `Nome: ${this.nome} | Nível: ${this.tipo} - ${this.nivel}`;
    }
}

// PRODUTOS CONCRETOS
class Aluno extends Perfil { constructor(nome) { super("Aluno", nome, 0); } }
class Administrativo extends Perfil { constructor(nome) { super("Administrativo", nome, 1); } }
class Professor extends Perfil { constructor(nome) { super("Professor", nome, 2); } }
class Visitante extends Perfil { constructor(nome) { super("Visitante", nome, 3); } }

// FABRICA ABSTRATA
class FabricaDePerfis {
    criarPerfil(nome) { throw new Error("Método abstrato"); }
}

// FABRICAS CONCRETAS
class FabricaDeAlunos extends FabricaDePerfis { criarPerfil(nome) { return new Aluno(nome); } }
class FabricaDeAdministrativos extends FabricaDePerfis { criarPerfil(nome) { return new Administrativo(nome); } }
class FabricaDeProfessores extends FabricaDePerfis { criarPerfil(nome) { return new Professor(nome); } }
class FabricaDeVisitantes extends FabricaDePerfis { criarPerfil(nome) { return new Visitante(nome); } }

// CLIENTE
const fabricaAlunos = new FabricaDeAlunos();
const fabricaAdm = new FabricaDeAdministrativos();
const fabricaProf = new FabricaDeProfessores();
const fabricaVisitante = new FabricaDeVisitantes();

console.log(fabricaAlunos.criarPerfil("Stela").toString());
console.log(fabricaAdm.criarPerfil("Rita ").toString());
console.log(fabricaProf.criarPerfil("Maria").toString());
console.log(fabricaVisitante.criarPerfil("Aline").toString());
