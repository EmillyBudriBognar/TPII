/**
 * PADRÃO: FACTORY METHOD (MÉTODO FÁBRICA)
 * 
 * O Factory Method define uma interface para criar um objeto, mas deixa 
 * as subclasses decidirem qual classe instanciar. Ele permite que uma 
 * classe adie a instanciação para as subclasses.
 */

// 1. PRODUTO ABSTRATO (Interface ou Classe Base)
abstract class Veiculo {
    protected String modelo;

    public Veiculo(String modelo) {
        this.modelo = modelo;
    }

    public void mostrarDetalhes() {
        System.out.printf("Veículo Modelo: %s\n", this.modelo);
    }
}

// 2. PRODUTOS CONCRETOS (Implementações específicas)
class Carro extends Veiculo {
    public Carro(String modelo) {
        super(modelo);
    }
}

class Moto extends Veiculo {
    public Moto(String modelo) {
        super(modelo);
    }
}

// 3. CRIADOR ABSTRATO (Define o Factory Method)
abstract class FabricaDeVeiculos {
    // Este é o Factory Method
    public abstract Veiculo criarVeiculo(String modelo);
}

// 4. CRIADORES CONCRETOS (Sobrescrevem o Factory Method)
class FabricaDeCarros extends FabricaDeVeiculos {
    @Override
    public Veiculo criarVeiculo(String modelo) {
        return new Carro(modelo);
    }
}

class FabricaDeMotos extends FabricaDeVeiculos {
    @Override
    public Veiculo criarVeiculo(String modelo) {
        return new Moto(modelo);
    }
}

// 5. CLIENTE
public class Ex3 {
    public static void main(String[] args) {
        // Criando as fábricas
        FabricaDeVeiculos fabricaCarros = new FabricaDeCarros();
        FabricaDeVeiculos fabricaMotos = new FabricaDeMotos();

        // Usando as fábricas para criar instâncias sem conhecer as classes concretas
        Veiculo v1 = fabricaCarros.criarVeiculo("Sedan");
        Veiculo v2 = fabricaMotos.criarVeiculo("Esportiva");

        v1.mostrarDetalhes();
        v2.mostrarDetalhes();
    }
}
