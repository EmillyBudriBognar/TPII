// classe base para perfil
class Perfil {
    private String tipo;
    private String nome;
    private int nivel;

    public Perfil(String tipo, String nome, int nivel) {
        this.tipo = tipo;
        this.nome = nome;
        this.nivel = nivel;
    }

    @Override
    public String toString() {
        String retorno = "Nome: " + this.nome + " | Nível: " + this.tipo + " - " + this.nivel;
        return retorno;
    }
}

// subclasses de perfil

class Aluno extends Perfil {
    public Aluno(String nome) {
        super("Aluno", nome, 0);
    }
}

class Administrativo extends Perfil {
    public Administrativo(String nome) {
        super("Administrativo", nome, 1);
    }
}

class Professor extends Perfil {
    public Professor(String nome) {
        super("Professor", nome, 2);
    }
}

class Visitante extends Perfil {
    public Visitante(String nome) {
        super("Visitante", nome, 3);
    }
}

// Fábrica abstrata

abstract class FabricaDePerfis {
    abstract public Perfil criarPerfil(String nome);
}

// Fábricas Concretas
class FabricaDeAlunos extends FabricaDePerfis {
    public Perfil criarPerfil(String nome) {
        return new Aluno(nome);
    }
}

class FabricaDeAdministrativos extends FabricaDePerfis {
    public Perfil criarPerfil(String nome) {
        return new Administrativo(nome);
    }
}

class FabricaDeProfessores extends FabricaDePerfis {
    public Perfil criarPerfil(String nome) {
        return new Professor(nome);
    }
}

class FabricaDeVisitantes extends FabricaDePerfis {
    public Perfil criarPerfil(String nome) {
        return new Visitante(nome);
    }
}

// main
public class Ex4 {
    public static final FabricaDeAlunos FABRICA_DE_ALUNOS = new FabricaDeAlunos();
    public static final FabricaDeAdministrativos FABRICA_DE_ADM = new FabricaDeAdministrativos();
    public static final FabricaDeProfessores FABRICA_DE_PROFESSORES = new FabricaDeProfessores();
    public static final FabricaDeVisitantes FABRICA_DE_VISITANTES = new FabricaDeVisitantes();

    public static void main(String[] args) {

        Perfil perfil1 = FABRICA_DE_ALUNOS.criarPerfil("Stela");
        Perfil perfil2 = FABRICA_DE_ADM.criarPerfil("Rita ");
        Perfil perfil3 = FABRICA_DE_PROFESSORES.criarPerfil("Maria");
        Perfil perfil4 = FABRICA_DE_VISITANTES.criarPerfil("Aline");

        System.out.println(perfil1.toString());
        System.out.println(perfil2.toString());
        System.out.println(perfil3.toString());
        System.out.println(perfil4.toString());
    }
}
