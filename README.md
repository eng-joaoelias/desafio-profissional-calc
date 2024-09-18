# Documentação do Projeto: Calculadora

## Descrição do Projeto

Este projeto é uma calculadora simples desenvolvida com HTML, CSS e JavaScript. A interface é amigável e permite a realização de operações matemáticas básicas como adição, subtração, multiplicação e divisão. Além disso, a calculadora suporta a inserção de números com vírgula como separador decimal. Desenvolvido com o objetivo de ser uma proposição de solução referente ao desafio profissional de pós graduação da Pós Graduação em Desenvolvimento Web Full Stack na Faculdade Anhanguera.

## Estrutura do Projeto

### 1. HTML (`index.html`)

O HTML define a estrutura da interface da calculadora. Os principais componentes são:

- **`<main class="calculator">`**: O contêiner principal da calculadora.
- **`<section class="resultado">`**: Exibe o resultado e os números inseridos pelo usuário.
- **`<section class="buttons">`**: Contém os botões da calculadora, organizados em uma grade.



### 2. CSS (`style.css`)

O CSS estiliza a calculadora, definindo a aparência e o layout. Os principais estilos incluem:

- **Fonte personalizada**: A fonte `SF-Pro` é utilizada para um visual moderno.
- **Estilos de botão**: Cada botão tem cores e tamanhos diferentes, com efeitos visuais para cliques.
- **Layout responsivo**: Utiliza `flex` e `grid` para um layout organizado.


### 3. JavaScript (`script.js`)

O JavaScript implementa a lógica da calculadora, gerenciando a entrada do usuário, realizando cálculos e atualizando a interface. As principais funções são:

- **`atualizaResultado`**: Atualiza o display com o valor atual ou um valor padrão.
- **`addDigito`**: Adiciona um dígito ao valor atual, permitindo a inserção da vírgula.
- **`defineOperador`**: Define o operador matemático para a operação a ser realizada.
- **`calculate`**: Realiza o cálculo com base nos operadores e operandos definidos.
- **`limpaCalculadora`**: Reseta todos os valores da calculadora.
- **`definePorcentagem`**: Calcula a porcentagem do valor atual.



## Funcionalidades

- **Operações Básicas**: Adição, subtração, multiplicação e divisão.
- **Inserção de Números**: Aceita números inteiros e decimais (usando vírgula).
- **Reset**: Limpa todos os valores e resultados.
- **Cálculo de Porcentagem**: Calcula porcentagens relativas ao valor atual.

## Conclusão

Esta calculadora é um exemplo funcional de como utilizar HTML, CSS e JavaScript para criar uma aplicação interativa. A implementação de funcionalidades matemáticas básicas, juntamente com uma interface limpa, torna este projeto um bom ponto de partida para desenvolvedores iniciantes.
