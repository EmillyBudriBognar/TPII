/**
 * PADRÃO: BUILDER
 * 
 * Exercício: Fábrica de Roupas customizadas.
 * O Builder permite definir cor, tipo, tamanho e preço de forma encadeada, 
 * tornando o processo de criação de objetos de Produto muito mais intuitivo.
 */

// 1. PARTES DO PRODUTO (Atributos da Roupa)
class Tipo {
    public String tipo;
    Tipo(String tipo) { this.tipo = tipo; }
}

class Tamanho {
    public String tamanho;
    Tamanho(String tamanho) { this.tamanho = tamanho; }
}

class Cor {
    public String cor;
    Cor(String cor) { this.cor = cor; }
}

class Preco {
    public float preco;
    Preco(float preco) { this.preco = preco; }
}

// 2. PRODUTO FINAL
class Roupa {
    public Preco preco;
    public Tamanho tamanho;
    public Cor cor;
    public Tipo tipo;

    Roupa(Tipo tipo, Cor cor, Tamanho tamanho, Preco preco) {
        this.cor = cor;
        this.tipo = tipo;
        this.tamanho = tamanho;
        this.preco = preco;
    }

    @Override
    public String toString() {
        return String.format("Cor: %s | Tipo: %s | Tamanho: %s | Preço: R$ %.2f", 
                             this.cor.cor, this.tipo.tipo, this.tamanho.tamanho, this.preco.preco);
    }
}

// 3. BUILDER CONCRETO
class RoupaBuilder {
    private Preco preco;
    private Tamanho tamanho;
    private Cor cor;
    private Tipo tipo;

    public RoupaBuilder addPreco(float preco) {
        this.preco = new Preco(preco);
        return this;
    }

    public RoupaBuilder addTamanho(String tamanho) {
        this.tamanho = new Tamanho(tamanho);
        return this;
    }

    public RoupaBuilder addCor(String cor) {
        this.cor = new Cor(cor);
        return this;
    }

    public RoupaBuilder addTipo(String tipo) {
        this.tipo = new Tipo(tipo);
        return this;
    }

    public Roupa construir() {
        return new Roupa(this.tipo, this.cor, this.tamanho, this.preco);
    }
}

// 4. CLIENTE
public class Ex3 {
    public static void main(String[] args) {
        RoupaBuilder builder = new RoupaBuilder();

        // Criando uma Camiseta Roxa
        Roupa roupa1 = builder
            .addCor("Roxo")
            .addPreco(29.90f)
            .addTamanho("M")
            .addTipo("Camiseta")
            .construir();

        System.out.println(roupa1);
    }
}
