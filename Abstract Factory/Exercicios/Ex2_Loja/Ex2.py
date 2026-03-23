"""
PADRÃO: ABSTRACT FACTORY (FÁBRICA ABSTRATA)

Exercício: Sistema de Pagamentos de Loja.
Neste exemplo, o Abstract Factory é usado para garantir a consistência 
entre os diferentes meios de pagamento oferecidos por cada banco.
"""

from abc import ABC, abstractmethod

# 1. PRODUTOS ABSTRATOS
class CartaoCredito(ABC):
    @abstractmethod
    def pagar(self, valor):
        pass

class Boleto(ABC):
    @abstractmethod
    def pagar(self, valor):
        pass

# 2. PRODUTOS CONCRETOS - FAMÍLIA BANCO A
class CartaoBancoA(CartaoCredito):
    def pagar(self, valor):
        return f"Banco A: Cobrança de R$ {valor:.2f} no cartão realizada."

class BoletoBancoA(Boleto):
    def pagar(self, valor):
        return f"Banco A: Boleto de R$ {valor:.2f} gerado com sucesso."

# 2. PRODUTOS CONCRETOS - FAMÍLIA BANCO B
class CartaoBancoB(CartaoCredito):
    def pagar(self, valor):
        return f"Banco B: Pagamento de R$ {valor:.2f} aprovado no cartão!"

class BoletoBancoB(Boleto):
    def pagar(self, valor):
        return f"Banco B: Aqui está seu boleto de R$ {valor:.2f}"

# 3. FABRICA ABSTRATA
class FabricaBanco(ABC):
    @abstractmethod
    def criar_cartao(self) -> CartaoCredito:
        pass
    
    @abstractmethod
    def criar_boleto(self) -> Boleto:
        pass

# 4. FABRICAS CONCRETAS
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

# 5. CLIENTE
def finalizar_compra(fabrica: FabricaBanco, valor: float):
    # O cliente não conhece as classes concretas, apenas a interface da fábrica
    cartao = fabrica.criar_cartao()
    boleto = fabrica.criar_boleto()

    print(f" -> {cartao.pagar(valor)}")
    print(f" -> {boleto.pagar(valor)}")
    print(" ----------------------------")

# Execução
if __name__ == "__main__":
    print("\n--- FINALIZANDO NO BANCO A ---")
    finalizar_compra(FabricaBancoA(), 420.75)

    print("\n--- FINALIZANDO NO BANCO B ---")
    finalizar_compra(FabricaBancoB(), 189.30)
