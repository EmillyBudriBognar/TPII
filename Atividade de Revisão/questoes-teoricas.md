# Atividade de Revisão – Padrões de Projeto GoF (Criacionais)

---

## 1 – INTRODUÇÃO A PADRÕES DE PROJETO

**QUESTÃO-1.1: O que é um padrão de projeto? Explique o conceito, objetivos e benefícios de se utilizar padrões no desenvolvimento de software.**

Padrão de projeto é uma solução já conhecida e documentada para um problema que aparece com frequência no desenvolvimento de software orientado a objetos. A ideia não é copiar código pronto, mas seguir uma estrutura que já funcionou em situações parecidas.

O objetivo principal é justamente não precisar reinventar a roda toda vez que um problema recorrente aparece. Além disso, quando toda a equipe conhece os padrões, fica muito mais fácil comunicar decisões de design: falar "aqui usei um Singleton" já diz bastante sem precisar explicar cada linha.

Como benefícios diretos, o código fica mais fácil de manter porque as responsabilidades são bem separadas, mais fácil de escalar porque a estrutura já prevê extensões, e mais fácil de entender porque segue uma lógica que outros desenvolvedores já conhecem.

---

**QUESTÃO-1.2: Explique as quatro partes fundamentais que compõem um padrão de projeto segundo o Catálogo GoF.**

O livro do GoF (Gang of Four) define quatro partes que todo padrão precisa ter:

**Nome** – uma ou duas palavras que identificam o padrão. Serve para o vocabulário comum da equipe: quando alguém fala "Factory Method", todo mundo já tem uma ideia do que está acontecendo.

**Problema** – descreve em que situação o padrão deve ser usado. Explica o contexto, o que está causando dificuldade e quais condições precisam estar presentes para que a solução faça sentido.

**Solução** – descreve os elementos que compõem o design: as classes envolvidas, como se relacionam e qual é a responsabilidade de cada uma. Não é um código específico, é um modelo que pode ser aplicado de formas diferentes dependendo da linguagem ou contexto.

**Consequências** – os resultados de aplicar o padrão, tanto bons quanto ruins. Inclui os trade-offs: o que melhora, o que pode piorar, impactos em desempenho, flexibilidade, complexidade, etc.

---

**QUESTÃO-1.3: Por que padrões de projeto podem melhorar a manutenção e documentação de sistemas orientados a objetos?**

Quando um padrão é aplicado, ele já traz uma estrutura que outras pessoas reconhecem. Isso significa que, ao ler o código, um desenvolvedor que conhece o padrão consegue entender a intenção sem precisar analisar cada detalhe — o próprio padrão documenta o raciocínio por trás daquela escolha.

Além disso, os padrões incentivam uma separação clara de responsabilidades. Cada classe faz uma coisa, o que torna alterações mais seguras e isoladas. Se precisar trocar uma implementação, o impacto no restante do sistema é muito menor. Um Factory Method, por exemplo, permite adicionar um novo tipo de objeto sem tocar no código que o usa, o que evita quebrar coisas que já estavam funcionando.

---

**QUESTÃO-1.4: Quais são os principais riscos ou críticas associados ao uso indiscriminado de padrões de projeto?**

O maior problema é aplicar padrão onde não é necessário. Quando o problema é simples, uma solução direta é melhor — forçar um padrão só para "seguir boas práticas" deixa o código mais complicado do que precisa ser, o que é o oposto do objetivo.

Outro risco é o excesso de abstração. Muitas camadas de interfaces e classes abstratas tornam o código difícil de acompanhar, especialmente para quem está entrando no projeto ou tem menos experiência. Depurar fica mais trabalhoso quando a execução passa por várias classes antes de chegar a alguma coisa concreta.

Tem também o problema de usar o padrão errado. Cada padrão resolve um tipo específico de problema, e aplicar o padrão inadequado pode deixar o design pior do que estava antes.

A regra geral é: padrão é ferramenta. Usa quando o problema pede, não por default.

---

## 2 – PADRÃO GOP – CRIACIONAL – FACTORY METHOD

**QUESTÃO-2.1: Defina o padrão Factory Method, seu objetivo e quando é indicado utilizá-lo.**

