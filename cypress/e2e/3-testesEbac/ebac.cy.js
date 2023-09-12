/// <reference types="cypress" />

describe('Testes para o exercício da EBAC', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve preencher o formulário para inclusão de um novo contato', () => {
        cy.get('[type="text"]').type('erick lima')
        cy.get('[type="email"]').type('ericklima@gmail.com')
        cy.get('[type="tel"]').type('41 949494494')
        cy.get('.adicionar').click()
        
    })

    it('Deve alterar contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').type('{selectall}{backspace}')
        cy.get('[type="text"]').type('modificado 1')
        cy.get('[type="email"]').type('{selectall}{backspace}')
        cy.get('[type="email"]').type('modificado1@gmail.com')
        cy.get('[type="tel"]').type('{selectall}{backspace}')
        cy.get('[type="tel"]').type('41 123123123')
        cy.get('.alterar').click()
    })

    it('Deve remover contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })
    

})