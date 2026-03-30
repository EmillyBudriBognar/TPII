/**
 * PADRÃO: SINGLETON
 * QUESTÃO 6.8 – Verificador de Licença de Software
 *
 * Problema: Um sistema de licenças deve manter apenas uma instância do
 * verificador de licença, com controle único de validação.
 *
 * Solução: Singleton que centraliza a verificação de licenças,
 * garantindo que não haja múltiplas verificações simultâneas ou conflitantes.
 */

// 1. SINGLETON – VerificadorLicenca
class VerificadorLicenca {
    constructor() {
        if (VerificadorLicenca._instancia) {
            return VerificadorLicenca._instancia;
        }

        // Chaves de licença válidas simuladas (em produção viria de servidor)
        this._licencasValidas = new Map([
            ["TPII-2026-GOLD-1234",  { tipo: "Gold",       expira: "2027-12-31", usuarios: 50  }],
            ["TPII-2026-BASIC-5678", { tipo: "Basic",      expira: "2026-06-30", usuarios: 5   }],
            ["TPII-2026-CORP-9012",  { tipo: "Enterprise", expira: "2028-01-01", usuarios: 500 }],
        ]);

        this._licencaAtiva       = null;
        this._tentativasInvalidas = 0;
        this._bloqueada           = false;
        this._maxTentativas       = 3;

        VerificadorLicenca._instancia = this;
    }

    static getInstance() {
        if (!VerificadorLicenca._instancia) {
            new VerificadorLicenca();
        }
        return VerificadorLicenca._instancia;
    }

    ativar(chave) {
        if (this._bloqueada) {
            console.log("  ❌ [Licença] Sistema bloqueado por excesso de tentativas inválidas.");
            return false;
        }

        if (this._licencaAtiva) {
            console.log(`  ℹ️  [Licença] Licença "${this._licencaAtiva.tipo}" já está ativa.`);
            return true;
        }

        const licenca = this._licencasValidas.get(chave);
        if (!licenca) {
            this._tentativasInvalidas++;
            console.log(`  ❌ [Licença] Chave inválida. Tentativa ${this._tentativasInvalidas}/${this._maxTentativas}.`);
            if (this._tentativasInvalidas >= this._maxTentativas) {
                this._bloqueada = true;
                console.log("  🔒 [Licença] Sistema bloqueado. Contate o suporte.");
            }
            return false;
        }

        const hoje    = new Date().toISOString().slice(0, 10);
        if (licenca.expira < hoje) {
            console.log(`  ⏰ [Licença] Licença expirou em ${licenca.expira}.`);
            return false;
        }

        this._licencaAtiva = licenca;
        this._tentativasInvalidas = 0;
        console.log(`  ✅ [Licença] Licença "${licenca.tipo}" ativada com sucesso!`);
        console.log(`     Validade: até ${licenca.expira} | Usuários: até ${licenca.usuarios}`);
        return true;
    }

    verificarPermissao(recurso) {
        if (!this._licencaAtiva) {
            console.log(`  ⛔ [Permissão] Sem licença ativa. Acesso negado: ${recurso}`);
            return false;
        }

        const permissoes = {
            "Gold":       ["relatorios", "exportacao", "api", "suporte_basico"],
            "Basic":      ["relatorios"],
            "Enterprise": ["relatorios", "exportacao", "api", "suporte_basico", "suporte_prioritario", "customizacao"],
        };

        const permitido = permissoes[this._licencaAtiva.tipo]?.includes(recurso) ?? false;
        if (permitido) {
            console.log(`  ✅ [Permissão] Acesso liberado: ${recurso} (${this._licencaAtiva.tipo})`);
        } else {
            console.log(`  ⛔ [Permissão] Recurso "${recurso}" não incluído na licença ${this._licencaAtiva.tipo}.`);
        }
        return permitido;
    }

    status() {
        if (!this._licencaAtiva) {
            return "SEM LICENÇA ATIVA";
        }
        return `Licença ${this._licencaAtiva.tipo} | Expira em ${this._licencaAtiva.expira} | Usuários: ${this._licencaAtiva.usuarios}`;
    }
}

// 2. CLIENTE
console.log("=== Verificador de Licença de Software (Singleton) ===\n");

// Módulo Principal tenta ativar licença
const verificador1 = VerificadorLicenca.getInstance();
console.log("[Módulo Principal] Tentando chave inválida:");
verificador1.ativar("CHAVE-INVALIDA-0000");

console.log("\n[Módulo Principal] Ativando com chave válida:");
verificador1.ativar("TPII-2026-GOLD-1234");

// Módulo de Relatórios (mesma instância)
const verificador2 = VerificadorLicenca.getInstance();
console.log("\n[Módulo Relatórios] Verificando permissão:");
verificador2.verificarPermissao("relatorios");
verificador2.verificarPermissao("customizacao"); // Gold não tem

// Módulo de API
const verificador3 = VerificadorLicenca.getInstance();
console.log("\n[Módulo API] Verificando permissão:");
verificador3.verificarPermissao("api");

// Tentativa de segunda ativação
console.log("\n[Módulo X] Tentando reativar com outra chave:");
verificador1.ativar("TPII-2026-CORP-9012"); // já tem licença ativa

console.log("\nMesma instância?", verificador1 === verificador2 && verificador2 === verificador3); // true
console.log("Status:", verificador1.status());
