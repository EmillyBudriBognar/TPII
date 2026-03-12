# CLASSE DE DADO
class Nome:
    def __init__(self, nome, sobrenome):
        self.nome = nome
        self.sobrenome = sobrenome

    def __str__(self): return f"{self.nome} {self.sobrenome}"

# FABRICA ABSTRATA
class FabricaDeNomes:
    def criar_nome(self, texto): pass

# FABRICAS CONCRETAS
class FabricaDeNomeSimples(FabricaDeNomes):
    def criar_nome(self, texto):
        nomes = texto.split(" ")
        return Nome(nomes[0], nomes[1])

class FabricaDeNomeComVirgula(FabricaDeNomes):
    def criar_nome(self, texto):
        nomes = texto.split(",")
        return Nome(nomes[1].strip(), nomes[0].strip())

# CLIENTE
if __name__ == "__main__":
    fabrica_simples = FabricaDeNomeSimples()
    fabrica_virgula = FabricaDeNomeComVirgula()

    print(fabrica_simples.criar_nome("Stela Montenegro"))
    print(fabrica_virgula.criar_nome("Xavier, Lucas"))
