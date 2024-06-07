describe('Testes de criação e login de usuário', () => {
  it('Teste para criar usuário com sucesso', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    createUser()
    cy.wait(500)

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Sign up successful.')
    })
  })

  it('Teste para realizar login com sucesso', () => {
    cy.visit('https://www.demoblaze.com/index.html')

    const info = createUser()
    login(info[0], info[1])

    cy.intercept('POST', '/login').as('loginRequest')

    cy.wait('@loginRequest').then(() => {
      cy.get('#nameofuser').should('have.text', `Welcome ${info[0]}`)
    })
  })

  it('Teste para realizar login com falha', () => {
    cy.visit('https://www.demoblaze.com/index.html')

    const info = createUser()
    login(info[0], 'senha invalida')

    cy.wait(500)
    cy.on('errorMessage', (str) => {
      expect(str).to.contain('Wrong password.')
    })
  })
})

function createUser() {
  let hora = new Date().getHours().toString()
  let minuto = new Date().getMinutes().toString()
  let segundo = new Date().getSeconds().toString()
  let ID = hora + minuto + segundo + 'ID'
  let senha = hora + minuto + segundo + 'senha'

  cy.get('#signin2').click()
  cy.wait(500)
  cy.get('#sign-username').type(ID)
  cy.get('#sign-password').type(senha)
  cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

  return [ID, senha]
}

function login(ID, senha) {
  cy.get('#login2').click()
  cy.wait(500)
  cy.get('#loginusername').type(ID)
  cy.get('#loginpassword').type(senha)
  cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
}
