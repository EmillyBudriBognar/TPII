"""
PADRÃO: SINGLETON

O padrão Singleton garante que uma classe tenha apenas uma única instância
ao longo da vida do programa e fornece um ponto de acesso global para ela.
"""

class Singleton:
    _instance = None  # Atributo estático para armazenar a instância

    def __new__(cls):
        # 1. VERIFICA SE A INSTÂNCIA JÁ EXISTE
        if cls._instance is None:
            # 2. CRIA A INSTÂNCIA SE ELA NÃO EXISTIR
            cls._instance = super(Singleton, cls).__new__(cls)
            cls._instance.value = 0
            print("Instância Singleton criada.")
        # 3. RETORNA A INSTÂNCIA EXISTENTE
        return cls._instance

    def increment(self):
        self.value += 1
        print(f"Value: {self.value}")

# 4. CLIENTE
if __name__ == "__main__":
    s1 = Singleton()
    s2 = Singleton()

    s1.increment()
    print(f"Valor de s2: {s2.value}")

    print(f"s1 é igual a s2? {s1 is s2}")
