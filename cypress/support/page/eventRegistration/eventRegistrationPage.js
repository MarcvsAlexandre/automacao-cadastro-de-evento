// eventRegistrationPage.js
const { getTomorrowDate } = require('../../utils');

class EventRegistrationPage {
    constructor() {
        this.url = 'http://127.0.0.1:5500/site/index.html';
        this.eventNameSelector = '#eventName';
        this.eventDateSelector = '#eventDate';
        this.cepSelector = '#cep';
        this.buttonCepSelector = '#buttonCep';
        this.unitAndBuildingSelector = '#unitAndBuilding';
        this.participantsSelector = '#participants';
        this.buttonRegistrationSelector = '#buttonRegistration';
        this.selectFile = '#fileUpload';
        this.alert = 'window:alert';
    }

    visit() {
        cy.visit(this.url);
    }

    registrationFull() {
        const tomorrow = getTomorrowDate();
        cy.get(this.eventNameSelector).type('Teste');
        cy.get(this.eventDateSelector).type(tomorrow);
        cy.get(this.cepSelector).type('01201060');
        cy.get(this.buttonCepSelector).click();
        cy.get(this.unitAndBuildingSelector).type('Apto 195 Bloco 2');
        cy.get(this.participantsSelector).select('5');
        cy.get(this.buttonRegistrationSelector).click();
        cy.get(this.selectFile).selectFile('cypress/fixtures/cadastrar-reserva/1135w-hcYQBc0Qd1w.webp');
        cy.on(this.alert, (text) => {
            expect(text).to.contains('Cadastro realizado com sucesso!');
        });
    }

    fillFormExceptDescription() {
        const tomorrow = getTomorrowDate();

        cy.get(this.eventDateSelector).type(tomorrow);
        cy.get(this.cepSelector).type('01201060');
        cy.get(this.buttonCepSelector).click();
        cy.get(this.unitAndBuildingSelector).type('Apto 195 Bloco 2');
        cy.get(this.participantsSelector).select('5');
        cy.get(this.buttonRegistrationSelector).click();
        cy.get(this.buttonRegistrationSelector).click()
        cy.get(this.eventNameSelector)
            .invoke('prop', 'validationMessage')
            .should('equal', 'Por favor, insira o nome do evento.');

    }

    fillFormExceptDate() {

        cy.get(this.eventNameSelector).type('Teste');
        cy.get(this.cepSelector).type('01201060');
        cy.get(this.buttonCepSelector).click();
        cy.get(this.unitAndBuildingSelector).type('Apto 195 Bloco 2');
        cy.get(this.participantsSelector).select('5');
        cy.get(this.buttonRegistrationSelector).click();
        cy.get(this.buttonRegistrationSelector).click()
        cy.get(this.eventDateSelector)
            .invoke('prop', 'validationMessage')
            .should('equal', 'Por favor, selecione a data do evento.');

    }

    emptyCEPfield() {
        const tomorrow = getTomorrowDate();

        cy.get(this.eventNameSelector).type('Teste');
        cy.get(this.eventDateSelector).type(tomorrow);


        cy.get(this.buttonCepSelector).click();
        cy.get(this.unitAndBuildingSelector).type('Apto 195 Bloco 2');
        cy.get(this.participantsSelector).select('5');
        cy.get(this.buttonRegistrationSelector).click();
        cy.get(this.buttonRegistrationSelector).click()
        cy.get(this.cepSelector)
            .invoke('prop', 'validationMessage')
            .should('equal', 'Por favor, insira um CEP válido.');

    }

    emptyCEPfieldSave() {
        const tomorrow = getTomorrowDate();

        cy.get(this.eventNameSelector).type('Teste');
        cy.get(this.eventDateSelector).type(tomorrow);


        cy.get(this.buttonCepSelector).click();
        cy.get(this.unitAndBuildingSelector).type('Apto 195 Bloco 2');
        cy.get(this.participantsSelector).select('5');
        cy.get(this.buttonRegistrationSelector).click();
        cy.get(this.buttonRegistrationSelector).click()
        cy.get(this.cepSelector)
            .invoke('prop', 'validationMessage')
            .should('equal', 'Por favor, insira um CEP válido.');

    }

}


module.exports = new EventRegistrationPage();
