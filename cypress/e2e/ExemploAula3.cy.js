/// <reference = cypress>

describe("Testes de criação, registro e login", () => {
    it("Teste de criação de usuário com sucesso", () => {
      cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
      cy.get('.btn-link').click()
      cy.get('#firstName').type("Iza")
      cy.get('#Text1').type("Lopes")
      cy.get('#username').type("Iza")
      cy.get('#password').type("123")
      cy.get('.btn-primary').click()
      cy.get('.ng-binding').should("contain.text","Registration successful")
    })
  
    it("Teste de criação de usuário com falha", () => {
      cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
      cy.get('.btn-link').click()
      cy.get('#firstName').type("Iza")
      cy.get('#Text1').type("Lopes")
      cy.get('#username').type("Iza")
      cy.get('.btn-primary').should("be.disabled")
    })
  
    it("Teste de login com sucesso", () => {
      let info = createUser()
      cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
      cy.get('#username').type(info[0])
      cy.get('#password').type(info[1])
      cy.get('.btn-primary').click()
      cy.get('h1.ng-binding').should("contain.text",info[0])
    })
  
    /*/it("Teste de login com falha", () => {
      let info = createUser() 
      cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
      cy.get('#username').type(info[0])
      cy.get('#password').type(info[1])
      cy.get('.btn-primary').click()
      cy.get('h1.ng-binding').should("contain.text",info[0])
      cy.get('.ng-binding > a').click()
      cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
      cy.get('#username').type(info[0])
      cy.get('#password').type(info[1])
      cy.get('.btn-primary').click()
      cy.get('.ng-binding').should("contain.text","Username or password is incorrect")
    })/*/

    it("Delete do user com sucesso", () => {
      let info = createUser()
      cy.login(info[0], info[1])
      cy.get('.ng-binding > a').click()
      cy.get('.btn')
      cy.login(info[0], info[1])
      cy.get('.ng-binding').should("have.text","Username or password is incorrect")
    })
  })
  
  function createUser(){
    let hora = new Date().getHours().toString()
    let minuto = new Date().getMinutes().toString()
    let segundo = new Date().getSeconds().toString()
    let ID = hora + minuto + segundo + "ID"
    let senha = hora + minuto + segundo + "senha"
    let info = [ID, senha]
  
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type(ID)
    cy.get('#Text1').type(ID)
    cy.get('#username').type(ID)
    cy.get('#password').type(senha)
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should("contain.text","Registration successful")
    return info
  }
  