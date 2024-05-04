

describe('template spec', () => {
  it('Teste para adcionar uma nova tarefa', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type('Nova tarefa{enter}')
    cy.get('[data-testid="footer"]').should('contain.text','1 item left!')
  });

  it('Teste de remoção de tarefas', () => { 
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type('Tarefa excluída{enter}')
    cy.get('[data-testid="footer"]').should('contain.text','1 item left!')
    cy.get('[data-testid="todo-item-label"]').parent().find('.destroy').should('exist').click({force: true})
    cy.get('[data-testid="todo-item-label"]').should('not.exist')  
  });

  it('Teste de marcação de tarefa concluída', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type('Tarefa concluida{enter}')
    cy.get('[data-testid="footer"]').should('contain.text','1 item left!')
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-layer="Content"]').should('not.exist')  
    cy.get('[data-testid="footer-navigation"]').contains('Completed').click()
    cy.get('[data-testid="footer"]').should('contain.text','0 items left!')         
    cy.get('[data-testid="todo-item-label"]').should('contain', 'Tarefa concluida')
  });

  it('Teste de marcação de todas as tarefas concluídas', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type('Tarefa 1{enter}')
    cy.get('[data-testid="text-input"]').type('Tarefa 2{enter}')
    cy.get('[data-testid="footer"]').should('contain.text','2 items left!')
    cy.get('[data-testid="toggle-all"]').click()
    cy.get('[data-testid="footer"]').should('contain.text','0 items left!')
  });

  it('Teste de limpeza de tarefas concluídas', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type('Tarefa concluída{enter}')
    cy.get('[data-testid="text-input"]').type('Tarefa não concluída{enter}')
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get('.clear-completed').click()
    cy.get('.completed > .view > [data-testid="todo-item-label"]').should('not.exist') 
  });

  it('Teste de filtragem de tarefas', () => { 
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type('Tarefa 1{enter}')
    cy.get('[data-testid="text-input"]').type('Tarefa 2{enter}')
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="footer-navigation"]').contains('Completed').click()
    cy.get('[data-testid="footer"]').should('contain.text','1 item left!')         
    cy.get('[data-testid="todo-item-label"]').should('contain', 'Tarefa 1')
  });

  // Se o usuario for adcionar uma tarefa em branco, esta tarefa não será criada
  it('Teste para adicionar uma tarefa em branco', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type('{enter}')
    cy.get('[data-testid="todo-item-label"]').should('not.exist')  
  });
});


