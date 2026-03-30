/**
 * PADRÃO: ABSTRACT FACTORY
 * QUESTÃO 3.4 – Jogo com Personagens Heroicos e Malvados
 *
 * Problema: Um jogo cria personagens heróicos e malvados, cada um com
 * armas e habilidades diferentes. Todos os elementos devem pertencer
 * à mesma família temática.
 *
 * Solução: Abstract Factory para garantir que armas e habilidades
 * sejam sempre da mesma família (heroica ou maligna).
 */

// 1. INTERFACES DOS PRODUTOS

class Arma {
    atacar() { throw new Error("Método abstrato: atacar()"); }
}

class Habilidade {
    ativar() { throw new Error("Método abstrato: ativar()"); }
}

// 2. FAMÍLIA HEROICA
class EspadaDaLuz extends Arma {
    atacar() { return "⚔️  Golpe da Luz Sagrada (+120 ATK, dano extra contra trevas)"; }
}

class CuraDiv extends Habilidade {
    ativar() { return "✨ Cura Divina ativada! Restaura 300 HP dos aliados próximos."; }
}

// 3. FAMÍLIA MALIGNA
class GarrasDemoniacas extends Arma {
    atacar() { return "🔥 Garras do Inferno (+100 ATK, causa veneno por 5 turnos)"; }
}

class MaldForte extends Habilidade {
    ativar() { return "💀 Maldição das Sombras! Reduz ATK dos inimigos em 50% por 3 turnos."; }
}

// 4. ABSTRACT FACTORY
class FabricaPersonagem {
    criarArma()       { throw new Error("Método abstrato"); }
    criarHabilidade() { throw new Error("Método abstrato"); }
}

// 5. FÁBRICAS CONCRETAS
class FabricaHeroica extends FabricaPersonagem {
    criarArma()       { return new EspadaDaLuz(); }
    criarHabilidade() { return new CuraDiv(); }
}

class FabricaMaligna extends FabricaPersonagem {
    criarArma()       { return new GarrasDemoniacas(); }
    criarHabilidade() { return new MaldForte(); }
}

// 6. PERSONAGEM (usa a fábrica abstrata)
class Personagem {
    constructor(nome, fabrica) {
        this.nome = nome;
        this.arma = fabrica.criarArma();
        this.habilidade = fabrica.criarHabilidade();
    }

    exibirStatus() {
        console.log(`\n[Personagem: ${this.nome}]`);
        console.log(`  Ataque:     ${this.arma.atacar()}`);
        console.log(`  Habilidade: ${this.habilidade.ativar()}`);
    }
}

// 7. CLIENTE
console.log("=== Sistema de Personagens do Jogo ===");

const heroi = new Personagem("Arion, o Guardião", new FabricaHeroica());
heroi.exibirStatus();

const vilao = new Personagem("Zarak, o Devorador", new FabricaMaligna());
vilao.exibirStatus();
