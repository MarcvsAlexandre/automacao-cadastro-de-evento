/// <reference types="cypress" />
const { getTomorrowDate } = require('../../support/utils');

describe('Acessar página de cadastro de Eventos', () => {

    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/site/index.html')
    })
    it('Preencher formulário completamente', () => {
        const tomorrow = getTomorrowDate();
       cy.get('#eventName').type('Teste');
       cy.get('#eventDate').type(tomorrow);
       cy.get('#cep').type('01201060');
       cy.get('#buttonCep').click(); 
       cy.get('#unitAndBuilding').type('Apto 195 Bloco 2')
       cy.get('#participants').select('5')
       cy.get('#fileUpload').selectFile('cypress/fixtures/cadastrar-reserva/1135w-hcYQBc0Qd1w.webp');
       cy.get('#buttonRegistration').click()
       cy.on('window:alert', (text) => {
        expect(text).to.contains('Cadastro realizado com sucesso!');
      });
  
    })

})
