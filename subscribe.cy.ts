/// <reference types="cypress" />
describe('Newsletter Subscribe Form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('allow users to subscribe to the email list', () => {
        cy.getByData("email-input").type('test@test.pl');
        cy.getByData("submit-button").click();
        cy.getByData("success-message").should('exist').contains('test@test.plkk');
    });

    it('does NOT allow a invalid email adress', () => {
        cy.getByData("email-input").type('test');
        cy.getByData("submit-button").click();
        cy.getByData("success-message").should('not.exist');
    });

    it.only('users CANNOT sign up for our newsletter if they are already subscribed', () => {
        cy.getByData("email-input").type('john@example.com');
        cy.getByData("submit-button").click();
        cy.getByData("server-error-message").should('exist').contains('john@example.com');
    });
});