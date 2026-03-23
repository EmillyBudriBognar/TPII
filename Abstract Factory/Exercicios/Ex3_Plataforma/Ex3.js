/**
 * PADRÃO: ABSTRACT FACTORY (FÁBRICA ABSTRATA)
 * 
 * Exercício: Sistema de Interface de Plataforma.
 * O padrão garante que os componentes da interface (Botão e Janela) 
 * correspondam ao mesmo estilo visual da plataforma (Windows ou Linux).
 */

// 1. PRODUTOS ABSTRATOS
class Botao {
    renderizar() { throw new Error("Método abstrato"); }
}

class Janela {
    renderizar() { throw new Error("Método abstrato"); }
}

// 2. PRODUTOS CONCRETOS - FAMÍLIA WINDOWS
class BotaoWindows extends Botao {
    renderizar() { return "[ Renderizando Botão no estilo Windows ]"; }
}

class JanelaWindows extends Janela {
    renderizar() { return "[ Renderizando Janela no estilo Windows ]"; }
}

// 2. PRODUTOS CONCRETOS - FAMÍLIA LINUX
class BotaoLinux extends Botao {
    renderizar() { return "[ Renderizando Botão no estilo Linux (GTK) ]"; }
}

class JanelaLinux extends Janela {
    renderizar() { return "[ Renderizando Janela no estilo Linux (GTK) ]"; }
}

// 3. FABRICA ABSTRATA
class FabricaUI {
    criarBotao() { throw new Error("Método abstrato"); }
    criarJanela() { throw new Error("Método abstrato"); }
}

// 4. FABRICAS CONCRETAS
class FabricaWindows extends FabricaUI {
    criarBotao() { return new BotaoWindows(); }
    criarJanela() { return new JanelaWindows(); }
}

class FabricaLinux extends FabricaUI {
    criarBotao() { return new BotaoLinux(); }
    criarJanela() { return new JanelaLinux(); }
}

// 5. CLIENTE
function renderizarInterface(fabrica) {
    const botao = fabrica.criarBotao();
    const janela = fabrica.criarJanela();

    console.log(janela.renderizar());
    console.log(botao.renderizar());
    console.log(" ----------------------------");
}

console.log("\n--- INTERFACE WINDOWS ---");
renderizarInterface(new FabricaWindows());

console.log("\n--- INTERFACE LINUX ---");
renderizarInterface(new FabricaLinux());
