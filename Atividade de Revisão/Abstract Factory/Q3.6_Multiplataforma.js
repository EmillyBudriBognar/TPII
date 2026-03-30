/**
 * PADRÃO: ABSTRACT FACTORY
 * QUESTÃO 3.6 – Ferramenta Multiplataforma (UI Consistente por SO)
 *
 * Problema: Uma ferramenta multiplataforma deve construir elementos de
 * interface (botões, menus, janelas) de forma consistente para cada SO.
 *
 * Solução: Abstract Factory com uma fábrica concreta para cada plataforma,
 * garantindo compatibilidade entre os componentes.
 */

// 1. ABSTRACT PRODUCTS
class Botao {
    renderizar() { throw new Error("Método abstrato"); }
}

class Menu {
    exibir() { throw new Error("Método abstrato"); }
}

class Janela {
    abrir(titulo) { throw new Error("Método abstrato"); }
}

// 2. FAMÍLIA WINDOWS
class BotaoWindows extends Botao {
    renderizar() { return "[ Button ] (Fluent Design – borda suave, sombra leve)"; }
}

class MenuWindows extends Menu {
    exibir() { return "≡ Menu (Ribbon-style horizontal com dropdown cascata)"; }
}

class JanelaWindows extends Janela {
    abrir(titulo) { return `┌─ ${titulo} ───────────────────── □ □ ✕ ─┐`; }
}

// 3. FAMÍLIA MAC
class BotaoMac extends Botao {
    renderizar() { return "( Button ) (macOS – arredondado, fundo translúcido)"; }
}

class MenuMac extends Menu {
    exibir() { return "🍎 Menu Bar (global na barra do sistema, minimalista)"; }
}

class JanelaMac extends Janela {
    abrir(titulo) { return `● ● ● | ${titulo} (macOS – traffic light controls)`; }
}

// 4. FAMÍLIA LINUX
class BotaoLinux extends Botao {
    renderizar() { return "[ Button ] (GTK/Qt – tema configurável pelo usuário)"; }
}

class MenuLinux extends Menu {
    exibir() { return "☰ Menu (GTK – contextual ou barra de aplicativo)"; }
}

class JanelaLinux extends Janela {
    abrir(titulo) { return `[${titulo}] (WM: titlebar + resize + close configurável)`; }
}

// 5. ABSTRACT FACTORY
class FabricaInterface {
    criarBotao()  { throw new Error("Método abstrato"); }
    criarMenu()   { throw new Error("Método abstrato"); }
    criarJanela() { throw new Error("Método abstrato"); }
}

// 6. FÁBRICAS CONCRETAS
class FabricaWindows extends FabricaInterface {
    criarBotao()  { return new BotaoWindows(); }
    criarMenu()   { return new MenuWindows(); }
    criarJanela() { return new JanelaWindows(); }
}

class FabricaMac extends FabricaInterface {
    criarBotao()  { return new BotaoMac(); }
    criarMenu()   { return new MenuMac(); }
    criarJanela() { return new JanelaMac(); }
}

class FabricaLinux extends FabricaInterface {
    criarBotao()  { return new BotaoLinux(); }
    criarMenu()   { return new MenuLinux(); }
    criarJanela() { return new JanelaLinux(); }
}

// 7. APLICAÇÃO (usa apenas a interface abstrata)
class Aplicacao {
    constructor(fabrica) {
        this.botao  = fabrica.criarBotao();
        this.menu   = fabrica.criarMenu();
        this.janela = fabrica.criarJanela();
    }

    iniciar(titulo) {
        console.log(`  Janela:  ${this.janela.abrir(titulo)}`);
        console.log(`  Menu:    ${this.menu.exibir()}`);
        console.log(`  Botão:   ${this.botao.renderizar()}`);
    }
}

// 8. CLIENTE
console.log("=== Ferramenta Multiplataforma ===\n");

const configs = [
    { nome: "Windows", fabrica: new FabricaWindows() },
    { nome: "Mac",     fabrica: new FabricaMac()     },
    { nome: "Linux",   fabrica: new FabricaLinux()   },
];

configs.forEach(({ nome, fabrica }) => {
    console.log(`[SO: ${nome}]`);
    const app = new Aplicacao(fabrica);
    app.iniciar("Minha Aplicação");
    console.log();
});
