/// <reference types="cypress" />
const eventRegistrationPage = require('../../support/page/eventRegistration/eventRegistrationPage');

describe('Acessar página de cadastro de Eventos', () => {

    beforeEach(() => {
        eventRegistrationPage.visit()
    })
    it('Preencher formulário completamente', () => {
        eventRegistrationPage.registrationFull()
    })
    it('Preenchimento total de forms, exceto Descrição', () =>{
        eventRegistrationPage.fillFormExceptDescription()
    })

    it('Preenchimento total de forms, exceto Data', () =>{
        eventRegistrationPage.fillFormExceptDate()
    })
    it('solicitar botão de CEP com Campo CEP vazio', () =>{
        eventRegistrationPage.emptyCEPfield()
    })

})
