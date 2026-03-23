"""
PADRÃO: ABSTRACT FACTORY (FÁBRICA ABSTRATA)

Exercício: Sistema de Fábrica de Robôs.
A Fábrica Abstrata permite encapsular a criação de componentes de robôs 
especializados para diferentes ambientes operativos.
"""

from abc import ABC, abstractmethod

# 1. PRODUTOS ABSTRATOS
class Armadura(ABC):
    @abstractmethod
    def exibir(self):
        pass

class Arma(ABC):
    @abstractmethod
    def exibir(self):
        pass

# 2. PRODUTOS CONCRETOS - FAMÍLIA TERRESTRE
class ArmaduraTanque(Armadura):
    def exibir(self):
        return "Armadura: Blindagem Pesada (Terrestre)."

class Canhao(Arma):
    def exibir(self):
        return "Arma: Canhão de Longo Alcance."

# 2. PRODUTOS CONCRETOS - FAMÍLIA ESPACIAL
class ArmaduraLeve(Armadura):
    def exibir(self):
        return "Armadura: Revestimento de Titânio (Espacial)."

class Laser(Arma):
    def exibir(self):
        return "Arma: Canhão Laser de Precisão."

# 3. FABRICA ABSTRATA
class FabricaRobo(ABC):
    @abstractmethod
    def criar_armadura(self) -> Armadura:
        pass
    
    @abstractmethod
    def criar_arma(self) -> Arma:
        pass

# 4. FABRICAS CONCRETAS
class FabricaRoboTerrestre(FabricaRobo):
    def criar_armadura(self):
        return ArmaduraTanque()
    def criar_arma(self):
        return Canhao()

class FabricaRoboEspacial(FabricaRobo):
    def criar_armadura(self):
        return ArmaduraLeve()
    def criar_arma(self):
        return Laser()

# 5. CLIENTE
def montar_robo(fabrica: FabricaRobo):
    armadura = fabrica.criar_armadura()
    arma = fabrica.criar_arma()

    print(armadura.exibir())
    print(arma.exibir())
    print(" ----------------------------")

if __name__ == "__main__":
    print("\n--- CONFIGURAÇÃO TERRESTRE ---")
    montar_robo(FabricaRoboTerrestre())

    print("\n--- CONFIGURAÇÃO ESPACIAL ---")
    montar_robo(FabricaRoboEspacial())
