Feature: Register User
    Eu como cliente
    Quero me cadastrar na aplicacao
    Para realizar um pedido de compra

    Background: Access register screen 
        Given I am on register screen

    Scenario: Campo nome vazio
        When I click on Register
        Then I see the message "O campo nome deve ser prenchido" on register

    Scenario: Campo email vazio
        And I fill name
        When I click on Register
        Then I see the message "O campo e-mail deve ser prenchido corretamente" on register

     Scenario: Campo email inválido
        And I fill name
        And I fill email invalid
        When I click on Register
        Then I see the message "O campo e-mail deve ser prenchido corretamente" on register   

    Scenario: Campo senha vazio
        And I fill name
        And I fill email "rafa@gmail.com"
        When I click on Register
        Then I see the message "O campo senha deve ter pelo menos 6 dígitos" on register   
    
    Scenario: Campo senha  inválido
        And I fill name
        And I fill email "rafa@gmail.com"
        And I fill password "123"
        When I click on Register
        Then I see the message "O campo senha deve ter pelo menos 6 dígitos" on register   

    Scenario: Cadastro de usuário com sucesso
        And I fill my credentials of register
        When I click on Register
        Then I see the success message on register 

