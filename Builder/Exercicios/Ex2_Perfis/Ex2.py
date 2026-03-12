from datetime import time

class Perfil:
    def __init__(self):
        self.nome = ""
        self.cargo = ""
        self.matricula = 0
        self.hora_entrada = None
        self.hora_saida = None

    def __str__(self):
        return f"Perfil [Nome: {self.nome}, Cargo: {self.cargo}, Matrícula: {self.matricula}, Entrada: {self.hora_entrada}, Saída: {self.hora_saida}]"

class PerfilBuilder:
    def __init__(self):
        self.perfil = Perfil()

    def add_nome(self, nome):
        self.perfil.nome = nome
        return self

    def add_cargo(self, cargo):
        self.perfil.cargo = cargo
        return self

    def add_matricula(self, matricula):
        self.perfil.matricula = matricula
        return self

    def add_hora_entrada(self, hora):
        self.perfil.hora_entrada = hora
        return self

    def add_hora_saida(self, hora):
        self.perfil.hora_saida = hora
        return self

    def construir(self):
        return self.perfil

# CLIENTE
if __name__ == "__main__":
    p1 = PerfilBuilder() \
        .add_nome("Ana Terra") \
        .add_cargo("Visitante") \
        .add_matricula(0) \
        .add_hora_entrada(time(14, 0)) \
        .add_hora_saida(time(16, 0)) \
        .construir()

    print(p1)
