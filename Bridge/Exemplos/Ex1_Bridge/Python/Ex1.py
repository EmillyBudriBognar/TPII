"""
PADRÃO: BRIDGE

O padrão Bridge desacopla uma abstração de sua implementação,
permitindo que ambas variem independentemente.
"""

from abc import ABC, abstractmethod

# 1. IMPLEMENTAÇÃO (IMPLEMENTOR) - Interface de Cores
class Cor(ABC):
    @abstractmethod
    def obter_cor(self):
        pass

# 2. IMPLEMENTAÇÕES CONCRETAS (CONCRETE IMPLEMENTORS)
class CorVermelho(Cor):
    def obter_cor(self):
        return "vermelho"

class CorAzul(Cor):
    def obter_cor(self):
        return "azul"

class CorVerde(Cor):
    def obter_cor(self):
        return "verde"

# 3. ABSTRAÇÃO (ABSTRACTION) - Interface de Formas
class Forma(ABC):
    def __init__(self, cor):
        self.cor = cor

    def set_cor(self, cor):
        self.cor = cor

    @abstractmethod
    def desenhar(self):
        pass

# 4. ABSTRAÇÕES REFINADAS (REFINED ABSTRACTIONS)
class Circulo(Forma):
    def desenhar(self):
        print(f"Desenhando um círculo {self.cor.obter_cor()}.")

class Quadrado(Forma):
    def desenhar(self):
        print(f"Desenhando um quadrado {self.cor.obter_cor()}.")

class Triangulo(Forma):
    def desenhar(self):
        print(f"Desenhando um triângulo {self.cor.obter_cor()}.")

# 5. CLIENTE
if __name__ == "__main__":
    print("=== Demonstração do Padrão Bridge ===\n")

    vermelho = CorVermelho()
    azul = CorAzul()
    verde = CorVerde()

    circulo_vermelho = Circulo(vermelho)
    quadrado_verde = Quadrado(verde)
    triangulo_azul = Triangulo(azul)

    circulo_vermelho.desenhar()
    quadrado_verde.desenhar()
    triangulo_azul.desenhar()

    print("\nAlterando a cor do círculo dinamicamente...")
    circulo_vermelho.set_cor(azul)
    circulo_vermelho.desenhar()
