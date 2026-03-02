# PRODUTO ABSTRATO
class Perfil:
    def __init__(self, tipo, nome, nivel):
        self.tipo = tipo
        self.nome = nome
        self.nivel = nivel

    def __str__(self):
        return f"Nome: {self.nome} | Nível: {self.tipo} - {self.nivel}"

# PRODUTOS CONCRETOS
class Aluno(Perfil):
    def __init__(self, nome): super().__init__("Aluno", nome, 0)

class Administrativo(Perfil):
    def __init__(self, nome): super().__init__("Administrativo", nome, 1)

class Professor(Perfil):
    def __init__(self, nome): super().__init__("Professor", nome, 2)

class Visitante(Perfil):
    def __init__(self, nome): super().__init__("Visitante", nome, 3)

# FABRICA ABSTRATA
class FabricaDePerfis:
    def criar_perfil(self, nome): pass

# FABRICAS CONCRETAS
class FabricaDeAlunos(FabricaDePerfis):
    def criar_perfil(self, nome): return Aluno(nome)

class FabricaDeAdministrativos(FabricaDePerfis):
    def criar_perfil(self, nome): return Administrativo(nome)

class FabricaDeProfessores(FabricaDePerfis):
    def criar_perfil(self, nome): return Professor(nome)

class FabricaDeVisitantes(FabricaDePerfis):
    def criar_perfil(self, nome): return Visitante(nome)

# CLIENTE
if __name__ == "__main__":
    fabrica_alunos = FabricaDeAlunos()
    fabrica_adm = FabricaDeAdministrativos()
    fabrica_prof = FabricaDeProfessores()
    fabrica_visitante = FabricaDeVisitantes()

    print(fabrica_alunos.criar_perfil("Stela"))
    print(fabrica_adm.criar_perfil("Rita "))
    print(fabrica_prof.criar_perfil("Maria"))
    print(fabrica_visitante.criar_perfil("Aline"))
