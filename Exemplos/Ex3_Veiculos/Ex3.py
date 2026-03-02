# PRODUTO ABSTRATO
class Veiculo:
    def __init__(self, modelo):
        self.modelo = modelo

    def mostrar_detalhes(self):
        print(f"Modelo: {self.modelo}")

# PRODUTOS CONCRETOS
class Carro(Veiculo): pass
class Moto(Veiculo): pass

# FABRICA ABSTRATA
class FabricaDeVeiculos:
    def criar_veiculo(self, modelo): pass

# FABRICAS CONCRETAS
class FabricaDeCarros(FabricaDeVeiculos):
    def criar_veiculo(self, modelo): return Carro(modelo)

class FabricaDeMotos(FabricaDeVeiculos):
    def criar_veiculo(self, modelo): return Moto(modelo)

# CLIENTE
if __name__ == "__main__":
    fabrica_carros = FabricaDeCarros()
    fabrica_motos = FabricaDeMotos()

    v1 = fabrica_carros.criar_veiculo("Sedan")
    v2 = fabrica_carros.criar_veiculo("Hatch")
    v3 = fabrica_motos.criar_veiculo("Esportiva")
    v4 = fabrica_motos.criar_veiculo("Custom")

    v1.mostrar_detalhes()
    v2.mostrar_detalhes()
    v3.mostrar_detalhes()
    v4.mostrar_detalhes()
