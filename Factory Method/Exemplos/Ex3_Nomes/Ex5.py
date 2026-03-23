"""
PADRÃO: FACTORY METHOD (MÉTODO FÁBRICA)

Este exemplo demonstra como esconder a complexidade da criação de objetos 
(como o parsing de strings) atrás de um método fábrica.
"""

from abc import ABC

# 1. PRODUTO ABSTRATO
class Nome(ABC):
    def __init__(self):
        self.nome = ""
        self.sobrenome = ""

    def __str__(self):
        return f"Nome: {self.nome} | Sobrenome: {self.sobrenome}"

# 2. PRODUTOS CONCRETOS
class NomeSimples(Nome):
    def __init__(self, s):
        super().__init__()
        self.nome = s

class NomeSobrenome(Nome):
    def __init__(self, s):
        super().__init__()
        if "," in s:
            parts = s.split(",")
            self.sobrenome = parts[0].strip()
            self.nome = parts[1].strip()

# 3. CRIADOR (Fábrica)
class FabricaDeNomes:
    # Factory Method
    def get_nome(self, s) -> Nome:
        if "," in s:
            return NomeSobrenome(s)
        else:
            return NomeSimples(s)

# 4. CLIENTE
if __name__ == "__main__":
    fabrica = FabricaDeNomes()

    n1 = fabrica.get_nome("Silvio Santos")
    n2 = fabrica.get_nome("Lula, Luiz Inácio")

    print(n1)
    print(n2)
