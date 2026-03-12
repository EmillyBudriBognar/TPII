import java.time.LocalTime;

// PRODUTO
class Perfil {
    private String nome;
    private String cargo;
    private long matricula;
    private LocalTime horaEntrada;
    private LocalTime horaSaida;

    public void setNome(String nome) { this.nome = nome; }
    public void setCargo(String cargo) { this.cargo = cargo; }
    public void setMatricula(long matricula) { this.matricula = matricula; }
    public void setHoraEntrada(LocalTime horaEntrada) { this.horaEntrada = horaEntrada; }
    public void setHoraSaida(LocalTime horaSaida) { this.horaSaida = horaSaida; }

    @Override
    public String toString() {
        return String.format("Perfil [Nome: %s, Cargo: %s, Matrícula: %d, Entrada: %s, Saída: %s]", 
                             nome, cargo, matricula, horaEntrada, horaSaida);
    }
}

// BUILDER
class PerfilBuilder {
    private Perfil perfil = new Perfil();

    public PerfilBuilder addNome(String nome) {
        perfil.setNome(nome);
        return this;
    }

    public PerfilBuilder addCargo(String cargo) {
        perfil.setCargo(cargo);
        return this;
    }

    public PerfilBuilder addMatricula(long matricula) {
        perfil.setMatricula(matricula);
        return this;
    }

    public PerfilBuilder addHoraEntrada(LocalTime hora) {
        perfil.setHoraEntrada(hora);
        return this;
    }

    public PerfilBuilder addHoraSaida(LocalTime hora) {
        perfil.setHoraSaida(hora);
        return this;
    }

    public Perfil construir() {
        return perfil;
    }
}

// CLIENTE
public class Ex2 {
    public static void main(String[] args) {
        Perfil p1 = new PerfilBuilder()
            .addNome("João Silva")
            .addCargo("Professor")
            .addMatricula(123456)
            .addHoraEntrada(LocalTime.of(8, 0))
            .addHoraSaida(LocalTime.of(17, 0))
            .construir();

        Perfil p2 = new PerfilBuilder()
            .addNome("Maria Oliveira")
            .addCargo("Aluno")
            .addMatricula(789012)
            .addHoraEntrada(LocalTime.of(19, 0))
            .addHoraSaida(LocalTime.of(22, 30))
            .construir();

        System.out.println(p1);
        System.out.println(p2);
    }
}
