/**
 * PADRÃO: FACTORY METHOD
 * QUESTÃO 2.5 – Interface de Usuário Multiplataforma
 *
 * Problema: Uma empresa cria interfaces para Windows, Mac e Linux.
 * Os elementos de UI devem ser criados de forma independente da plataforma.
 *
 * Solução: Factory Method para criar elementos de UI (Botao, Campo)
 * específicos de cada sistema operacional.
 */

// 1. PRODUTOS (Interfaces base)
class Botao {
    renderizar() {
        throw new Error("Método abstrato: renderizar()");
    }

    clicar() {
        throw new Error("Método abstrato: clicar()");
    }
}

class CampoTexto {
    renderizar() {
        throw new Error("Método abstrato: renderizar()");
    }
}

// 2. PRODUTOS CONCRETOS - Windows
class BotaoWindows extends Botao {
    renderizar() { return "[BUTTON - Windows style: square, flat, Fluent Design]"; }
    clicar()     { return "Click! (Windows ripple effect)"; }
}

class CampoTextoWindows extends CampoTexto {
    renderizar() { return "[INPUT - Windows style: bordered, Segoe UI font]"; }
}

// 3. PRODUTOS CONCRETOS - Mac
class BotaoMac extends Botao {
    renderizar() { return "[BUTTON - Mac style: rounded, glossy, SF Pro font]"; }
    clicar()     { return "Click! (Mac haptic feedback)"; }
}

class CampoTextoMac extends CampoTexto {
    renderizar() { return "[INPUT - Mac style: rounded corners, native border]"; }
}

// 4. PRODUTOS CONCRETOS - Linux
class BotaoLinux extends Botao {
    renderizar() { return "[BUTTON - Linux/GTK style: configurable theme]"; }
    clicar()     { return "Click! (GTK signal emitted)"; }
}

class CampoTextoLinux extends CampoTexto {
    renderizar() { return "[INPUT - Linux style: GTK Entry widget]"; }
}

// 5. CRIADOR ABSTRATO
class FabricaUI {
    // Factory Methods
    criarBotao()     { throw new Error("Método abstrato: criarBotao()"); }
    criarCampoTexto() { throw new Error("Método abstrato: criarCampoTexto()"); }

    // Monta e exibe a UI usando os factory methods
    renderizarTela() {
        const botao = this.criarBotao();
        const campo = this.criarCampoTexto();

        console.log("  Campo de texto: " + campo.renderizar());
        console.log("  Botão:          " + botao.renderizar());
        console.log("  Ação de clique: " + botao.clicar());
    }
}

// 6. CRIADORES CONCRETOS
class FabricaWindows extends FabricaUI {
    criarBotao()     { return new BotaoWindows(); }
    criarCampoTexto() { return new CampoTextoWindows(); }
}

class FabricaMac extends FabricaUI {
    criarBotao()     { return new BotaoMac(); }
    criarCampoTexto() { return new CampoTextoMac(); }
}

class FabricaLinux extends FabricaUI {
    criarBotao()     { return new BotaoLinux(); }
    criarCampoTexto() { return new CampoTextoLinux(); }
}

// 7. CLIENTE
console.log("=== Sistema de UI Multiplataforma ===\n");

const plataformas = [
    { nome: "Windows", fabrica: new FabricaWindows() },
    { nome: "Mac",     fabrica: new FabricaMac()     },
    { nome: "Linux",   fabrica: new FabricaLinux()   },
];

plataformas.forEach(({ nome, fabrica }) => {
    console.log(`[Plataforma: ${nome}]`);
    fabrica.renderizarTela();
    console.log();
});
