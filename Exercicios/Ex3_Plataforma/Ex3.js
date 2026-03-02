// PRODUTOS ABSTRATOS
class Botao {
    render() { throw new Error("Método abstrato"); }
}

class Janela {
    render() { throw new Error("Método abstrato"); }
}

// PRODUTOS CONCRETOS - WINDOWS
class BotaoWindows extends Botao {
    render() { return "Botão cinza padrão Windows."; }
}

class JanelaWindows extends Janela {
    render() { return "Janela com bordas retas (Windows)."; }
}

// PRODUTOS CONCRETOS - MAC
class BotaoMac extends Botao {
    render() { return "Botão arredondado estilo Mac."; }
}

class JanelaMac extends Janela {
    render() { return "Janela translúcida do MacOS."; }
}

// PRODUTOS CONCRETOS - LINUX
class BotaoLinux extends Botao {
    render() { return "Botão customizável do Linux."; }
}

class JanelaLinux extends Janela {
    render() { return "Janela terminal do Linux."; }
}

// FABRICA ABSTRATA
class FabricaGUI {
    criarBotao() { throw new Error("Método abstrato"); }
    criarJanela() { throw new Error("Método abstrato"); }
}

// FABRICAS CONCRETAS
class FabricaWindows extends FabricaGUI {
    criarBotao() { return new BotaoWindows(); }
    criarJanela() { return new JanelaWindows(); }
}

class FabricaMac extends FabricaGUI {
    criarBotao() { return new BotaoMac(); }
    criarJanela() { return new JanelaMac(); }
}

class FabricaLinux extends FabricaGUI {
    criarBotao() { return new BotaoLinux(); }
    criarJanela() { return new JanelaLinux(); }
}

// CLIENTE
function iniciarSistema(fabrica) {
    const botao = fabrica.criarBotao();
    const janela = fabrica.criarJanela();

    console.log(" -> " + botao.render());
    console.log(" -> " + janela.render());
    console.log(" ----------------------------");
}

console.log("\n--- CARREGANDO WINDOWS ---");
iniciarSistema(new FabricaWindows());

console.log("\n--- CARREGANDO MAC ---");
iniciarSistema(new FabricaMac());

console.log("\n--- CARREGANDO LINUX ---");
iniciarSistema(new FabricaLinux());
