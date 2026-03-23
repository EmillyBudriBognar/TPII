"""
PADRÃO: BUILDER

O padrão Builder é utilizado para construir objetos complexos passo a passo.
Ele permite que você crie diferentes tipos e representações de um objeto 
usando o mesmo processo de construção.
"""

# 1. PRODUTO (O objeto final)
class Computador:
    def __init__(self):
        self.cpu = ""
        self.ram = ""
        self.armazenamento = ""
        self.placa_de_video = "Integrada"

    def __str__(self):
        return f"Configuração: [CPU: {self.cpu}, RAM: {self.ram}, Armazenamento: {self.armazenamento}, Placa de Vídeo: {self.placa_de_video}]"

# 2. BUILDER (Gerencia a montagem)
class ComputadorBuilder:
    def __init__(self):
        self.computador = Computador()

    def add_cpu(self, cpu):
        self.computador.cpu = cpu
        return self  # Retorna 'self' para permitir encadeamento de métodos

    def add_ram(self, ram):
        self.computador.ram = ram
        return self

    def add_armazenamento(self, armazenamento):
        self.computador.armazenamento = armazenamento
        return self

    def add_placa_de_video(self, gpu):
        self.computador.placa_de_video = gpu
        return self

    # 3. MÉTODO PARA OBTER O PRODUTO FINAL
    def construir(self):
        return self.computador

# 4. CLIENTE
if __name__ == "__main__":
    # Montando um PC Gamer de alto desempenho
    gamer = (ComputadorBuilder()
             .add_cpu("Intel i7")
             .add_ram("32GB")
             .add_armazenamento("1TB SSD")
             .add_placa_de_video("RTX 3060")
             .construir())

    # Montando um PC de Escritório simples
    office = (ComputadorBuilder()
              .add_cpu("AMD Ryzen 5")
              .add_ram("16GB")
              .add_armazenamento("500GB SSD")
              .construir())

    print(f"PC Gamer:  {gamer}")
    print(f"PC Office: {office}")
