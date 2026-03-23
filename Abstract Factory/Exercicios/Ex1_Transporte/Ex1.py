"""
PADRÃO: ABSTRACT FACTORY (FÁBRICA ABSTRATA)

Exercício: Sistema de Transporte.
Este padrão é ideal quando o sistema deve gerenciar famílias de produtos 
(Individual e Coletivo) sem acoplar o cliente às classes concretas.
"""

from abc import ABC, abstractmethod

# 1. PRODUTOS ABSTRATOS
class VeiculoIndividual(ABC):
    @abstractmethod
    def iniciar_rota(self):
        pass

class VeiculoColetivo(ABC):
    @abstractmethod
    def iniciar_rota(self):
        pass

# 2. PRODUTOS CONCRETOS - FAMÍLIA TERRESTRE
class Carro(VeiculoIndividual):
    def iniciar_rota(self):
        return "Partiu! Carro na pista (Transporte Terrestre Individual)."

class Onibus(VeiculoColetivo):
    def iniciar_rota(self):
        return "Lotou! Ônibus saindo do ponto (Transporte Terrestre Coletivo)."

# 2. PRODUTOS CONCRETOS - FAMÍLIA AÉREA
class Helicoptero(VeiculoIndividual):
    def iniciar_rota(self):
        return "Hélice girando. Decolagem autorizada! (Transporte Aéreo Individual)."

class Aviao(VeiculoColetivo):
    def iniciar_rota(self):
        return "Atenção passageiros, iniciando voo (Transporte Aéreo Coletivo)."

# 3. FABRICA ABSTRATA
class FabricaTransporte(ABC):
    @abstractmethod
    def criar_veiculo_individual(self) -> VeiculoIndividual:
        pass
    
    @abstractmethod
    def criar_veiculo_coletivo(self) -> VeiculoColetivo:
        pass

# 4. FABRICAS CONCRETAS
class FabricaTerrestre(FabricaTransporte):
    def criar_veiculo_individual(self):
        return Carro()
    
    def criar_veiculo_coletivo(self):
        return Onibus()

class FabricaAerea(FabricaTransporte):
    def criar_veiculo_individual(self):
        return Helicoptero()
    
    def criar_veiculo_coletivo(self):
        return Aviao()

# 5. CLIENTE
def iniciar_transporte(fabrica: FabricaTransporte):
    individual = fabrica.criar_veiculo_individual()
    coletivo = fabrica.criar_veiculo_coletivo()

    print(f" -> {individual.iniciar_rota()}")
    print(f" -> {coletivo.iniciar_rota()}")
    print(" ----------------------------")

if __name__ == "__main__":
    print("\n--- AMBIENTE TERRESTRE ---")
    iniciar_transporte(FabricaTerrestre())

    print("\n--- AMBIENTE AÉREO ---")
    iniciar_transporte(FabricaAerea())
