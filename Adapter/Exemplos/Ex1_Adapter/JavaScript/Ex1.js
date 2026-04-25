/**
 * PADRÃO: ADAPTER
 * 
 * O padrão Adapter permite que interfaces incompatíveis trabalhem juntas.
 * Ele atua como um tradutor entre o cliente e um serviço existente.
 */

// 1. INTERFACE DO CLIENTE (TARGET)
class Target {
    request() {
        console.log("Target: Requisição padrão.");
    }
}

// 2. SERVIÇO EXISTENTE (ADAPTEE) - Interface incompatível
class Adaptee {
    requestEspecifico() {
        console.log("Adaptee: Requisição específica (incompatível).");
    }
}

// 3. ADAPTADOR (ADAPTER)
class Adapter extends Target {
    constructor(adaptee) {
        super();
        this.adaptee = adaptee;
    }

    request() {
        console.log("Adapter: Convertendo requisição...");
        this.adaptee.requestEspecifico();
    }
}

// 4. CLIENTE
class Cliente {
    constructor(target) {
        this.target = target;
    }

    fazerRequisicao() {
        console.log("Cliente fazendo uma requisição...");
        this.target.request();
    }
}

// USO DO ADAPTADOR
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
const cliente = new Cliente(adapter);

cliente.fazerRequisicao();
