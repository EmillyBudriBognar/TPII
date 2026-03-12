class Computador:
    def __init__(self):
        self.cpu = ""
        self.ram = ""
        self.armazenamento = ""
        self.placa_de_video = "Integrada"

    def __str__(self):
        return f"Computador [CPU={self.cpu}, RAM={self.ram}, Armazenamento={self.armazenamento}, Placa de Vídeo={self.placa_de_video}]"

class ComputadorBuilder:
    def __init__(self):
        self.computador = Computador()

    def add_cpu(self, cpu):
        self.computador.cpu = cpu
        return self

    def add_ram(self, ram):
        self.computador.ram = ram
        return self

    def add_armazenamento(self, armazenamento):
        self.computador.armazenamento = armazenamento
        return self

    def add_placa_de_video(self, gpu):
        self.computador.placa_de_video = gpu
        return self

    def construir(self):
        return self.computador

# CLIENTE
if __name__ == "__main__":
    gamer = ComputadorBuilder() \
        .add_cpu("Intel i7") \
        .add_ram("32GB") \
        .add_armazenamento("1TB SSD") \
        .add_placa_de_video("RTX 3060") \
        .construir()

    office = ComputadorBuilder() \
        .add_cpu("AMD Ryzen 5") \
        .add_ram("16GB") \
        .add_armazenamento("500GB SSD") \
        .construir()

    print(f"Gamer: {gamer}")
    print(f"Office: {office}")
