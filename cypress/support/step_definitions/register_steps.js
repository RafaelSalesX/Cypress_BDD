/// <reference types="cypress" />
import {Given, When, Then} from  "@badeball/cypress-cucumber-preprocessor"
import registerPage from "../pages/register.page"

const name = 'Rafael Sales'
const mail = 'rafa@gmail.com'
const emailInvalid = '12345'
const pass = '123456'

Given("I am on register screen", ()=> {
    registerPage.accessRegister()
})

When("I click on Register", ()=> {
    registerPage.clickBtnRegister()
})

Then("I see the message {string} on register", (message)=> {
    registerPage.checkErrorMessage(message)
})

Given("I fill name", ()=> {
    registerPage.fillName(name) 
})

Given("I fill email invalid", ()=> {
    registerPage.fillEmail(emailInvalid) 
})

Given("I fill email {string}", (message)=> {
    registerPage.fillEmail(message) 
})

Given("I fill password {string}", (message)=> {
    registerPage.fillPassword(message) 
})

Given("I fill my credentials of register", ()=> {
    registerPage.fillName(name)
    registerPage.fillEmail(mail)
    registerPage.fillPassword(pass)
    
})

Then("I see the success message on register", ()=> {
    registerPage.checkSuccessMessage(name)
})






