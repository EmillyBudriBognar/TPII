/**
 * PADRÃO: SINGLETON
 * 
 * O padrão Singleton garante que uma classe tenha apenas uma instância
 * e fornece um ponto global de acesso a ela.
 */

public class Ex1 {
    // 1. ATRIBUTO ESTÁTICO QUE ARMAZENA A ÚNICA INSTÂNCIA
    private static Ex1 instance;
    private int value;

    // 2. CONSTRUTOR PRIVADO (Evita a criação de instâncias via 'new')
    private Ex1() {
        this.value = 0;
        System.out.println("Instância Singleton criada.");
    }

    // 3. MÉTODO ESTÁTICO PARA ACESSAR A INSTÂNCIA
    public static synchronized Ex1 getInstance() {
        if (instance == null) {
            instance = new Ex1();
        }
        return instance;
    }

    public void increment() {
        this.value++;
        System.out.println("Value: " + this.value);
    }

    public int getValue() {
        return this.value;
    }

    // 4. CLIENTE
    public static void main(String[] args) {
        Ex1 s1 = Ex1.getInstance();
        Ex1 s2 = Ex1.getInstance();

        s1.increment();
        System.out.println("Valor de s2: " + s2.getValue());
        
        System.out.println("s1 é igual a s2? " + (s1 == s2));
    }
}
