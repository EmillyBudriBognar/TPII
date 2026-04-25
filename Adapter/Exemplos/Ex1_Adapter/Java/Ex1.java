/**
 * PADRÃO: ADAPTER
 * 
 * O padrão Adapter permite que interfaces incompatíveis trabalhem juntas.
 * Ele atua como um tradutor entre o cliente e um serviço existente.
 */

public class Ex1 {
    public static void main(String[] args) {
        // USO DO ADAPTADOR
        Adaptee adaptee = new Adaptee();
        Target adapter = new Adapter(adaptee);
        Cliente cliente = new Cliente(adapter);

        cliente.fazerRequisicao();
    }
}
