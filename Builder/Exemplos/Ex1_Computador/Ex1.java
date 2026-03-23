/**
 * PADRÃO: BUILDER
 * 
 * O padrão Builder é um padrão criacional que separa a construção de um objeto 
 * complexo de sua representação, de modo que o mesmo processo de construção 
 * possa criar diferentes representações.
 */

// 1. PRODUTO (O objeto complexo que está sendo construído)
class Computador {
    String processador;
    String memoria;
    String disco;

    void mostrarConfig() {
        System.out.println("Configuração do Computador:");
        System.out.println("- Processador: " + processador);
        System.out.println("- Memória: " + memoria);
        System.out.println("- Disco: " + disco);
    }
}

// 2. INTERFACE BUILDER (Define os passos de construção)
interface ComputadorBuilder {
    void buildProcessador();
    void buildMemoria();
    void buildDisco();
    Computador getComputador();
}

// 3. BUILDER CONCRETO - COMPUTADOR GAMER
class ComputadorGamerBuilder implements ComputadorBuilder {
    private Computador computador = new Computador();

    public void buildProcessador() { computador.processador = "Intel i9"; }
    public void buildMemoria() { computador.memoria = "32GB RAM"; }
    public void buildDisco() { computador.disco = "1TB SSD NVMe"; }
    public Computador getComputador() { return computador; }
}

// 3. BUILDER CONCRETO - COMPUTADOR OFFICE
class ComputadorOfficeBuilder implements ComputadorBuilder {
    private Computador computador = new Computador();

    public void buildProcessador() { computador.processador = "Intel i3"; }
    public void buildMemoria() { computador.memoria = "8GB RAM"; }
    public void buildDisco() { computador.disco = "256GB SSD"; }
    public Computador getComputador() { return computador; }
}

// 4. DIRETOR (Controla o algoritmo de construção)
class Diretor {
    void construirComputador(ComputadorBuilder builder) {
        builder.buildProcessador();
        builder.buildMemoria();
        builder.buildDisco();
    }
}

// 5. CLIENTE
public class Ex1 {
    public static void main(String[] args) {
        Diretor diretor = new Diretor();
        
        // Construindo um Gamer
        ComputadorBuilder gamerBuilder = new ComputadorGamerBuilder();
        diretor.construirComputador(gamerBuilder);
        Computador c1 = gamerBuilder.getComputador();
        c1.mostrarConfig();

        System.out.println("-------------------------");

        // Construindo um Office
        ComputadorBuilder officeBuilder = new ComputadorOfficeBuilder();
        diretor.construirComputador(officeBuilder);
        Computador c2 = officeBuilder.getComputador();
        c2.mostrarConfig();
    }
}
