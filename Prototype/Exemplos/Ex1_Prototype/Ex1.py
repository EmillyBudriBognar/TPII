"""
PADRÃO: PROTOTYPE

O padrão Prototype permite a cópia de objetos existentes sem tornar seu código
dependente de suas classes concretas. Ele desacopla o processo de clonagem do cliente.
"""

import copy

# 1. PROTÓTIPO CONCRETO
class Pessoa:
    def __init__(self, id_pessoa, nome, idade):
        self.id = id_pessoa
        self.nome = nome
        self.idade = idade

    # Método de clonagem usando o módulo 'copy' do Python
    def clone(self):
        return copy.copy(self)

    def __str__(self):
        return f"Pessoa [id={self.id}, nome={self.nome}, idade={self.idade}]"

# 2. REGISTRY (Gerenciador de Protótipos)
class GerenciaPessoa:
    def __init__(self):
        self.pessoas = {}

    def addPessoa(self, id_pessoa, nome, idade):
        self.pessoas[id_pessoa] = Pessoa(id_pessoa, nome, idade)

    def getPessoaById(self, id_pessoa):
        pessoa_original = self.pessoas.get(id_pessoa)
        if pessoa_original:
            return pessoa_original.clone()
        return None

# 3. CLIENTE
if __name__ == "__main__":
    gerencia = GerenciaPessoa()

    gerencia.addPessoa(1, "João", 30)
    gerencia.addPessoa(2, "Maria", 25)

    # Clonando a primeira pessoa
    pessoa_clone = gerencia.getPessoaById(1)
    if pessoa_clone:
        pessoa_clone.nome = "Novo João"

    # Exibindo resultados
    print(f"Pessoa Original: {gerencia.pessoas[1]}")
    print(f"Pessoa Clone: {pessoa_clone}")
