/**
 * PADRÃO: ABSTRACT FACTORY (FÁBRICA ABSTRATA)
 * 
 * Exemplo de uma loja que vende combos de produtos (Moda e Eletrônico).
 * Cada fábrica (Fashion ou Tech) garante que os produtos do combo combinem entre si.
 */

// 1. PRODUTOS ABSTRATOS
interface ProdutoModa {
    String exibirDetalhes();
}

interface ProdutoEletronico {
    String exibirDetalhes();
}

// 2. PRODUTOS CONCRETOS - FAMÍLIA FASHION
class CamisaFashion implements ProdutoModa {
    public String exibirDetalhes() { return "Camisa Fashion: Estampa moderna e tecido leve."; }
}

class CelularFashion implements ProdutoEletronico {
    public String exibirDetalhes() { return "Celular Fashion: Design elegante com acabamento em vidro."; }
}

// 2. PRODUTOS CONCRETOS - FAMÍLIA TECH
class CamisaTech implements ProdutoModa {
    public String exibirDetalhes() { return "Camisa Tech: Tecido inteligente com controle térmico."; }
}

class CelularTech implements ProdutoEletronico {
    public String exibirDetalhes() { return "Celular Tech: Processador de última geração e tela 120Hz."; }
}

// 3. FABRICA ABSTRATA
interface FabricaCombo {
    ProdutoModa criarCamisa();
    ProdutoEletronico criarCelular();
}

// 4. FABRICAS CONCRETAS
class FabricaComboFashion implements FabricaCombo {
    public ProdutoModa criarCamisa() { return new CamisaFashion(); }
    public ProdutoEletronico criarCelular() { return new CelularFashion(); }
}

class FabricaComboTech implements FabricaCombo {
    public ProdutoModa criarCamisa() { return new CamisaTech(); }
    public ProdutoEletronico criarCelular() { return new CelularTech(); }
}

// 5. CLIENTE
public class Ex2 {
    public static void lojaVirtual(FabricaCombo fabrica) {
        ProdutoModa camisa = fabrica.criarCamisa();
        ProdutoEletronico celular = fabrica.criarCelular();

        System.out.println(camisa.exibirDetalhes());
        System.out.println(celular.exibirDetalhes());
    }

    public static void main(String[] args) {
        System.out.println("Combo Fashion:");
        lojaVirtual(new FabricaComboFashion());
        
        System.out.println("-------");
        
        System.out.println("Combo Tech:");
        lojaVirtual(new FabricaComboTech());
    }
}
