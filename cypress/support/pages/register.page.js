//3 - Criar as ações da pag
/// <reference types="cypress" />

export default {
    accessRegister() {
        cy.visit('/')
            .get('#top_header')
        cy.get('.fa-lock')
            .click()
            .get('.account_form')
    },

    clickBtnRegister() {
        cy.get('#btnRegister')
            .click()
    },

    checkErrorMessage(message){
        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .then((element) => {
                expect(element.text()).equal(message) 
        })
    },

    fillName(name) {
        cy.get('#user')
            .type(name)
    },

    fillEmail(mail) {
        cy.get('#email')
            .type(mail)
    },

    fillPassword(pass) {
        cy.get('#password')
            .type(pass)
    }, 

    checkSuccessMessage(name) {
        cy.get('#swal2-title')
        .should('have.text','Cadastro realizado!' )
        
        cy.get('#swal2-html-container')
        .should('have.text', `Bem-vindo ${name}`)
    }
}
