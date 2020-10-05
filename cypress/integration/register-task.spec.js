/// <reference types="cypress"/>

describe('Tasks', ()=>{

    beforeEach(()=>{
        //Access to application
        cy.visit('http://localhost:8100/login')
        cy.get('#userInput').type('teste2')
        cy.get('#passwordInput').type('chinzo10')
        cy.get('#btnLogin').click()
    })

    it('register', ()=>{
        cy.get('#tab-button-tarefas').click()
        cy.url().should('include', '/tabs/tarefas')

        cy.get('#btnTarefaFeita').click()

        cy.contains('ESCOLHA UMA TAREFA')
    })

    it('Create Task', ()=>{
        cy.get('#tab-button-tarefas').click()
        cy.url().should('include', '/tabs/tarefas')
        
        cy.get('#btnCriarTarefa').click()
        cy.contains('SALVAR MUDANÇAS')
    })



})