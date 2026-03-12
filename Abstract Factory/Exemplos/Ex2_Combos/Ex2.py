# PRODUTOS ABSTRATOS
class ProdutoModa:
    def __str__(self): pass

class ProdutoEletronico:
    def __str__(self): pass

# PRODUTOS CONCRETOS - FASHION
class CamisaFashion(ProdutoModa):
    def __str__(self): return "Camisa Fashion"

class CelularFashion(ProdutoEletronico):
    def __str__(self): return "Celular Fashion."

# PRODUTOS CONCRETOS - TECH
class CamisaTech(ProdutoModa):
    def __str__(self): return "Camisa Tech"

class CelularTech(ProdutoEletronico):
    def __str__(self): return "Celular Tech."

# FABRICA ABSTRATA
class FabricaCombo:
    def criar_camisa(self): pass
    def criar_celular(self): pass

# FABRICAS CONCRETAS
class FabricaComboTech(FabricaCombo):
    def criar_camisa(self): return CamisaTech()
    def criar_celular(self): return CelularTech()

class FabricaComboFashion(FabricaCombo):
    def criar_camisa(self): return CamisaFashion()
    def criar_celular(self): return CelularFashion()

# CLIENTE
def loja_virtual(fabrica):
    camisa = fabrica.criar_camisa()
    celular = fabrica.criar_celular()
    print(camisa)
    print(celular)

if __name__ == "__main__":
    print("Combo fashion: ")
    loja_virtual(FabricaComboFashion())
    print("-------")
    print("Combo tech: ")
    loja_virtual(FabricaComboTech())