Factory Method é um padrão criacional que define uma interface para criar um objeto, mas deixa as subclasses decidirem qual classe concreta será instanciada. Em vez de chamar `new` diretamente, o código chama um método de fábrica que delega a criação para quem sabe o que criar.

O objetivo é desacoplar o código que usa um objeto do código que o cria. Assim, quando o tipo de objeto precisar mudar, só a subclasse fábrica muda — o restante do sistema não sabe nem precisa saber.

É indicado quando o código não sabe com antecedência qual tipo de objeto vai precisar, quando se quer que subclasses controlem o que é instanciado, ou quando se quer respeitar o princípio aberto/fechado: abrir para extensão sem precisar modificar o que já existe.

---

**QUESTÃO-2.2: Qual a diferença entre criar objetos diretamente com new e usar Factory Method?**

Usando `new` diretamente, o código que cria o objeto fica acoplado à classe concreta. Se precisar trocar o tipo, tem que alterar em todos os lugares onde o `new` foi chamado.

Com Factory Method, o código cliente chama o método de fábrica e não sabe qual classe está sendo instanciada. Para adicionar um novo tipo, basta criar uma nova subclasse da fábrica — o código que usa o objeto continua igual.

| Critério | `new` direto | Factory Method |
|---|---|---|
| Acoplamento | Alto — depende da classe concreta | Baixo — depende da abstração |
| Extensibilidade | Mudar o tipo exige alterar o cliente | Basta criar nova subclasse fábrica |
| Princípio OCP | Frequentemente violado | Respeitado |
| Testabilidade | Mais difícil de mockar | Fábrica pode ser substituída nos testes |

```js
// com new direto
const transporte = new Caminhao();

// com Factory Method
const logistica = new LogisticaTerrestre();
const transporte = logistica.criarTransporte(); // Caminhao criado internamente
```

---

## 3 – PADRÃO GOP – CRIACIONAL – ABSTRACT FACTORY

**QUESTÃO-3.1: Explique o padrão Abstract Factory, destacando suas principais características e diferenças em relação ao Factory Method.**

Abstract Factory é um padrão criacional que fornece uma interface para criar famílias inteiras de objetos relacionados, sem especificar as classes concretas. Em vez de criar um objeto por vez como no Factory Method, a Abstract Factory cria um conjunto de objetos que pertencem à mesma família e são compatíveis entre si.

A diferença principal em relação ao Factory Method está no escopo: o Factory Method lida com a criação de um único tipo de produto, enquanto a Abstract Factory lida com múltiplos tipos que precisam ser compatíveis. O Factory Method usa herança (subclasse sobreescreve o método), a Abstract Factory usa composição (o cliente recebe uma fábrica e usa sua interface).

| Critério | Factory Method | Abstract Factory |
|---|---|---|
| Escopo | Um tipo de objeto | Família de objetos relacionados |
| Mecanismo | Herança | Composição |
| Foco | Delegar criação a subclasses | Garantir compatibilidade entre produtos |
| Complexidade | Menor | Maior |

---

**QUESTÃO-3.2: Em que situações o uso de Abstract Factory é mais indicado?**

É mais indicado quando o sistema precisa trabalhar com diferentes famílias de objetos e é importante garantir que os objetos de uma família sejam sempre usados juntos — sem misturar peças de famílias distintas.

Por exemplo: uma interface gráfica para múltiplos sistemas operacionais. Cada SO tem seu próprio conjunto de componentes (botão, menu, janela), e eles precisam ser todos do mesmo estilo. A Abstract Factory garante que ao usar a fábrica do Windows, todos os componentes criados sejam do estilo Windows.

Também é indicado quando se quer trocar toda uma família de objetos facilmente, como mudar de tema claro para escuro, ou de um layout para outro, sem alterar o código que usa esses objetos.

---

**QUESTÃO-3.3: Como esse padrão promove a compatibilidade entre objetos de uma mesma família?**

Porque toda a criação passa por uma única fábrica concreta. Quando o cliente usa, por exemplo, a `FabricaWindows`, todos os produtos que ela entrega — botão, menu, janela — são da família Windows. Não tem como surgir um `MenuMac` misturado com um `BotaoWindows`, porque quem cria os dois é sempre a mesma fábrica.

Isso funciona porque a Abstract Factory define quais produtos fazem parte da família, e cada fábrica concreta implementa esses produtos da forma correspondente à sua família. O cliente só conhece a interface abstrata e não tem acesso direto às classes concretas.

