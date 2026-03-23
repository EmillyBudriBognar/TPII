/**
 * PADRÃO: FACTORY METHOD (MÉTODO FÁBRICA)
 * 
 * Exercício: Sistema de Logging.
 * O Factory Method permite que a classe base 'LogManager' delegue a 
 * criação de loggers específicos para suas subclasses, permitindo que o 
 * sistema suporte novos locais de log sem alterar o código principal.
 */

// 1. PRODUTO (Base/Interface)
class Logger {
    log(mensagem) { throw new Error("Método abstrato log()"); }
}

// 2. PRODUTOS CONCRETOS
class ConsoleLogger extends Logger {
    log(mensagem) { console.log(`[CONSOLE LOG]: ${mensagem}`); }
}

class FileLogger extends Logger {
    log(mensagem) { console.log(`[ARQUIVO LOG]: Simulação de gravação em arquivo -> ${mensagem}`); }
}

// 3. CRIADOR ABSTRATO (Base)
class LogManager {
    // Factory Method
    createLogger() { throw new Error("Este método deve ser sobrescrito."); }

    registrar(mensagem) {
        const logger = this.createLogger();
        logger.log(mensagem);
    }
}

// 4. CRIADORES CONCRETOS
class ConsoleLogManager extends LogManager {
    createLogger() { return new ConsoleLogger(); }
}

class FileLogManager extends LogManager {
    createLogger() { return new FileLogger(); }
}

// 5. CLIENTE
const consoleLog = new ConsoleLogManager();
consoleLog.registrar("Usuário f81d logado no sistema.");

const fileLog = new FileLogManager();
fileLog.registrar("Acesso negado em /admin na rota POST.");
