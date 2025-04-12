/// <reference types="cypress" />

export default {
    clickBtnLogin() {
        cy.get('#btnLogin')
            .click()
    },
    
    checkErrorMessage(message){
        cy.get('.invalid_input')
            .should('be.visible')
            .then((element) => {
                expect(element.text()).equal(message) 
        })
    },

    // checkSuccessMessage(message){
    //     cy.get('#swal2-title')
    //         .should('be.visible')
    //         .then((element) => {
    //             expect(element.text()).equal(message) 
    //     })
    // }, Outra forma de validar mensagem

    checkSuccessMessage(mail){
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Login realizado')
        cy.get('#swal2-html-container')
            .should('have.text', `Olá, ${mail}`)

    },

    fillEmail(mail){
        cy.get('#user')
            .type(mail)
    },

    fillPassword(pass){
        cy.get('#password')
        .type(pass)
    },

}

