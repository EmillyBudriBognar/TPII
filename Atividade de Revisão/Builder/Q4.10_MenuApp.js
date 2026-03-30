/**
 * PADRÃO: BUILDER
 * QUESTÃO 4.10 – Menu de Aplicativo com Composição Fluente
 *
 * Problema: Um menu de aplicativo permite adicionar título, ícones,
 * atalhos e submenus com composição fluente.
 *
 * Solução: Builder com interface fluente (method chaining) para
 * compor menus de forma declarativa e legível.
 */

// 1. PRODUTO – Item de Submenu
class ItemSubmenu {
    constructor(label, atalho, icone) {
        this.label  = label;
        this.atalho = atalho || null;
        this.icone  = icone  || null;
    }

    toString() {
        const atalho = this.atalho ? `  [${this.atalho}]` : "";
        const icone  = this.icone  ? `${this.icone} ` : "  ";
        return `      ${icone}${this.label}${atalho}`;
    }
}

// 2. PRODUTO – Menu
class Menu {
    constructor() {
        this.titulo   = null;
        this.icone    = null;
        this.atalho   = null;
        this.itens    = [];
        this.submenus = [];
    }

    toString() {
        const icone = this.icone ? `${this.icone} ` : "";
        const atalho = this.atalho ? ` [${this.atalho}]` : "";
        const linhas = [`  ${icone}${this.titulo}${atalho}`];

        this.itens.forEach(item => linhas.push(item.toString()));

        this.submenus.forEach(sub => {
            linhas.push(`    ┌─ ${sub.titulo}`);
            sub.itens.forEach(item => linhas.push("  " + item.toString()));
            linhas.push(`    └${"─".repeat(20)}`);
        });

        return linhas.join("\n");
    }
}

// 3. BUILDER – Submenu
class SubmenuBuilder {
    constructor(titulo) {
        this._submenu = new Menu();
        this._submenu.titulo = titulo;
    }

    adicionarItem(label, atalho = null, icone = null) {
        this._submenu.itens.push(new ItemSubmenu(label, atalho, icone));
        return this;
    }

    build() { return this._submenu; }
}

// 4. BUILDER – Menu Principal
class MenuBuilder {
    constructor() {
        this._menu = new Menu();
    }

    titulo(t)      { this._menu.titulo = t; return this; }
    icone(i)       { this._menu.icone  = i; return this; }
    atalho(a)      { this._menu.atalho = a; return this; }

    adicionarItem(label, atalho = null, icone = null) {
        this._menu.itens.push(new ItemSubmenu(label, atalho, icone));
        return this;
    }

    adicionarSubmenu(submenuBuilder) {
        this._menu.submenus.push(submenuBuilder.build());
        return this;
    }

    build() {
        if (!this._menu.titulo) throw new Error("Menu precisa de título!");
        const menu = this._menu;
        this._menu = new Menu();
        return menu;
    }
}

// 5. CLIENTE – composição fluente
console.log("=== Editor de Texto – Barra de Menu ===\n");

const menuArquivo = new MenuBuilder()
    .titulo("Arquivo")
    .icone("📁")
    .atalho("Alt+A")
    .adicionarItem("Novo", "Ctrl+N", "📄")
    .adicionarItem("Abrir...", "Ctrl+O", "📂")
    .adicionarItem("Salvar", "Ctrl+S", "💾")
    .adicionarItem("Salvar como...", "Ctrl+Shift+S")
    .adicionarSubmenu(
        new SubmenuBuilder("Exportar")
            .adicionarItem("Exportar como PDF", "Ctrl+E")
            .adicionarItem("Exportar como DOCX")
            .adicionarItem("Exportar como HTML")
    )
    .adicionarItem("Fechar", "Ctrl+W", "❌")
    .build();

const menuEditar = new MenuBuilder()
    .titulo("Editar")
    .icone("✏️")
    .atalho("Alt+E")
    .adicionarItem("Desfazer", "Ctrl+Z", "↩️")
    .adicionarItem("Refazer", "Ctrl+Y", "↪️")
    .adicionarItem("Cortar", "Ctrl+X", "✂️")
    .adicionarItem("Copiar", "Ctrl+C", "📋")
    .adicionarItem("Colar", "Ctrl+V", "📌")
    .adicionarSubmenu(
        new SubmenuBuilder("Localizar e Substituir")
            .adicionarItem("Localizar...", "Ctrl+F")
            .adicionarItem("Substituir...", "Ctrl+H")
    )
    .build();

console.log(menuArquivo.toString());
console.log();
console.log(menuEditar.toString());
