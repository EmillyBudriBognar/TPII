class Nome {
    private String nome;
    private String sobrenome;

    public Nome(String nome, String sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    @Override
    public String toString() {
        return nome + " " + sobrenome;
    }
}

abstract class FabricaDeNomes {
    public abstract Nome criarNome(String texto);
}

class FabricaDeNomeSimples extends FabricaDeNomes {
    public Nome criarNome(String texto) {
        String[] nomes = texto.split(" ");
        return new Nome(nomes[0], nomes[1]);
    }
}

class FabricaDeNomeComVirgula extends FabricaDeNomes {
    public Nome criarNome(String texto) {
        String[] nomes = texto.split(",");
        return new Nome(nomes[1].trim(), nomes[0].trim());
    }
}

public class Ex5 {
    public static void main(String[] args) {
        String nome1 = "Stela Montenegro";
        String nome2 = "Xavier, Lucas";

        FabricaDeNomes FABRICA_DE_NOME_SIMPLES = new FabricaDeNomeSimples();
        FabricaDeNomes FABRICA_DE_NOME_COM_VIRGULA = new FabricaDeNomeComVirgula();

        Nome nomeComVirgula = FABRICA_DE_NOME_COM_VIRGULA.criarNome(nome2);
        Nome nomeSimples = FABRICA_DE_NOME_SIMPLES.criarNome(nome1);

        System.out.println(nomeSimples.toString());
        System.out.println(nomeComVirgula.toString());

    }

}
