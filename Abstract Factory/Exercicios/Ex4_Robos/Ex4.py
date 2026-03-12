# PRODUTOS ABSTRATOS
class RoboMontador:
    def operar(self): pass

class RoboInspetor:
    def operar(self): pass

# PRODUTO CONCRETO - LINHA AUTOMOTIVA
class MontadorAutomotivo(RoboMontador):
    def operar(self): return "Montador de carros: Montando carcaça do veículo..."

class InspetorAutomotivo(RoboInspetor):
    def operar(self): return "Inspetor de peças automotivas: Verificando alinhamento das portas."

# PRODUTO CONCRETO - LINHA ELETRÔNICOS
class MontadorEletronico(RoboMontador):
    def operar(self): return "Montador de circuitos: Soldando componentes na placa mãe..."

class InspetorEletronico(RoboInspetor):
    def operar(self): return "Inspetor de chips: Testando continuidade do circuito."

# FABRICA ABSTRATA
class FabricaRobo:
    def criar_montador(self): pass
    def criar_inspetor(self): pass

# FABRICAS CONCRETAS
class FabricaAutomotiva(FabricaRobo):
    def criar_montador(self): return MontadorAutomotivo()
    def criar_inspetor(self): return InspetorAutomotivo()

class FabricaEletronicos(FabricaRobo):
    def criar_montador(self): return MontadorEletronico()
    def criar_inspetor(self): return InspetorEletronico()

# CLIENTE
def operar_linha(fabrica):
    montador = fabrica.criar_montador()
    inspetor = fabrica.criar_inspetor()

    print(f" -> {montador.operar()}")
    print(f" -> {inspetor.operar()}")
    print(" ----------------------------")

if __name__ == "__main__":
    print("\n--- PRODUÇÃO DE CARROS ---")
    operar_linha(FabricaAutomotiva())

    print("\n--- PRODUÇÃO DE ELETRÔNICOS ---")
    operar_linha(FabricaEletronicos())
