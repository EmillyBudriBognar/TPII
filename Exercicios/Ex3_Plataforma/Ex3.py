# PRODUTOS ABSTRATOS
class Botao:
    def render(self): pass

class Janela:
    def render(self): pass

# PRODUTOS CONCRETOS - WINDOWS
class BotaoWindows(Botao):
    def render(self): return "Botão cinza padrão Windows."

class JanelaWindows(Janela):
    def render(self): return "Janela com bordas retas (Windows)."

# PRODUTOS CONCRETOS - MAC
class BotaoMac(Botao):
    def render(self): return "Botão arredondado estilo Mac."

class JanelaMac(Janela):
    def render(self): return "Janela translúcida do MacOS."

# PRODUTOS CONCRETOS - LINUX
class BotaoLinux(Botao):
    def render(self): return "Botão customizável do Linux."

class JanelaLinux(Janela):
    def render(self): return "Janela terminal do Linux."

# FABRICA ABSTRATA
class FabricaGUI:
    def criar_botao(self): pass
    def criar_janela(self): pass

# FABRICAS CONCRETAS
class FabricaWindows(FabricaGUI):
    def criar_botao(self): return BotaoWindows()
    def criar_janela(self): return JanelaWindows()

class FabricaMac(FabricaGUI):
    def criar_botao(self): return BotaoMac()
    def criar_janela(self): return JanelaMac()

class FabricaLinux(FabricaGUI):
    def criar_botao(self): return BotaoLinux()
    def criar_janela(self): return JanelaLinux()

# CLIENTE
def iniciar_sistema(fabrica):
    botao = fabrica.criar_botao()
    janela = fabrica.criar_janela()

    print(f" -> {botao.render()}")
    print(f" -> {janela.render()}")
    print(" ----------------------------")

if __name__ == "__main__":
    print("\n--- CARREGANDO WINDOWS ---")
    iniciar_sistema(FabricaWindows())

    print("\n--- CARREGANDO MAC ---")
    iniciar_sistema(FabricaMac())

    print("\n--- CARREGANDO LINUX ---")
    iniciar_sistema(FabricaLinux())
