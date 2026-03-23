/**
 * PADRÃO: FACTORY METHOD (MÉTODO FÁBRICA)
 * 
 * Exercício: Sistema de Perfis.
 * O Factory Method é útil para abstrair os detalhes de permissões de 
 * diferentes níveis de acesso no sistema.
 */

// 1. PRODUTO (Base)
class Perfil {
    getPermissoes() { throw new Error("Método abstrato"); }
}

// 2. PRODUTOS CONCRETOS
class PerfilUsuario extends Perfil {
    getPermissoes() { return "Permissões de Usuário: Ler, Escrever comentário."; }
}

class PerfilAdmin extends Perfil {
    getPermissoes() { return "Permissões de Admin: Ler, Escrever, Deletar, Bloquear usuário."; }
}

// 3. CRIADOR (Fábrica)
class FabricaPerfil {
    // Factory Method
    criarPerfil() { throw new Error("Método abstrato"); }

    mostrarPerfil() {
        const p = this.criarPerfil();
        console.log(`Status: ${p.getPermissoes()}`);
    }
}

// 4. CRIADORES CONCRETOS (Subclasses que decidem o tipo)
class FabricaUsuario extends FabricaPerfil {
    criarPerfil() { return new PerfilUsuario(); }
}

class FabricaAdmin extends FabricaPerfil {
    criarPerfil() { return new PerfilAdmin(); }
}

// 5. CLIENTE
console.log("Logando como Usuário Comum:");
const f1 = new FabricaUsuario();
f1.mostrarPerfil();

console.log("\nLogando como Administrador:");
const f2 = new FabricaAdmin();
f2.mostrarPerfil();
