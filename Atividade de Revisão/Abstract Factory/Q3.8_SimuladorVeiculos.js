/**
 * PADRÃO: ABSTRACT FACTORY
 * QUESTÃO 3.8 – Simulador de Veículos
 *
 * Problema: Um simulador cria diferentes componentes (motor, roda, freio)
 * conforme o tipo de carro (esportivo ou popular).
 *
 * Solução: Abstract Factory com fábricas especializadas para cada
 * categoria de veículo, garantindo compatibilidade entre as peças.
 */

// 1. ABSTRACT PRODUCTS
class Motor {
    especificacoes() { throw new Error("Método abstrato"); }
    ligar()          { throw new Error("Método abstrato"); }
}

class Roda {
    especificacoes() { throw new Error("Método abstrato"); }
}

class Freio {
    especificacoes() { throw new Error("Método abstrato"); }
    frear()          { throw new Error("Método abstrato"); }
}

// 2. FAMÍLIA ESPORTIVO
class MotorEsportivo extends Motor {
    especificacoes() { return "Motor V8 5.0L, 450cv, turbo compressor, câmbio duplo embreagem"; }
    ligar()          { return "🏎️  VRUUUM! Motor V8 acelerado, rotação instantânea a 8000 RPM"; }
}

class RodaEsportiva extends Roda {
    especificacoes() { return "Aro 21\", pneu Bridgestone Potenza S001, largura 255/35"; }
}

class FreioEsportivo extends Freio {
    especificacoes() { return "Freio Brembo carbono-cerâmico, 6 pistões dianteiros"; }
    frear()          { return "🔴 Frenagem de alta performance – 100 a 0 km/h em 31 metros"; }
}

// 3. FAMÍLIA POPULAR
class MotorPopular extends Motor {
    especificacoes() { return "Motor 1.0L 3 cilindros, 82cv, flex, câmbio manual 5 marchas"; }
    ligar()          { return "🚗 Buzz... Motor 1.0 ligado suavemente, consumo eficiente"; }
}

class RodaPopular extends Roda {
    especificacoes() { return "Aro 15\", pneu Pirelli Cinturato P1, largura 185/60"; }
}

class FreioPopular extends Freio {
    especificacoes() { return "Freio a disco dianteiro e tambor traseiro, sistema convencional"; }
    frear()          { return "🟡 Frenagem convencional – 100 a 0 km/h em 43 metros"; }
}

// 4. ABSTRACT FACTORY
class FabricaVeiculo {
    criarMotor() { throw new Error("Método abstrato"); }
    criarRoda()  { throw new Error("Método abstrato"); }
    criarFreio() { throw new Error("Método abstrato"); }
}

// 5. FÁBRICAS CONCRETAS
class FabricaEsportivo extends FabricaVeiculo {
    criarMotor() { return new MotorEsportivo(); }
    criarRoda()  { return new RodaEsportiva(); }
    criarFreio() { return new FreioEsportivo(); }
}

class FabricaPopular extends FabricaVeiculo {
    criarMotor() { return new MotorPopular(); }
    criarRoda()  { return new RodaPopular(); }
    criarFreio() { return new FreioPopular(); }
}

// 6. VEÍCULO (usa a fábrica abstrata)
class Veiculo {
    constructor(modelo, fabrica) {
        this.modelo = modelo;
        this.motor  = fabrica.criarMotor();
        this.roda   = fabrica.criarRoda();
        this.freio  = fabrica.criarFreio();
    }

    simular() {
        console.log(`\n[Veículo: ${this.modelo}]`);
        console.log(`  Motor:  ${this.motor.especificacoes()}`);
        console.log(`  Rodas:  ${this.roda.especificacoes()}`);
        console.log(`  Freios: ${this.freio.especificacoes()}`);
        console.log(`  Ignição: ${this.motor.ligar()}`);
        console.log(`  Freagem: ${this.freio.frear()}`);
    }
}

// 7. CLIENTE
console.log("=== Simulador de Veículos ===");

const ferarri = new Veiculo("Ferrari F8 Tributo", new FabricaEsportivo());
ferarri.simular();

const gol = new Veiculo("Volkswagen Gol 1.0", new FabricaPopular());
gol.simular();
