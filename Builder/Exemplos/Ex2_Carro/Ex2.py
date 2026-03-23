"""
PADRÃO: BUILDER

O padrão Builder separa a construção de um objeto complexo da sua representação.
Neste exemplo de um Carro, o Builder permite definir o motor, carroceria, rodas 
e interior de forma modular através de encadeamento de métodos.
"""

# 1. COMPONENTES DO PRODUTO
class Motor:
    def __init__(self, tipo):
        self.tipo = tipo

class Carroceria:
    def __init__(self, estilo):
        self.estilo = estilo

class Rodas:
    def __init__(self, tamanho):
        self.tamanho = tamanho

class Interior:
    def __init__(self, cor):
        self.cor = cor

# 2. PRODUTO FINAL
class Carro:
    def __init__(self, motor, carroceria, rodas, interior):
        self.motor = motor
        self.carroceria = carroceria
        self.rodas = rodas
        self.interior = interior

    def mostrar_detalhes(self):
        print(f"Carro composto por:\n"
              f"- Motor: {self.motor.tipo}\n"
              f"- Carroceria: {self.carroceria.estilo}\n"
              f"- Rodas: {self.rodas.tamanho}\n"
              f"- Interior: {self.interior.cor}\n")

# 3. BUILDER CONCRETO
class CarroBuilder:
    def __init__(self):
        self.motor = None
        self.carroceria = None
        self.rodas = None
        self.interior = None

    def add_motor(self, tipo):
        self.motor = Motor(tipo)
        return self

    def add_carroceria(self, estilo):
        self.carroceria = Carroceria(estilo)
        return self

    def add_rodas(self, tamanho):
        self.rodas = Rodas(tamanho)
        return self

    def add_interior(self, cor):
        self.interior = Interior(cor)
        return self

    def construir(self):
        return Carro(self.motor, self.carroceria, self.rodas, self.interior)

# 4. CLIENTE
if __name__ == "__main__":
    builder = CarroBuilder()

    # Montando uma Pickup
    pickup = (builder
              .add_motor("1.0")
              .add_carroceria("Pickup")
              .add_rodas(15)
              .add_interior("Rosa")
              .construir())

    # Montando um SUV
    suv = (CarroBuilder()
              .add_motor("2.0")
              .add_carroceria("SUV")
              .add_rodas(18)
              .add_interior("Preto")
              .metodos_encadeados_fluentes = True # Apenas um lembrete da fluência
              .construir())

    pickup.mostrar_detalhes()
    print("-------------------------")
    suv.mostrar_detalhes()
