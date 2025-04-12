Cypress BDD Automation

Automação de testes end-to-end utilizando Cypress com suporte a BDD (Behavior Driven Development), com estrutura baseada em arquivos .feature.

Pré-requisitos
Node.js instalado

Git instalado

Instalação e Execução
1. Clone o repositório:
    Abra o terminal e execute o seguinte comando para clonar o repositório:

    git clone https://github.com/RafaelSalesX/Cypress_BDD.git
    cd Cypress_BDD

2. Instale as dependências:
    Execute o comando abaixo para instalar todas as dependências do projeto:

    - npm install

3. Execute os testes com a interface gráfica do Cypress:
    Para abrir o Cypress com a interface gráfica, utilize o seguinte comando:

    - npx cypress open

4. Ou rode os testes diretamente pelo terminal:
    Para rodar os testes diretamente sem a interface gráfica, execute:

    - npx cypress run

5. Para gerar relatório com Mochawesome (se configurado):
    Caso você tenha configurado o Mochawesome para gerar relatórios, execute o comando:

    - npx cypress run --reporter mochawesome

6. Caso ainda não tenha o Mochawesome instalado, você pode instalá-lo com o seguinte comando:

    - npm install mochawesome --save-dev