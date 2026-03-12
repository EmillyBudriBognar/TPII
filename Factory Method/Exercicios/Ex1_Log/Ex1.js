class Logger {
    log(mensagem) {
        throw new Error("Método abstrato!");
    }
}

class ConsoleLogger extends Logger {
    log(mensagem) {
        console.log(`[CONSOLE] ${mensagem}`);
    }
}

class ArquivoLogger extends Logger {
    log(mensagem) {
        console.log(`[ARQUIVO.txt] ${mensagem}`);
    }
}

class FabricaLog {
    criarLogger() {
        throw new Error("Método abstrato!");
    }

    registrarLog(mensagem) {
        const logger = this.criarLogger();
        logger.log(mensagem);
    }
}

class FabricaConsoleLog extends FabricaLog {
    criarLogger() {
        return new ConsoleLogger();
    }
}

class FabricaArquivoLog extends FabricaLog {
    criarLogger() {
        return new ArquivoLogger();
    }
}

// CLIENTE
const loggerConsole = new FabricaConsoleLog();
loggerConsole.registrarLog("Sistema iniciado.");

const loggerArquivo = new FabricaArquivoLog();
loggerArquivo.registrarLog("Erro de conexão detectado.");
