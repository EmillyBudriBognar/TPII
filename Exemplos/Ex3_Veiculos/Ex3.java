// PRODUTO ABSTRATO
abstract class Veiculo {
    protected String modelo;

    public Veiculo(String modelo) {
        this.modelo = modelo;
    }

    public void mostrarDetalhes() {
        System.out.printf("Modelo: %s\n", this.modelo);
    }
}

// PRODUTOS CONCRETOS
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

// FABRICA ABSTRATA
abstract class FabricaDeVeiculos {
    public abstract Veiculo criarVeiculo(String modelo);
}

// FABRICAS CONCRETAS
class FabricaDeCarros extends FabricaDeVeiculos {
    public Veiculo criarVeiculo(String modelo) {
        return new Carro(modelo);
    }
}

class FabricaDeMotos extends FabricaDeVeiculos {
    public Veiculo criarVeiculo(String modelo) {
        return new Moto(modelo);
    }
}

// CLIENTE
public class Ex3 {
    public static void main(String[] args) {
        FabricaDeVeiculos fabricaCarros = new FabricaDeCarros();
        FabricaDeVeiculos fabricaMotos = new FabricaDeMotos();

        Veiculo v1 = fabricaCarros.criarVeiculo("Sedan");
        Veiculo v2 = fabricaCarros.criarVeiculo("Hatch");
        Veiculo v3 = fabricaMotos.criarVeiculo("Esportiva");
        Veiculo v4 = fabricaMotos.criarVeiculo("Custom");

        v1.mostrarDetalhes();
        v2.mostrarDetalhes();
        v3.mostrarDetalhes();
        v4.mostrarDetalhes();
    }
}
