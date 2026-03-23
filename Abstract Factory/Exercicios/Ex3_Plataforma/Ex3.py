"""
PADRÃO: ABSTRACT FACTORY (FÁBRICA ABSTRATA)

Exercício: Sistema de Interface de Plataforma.
Nesse exemplo, o cliente usa uma fábrica para criar componentes que 
pertencem sempre à mesma plataforma visual (Windows ou Linux).
"""

from abc import ABC, abstractmethod

# 1. PRODUTOS ABSTRATOS
class Botao(ABC):
    @abstractmethod
    def renderizar(self):
        pass

class Janela(ABC):
    @abstractmethod
    def renderizar(self):
        pass

# 2. PRODUTOS CONCRETOS - FAMÍLIA WINDOWS
class BotaoWindows(Botao):
    def renderizar(self):
        return "[ Renderizando Botão no estilo Windows ]"

class JanelaWindows(Janela):
    def renderizar(self):
        return "[ Renderizando Janela no estilo Windows ]"

# 2. PRODUTOS CONCRETOS - FAMÍLIA LINUX
class BotaoLinux(Botao):
    def renderizar(self):
        return "[ Renderizando Botão no estilo Linux (GTK) ]"

class JanelaLinux(Janela):
    def renderizar(self):
        return "[ Renderizando Janela no estilo Linux (GTK) ]"

# 3. FABRICA ABSTRATA
class FabricaUI(ABC):
    @abstractmethod
    def criar_botao(self) -> Botao:
        pass
    
    @abstractmethod
    def criar_janela(self) -> Janela:
        pass

# 4. FABRICAS CONCRETAS
class FabricaWindows(FabricaUI):
    def criar_botao(self):
        return BotaoWindows()
    def criar_janela(self):
        return JanelaWindows()

class FabricaLinux(FabricaUI):
    def criar_botao(self):
        return BotaoLinux()
    def criar_janela(self):
        return JanelaLinux()

# 5. CLIENTE
def renderizar_interface(fabrica: FabricaUI):
    botao = fabrica.criar_botao()
    janela = fabrica.criar_janela()

    print(janela.renderizar())
    print(botao.renderizar())
    print(" ----------------------------")

if __name__ == "__main__":
    print("\n--- INTERFACE WINDOWS ---")
    renderizar_interface(FabricaWindows())

    print("\n--- INTERFACE LINUX ---")
    renderizar_interface(FabricaLinux())
