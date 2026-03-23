"""
PADRÃO: BUILDER

Exercício: Fábrica de Roupas customizadas.
O Builder permite encapsular a lógica de criação de objetos complexos 
(Roupa), permitindo que o cliente defina os atributos de forma fluída.
"""

# 1. COMPONENTES DO PRODUTO
class Tipo:
    def __init__(self, tipo): self.tipo = tipo

class Tamanho:
    def __init__(self, tamanho): self.tamanho = tamanho

class Cor:
    def __init__(self, cor): self.cor = cor

class Preco:
    def __init__(self, preco): self.preco = preco

# 2. PRODUTO FINAL
class Roupa:
    def __init__(self, tipo, cor, tamanho, preco):
        self.tipo = tipo
        self.cor = cor
        self.tamanho = tamanho
        self.preco = preco

    def __str__(self):
        return f"Roupa [Cor: {self.cor.cor}, Tipo: {self.tipo.tipo}, Tamanho: {self.tamanho.tamanho}, Preço: R$ {self.preco.preco:.2f}]"

# 3. BUILDER CONCRETO
class RoupaBuilder:
    def __init__(self):
        self.tipo = None
        self.cor = None
        self.tamanho = None
        self.preco = None

    def add_tipo(self, tipo):
        self.tipo = Tipo(tipo)
        return self

    def add_cor(self, cor):
        self.cor = Cor(cor)
        return self

    def add_tamanho(self, tamanho):
        self.tamanho = Tamanho(tamanho)
        return self

    def add_preco(self, preco):
        self.preco = Preco(preco)
        return self

    def construir(self):
        return Roupa(self.tipo, self.cor, self.tamanho, self.preco)

# 4. CLIENTE
if __name__ == "__main__":
    builder = RoupaBuilder()
    
    # Criando uma Calça Jeans
    roupa1 = (builder
              .add_cor("Azul")
              .add_preco(89.90)
              .add_tamanho("42")
              .add_tipo("Calça Jeans")
              .construir())

    print(roupa1)
