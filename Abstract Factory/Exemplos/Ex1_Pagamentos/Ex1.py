"""
PADRÃO: ABSTRACT FACTORY (FÁBRICA ABSTRATA)

O padrão Abstract Factory é útil quando o sistema deve ser independente de como 
seus produtos são criados, compostos e representados. Ele garante que os produtos 
de uma mesma família sejam usados juntos.
"""

from abc import ABC, abstractmethod

# 1. PRODUTOS ABSTRATOS
class GatewayPagamento(ABC):
    @abstractmethod
    def autorizar(self, valor):
        pass

class Recibo(ABC):
    @abstractmethod
    def gerar(self, valor):
        pass

# 2. PRODUTOS CONCRETOS - FAMÍLIA PAYPAL
class GatewayPayPal(GatewayPagamento):
    def autorizar(self, valor):
        return f"PayPal: Pagamento de R$ {valor:.2f} autorizado"

class ReciboPayPal(Recibo):
    def gerar(self, valor):
        return f"PayPal: Recibo do pagamento de R$ {valor:.2f}."

# 2. PRODUTOS CONCRETOS - FAMÍLIA MERCADOPAGO
class GatewayMercadoPago(GatewayPagamento):
    def autorizar(self, valor):
        return f"Mercado pago: Pagagamento de R$ {valor:.2f} autorizado"

class ReciboMercadoPago(Recibo):
    def gerar(self, valor):
        return f"Mercado Pago: Recibo do pagamento de R$ {valor:.2f}."

# 3. FABRICA ABSTRATA
class FabricaPagamento(ABC):
    @abstractmethod
    def criarGateway(self):
        pass

    @abstractmethod
    def criarRecibo(self):
        pass

# 4. FABRICA CONCRETA
class FabricaPayPal(FabricaPagamento):
    def criarGateway(self):
        return GatewayPayPal()

    def criarRecibo(self):
        return ReciboPayPal()

class FabricaMercadoPago(FabricaPagamento):
    def criarGateway(self):
        return GatewayMercadoPago()

    def criarRecibo(self):
        return ReciboMercadoPago()

# 5. CLIENTE
def finalizarCompra(fabrica: FabricaPagamento, valor: float):
    # O cliente interage com as abstrações (FabricaPagamento)
    gateway = fabrica.criarGateway()
    recibo = fabrica.criarRecibo()

    print(gateway.autorizar(valor))
    print(recibo.gerar(valor))

# Execução
if __name__ == "__main__":
    finalizarCompra(FabricaPayPal(), 100.99)
    print("*************************")
    finalizarCompra(FabricaMercadoPago(), 3100.99)
