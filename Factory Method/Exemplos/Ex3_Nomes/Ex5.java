/**
 * PADRÃO: FACTORY METHOD (MÉTODO FÁBRICA)
 * 
 * Este exemplo mostra como o Factory Method pode ser usado para decidir 
 * qual classe instanciar baseado no formato de uma string de entrada 
 * (Nome Simples ou Nome Sobrenome).
 */

// 1. PRODUTO ABSTRATO
abstract class Nome {
    protected String nome;
    protected String sobrenome;

    @Override
    public String toString() {
        return "Nome: " + nome + " | Sobrenome: " + sobrenome;
    }
}

// 2. PRODUTOS CONCRETOS
class NomeSimples extends Nome {
    public NomeSimples(String s) {
        nome = s;
        sobrenome = "";
    }
}

class NomeSobrenome extends Nome {
    public NomeSobrenome(String s) {
        int i = s.indexOf(",");
        if (i != -1) {
            sobrenome = s.substring(0, i).trim();
            nome = s.substring(i + 1).trim();
        }
    }
}

// 3. CRIADOR (Fábrica)
class FabricaDeNomes {
    // Factory Method (neste caso, é um método comum que escolhe o tipo)
    public Nome getNome(String s) {
        if (s.contains(",")) {
            return new NomeSobrenome(s);
        } else {
            return new NomeSimples(s);
        }
    }
}

// 4. CLIENTE
public class Ex5 {
    public static void main(String[] args) {
        FabricaDeNomes fabrica = new FabricaDeNomes();

        // Criando instâncias de 'Nome' sem conhecer as classes concretas
        Nome n1 = fabrica.getNome("Silvio Santos");
        Nome n2 = fabrica.getNome("Lula, Luiz Inácio");

        System.out.println(n1);
        System.out.println(n2);
    }
}
