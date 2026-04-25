"""
PADRÃO: ADAPTER

O padrão Adapter permite que interfaces incompatíveis trabalhem juntas.
Ele atua como um tradutor entre o cliente e um serviço existente.
"""

# 1. INTERFACE DO CLIENTE (TARGET)
class Target:
    def request(self):
        print("Target: Requisição padrão.")

# 2. SERVIÇO EXISTENTE (ADAPTEE) - Interface incompatível
class Adaptee:
    def request_especifico(self):
        print("Adaptee: Requisição específica (incompatível).")

# 3. ADAPTADOR (ADAPTER)
class Adapter(Target):
    def __init__(self, adaptee):
        self.adaptee = adaptee

    def request(self):
        print("Adapter: Convertendo requisição...")
        self.adaptee.request_especifico()

# 4. CLIENTE
class Cliente:
    def __init__(self, target):
        self.target = target

    def fazer_requisicao(self):
        print("Cliente fazendo uma requisição...")
        self.target.request()

# USO DO ADAPTADOR
if __name__ == "__main__":
    adaptee = Adaptee()
    adapter = Adapter(adaptee)
    cliente = Cliente(adapter)

    cliente.fazer_requisicao()
