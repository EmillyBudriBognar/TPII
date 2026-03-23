/**
 * PADRÃO: BUILDER
 * 
 * O Builder permite a criação de objetos complexos passo a passo. 
 * Ele é muito útil para evitar o "telescoping constructor" (muitos parâmetros no construtor).
 */

// 1. PRODUTO (O objeto que queremos construir)
class Computador {
    constructor() {
        this.cpu = "";
        this.ram = "";
        this.armazenamento = "";
        this.placaDeVideo = "Integrada"; // Valor padrão
    }

    toString() {
        return `Configuração: [CPU: ${this.cpu}, RAM: ${this.ram}, Armazenamento: ${this.armazenamento}, Placa de Vídeo: ${this.placaDeVideo}]`;
    }
}

// 2. BUILDER (Encapsula a lógica de construção)
class ComputadorBuilder {
    constructor() {
        this.computador = new Computador();
    }

    addCPU(cpu) {
        this.computador.cpu = cpu;
        return this; // Retorna o próprio builder para permitir chamadas encadeadas (Fluent Interface)
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

    // 3. MÉTODO DE CONSTRUÇÃO FINAL
    construir() {
        return this.computador;
    }
}

// 4. CLIENTE (Usa o builder para montar diferentes configurações)
const gamer = new ComputadorBuilder()
    .addCPU("Ryzen 9")
    .addRAM("64GB")
    .addArmazenamento("2TB NVMe")
    .addPlacaDeVideo("RTX 4080")
    .construir();

const office = new ComputadorBuilder()
    .addCPU("Intel i3")
    .addRAM("8GB")
    .addArmazenamento("240GB SSD")
    .construir(); // Placa de vídeo ficará com o valor padrão

console.log("PC Gamer: ", gamer.toString());
console.log("PC Office:", office.toString());
