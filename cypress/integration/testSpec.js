/// <reference types="Cypress" />
describe('Handling new browser tab and windows in cypress', () => {
    it('Handling New Tab', function () {
        cy.visit('https://example.cypress.io/commands/window');
        cy.get('.container>p>a').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'https://docs.cypress.io/api/table-of-contents')
        cy.get('h1').should('contain', 'Table of Contents');
    })

    it('Handling New Window', function () {
        cy.visit('https://alapanme.github.io/testing-cypress.html');
        const newUrl = "https://the-internet.herokuapp.com/";
        cy.window().then(win => {
            cy.stub(win, 'open').as('windowOpen');
        });
        cy.get('button').click();
        cy.get('@windowOpen').should('be.calledWith', newUrl);
        cy.window().then(win => {
            win.location.href = newUrl;
        });
        cy.get('h1').should('contain', 'Welcome to the-internet');
    })
})
