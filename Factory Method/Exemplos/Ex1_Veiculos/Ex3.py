"""
PADRÃO: FACTORY METHOD (MÉTODO FÁBRICA)

O Factory Method permite que uma classe delegue a responsabilidade de 
instanciação para suas subclasses, promovendo o desacoplamento.
"""

from abc import ABC, abstractmethod

# 1. PRODUTO ABSTRATO
class Veiculo(ABC):
    def __init__(self, modelo):
        self.modelo = modelo

    def mostrar_detalhes(self):
        print(f"Veículo Modelo: {self.modelo}")

# 2. PRODUTOS CONCRETOS
class Carro(Veiculo):
    pass

class Moto(Veiculo):
    pass

# 3. CRIADOR ABSTRATO
class FabricaDeVeiculos(ABC):
    @abstractmethod
    def criar_veiculo(self, modelo) -> Veiculo:
        """Este é o Factory Method."""
        pass

# 4. CRIADORES CONCRETOS
class FabricaDeCarros(FabricaDeVeiculos):
    def criar_veiculo(self, modelo):
        return Carro(modelo)

class FabricaDeMotos(FabricaDeVeiculos):
    def criar_veiculo(self, modelo):
        return Moto(modelo)

# 5. CLIENTE
if __name__ == "__main__":
    fabrica_carros = FabricaDeCarros()
    fabrica_motos = FabricaDeMotos()

    v1 = fabrica_carros.criar_veiculo("Hatchback")
    v2 = fabrica_motos.criar_veiculo("Touring")

    v1.mostrar_detalhes()
    v2.mostrar_detalhes()
