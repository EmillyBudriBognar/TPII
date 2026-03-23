/**
 * PADRÃO: ABSTRACT FACTORY (FÁBRICA ABSTRATA)
 * 
 * Exercício: Sistema de Interface de Plataforma.
 * O objetivo é garantir que os componentes da interface (Botão e Janela) 
 * correspondam ao mesmo Sistema Operacional (Windows ou Linux).
 */

// 1. PRODUTOS ABSTRATOS
interface Botao {
    String renderizar();
}

interface Janela {
    String renderizar();
}

// 2. PRODUTOS CONCRETOS - FAMÍLIA WINDOWS
class BotaoWindows implements Botao {
    public String renderizar() { return "[ Renderizando Botão no estilo Windows ]"; }
}

class JanelaWindows implements Janela {
    public String renderizar() { return "[ Renderizando Janela no estilo Windows ]"; }
}

// 2. PRODUTOS CONCRETOS - FAMÍLIA LINUX
class BotaoLinux implements Botao {
    public String renderizar() { return "[ Renderizando Botão no estilo Linux (GTK) ]"; }
}

class JanelaLinux implements Janela {
    public String renderizar() { return "[ Renderizando Janela no estilo Linux (GTK) ]"; }
}

// 3. FABRICA ABSTRATA
interface FabricaUI {
    Botao criarBotao();
    Janela criarJanela();
}

// 4. FABRICAS CONCRETAS
class FabricaWindows implements FabricaUI {
    public Botao criarBotao() { return new BotaoWindows(); }
    public Janela criarJanela() { return new JanelaWindows(); }
}

class FabricaLinux implements FabricaUI {
    public Botao criarBotao() { return new BotaoLinux(); }
    public Janela criarJanela() { return new JanelaLinux(); }
}

// 5. CLIENTE
public class Ex3 {
    public static void renderizarInterface(FabricaUI fabrica) {
        Botao botao = fabrica.criarBotao();
        Janela janela = fabrica.criarJanela();

        System.out.println(janela.renderizar());
        System.out.println(botao.renderizar());
        System.out.println(" ----------------------------");
    }

    public static void main(String[] args) {
        System.out.println("\n--- INTERFACE WINDOWS ---");
        renderizarInterface(new FabricaWindows());

        System.out.println("\n--- INTERFACE LINUX ---");
        renderizarInterface(new FabricaLinux());
    }
}
