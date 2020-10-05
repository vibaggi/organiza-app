/// <reference types="cypress"/>

describe('Login Teste', ()=>{

    it('Invalid User', ()=>{
        cy.visit('http://localhost:8100/login')
        cy.get('#userInput').type('teste')
        cy.get('#passwordInput').type('senha')
        cy.get('#btnLogin').click()

        cy.contains('Falha ao tentar login, verifique usuario e senha!')
    })

    it('Valid User', async()=>{
        cy.visit('http://localhost:8100/login')
        cy.get('#userInput').type('teste2')
        cy.get('#passwordInput').type('chinzo10')
        cy.get('#btnLogin').click()

        cy.url().should('include', '/tabs/home')
    })


    it('Create Account', ()=>{
        cy.visit('http://localhost:8100/login')
        cy.get('#btnNovoCadastro').click()

        cy.url().should('include', '/cadastro')

        let userNumberRandom = Math.floor(Math.random()*10000)

        cy.get('#inputUser').type('testeUser'+userNumberRandom)
        cy.get('#inputNickName').type('testeNick'+userNumberRandom)
        cy.get('#inputEmail').type('teste'+userNumberRandom+"@example.com")
        cy.get('#inputPassword').type('senha')
        cy.get('#inputConfirmPassword').type('senha')

        cy.get('#btnCadastrar').click()
        
        cy.url().should('include', '/login')

        cy.get('#userInput').type('testeUser'+userNumberRandom)
        cy.get('#passwordInput').type('senha')
        cy.get('#btnLogin').click()

        cy.url().should('include', '/pre-home')

    })
})