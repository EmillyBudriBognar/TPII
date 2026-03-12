class Computador {
    constructor() {
        this.cpu = "";
        this.ram = "";
        this.armazenamento = "";
        this.placaDeVideo = "Integrada";
    }

    toString() {
        return `Computador [CPU=${this.cpu}, RAM=${this.ram}, Armazenamento=${this.armazenamento}, Placa de Vídeo=${this.placaDeVideo}]`;
    }
}

class ComputadorBuilder {
    constructor() {
        this.computador = new Computador();
    }

    addCPU(cpu) {
        this.computador.cpu = cpu;
        return this;
    }

    addRAM(ram) {
        this.computador.ram = ram;
        return this;
    }

    addArmazenamento(armazenamento) {
        this.computador.armazenamento = armazenamento;
        return this;
    }

    addPlacaDeVideo(gpu) {
        this.computador.placaDeVideo = gpu;
        return this;
    }

    construir() {
        return this.computador;
    }
}

// CLIENTE
const gamer = new ComputadorBuilder()
    .addCPU("Ryzen 9")
    .addRAM("64GB")
    .addArmazenamento("2TB NVMe")
    .addPlacaDeVideo("RTX 4080")
    .construir();

const basico = new ComputadorBuilder()
    .addCPU("i3")
    .addRAM("8GB")
    .addArmazenamento("240GB SSD")
    .construir();

console.log("Gamer:", gamer.toString());
console.log("Básico:", basico.toString());
