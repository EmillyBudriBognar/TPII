/**
 * PADRÃO: FACTORY METHOD (MÉTODO FÁBRICA)
 * 
 * Exercício: Sistema de Logging.
 * O objetivo é permitir que o sistema registre mensagens (Logs) 
 * sem saber para onde essas mensagens estão sendo enviadas (Console, Arquivo, etc).
 */

// 1. PRODUTO ABSTRATO
interface Logger {
    void log(String mensagem);
}

// 2. PRODUTOS CONCRETOS
class ConsoleLogger implements Logger {
    public void log(String mensagem) {
        System.out.println("[CONSOLE LOG]: " + mensagem);
    }
}

class FileLogger implements Logger {
    public void log(String mensagem) {
        System.out.println("[ARQUIVO LOG]: Gravando no arquivo log.txt -> " + mensagem);
    }
}

// 3. CRIADOR ABSTRATO (Define o Factory Method)
abstract class LogManager {
    // Este é o Factory Method
    public abstract Logger createLogger();

    // Método que utiliza o produto criado pelo Factory Method
    public void registrar(String mensagem) {
        Logger logger = createLogger();
        logger.log(mensagem);
    }
}

// 4. CRIADORES CONCRETOS
class ConsoleLogManager extends LogManager {
    @Override
    public Logger createLogger() {
        return new ConsoleLogger();
    }
}

class FileLogManager extends LogManager {
    @Override
    public Logger createLogger() {
        return new FileLogger();
    }
}

// 5. CLIENTE
public class Ex1 {
    public static void main(String[] args) {
        LogManager console = new ConsoleLogManager();
        console.registrar("Sistema iniciado com sucesso.");

        LogManager arquivo = new FileLogManager();
        arquivo.registrar("Erro detectado na linha 42.");
    }
}