---

**QUESTÃO-3.3: Quais os benefícios de separar a criação de famílias de objetos em fábricas distintas?**

Cada fábrica cuida apenas da sua família, o que mantém o código organizado e coeso. Para trocar de família, basta trocar a fábrica que está sendo usada — o restante do sistema não precisa mudar. Adicionar uma nova família é simples: cria-se uma nova fábrica concreta sem tocar nas existentes.

Também fica impossível misturar produtos de famílias diferentes por engano, já que o controle de criação é centralizado. E do ponto de vista de testes, cada fábrica pode ser testada de forma independente.

---

## 4 - PADRÃO GOP – CRIACIONAL – BUILDER

**QUESTÃO-4.1: O que é o padrão Builder? Em que cenários ele é mais indicado?**

Builder é um padrão criacional que separa a construção de um objeto complexo da sua representação. A ideia é montar o objeto passo a passo, em vez de passar tudo de uma vez no construtor.

É mais indicado quando o objeto tem muitos atributos, especialmente quando vários são opcionais. Nesses casos, o construtor com muitos parâmetros fica ilegível e propenso a erros. Com o Builder, cada etapa é um método com nome descritivo, o que torna a montagem clara e flexível — você chama só os métodos que fazem sentido para aquele caso.

---

**QUESTÃO-4.2: Quais são os principais elementos do padrão Builder e seus papéis?**

| Elemento | Papel |
|---|---|
| Builder (interface) | Define os métodos de construção das partes do objeto |
| ConcreteBuilder | Implementa os métodos e sabe como montar uma variação específica do produto |
| Director | Coordena a ordem dos passos de construção usando a interface do Builder |
| Product | O objeto complexo que está sendo montado |
| Client | Escolhe qual ConcreteBuilder usar e aciona o Director |

O Director é opcional em muitos cenários. Quando se usa interface fluente (method chaining), o próprio cliente controla a sequência de montagem.

---

**QUESTÃO-4.3: Diferencie o Builder de um construtor comum.**

O construtor comum recebe todos os parâmetros de uma vez. Com poucos parâmetros isso é tranquilo, mas quando a classe tem dez, quinze atributos — vários opcionais — o construtor vira um problema. É difícil de ler, fácil de errar a ordem dos argumentos, e normalmente exige várias sobrecargas ou valores padrão espalhados.

O Builder resolve isso expondo cada etapa como um método separado. Só chama os métodos que precisa, na ordem que quiser. O código fica legível, autodocumentado, e ainda é possível validar no `build()` se os campos obrigatórios foram preenchidos antes de criar o objeto.

---

**QUESTÃO-4.4: Como o Builder facilita a criação de objetos imutáveis e complexos?**

O Builder acumula os dados enquanto o objeto ainda não existe. Só quando `build()` é chamado o objeto é criado de uma vez, com todos os campos já definidos. Não é necessário expor setters no objeto final, porque nada muda depois que ele é criado. Se quiser garantir imutabilidade em JavaScript, pode usar `Object.freeze()` dentro do `build()`.

Isso é especialmente útil para objetos que precisam de validação antes de existir — o Builder verifica se tudo está certo antes de criar, em vez de criar e depois tentar corrigir.

---

**QUESTÃO-4.5: Dê um exemplo de aplicação do padrão Builder em um sistema real.**

Um exemplo clássico é a montagem de e-mails. Um e-mail pode ter remetente, vários destinatários, cc, cco, assunto, corpo em texto, corpo em HTML e anexos. Alguns são obrigatórios, outros opcionais.

```js
const email = new EmailBuilder()
  .de("sistema@empresa.com")
  .para("cliente@email.com")
  .assunto("Confirmação de pedido")
  .corpo("Seu pedido #1234 foi confirmado!")
  .anexar("nota_fiscal.pdf")
  .build();
```

Comparado a `new Email("sistema@empresa.com", "cliente@email.com", null, null, "Confirmação...", null, "nota_fiscal.pdf")`, a diferença em legibilidade é enorme.

---

## 5 – PADRÃO GOP – CRIACIONAL – PROTOTYPE

**QUESTÃO-5.1: Defina o padrão Prototype e seu propósito no desenvolvimento de software.**

