// PRODUTO ABSTRATO
interface Logger {
    void log(String mensagem);
}

// PRODUTOS CONCRETOS
class ConsoleLogger implements Logger {
    @Override
    public void log(String mensagem) {
        System.out.println("[CONSOLE] " + mensagem);
    }
}

class ArquivoLogger implements Logger {
    @Override
    public void log(String mensagem) {
        System.out.println("[ARQUIVO.txt] " + mensagem);
    }
}

// FABRICA ABSTRATA
abstract class FabricaLog {
    public abstract Logger criarLogger();

    public void registrarLog(String mensagem) {
        Logger logger = criarLogger();
        logger.log(mensagem);
    }
}

// FABRICAS CONCRETAS
class FabricaConsoleLog extends FabricaLog {
    @Override
    public Logger criarLogger() {
        return new ConsoleLogger();
    }
}

class FabricaArquivoLog extends FabricaLog {
    @Override
    public Logger criarLogger() {
        return new ArquivoLogger();
    }
}

// CLIENTE
public class Ex1 {
    public static void main(String[] args) {
        FabricaLog loggerConsole = new FabricaConsoleLog();
        loggerConsole.registrarLog("Sistema iniciado.");

        FabricaLog loggerArquivo = new FabricaArquivoLog();
        loggerArquivo.registrarLog("Erro de conexão detectado.");
    }
}
