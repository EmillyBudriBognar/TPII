/**
 * PADRÃO: FACTORY METHOD (MÉTODO FÁBRICA)
 * 
 * Exercício: Sistema de Perfis.
 * Este exemplo mostra como as subclasses podem decidir o tipo de objeto 
 * a ser criado (Perfil de Usuário ou Perfil de Administrador).
 */

// 1. PRODUTO ABSTRATO
interface Perfil {
    String getPermissoes();
}

// 2. PRODUTOS CONCRETOS
class PerfilUsuario implements Perfil {
    public String getPermissoes() { return "Permissões de Usuário: Ler, Escrever comentário."; }
}

class PerfilAdmin implements Perfil {
    public String getPermissoes() { return "Permissões de Admin: Ler, Escrever, Deletar, Bloquear usuário."; }
}

// 3. CRIADOR ABSTRATO (Fábrica)
abstract class FabricaPerfil {
    // Factory Method
    public abstract Perfil criarPerfil();

    // Método que utiliza o produto criado pelo Factory Method
    public void mostrarPerfil() {
        Perfil p = criarPerfil();
        System.out.println("Status: " + p.getPermissoes());
    }
}

// 4. CRIADORES CONCRETOS
class FabricaUsuario extends FabricaPerfil {
    @Override
    public Perfil criarPerfil() { return new PerfilUsuario(); }
}

class FabricaAdmin extends FabricaPerfil {
    @Override
    public Perfil criarPerfil() { return new PerfilAdmin(); }
}

// 5. CLIENTE
public class Ex2 {
    public static void main(String[] args) {
        System.out.println("Logando como Usuário Comum:");
        FabricaPerfil f1 = new FabricaUsuario();
        f1.mostrarPerfil();

        System.out.println("\nLogando como Administrador:");
        FabricaPerfil f2 = new FabricaAdmin();
        f2.mostrarPerfil();
    }
}
