"""
PADRÃO: SINGLETON E PROTOTYPE (EXERCÍCIO SIGA)

Este exercício combina o Singleton para garantir uma única instância do sistema SIGA
e o Prototype para permitir a clonagem eficiente de registros de Alunos.
"""

import copy

# 1. PROTÓTIPO DE ALUNO
class Aluno:
    def __init__(self, curso, nome, periodo, idade, unidade="Fatec Diadema"):
        self.curso = curso
        self.nome = nome
        self.periodo = periodo
        self.idade = idade
        self.unidade = unidade

    # Método de clonagem (Prototype)
    def clone(self):
        return copy.copy(self)

    def __str__(self):
        return f"Aluno: {self.nome}, Curso: {self.curso}, Período: {self.periodo}, Idade: {self.idade}, Unidade: {self.unidade}"

# 2. SINGLETON SIGA (Gerenciador do Sistema)
class Siga:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(Siga, cls).__new__(cls)
            cls._instance.alunos = []
        return cls._instance

    @classmethod
    def get_instance(cls):
        return cls()

    def adicionar_aluno(self, aluno):
        self.alunos.append(aluno)

    def listar_alunos(self):
        return "\n".join(str(aluno) for aluno in self.alunos)

# 3. CLIENTE
if __name__ == "__main__":
    siga = Siga.get_instance()

    # Criando aluno original
    aluno1 = Aluno("DSM", "Stela", "Manhã", 19)
    siga.adicionar_aluno(aluno1)

    # Clonando aluno (Prototype)
    aluno2 = aluno1.clone()
    aluno2.nome = "João"
    siga.adicionar_aluno(aluno2)

    print("Alunos cadastrados no SIGA:")
    print(siga.listar_alunos())
