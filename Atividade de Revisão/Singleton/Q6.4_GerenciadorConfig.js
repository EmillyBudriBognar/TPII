/**
 * PADRÃO: SINGLETON
 * QUESTÃO 6.4 – Gerenciador de Configurações do Sistema
 *
 * Problema: Um gerenciador de configurações deve ter apenas uma instância
 * acessível globalmente via método estático getInstance().
 *
 * Solução: Singleton com classe que controla sua própria instância
 * e a expõe via método estático.
 */

// 1. SINGLETON – GerenciadorConfiguracoes
class GerenciadorConfiguracoes {
    constructor() {
        if (GerenciadorConfiguracoes._instancia) {
            return GerenciadorConfiguracoes._instancia;
        }

        // Estado inicial das configurações
        this._config = {
            idioma:          "pt-BR",
            tema:            "escuro",
            notificacoes:    true,
            resolucao:       "1920x1080",
            versao:          "3.2.1",
            maxConexoes:     10,
            timeoutSegundos: 30,
        };

        GerenciadorConfiguracoes._instancia = this;
    }

    static getInstance() {
        if (!GerenciadorConfiguracoes._instancia) {
            new GerenciadorConfiguracoes();
        }
        return GerenciadorConfiguracoes._instancia;
    }

    get(chave) {
        return this._config[chave];
    }

    set(chave, valor) {
        this._config[chave] = valor;
        console.log(`  [Config] "${chave}" atualizado para: ${valor}`);
    }

    listarTodas() {
        return Object.entries(this._config)
            .map(([k, v]) => `  ${k}: ${v}`)
            .join("\n");
    }
}

// 2. CLIENTE – Verificação de instância única
console.log("=== Gerenciador de Configurações (Singleton) ===\n");

const config1 = GerenciadorConfiguracoes.getInstance();
const config2 = GerenciadorConfiguracoes.getInstance();

console.log("Mesma instância?", config1 === config2); // true

console.log("\nConfigurações iniciais:");
console.log(config1.listarTodas());

// Módulo A altera configuração
console.log("\n[Módulo A] Alterando tema...");
config1.set("tema", "claro");

// Módulo B lê configuração (deve ver a alteração do Módulo A)
console.log("\n[Módulo B] Lendo tema:", config2.get("tema")); // "claro"

// Verificação: new também retorna a mesma instância
const config3 = new GerenciadorConfiguracoes();
console.log("\n[Módulo C] new retorna mesma instância?", config3 === config1); // true
