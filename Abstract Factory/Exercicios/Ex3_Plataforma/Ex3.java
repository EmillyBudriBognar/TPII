// PRODUTOS ABSTRATOS
abstract class Botao {
    public abstract String render();
}

abstract class Janela {
    public abstract String render();
}

// PRODUTOS CONCRETOS - WINDOWS
class BotaoWindows extends Botao {
    @Override
    public String render() {
        return "Botão cinza padrão Windows.";
    }
}

class JanelaWindows extends Janela {
    @Override
    public String render() {
        return "Janela com bordas retas (Windows).";
    }
}

// PRODUTOS CONCRETOS - MAC
class BotaoMac extends Botao {
    @Override
    public String render() {
        return "Botão arredondado estilo Mac.";
    }
}

class JanelaMac extends Janela {
    @Override
    public String render() {
        return "Janela translúcida do MacOS.";
    }
}

// PRODUTOS CONCRETOS - LINUX
class BotaoLinux extends Botao {
    @Override
    public String render() {
        return "Botão customizável do Linux.";
    }
}

class JanelaLinux extends Janela {
    @Override
    public String render() {
        return "Janela terminal do Linux.";
    }
}

// FABRICA ABSTRATA
abstract class FabricaGUI {
    public abstract Botao criarBotao();

    public abstract Janela criarJanela();
}

// FABRICAS CONCRETAS
class FabricaWindows extends FabricaGUI {
    @Override
    public Botao criarBotao() {
        return new BotaoWindows();
    }

    @Override
    public Janela criarJanela() {
        return new JanelaWindows();
    }
}

class FabricaMac extends FabricaGUI {
    @Override
    public Botao criarBotao() {
        return new BotaoMac();
    }

    @Override
    public Janela criarJanela() {
        return new JanelaMac();
    }
}

class FabricaLinux extends FabricaGUI {
    @Override
    public Botao criarBotao() {
        return new BotaoLinux();
    }

    @Override
    public Janela criarJanela() {
        return new JanelaLinux();
    }
}

// CLIENTE
public class Ex3 {
    public static void iniciarSistema(FabricaGUI fabrica) {
        Botao botao = fabrica.criarBotao();
        Janela janela = fabrica.criarJanela();

        System.out.println(" -> " + botao.render());
        System.out.println(" -> " + janela.render());
        System.out.println(" ----------------------------");
    }

    public static void main(String[] args) {
        System.out.println("\n--- CARREGANDO WINDOWS ---");
        iniciarSistema(new FabricaWindows());

        System.out.println("\n--- CARREGANDO MAC ---");
        iniciarSistema(new FabricaMac());

        System.out.println("\n--- CARREGANDO LINUX ---");
        iniciarSistema(new FabricaLinux());
    }
}
