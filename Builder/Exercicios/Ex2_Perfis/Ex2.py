"""
PADRÃO: BUILDER

Exercício: Sistema de Gerenciamento de Perfis.
Este padrão é útil para construir objetos complexos com muitos atributos 
opcionais, permitindo uma construção clara e legível.
"""

from datetime import time

# 1. PRODUTO FINAL
class Perfil:
    def __init__(self):
        self.nome = ""
        self.cargo = ""
        self.matricula = 0
        self.hora_entrada = None
        self.hora_saida = None

    def __str__(self):
        return f"Perfil [Nome: {self.nome}, Cargo: {self.cargo}, Matrícula: {self.matricula}, Entrada: {self.hora_entrada}, Saída: {self.hora_saida}]"

# 2. BUILDER CONCRETO
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

    # 3. MÉTODO DE CONSTRUÇÃO FINAL
    def construir(self):
        return self.perfil

# 4. CLIENTE
if __name__ == "__main__":
    # Perfil completo
    p1 = (PerfilBuilder() 
          .add_nome("Ana Terra") 
          .add_cargo("Visitante") 
          .add_matricula(0) 
          .add_hora_entrada(time(14, 0)) 
          .add_hora_saida(time(16, 0)) 
          .construir())

    # Perfil parcial
    p2 = (PerfilBuilder()
          .add_nome("Carlos Magno")
          .add_cargo("Desenvolvedor")
          .add_matricula(74282)
          .construir())

    print(f"Perfil 1: {p1}")
    print(f"Perfil 2: {p2}")
