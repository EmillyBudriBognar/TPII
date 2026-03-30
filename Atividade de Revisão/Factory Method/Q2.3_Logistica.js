/**
 * PADRÃO: FACTORY METHOD
 * QUESTÃO 2.3 – Logística Multimodal
 *
 * Problema: Uma aplicação de logística deve permitir entrega por
 * caminhão, navio ou drone.
 *
 * Solução: Interface Transporte com subclasses concretas para cada modal
 * e classe Logistica com método de fábrica.
 */

// 1. PRODUTO (Interface/Base)
class Transporte {
    entregar() {
        throw new Error("Método abstrato: entregar()");
    }
}

// 2. PRODUTOS CONCRETOS
class Caminhao extends Transporte {
    entregar() {
        return "Entregando por caminhão pelas estradas terrestres.";
    }
}

class Navio extends Transporte {
    entregar() {
        return "Entregando por navio pelas rotas marítimas.";
    }
}

class Drone extends Transporte {
    entregar() {
        return "Entregando por drone via rota aérea automatizada.";
    }
}

// 3. CRIADOR ABSTRATO
class Logistica {
    // Factory Method – subclasses devem implementar
    criarTransporte() {
        throw new Error("Método abstrato: criarTransporte()");
    }

    // Operação que usa o factory method
    planejarEntrega() {
        const transporte = this.criarTransporte();
        console.log(`[Logística] ${transporte.entregar()}`);
    }
}

// 4. CRIADORES CONCRETOS
class LogisticaTerrestre extends Logistica {
    criarTransporte() {
        return new Caminhao();
    }
}

class LogisticaMaritima extends Logistica {
    criarTransporte() {
        return new Navio();
    }
}

class LogisticaAerea extends Logistica {
    criarTransporte() {
        return new Drone();
    }
}

// 5. CLIENTE
console.log("=== Sistema de Logística Multimodal ===\n");

const rotas = [
    new LogisticaTerrestre(),
    new LogisticaMaritima(),
    new LogisticaAerea(),
];

rotas.forEach(rota => rota.planejarEntrega());
