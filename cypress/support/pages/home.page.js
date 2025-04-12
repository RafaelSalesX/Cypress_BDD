//3 - Criar as ações da pag
/// <reference types="cypress" />

export default {
    accessLogin() {
        cy.visit('/')
            .get('#top_header')
        cy.get('.fa-user')
            .click()
            .get('.account_form')
    }
}
