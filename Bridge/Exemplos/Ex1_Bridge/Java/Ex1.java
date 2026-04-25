/**
 * PADRÃO: BRIDGE
 * 
 * O padrão Bridge desacopla uma abstração de sua implementação,
 * permitindo que ambas variem independentemente.
 */

public class Ex1 {
    public static void main(String[] args) {
        System.out.println("=== Demonstração do Padrão Bridge ===\n");

        Cor vermelho = new CorVermelho();
        Cor azul = new CorAzul();
        Cor verde = new CorVerde();

        Forma circuloVermelho = new Circulo(vermelho);
        Forma quadradoVerde = new Quadrado(verde);
        Forma trianguloAzul = new Triangulo(azul);

        circuloVermelho.desenhar();
        quadradoVerde.desenhar();
        trianguloAzul.desenhar();

        System.out.println("\nAlterando a cor do círculo dinamicamente...");
        circuloVermelho.setCor(azul);
        circuloVermelho.desenhar();
    }
}
