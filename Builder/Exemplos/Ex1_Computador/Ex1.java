// PRODUTO
class Computador {
    private String CPU;
    private String RAM;
    private String armazenamento;
    private String placaDeVideo;

    public void setCPU(String CPU) { this.CPU = CPU; }
    public void setRAM(String RAM) { this.RAM = RAM; }
    public void setArmazenamento(String armazenamento) { this.armazenamento = armazenamento; }
    public void setPlacaDeVideo(String placaDeVideo) { this.placaDeVideo = placaDeVideo; }

    @Override
    public String toString() {
        return "Computador [CPU=" + CPU + ", RAM=" + RAM + ", Armazenamento=" + armazenamento + ", Placa de Vídeo=" + placaDeVideo + "]";
    }
}

// BUILDER
class ComputadorBuilder {
    private Computador computador = new Computador();

    public ComputadorBuilder addCPU(String cpu) {
        computador.setCPU(cpu);
        return this;
    }

    public ComputadorBuilder addRAM(String ram) {
        computador.setRAM(ram);
        return this;
    }

    public ComputadorBuilder addArmazenamento(String armazenamento) {
        computador.setArmazenamento(armazenamento);
        return this;
    }

    public ComputadorBuilder addPlacaDeVideo(String gpu) {
        computador.setPlacaDeVideo(gpu);
        return this;
    }

    public Computador construir() {
        return computador;
    }
}

// CLIENTE
public class Ex1 {
    public static void main(String[] args) {
        Computador gamer = new ComputadorBuilder()
            .addCPU("Intel i9")
            .addRAM("32GB")
            .addArmazenamento("1TB SSD")
            .addPlacaDeVideo("RTX 4090")
            .construir();

        Computador office = new ComputadorBuilder()
            .addCPU("Intel i5")
            .addRAM("16GB")
            .addArmazenamento("512GB SSD")
            .construir(); // Placa de vídeo opcional

        System.out.println("Gamer: " + gamer);
        System.out.println("Office: " + office);
    }
}
