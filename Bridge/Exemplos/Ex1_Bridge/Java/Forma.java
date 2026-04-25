public abstract class Forma {
    protected Cor cor;

    protected Forma(Cor cor) {
        this.cor = cor;
    }

    public void setCor(Cor cor) {
        this.cor = cor;
    }

    public abstract void desenhar();
}
