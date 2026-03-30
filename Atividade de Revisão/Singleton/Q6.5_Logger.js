/**
 * PADRÃO: SINGLETON
 * QUESTÃO 6.5 – Sistema de Log Centralizado
 *
 * Problema: Um sistema de log deve garantir que todas as partes da aplicação
 * escrevam no mesmo arquivo de log. Singleton com acesso global ao logger.
 *
 * Solução: Classe Logger Singleton que centraliza todos os registros.
 */

// 1. SINGLETON – Logger
class Logger {
    constructor() {
        if (Logger._instancia) {
            return Logger._instancia;
        }

        this._logs    = [];
        this._nivel   = "INFO"; // INFO | WARN | ERROR | DEBUG
        this._modulo  = "Sistema";

        Logger._instancia = this;
    }

    static getInstance() {
        if (!Logger._instancia) {
            new Logger();
        }
        return Logger._instancia;
    }

    // Formata e registra uma entrada de log
    _registrar(nivel, mensagem, modulo) {
        const agora   = new Date().toLocaleString("pt-BR");
        const origem  = modulo || this._modulo;
        const entrada = `[${agora}] [${nivel.padEnd(5)}] [${origem}] ${mensagem}`;
        this._logs.push(entrada);
        console.log(entrada);
    }

    info(msg, modulo)  { this._registrar("INFO",  msg, modulo); }
    warn(msg, modulo)  { this._registrar("WARN",  msg, modulo); }
    error(msg, modulo) { this._registrar("ERROR", msg, modulo); }
    debug(msg, modulo) { this._registrar("DEBUG", msg, modulo); }

    // Exibe todos os logs acumulados
    exibirHistorico() {
        console.log("\n=== Histórico de Logs ===");
        if (this._logs.length === 0) {
            console.log("  Nenhum log registrado.");
        } else {
            this._logs.forEach(log => console.log(" ", log));
        }
        console.log(`Total: ${this._logs.length} registro(s).`);
    }

    limpar() {
        this._logs = [];
    }
}

// 2. SIMULAÇÃO – múltiplos módulos usando o mesmo logger
console.log("=== Sistema de Log Centralizado (Singleton) ===\n");

// Módulo de Autenticação
const loggerAuth = Logger.getInstance();
loggerAuth.info("Usuário admin iniciou sessão.", "Auth");
loggerAuth.info("Token JWT gerado com sucesso.", "Auth");

// Módulo de Banco de Dados
const loggerDB = Logger.getInstance();
loggerDB.debug("Conexão com PostgreSQL estabelecida.", "Database");
loggerDB.info("Query executada: SELECT * FROM pedidos WHERE status='pendente'.", "Database");
loggerDB.warn("Timeout na query – executou em 4.2s (limite: 3s).", "Database");

// Módulo de Negócio
const loggerNegocios = Logger.getInstance();
loggerNegocios.info("Pedido #10457 criado para cliente João Silva.", "Negocios");
loggerNegocios.error("Falha ao processar pagamento – gateway retornou 402.", "Negocios");
loggerNegocios.warn("Estoque do produto #8 abaixo do mínimo (restam 3 unidades).", "Negocios");

// Verificação de identidade
console.log("\nMesma instância?", loggerAuth === loggerDB && loggerDB === loggerNegocios); // true

// Exibe histórico unificado
loggerAuth.exibirHistorico();
