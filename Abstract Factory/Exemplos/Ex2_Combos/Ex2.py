"""
PADRÃO: ABSTRACT FACTORY (FÁBRICA ABSTRATA)

O sistema de Loja Virtual usa o Abstract Factory para garantir que os itens 
de um 'Combo' pertençam sempre à mesma categoria (Fashion ou Tech).
"""

from abc import ABC, abstractmethod

# 1. PRODUTOS ABSTRATOS
class ProdutoModa(ABC):
    @abstractmethod
    def exibir_detalhes(self):
        pass

class ProdutoEletronico(ABC):
    @abstractmethod
    def exibir_detalhes(self):
        pass

# 2. PRODUTOS CONCRETOS - FAMÍLIA FASHION
class CamisaFashion(ProdutoModa):
    def exibir_detalhes(self):
        return "Camisa Fashion: Estampa moderna."

class CelularFashion(ProdutoEletronico):
    def exibir_detalhes(self):
        return "Celular Fashion: Design elegante."

# 2. PRODUTOS CONCRETOS - FAMÍLIA TECH
class CamisaTech(ProdutoModa):
    def exibir_detalhes(self):
        return "Camisa Tech: Tecido inteligente."

class CelularTech(ProdutoEletronico):
    def exibir_detalhes(self):
        return "Celular Tech: Alta performance."

# 3. FABRICA ABSTRATA
class FabricaCombo(ABC):
    @abstractmethod
    def criar_camisa(self) -> ProdutoModa:
        pass

    @abstractmethod
    def criar_celular(self) -> ProdutoEletronico:
        pass

# 4. FABRICAS CONCRETAS
class FabricaComboFashion(FabricaCombo):
    def criar_camisa(self):
        return CamisaFashion()
    
    def criar_celular(self):
        return CelularFashion()

class FabricaComboTech(FabricaCombo):
    def criar_camisa(self):
        return CamisaTech()
    
    def criar_celular(self):
        return CelularTech()

# 5. CLIENTE
def loja_virtual(fabrica: FabricaCombo):
    camisa = fabrica.criar_camisa()
    celular = fabrica.criar_celular()

    print(camisa.exibir_detalhes())
    print(celular.exibir_detalhes())

# Execução
if __name__ == "__main__":
    print("Combo Fashion:")
    loja_virtual(FabricaComboFashion())
    
    print("-------")
    
    print("Combo Tech:")
    loja_virtual(FabricaComboTech())
