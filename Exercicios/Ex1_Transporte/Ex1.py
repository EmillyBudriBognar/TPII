# PRODUTOS ABSTRATOS
class VeiculoIndividual:
    def iniciar_rota(self):
        pass

class VeiculoColetivo:
    def iniciar_rota(self):
        pass

# PRODUTOS CONCRETOS - TERRESTRE
class Carro(VeiculoIndividual):
    def iniciar_rota(self):
        return "Partiu! Carro na pista."

class Onibus(VeiculoColetivo):
    def iniciar_rota(self):
        return "Lotou! Ônibus saindo do ponto."

# PRODUTOS CONCRETOS - AEREO
class Helicoptero(VeiculoIndividual):
    def iniciar_rota(self):
        return "Hélice girando. Decolagem autorizada!"

class Aviao(VeiculoColetivo):
    def iniciar_rota(self):
        return "Atenção passageiros, iniciando voo."

# FABRICA ABSTRATA
class FabricaTransporte:
    def criar_veiculo_individual(self):
        pass
    def criar_veiculo_coletivo(self):
        pass

# FABRICAS CONCRETAS
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

# CLIENTE
def iniciar_transporte(fabrica):
    individual = fabrica.criar_veiculo_individual()
    coletivo = fabrica.criar_veiculo_coletivo()

    print(f" -> {individual.iniciar_rota()}")
    print(f" -> {coletivo.iniciar_rota()}")
    print(" ----------------------------")

if __name__ == "__main__":
    print("\n--- VAI POR TERRA ---")
    iniciar_transporte(FabricaTerrestre())

    print("\n--- VAI POR AR ---")
    iniciar_transporte(FabricaAerea())
