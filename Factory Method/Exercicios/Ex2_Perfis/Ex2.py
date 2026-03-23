"""
PADRÃO: FACTORY METHOD (MÉTODO FÁBRICA)

Exercício: Sistema de Perfis.
Este padrão é especialmente poderoso em Python para gerenciar 
famílias de permissões de forma limpa e extensível.
"""

from abc import ABC, abstractmethod

# 1. PRODUTO ABSTRATO (Interface)
class Perfil(ABC):
    @abstractmethod
    def get_permissoes(self):
        pass

# 2. PRODUTOS CONCRETOS
class PerfilUsuario(Perfil):
    def get_permissoes(self):
        return "Permissões de Usuário: Ler, Escrever comentário."

class PerfilAdmin(Perfil):
    def get_permissoes(self):
        return "Permissões de Admin: Ler, Escrever, Deletar, Bloquear usuário."

# 3. CRIADOR (Fábrica)
class FabricaPerfil(ABC):
    @abstractmethod
    def criar_perfil(self) -> Perfil:
        """Este é o Factory Method."""
        pass

    def mostrar_perfil(self):
        """Método que utiliza o produto criado pela subclasse."""
        p = self.criar_perfil()
        print(f"Status: {p.get_permissoes()}")

# 4. CRIADORES CONCRETOS
class FabricaUsuario(FabricaPerfil):
    def criar_perfil(self):
        return PerfilUsuario()

class FabricaAdmin(FabricaPerfil):
    def criar_perfil(self):
        return PerfilAdmin()

# 5. CLIENTE
if __name__ == "__main__":
    print("Logando como Usuário Comum:")
    f1 = FabricaUsuario()
    f1.mostrar_perfil()

    print("\nLogando como Administrador:")
    f2 = FabricaAdmin()
    f2.mostrar_perfil()
