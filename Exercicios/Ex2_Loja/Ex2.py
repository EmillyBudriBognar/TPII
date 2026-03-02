# PRODUTOS ABSTRATOS
class CartaoCredito:
    def pagar(self, valor):
        pass

class Boleto:
    def pagar(self, valor):
        pass

# PRODUTOS CONCRETOS - BANCO A
class CartaoBancoA(CartaoCredito):
    def pagar(self, valor):
        return f"Banco A: Cobrança de R$ {valor:.2f} no cartão feita."

class BoletoBancoA(Boleto):
    def pagar(self, valor):
        return f"Banco A: Boleto de R$ {valor:.2f} gerado com sucesso."

# PRODUTOS CONCRETOS - BANCO B
class CartaoBancoB(CartaoCredito):
    def pagar(self, valor):
        return f"Banco B: Pagamento de R$ {valor:.2f} aprovado!"

class BoletoBancoB(Boleto):
    def pagar(self, valor):
        return f"Banco B: Aqui está seu boleto de R$ {valor:.2f}"

# FABRICA ABSTRATA
class FabricaBanco:
    def criar_cartao(self):
        pass
    def criar_boleto(self):
        pass

# FABRICAS CONCRETAS
class FabricaBancoA(FabricaBanco):
    def criar_cartao(self):
        return CartaoBancoA()
    def criar_boleto(self):
        return BoletoBancoA()

class FabricaBancoB(FabricaBanco):
    def criar_cartao(self):
        return CartaoBancoB()
    def criar_boleto(self):
        return BoletoBancoB()

# CLIENTE
def finalizar_compra(fabrica, valor):
    cartao = fabrica.criar_cartao()
    boleto = fabrica.criar_boleto()

    print(f" -> {cartao.pagar(valor)}")
    print(f" -> {boleto.pagar(valor)}")
    print(" ----------------------------")

if __name__ == "__main__":
    print("\n--- COMPRA NO BANCO A ---")
    finalizar_compra(FabricaBancoA(), 420.75)

    print("\n--- COMPRA NO BANCO B ---")
    finalizar_compra(FabricaBancoB(), 189.30)
