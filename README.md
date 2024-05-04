# S206 - Qualidade de Software
- Repositório para registro de projetos e exercícios desenvolvidos nas aulas.
- Instituto Nacional de Telecomunicações - Inatel.
- Curso: Engenharia de Software.
- Elaborado por: Iza Lopes.

## Exercicio01 - ListaCypress:
Projeto desenvolvido para realizar a testes de UI no website [Todo.MVC](https://todomvc.com/examples/react/dist/)

<img align="center" alt="picture" width="500em" src="https://github.com/Izalp/Izalp/assets/102091381/7d46528e-2c50-45e9-a0f3-3a3fbbb9e24b">

## Sumário:
1. [Cenário de teste](#cenário-de-teste)
2. [Testes realizados](#testes-realizados)
3. [Pré-requisitos](#pré-requisitos)
4. [Como executar](#como-executar)
5. [Relatório de testes](#relatório-de-testes)

## Cenário de teste 

O objetivo é testar as funcionalidades do website [Todo.MVC](https://todomvc.com/examples/react/dist/), incluindo adicionar uma nova tarefa, remover tarefas, marcar tarefas como concluídas, marcar todas as tarefas como concluídas, limpar tarefas concluídas e filtrar tarefas.

## Testes realizados

#### Teste para adcionar uma nova tarefa:

1. Visita o website Todo.MVC usando o comando `cy.visit()`
2. Localiza o campo de texto onde as tarefas podem ser inseridas utilizando `cy.get()` e adiciona uma nova tarefa utilizando `.type()`
3. Verifica se o contador de itens restantes exibe '1 item left!' utilizando `.should()`

Aqui está o código desenvolvido para adicionar uma nova tarefa:

```Javascript
cy.visit('https://todomvc.com/examples/react/dist/')
cy.get('[data-testid="text-input"]').type('Nova tarefa{enter}')
cy.get('[data-testid="footer"]').should('contain.text','1 item left!')
```

---

#### Teste de remoção de tarefas:

1. Visita o website Todo.MVC usando o comando `cy.visit()` 
2. Localiza o campo de texto onde as tarefas podem ser inseridas utilizando `cy.get()` e adiciona uma nova tarefa utilizando `.type()`
3. Verifica se o contador de itens restantes exibe '1 item left!' utilizando `.should()`
4. Localiza o botão de remoção da tarefa na página pelo `.find()` e clica no botão utilizando `.click()`
5. Verifica se a tarefa removida não está mais presente na lista usando `.should()`

Aqui está o código desenvolvido para remoção de tarefas:

```Javascript
cy.visit('https://todomvc.com/examples/react/dist/')
cy.get('[data-testid="text-input"]').type('Tarefa excluída{enter}')
cy.get('[data-testid="footer"]').should('contain.text','1 item left!')
cy.get('[data-testid="todo-item-label"]').parent().find('.destroy').should('exist').click({force: true})
cy.get('[data-testid="todo-item-label"]').should('not.exist')
```

---

#### Teste de marcação de tarefa concluída:

1. Visita o website Todo.MVC usando o comando `cy.visit()` 
2. Localiza o campo de texto onde as tarefas podem ser inseridas utilizando `cy.get()` e adiciona uma nova tarefa utilizando `.type()`
3. Verifica se o contador de itens restantes exibe '1 item left!' utilizando `.should()`
4. Marca a tarefa como concluída usando `.click()`
5. Verifica se a tarefa concluída não está mais visível na lista de tarefas pendentes usando o comando `.should()`
6. Navega para a seção 'Completed' usando `.contains()`
7. Verifica se o contador de itens restantes exibe '0 items left!' utilizando `.should()`
8. Verifica se a tarefa concluída está presente na lista de tarefas concluídas usando `.should()`

Aqui está o código desenvolvido para marcação de tarefa concluída:

```Javascript
cy.visit('https://todomvc.com/examples/react/dist/')
cy.get('[data-testid="text-input"]').type('Tarefa concluida{enter}')
cy.get('[data-testid="footer"]').should('contain.text','1 item left!')
cy.get('[data-testid="todo-item-toggle"]').click()
cy.get('[data-layer="Content"]').should('not.exist')  
cy.get('[data-testid="footer-navigation"]').contains('Completed').click()
cy.get('[data-testid="footer"]').should('contain.text','0 items left!')         
cy.get('[data-testid="todo-item-label"]').should('contain', 'Tarefa concluida')
```

---

#### Teste de marcação de todas as tarefas concluídas:

1. Visita o website Todo.MVC usando o comando `cy.visit()` 
2. Insere duas novas tarefas no campo de texto utilizando `.type`
3. Verifica se o contador de itens restantes exibe '2 items left!' utilizando `.should()`
4. Marca todas as tarefas como concluídas usando o comando `.click()`
5. Verifica se o contador de itens restantes exibe '0 items left!' utilizando `.should()`

Aqui está o código desenvolvido para marcação de todas as tarefas concluídas:

```Javascript
cy.visit('https://todomvc.com/examples/react/dist/')
cy.get('[data-testid="text-input"]').type('Tarefa 1{enter}')
cy.get('[data-testid="text-input"]').type('Tarefa 2{enter}')
cy.get('[data-testid="footer"]').should('contain.text','2 items left!')
cy.get('[data-testid="toggle-all"]').click()
cy.get('[data-testid="footer"]').should('contain.text','0 items left!')
```

---

#### Teste de limpeza de tarefas concluídas:

1. Visita o website Todo.MVC usando o comando `cy.visit()` 
2. Insere duas novas tarefas no campo de texto utilizando `.type`
3. Marca uma das tarefas como concluída usando `.click()`
4. Clica no botão de limpar tarefas concluídas usando `.click()`
5. Verifica se a tarefa concluída não está mais presente na lista utilizando o comando `.should()`

Aqui está o código desenvolvido para limpeza de tarefas concluída:

```Javascript
cy.visit('https://todomvc.com/examples/react/dist/')
cy.get('[data-testid="text-input"]').type('Tarefa concluída{enter}')
cy.get('[data-testid="text-input"]').type('Tarefa não concluída{enter}')
cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
cy.get('.clear-completed').click()
cy.get('.completed > .view > [data-testid="todo-item-label"]').should('not.exist')
```

---

#### Teste de filtragem de tarefas:

1. Visita o website Todo.MVC usando o comando `cy.visit()` 
2. Insere duas novas tarefas no campo de texto utilizando `.type`
3. Marca uma das tarefas como concluída usando `.click()`
4. Navega para a seção 'Completed' utilizando o comando `.contains()`
5. Verifica se o contador de itens restantes exibe '1 item left!' utilizando `.should()`
6. Verifica se a tarefa concluída está presente na lista de tarefas concluídas usando `.should()`

Aqui está o código desenvolvido para filtragem de tarefas:

```Javascript
cy.visit('https://todomvc.com/examples/react/dist/')
cy.get('[data-testid="text-input"]').type('Tarefa 1{enter}')
cy.get('[data-testid="text-input"]').type('Tarefa 2{enter}')
cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
cy.get('[data-testid="footer-navigation"]').contains('Completed').click()
cy.get('[data-testid="footer"]').should('contain.text','1 item left!')         
cy.get('[data-testid="todo-item-label"]').should('contain', 'Tarefa 1')
```

---

#### Teste para adicionar uma tarefa em branco:

1. Visita o website Todo.MVC usando o comando `cy.visit()` 
2. Pressiona a tecla 'Enter' sem inserir texto no campo de texto
3. Verifica se nenhuma tarefa é adicionada à lista utilizando `.should()`

Aqui está o código desenvolvido para adicionar uma tarefa em branco:

```Javascript
cy.visit('https://todomvc.com/examples/react/dist/')
cy.get('[data-testid="text-input"]').type('{enter}')
cy.get('[data-testid="todo-item-label"]').should('not.exist')
```

## Pré-requisitos 

- Instalar o Nodejs

Link para download direto: https://nodejs.org/en/download

## Como executar 

1. Clone este repositório na sua máquina;
2. Instalar o Cypress pela linha de comando:

```
npm install cypress
```
3. Para abrir o Cypress e rodar os testes, execute um dos comandos a seguir:

```
./node_modules/.bin/cypress open
```

## Relatório de testes 

Para gerar o relatório de testes pelo Mochawesome:

- Instale a dependência pelo comando:

```
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
```

- Para exibir o relatório de testes no terminal e gerar o html do relatorio, execute um dos comandos a seguir:

```
./node_modules/.bin/cypress run --spec 'cypress/e2e/Exercicio01.cy.js/'
```
