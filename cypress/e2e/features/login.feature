#1 - Criar o meu cenário
Feature: Login
    Eu como cliente
    Quero fazer login na aplicacao
    Para realizar um pedido de compra

    Scenario: Login com campo email vazio
        Given Im am on login screen
        When I click on Login
        Then I see message "E-mail inválido."

    Scenario: Login com campo senha vazio
        Given Im am on login screen
        And I fill e-mail
        When I click on Login
        Then I see message "Senha inválida."

     Scenario: Login com sucesso
        Given Im am on login screen
        And I fill my credentials
        When I click on Login
        Then I see success message    

