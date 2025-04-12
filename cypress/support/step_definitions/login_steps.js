//2 - Transformar o gherkin em método
/// <reference types="cypress" />
import {Given, When, Then} from  "@badeball/cypress-cucumber-preprocessor"
import homePage from "../pages/home.page"
import loginPage from "../pages/login.page"

const email = 'rafa@gmail.com'
const password = '123456'

Given("Im am on login screen", ()=> {
    homePage.accessLogin()
})

Given("I fill e-mail", ()=> {
    loginPage.fillEmail(email)
})

Given("I fill my credentials", ()=> {
    loginPage.fillEmail(email)
    loginPage.fillPassword(password)
})

When("I click on Login", ()=> {
    loginPage.clickBtnLogin()
})

Then("I see message {string}", (message)=> {
    loginPage.checkErrorMessage(message)
})

Then("I see success message", ()=> {
    loginPage.checkSuccessMessage(email)
})





