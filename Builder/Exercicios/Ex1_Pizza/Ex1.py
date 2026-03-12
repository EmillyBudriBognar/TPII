class Pizza:
    def __init__(self):
        self.tamanho = ""
        self.massa = ""
        self.queijo = ""
        self.pepperoni = False
        self.cogumelos = False

    def __str__(self):
        return f"Pizza [Tamanho={self.tamanho}, Massa={self.massa}, Queijo={self.queijo}, Pepperoni={self.pepperoni}, Cogumelos={self.cogumelos}]"

class PizzaBuilder:
    def __init__(self):
        self.pizza = Pizza()

    def add_tamanho(self, tamanho):
        self.pizza.tamanho = tamanho
        return self

    def add_massa(self, massa):
        self.pizza.massa = massa
        return self

    def add_queijo(self, queijo):
        self.pizza.queijo = queijo
        return self

    def add_pepperoni(self):
        self.pizza.pepperoni = True
        return self

    def add_cogumelos(self):
        self.pizza.cogumelos = True
        return self

    def construir(self):
        return self.pizza

# CLIENTE
if __name__ == "__main__":
    p1 = PizzaBuilder() \
        .add_tamanho("Broto") \
        .add_massa("Grossa") \
        .add_queijo("Prato") \
        .add_pepperoni() \
        .construir()

    print(f"Pedido 1: {p1}")
