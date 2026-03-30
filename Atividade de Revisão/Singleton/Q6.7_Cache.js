/**
 * PADRÃO: SINGLETON
 * QUESTÃO 6.7 – Cache de Dados Compartilhado
 *
 * Problema: Um cache compartilhado por diversos módulos precisa ser
 * centralizado e acessível de forma segura via Singleton.
 *
 * Solução: Singleton com TTL (time-to-live) por entrada e
 * operações de get/set/invalidate.
 */

// 1. SINGLETON – CacheGlobal
class CacheGlobal {
    constructor() {
        if (CacheGlobal._instancia) {
            return CacheGlobal._instancia;
        }

        this._dados    = new Map(); // chave → { valor, expiraEm }
        this._hits     = 0;
        this._misses   = 0;
        this._ttlPadrao = 60000; // 60 segundos em ms

        CacheGlobal._instancia = this;
    }

    static getInstance() {
        if (!CacheGlobal._instancia) {
            new CacheGlobal();
        }
        return CacheGlobal._instancia;
    }

    // Armazena valor com TTL opcional (em ms)
    set(chave, valor, ttl = this._ttlPadrao) {
        const expiraEm = Date.now() + ttl;
        this._dados.set(chave, { valor, expiraEm });
        console.log(`  [Cache SET] "${chave}" → ttl=${ttl}ms`);
    }

    // Recupera valor se não expirou
    get(chave) {
        const entrada = this._dados.get(chave);
        if (!entrada) {
            this._misses++;
            console.log(`  [Cache MISS] "${chave}" – não encontrado`);
            return null;
        }
        if (Date.now() > entrada.expiraEm) {
            this._dados.delete(chave);
            this._misses++;
            console.log(`  [Cache MISS] "${chave}" – expirado`);
            return null;
        }
        this._hits++;
        console.log(`  [Cache HIT] "${chave}" → ${JSON.stringify(entrada.valor)}`);
        return entrada.valor;
    }

    // Invalida uma entrada específica
    invalidar(chave) {
        if (this._dados.has(chave)) {
            this._dados.delete(chave);
            console.log(`  [Cache INVALIDADO] "${chave}"`);
        }
    }

    // Limpa entradas expiradas
    limparExpirados() {
        const agora = Date.now();
        let removidos = 0;
        this._dados.forEach((entrada, chave) => {
            if (agora > entrada.expiraEm) {
                this._dados.delete(chave);
                removidos++;
            }
        });
        console.log(`  [Cache] ${removidos} entrada(s) expirada(s) removida(s).`);
    }

    estatisticas() {
        const total    = this._hits + this._misses;
        const hitRate  = total > 0 ? ((this._hits / total) * 100).toFixed(1) : "0.0";
        return {
            entradas: this._dados.size,
            hits:     this._hits,
            misses:   this._misses,
            hitRate:  `${hitRate}%`,
        };
    }

    exibirEstatisticas() {
        const stats = this.estatisticas();
        console.log(`\n📊 Cache Stats: ${stats.entradas} entradas | Hits: ${stats.hits} | Misses: ${stats.misses} | Hit Rate: ${stats.hitRate}`);
    }
}

// 2. SIMULAÇÃO – diferentes módulos acessando o mesmo cache
console.log("=== Cache Compartilhado (Singleton) ===\n");

// Módulo de Produtos
const cacheProdutos = CacheGlobal.getInstance();
cacheProdutos.set("produto:101", { nome: "Notebook Dell XPS 15", preco: 8999.00 });
cacheProdutos.set("produto:102", { nome: "Mouse Logitech MX5",   preco: 399.90 });

// Módulo de Usuários (mesma instância de cache)
const cacheUsuarios = CacheGlobal.getInstance();
cacheUsuarios.set("usuario:user-42", { nome: "Ana Lima", plano: "Premium" }, 30000); // 30s

// Verificação de Singleton
console.log("\nMesma instância?", cacheProdutos === cacheUsuarios); // true

// Leituras
console.log();
cacheProdutos.get("produto:101");
cacheUsuarios.get("produto:101");  // outro módulo lê mesmo dado
cacheProdutos.get("produto:999");  // chave inexistente – MISS

// Invalidação
console.log();
cacheProdutos.invalidar("produto:102");
cacheProdutos.get("produto:102"); // deve ser MISS agora

cacheProdutos.exibirEstatisticas();
