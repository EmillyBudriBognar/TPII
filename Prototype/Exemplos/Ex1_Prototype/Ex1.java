/**
 * PADRÃO: PROTOTYPE
 * 
 * O padrão Prototype permite copiar objetos existentes sem tornar seu código dependente de suas classes.
 * Ele define uma interface 'clone' que deve ser implementada pelas classes que permitem serem duplicadas.
 */

// 1. INTERFACE PROTOTYPE
interface Prototype {
    Prototype clone();
}

// 2. PROTÓTIPO CONCRETO
class Pessoa implements Prototype {
    private int id;
    private String nome;
    private int idade;

    public Pessoa(int id, String nome, int idade) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }

    // Método de clonagem
    @Override
    public Pessoa clone() {
        return new Pessoa(this.id, this.nome, this.idade);
    }

    public void setNome(String nome) { this.nome = nome; }

    @Override
    public String toString() {
        return "Pessoa [id=" + id + ", nome=" + nome + ", idade=" + idade + "]";
    }
}

// 3. REGISTRY (Gerenciador de Protótipos)
class GerenciaPessoa {
    private java.util.Map<Integer, Pessoa> pessoas = new java.util.HashMap<>();

    public void addPessoa(int id, String nome, int idade) {
        pessoas.put(id, new Pessoa(id, nome, idade));
    }

    public Pessoa getPessoaById(int id) {
        Pessoa p = pessoas.get(id);
        return (p != null) ? p.clone() : null;
    }

    public Pessoa getOriginal(int id) {
        return pessoas.get(id);
    }
}

// 4. CLIENTE
public class Ex1 {
    public static void main(String[] args) {
        GerenciaPessoa gerencia = new GerenciaPessoa();

        gerencia.addPessoa(1, "João", 30);
        gerencia.addPessoa(2, "Maria", 25);

        // Clonando
        Pessoa pessoaClone = gerencia.getPessoaById(1);
        if (pessoaClone != null) {
            pessoaClone.setNome("Novo João");
        }

        System.out.println("Pessoa Original: " + gerencia.getOriginal(1));
        System.out.println("Pessoa Clone: " + pessoaClone);
    }
}
