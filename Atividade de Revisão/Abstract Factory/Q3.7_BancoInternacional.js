/**
 * PADRÃO: ABSTRACT FACTORY
 * QUESTÃO 3.7 – Sistema Bancário Internacional
 *
 * Problema: Um sistema bancário internacional cria componentes diferentes
 * para cada país (menu, idioma, layout), garantindo coerência e manutenção.
 *
 * Solução: Abstract Factory com uma fábrica por país, criando
 * Menu, Idioma e Layout compatíveis entre si.
 */

// 1. ABSTRACT PRODUCTS
class Menu {
    opcoes() { throw new Error("Método abstrato"); }
}

class Idioma {
    saudacao() { throw new Error("Método abstrato"); }
    moeda()    { throw new Error("Método abstrato"); }
}

class Layout {
    configurar() { throw new Error("Método abstrato"); }
}

// 2. FAMÍLIA BRASIL
class MenuBrasil extends Menu {
    opcoes() { return "Extrato | Transferência PIX | Pagamentos | Empréstimo"; }
}

class IdiomaBrasil extends Idioma {
    saudacao() { return "Olá! Bem-vindo ao Banco Digital."; }
    moeda()    { return "BRL – Real Brasileiro (R$)"; }
}

class LayoutBrasil extends Layout {
    configurar() { return "Layout: português, da esquerda para direita, formato dd/mm/aaaa"; }
}

// 3. FAMÍLIA EUA
class MenuEUA extends Menu {
    opcoes() { return "Balance | Transfer | Bill Pay | Savings"; }
}

class IdiomaEUA extends Idioma {
    saudacao() { return "Hello! Welcome to Digital Bank."; }
    moeda()    { return "USD – United States Dollar ($)"; }
}

class LayoutEUA extends Layout {
    configurar() { return "Layout: English, left-to-right, format mm/dd/yyyy"; }
}

// 4. FAMÍLIA JAPÃO
class MenuJapao extends Menu {
    opcoes() { return "残高照会 | 振込 | 料金支払 | ローン"; }
}

class IdiomaJapao extends Idioma {
    saudacao() { return "こんにちは！デジタルバンクへようこそ。"; }
    moeda()    { return "JPY – 日本円 (¥)"; }
}

class LayoutJapao extends Layout {
    configurar() { return "レイアウト：日本語、左から右、形式 yyyy/mm/dd"; }
}

// 5. ABSTRACT FACTORY
class FabricaBancoPais {
    criarMenu()   { throw new Error("Método abstrato"); }
    criarIdioma() { throw new Error("Método abstrato"); }
    criarLayout() { throw new Error("Método abstrato"); }
}

// 6. FÁBRICAS CONCRETAS
class FabricaBrasil extends FabricaBancoPais {
    criarMenu()   { return new MenuBrasil(); }
    criarIdioma() { return new IdiomaBrasil(); }
    criarLayout() { return new LayoutBrasil(); }
}

class FabricaEUA extends FabricaBancoPais {
    criarMenu()   { return new MenuEUA(); }
    criarIdioma() { return new IdiomaEUA(); }
    criarLayout() { return new LayoutEUA(); }
}

class FabricaJapao extends FabricaBancoPais {
    criarMenu()   { return new MenuJapao(); }
    criarIdioma() { return new IdiomaJapao(); }
    criarLayout() { return new LayoutJapao(); }
}

// 7. SISTEMA BANCÁRIO (usa a fábrica abstrata)
class SistemaBancario {
    constructor(fabrica) {
        this.menu   = fabrica.criarMenu();
        this.idioma = fabrica.criarIdioma();
        this.layout = fabrica.criarLayout();
    }

    inicializar(pais) {
        console.log(`\n[Banco – ${pais}]`);
        console.log(`  Boas-vindas: ${this.idioma.saudacao()}`);
        console.log(`  Moeda:       ${this.idioma.moeda()}`);
        console.log(`  Menu:        ${this.menu.opcoes()}`);
        console.log(`  Layout:      ${this.layout.configurar()}`);
    }
}

// 8. CLIENTE
console.log("=== Sistema Bancário Internacional ===");

new SistemaBancario(new FabricaBrasil()).inicializar("Brasil");
new SistemaBancario(new FabricaEUA()).inicializar("EUA");
new SistemaBancario(new FabricaJapao()).inicializar("Japão");
