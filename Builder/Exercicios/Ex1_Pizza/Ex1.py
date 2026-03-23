"""
PADRÃO: BUILDER

Exercício: Sistema de Pedidos de Pizza.
O padrão Builder é utilizado para montar uma Pizza passo a passo,
permitindo que o cliente escolha apenas os ingredientes que deseja.
"""

# 1. PRODUTO FINAL
class Pizza:
    def __init__(self):
        self.tamanho = ""
        self.massa = ""
        self.queijo = ""
        self.cobertura = ""

    def __str__(self):
        return f"Pizza [Tamanho: {self.tamanho}, Massa: {self.massa}, Queijo: {self.queijo}, Cobertura: {self.cobertura}]"

# 2. BUILDER CONCRETO
class PizzaBuilder:
    def __init__(self):
        self.pizza = Pizza()

    def set_tamanho(self, tamanho):
        self.pizza.tamanho = tamanho
        return self

    def set_massa(self, massa):
        self.pizza.massa = massa
        return self

    def set_queijo(self, queijo):
        self.pizza.queijo = queijo
        return self

    def set_cobertura(self, cobertura):
        self.pizza.cobertura = cobertura
        return self

    def construir(self):
        return self.pizza

# 3. CLIENTE
if __name__ == "__main__":
    # Montando a Pizza 1
    p1 = (PizzaBuilder()
          .set_tamanho("Grande")
          .set_massa("Fina")
          .set_queijo("Mussarela")
          .set_cobertura("Manjericão")
          .construir())

    # Montando a Pizza 2
    p2 = (PizzaBuilder()
          .set_tamanho("Média")
          .set_massa("Grossa")
          .set_queijo("Cheddar")
          .set_cobertura("Bacon")
          .construir())

    print(f"Pedido 1: {p1}")
    print(f"Pedido 2: {p2}")
