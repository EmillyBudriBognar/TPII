public class Cliente {
    private Target target;

    public Cliente(Target target) {
        this.target = target;
    }

    public void fazerRequisicao() {
        System.out.println("Cliente fazendo uma requisição...");
        this.target.request();
    }
}