Prototype é um padrão criacional que permite criar novos objetos copiando um objeto existente, chamado de protótipo. Em vez de instanciar do zero e configurar tudo novamente, clona-se um objeto já pronto e ajusta o que for diferente.

O propósito é evitar o custo de criação repetida de objetos complexos quando já existe um similar disponível. O clone parte do estado atual do protótipo e pode ser modificado livremente sem afetar o original.

---

**QUESTÃO-5.2: Quando é indicado usar o padrão Prototype?**

É indicado quando criar um objeto do zero é caro — seja em termos de processamento, chamadas a banco de dados, leitura de arquivos, ou porque a configuração inicial é complexa. Se já existe um objeto com aquela configuração base, clonar é muito mais eficiente.

Também é útil quando os objetos diferem em poucos detalhes entre si, como documentos de um mesmo modelo com variações pontuais, formas gráficas com cores ou tamanhos diferentes, ou perfis de cargo com pequenas variações de requisitos.

---

**QUESTÃO-5.3: Como o Prototype contribui para a eficiência na criação de objetos?**

A clonagem reutiliza o estado do protótipo inteiro, sem precisar reexecutar toda a lógica de inicialização. O custo de criar o original é pago uma vez; as cópias saem baratas.

Além disso, o código que clona não precisa conhecer a classe concreta do objeto — só precisa chamar `clone()`. Isso mantém o acoplamento baixo e facilita adicionar novos tipos de objetos sem modificar o código existente.

---

**QUESTÃO-5.4: Explique como implementar Prototype em uma linguagem orientada a objetos.**

A implementação básica tem três passos:

1. Criar uma classe base com um método `clone()` abstrato.
2. Implementar `clone()` em cada subclasse, retornando uma nova instância com os mesmos valores.
3. O cliente chama `clone()` no protótipo e ajusta o que precisar no clone.

```js
class Forma {
  clone() { throw new Error("Método abstrato"); }
}

class Circulo extends Forma {
  constructor(raio, cor) {
    super();
    this.raio = raio;
    this.cor = cor;
  }
  clone() {
    return new Circulo(this.raio, this.cor);
  }
}

const original = new Circulo(10, "vermelho");
const copia = original.clone();
copia.cor = "azul"; // original não muda
```

Para objetos com arrays ou outros objetos aninhados, é preciso fazer cópia profunda nesses campos, senão clone e original vão compartilhar a mesma referência.

---

## 6 – PADRÃO GOP – CRIACIONAL – SINGLETON

**QUESTÃO-6.1: O que é o padrão Singleton e qual sua finalidade?**

Singleton é um padrão criacional que garante que uma classe tenha somente uma instância durante toda a execução da aplicação, e fornece um ponto de acesso global para essa instância.

A finalidade é controlar o acesso a recursos que não faz sentido duplicar: conexão com banco de dados, sistema de log, cache, configurações de sistema. Com Singleton, todos os módulos da aplicação acessam e compartilham o mesmo objeto, garantindo consistência.

---

**QUESTÃO-6.2: Quais problemas esse padrão pode causar em sistemas grandes?**

O principal problema é que o Singleton é essencialmente um estado global. Em sistemas grandes, fica difícil rastrear quem modificou o estado e quando, o que complica a depuração.

Para testes unitários é um problema sério: como a instância persiste entre os testes, o estado de um teste pode vazar para o próximo. Mockar ou substituir o Singleton em testes é trabalhoso.

Existe também o acoplamento implícito — qualquer módulo que use o Singleton está acoplado a ele, mas essa dependência não aparece claramente na assinatura dos métodos.

Em ambientes com concorrência, criar a instância de forma segura requer cuidado extra para evitar que duas threads criem instâncias ao mesmo tempo.

---

**QUESTÃO-6.3: Quando é apropriado usar Singleton?**

Quando existe um recurso que genuinamente precisa ser único e compartilhado: um gerenciador de configurações, um logger centralizado, um pool de conexões, um cache global, um verificador de licença.

A questão é: faria sentido ter duas instâncias desse objeto ao mesmo tempo? Se a resposta for não, o Singleton pode ser a escolha certa. Se a resposta for "depende do contexto", provavelmente há uma solução melhor — como passar a dependência por injeção em vez de acessar globalmente.
