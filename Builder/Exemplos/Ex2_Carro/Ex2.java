/**
 * PADRÃO: BUILDER
 * 
 * Este exemplo mostra como o Builder permite criar objetos complexos (Carro) 
 * através de uma interface fluente, facilitando a legibilidade e a flexibilidade.
 */

// 1. PARTES DO PRODUTO (Componentes do Carro)
class Motor {
    String tipo;
    Motor(String tipo) { this.tipo = tipo; }
}

class Carroceria {
    String estilo;
    Carroceria(String estilo) { this.estilo = estilo; }
}

class Rodas {
    int tamanho;
    Rodas(int tamanho) { this.tamanho = tamanho; }
}

class Interior {
    String cor;
    Interior(String cor) { this.cor = cor; }
}

// 2. PRODUTO FINAL (O Carro)
class Carro {
    private Motor motor;
    private Carroceria carroceria;
    private Rodas rodas;
    private Interior interior;

    void setMotor(Motor motor) { this.motor = motor; }
    void setCarroceria(Carroceria carroceria) { this.carroceria = carroceria; }
    void setRodas(Rodas rodas) { this.rodas = rodas; }
    void setInterior(Interior interior) { this.interior = interior; }

    void mostrarDetalhes() {
        System.out.println("Especificações do Carro:");
        System.out.println("- Motor: " + motor.tipo);
        System.out.println("- Carroceria: " + carroceria.estilo);
        System.out.println("- Rodas: " + rodas.tamanho);
        System.out.println("- Interior: " + interior.cor);
    }
}

// 3. BUILDER CONCRETO
class CarroBuilder {
    private Carro carro = new Carro();

    public CarroBuilder addMotor(String tipo) {
        carro.setMotor(new Motor(tipo));
        return this;
    }

    public CarroBuilder addCarroceria(String estilo) {
        carro.setCarroceria(new Carroceria(estilo));
        return this;
    }

    public CarroBuilder addRodas(int tamanho) {
        carro.setRodas(new Rodas(tamanho));
        return this;
    }

    public CarroBuilder addInterior(String cor) {
        carro.setInterior(new Interior(cor));
        return this;
    }

    public Carro construir() {
        return carro;
    }
}

// 4. CLIENTE
public class Ex2 {
    public static void main(String[] args) {
        // Usando o Builder para criar um modelo Pickup
        Carro pickup = new CarroBuilder()
                .addMotor("1.0")
                .addCarroceria("Pickup")
                .addRodas(15)
                .addInterior("Rosa")
                .construir();

        // Usando o Builder para criar um modelo SUV
        Carro suv = new CarroBuilder()
                .addMotor("2.0")
                .addCarroceria("SUV")
                .addRodas(18)
                .addInterior("Preto")
                .construir();

        pickup.mostrarDetalhes();
        System.out.println("-------------------------");
        suv.mostrarDetalhes();
    }
}
