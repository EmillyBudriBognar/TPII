from abc import ABC, abstractmethod

# PRODUTO ABSTRATO
class Logger(ABC):
    @abstractmethod
    def log(self, mensagem):
        pass

# PRODUTOS CONCRETOS
class ConsoleLogger(Logger):
    def log(self, mensagem):
        print(f"[CONSOLE] {mensagem}")

class ArquivoLogger(Logger):
    def log(self, mensagem):
        print(f"[ARQUIVO.txt] {mensagem}")

# FABRICA ABSTRATA
class FabricaLog(ABC):
    @abstractmethod
    def criar_logger(self):
        pass

    def registrar_log(self, mensagem):
        logger = self.criar_logger()
        logger.log(mensagem)

# FABRICAS CONCRETAS
class FabricaConsoleLog(FabricaLog):
    def criar_logger(self):
        return ConsoleLogger()

class FabricaArquivoLog(FabricaLog):
    def criar_logger(self):
        return ArquivoLogger()

# CLIENTE
if __name__ == "__main__":
    logger_console = FabricaConsoleLog()
    logger_console.registrar_log("Sistema iniciado.")

    logger_arquivo = FabricaArquivoLog()
    logger_arquivo.registrar_log("Erro de conexão detectado.")
