// PRODUTOS ABSTRATOS
interface ProdutoModa {
    String toString();
}

interface ProdutoEletronico {
    String toString();
}

// PRODUTOS CONCRETOS - FASHION
class CamisaFashion implements ProdutoModa {
    public String toString() {
        return "Camisa Fashion";
    }
}

class CelularFashion implements ProdutoEletronico {
    public String toString() {
        return "Celular Fashion.";
    }
}

// PRODUTOS CONCRETOS - TECH
class CamisaTech implements ProdutoModa {
    public String toString() {
        return "Camisa Tech";
    }
}

class CelularTech implements ProdutoEletronico {
    public String toString() {
        return "Celular Tech.";
    }
}

// FABRICA ABSTRATA
interface FabricaCombo {
    ProdutoModa criarCamisa();

    ProdutoEletronico criarCelular();
}

// FABRICAS CONCRETAS
class FabricaComboTech implements FabricaCombo {
    public ProdutoModa criarCamisa() {
        return new CamisaTech();
    }

    public ProdutoEletronico criarCelular() {
        return new CelularTech();
    }
}

class FabricaComboFashion implements FabricaCombo {
    public ProdutoModa criarCamisa() {
        return new CamisaFashion();
    }

    public ProdutoEletronico criarCelular() {
        return new CelularFashion();
    }
}

// CLIENTE
public class Ex2 {
    public static void lojaVirtual(FabricaCombo fabrica) {
        ProdutoModa camisa = fabrica.criarCamisa();
        ProdutoEletronico celular = fabrica.criarCelular();

        System.out.println(camisa.toString());
        System.out.println(celular.toString());
    }

    public static void main(String[] args) {
        System.out.println("Combo fashion: ");
        lojaVirtual(new FabricaComboFashion());

        System.out.println("-------");

        System.out.println("Combo tech: ");
        lojaVirtual(new FabricaComboTech());
    }
}
