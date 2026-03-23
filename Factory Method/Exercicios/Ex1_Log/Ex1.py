"""
PADRÃO: FACTORY METHOD (MÉTODO FÁBRICA)

Exercício: Sistema de Logging.
Este padrão é ideal para sistemas de Log onde a forma de registro 
pode mudar dependendo do ambiente (Desenvolvimento vs Produção).
"""

from abc import ABC, abstractmethod

# 1. PRODUTO ABSTRATO (Interface)
class Logger(ABC):
    @abstractmethod
    def log(self, mensagem):
        pass

# 2. PRODUTOS CONCRETOS
class ConsoleLogger(Logger):
    def log(self, mensagem):
        print(f"[CONSOLE LOG]: {mensagem}")

class FileLogger(Logger):
    def log(self, mensagem):
        print(f"[ARQUIVO LOG]: Registrando no arquivo oculto -> {mensagem}")

# 3. CRIADOR (Classe Base)
class LogManager(ABC):
    @abstractmethod
    def create_logger(self) -> Logger:
        """Este é o Factory Method."""
        pass

    def registrar(self, mensagem):
        """Método que utiliza o Logger criado pela subclasse."""
        logger = self.create_logger()
        logger.log(mensagem)

# 4. CRIADORES CONCRETOS (Fábricas)
class ConsoleLogManager(LogManager):
    def create_logger(self):
        return ConsoleLogger()

class FileLogManager(LogManager):
    def create_logger(self):
        return FileLogger()

# 5. CLIENTE
if __name__ == "__main__":
    c_log = ConsoleLogManager()
    c_log.registrar("Otimização de consulta iniciada.")

    f_log = FileLogManager()
    f_log.registrar("Aviso: Baixa memória disponível no servidor.")
