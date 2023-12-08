/// <reference types="cypress" />

describe('User Jorney', () => {
   
    it('a user can find a course on the home page and complite the courses lessons', () => {
        cy.visit('http://localhost:3000');

        cy.getByData("course-0").find('a').eq(3).contains('Get started').click();
        cy.location('pathname').should('eq',"/testing-your-first-application");

        cy.getByData("next-lesson-button").click();

        cy.location('pathname').should('eq',"/testing-your-first-application");
        cy.wait(10000);

        cy.getByData("challenge-answer-0").click();
        cy.getByData("next-lesson-button").click();

        cy.location('pathname').should('eq', '/testing-your-first-application/installing-cypress-and-writing-our-first-test');

        cy.getByData("challenge-answer-0").click();
        cy.getByData("next-lesson-button").click();
        cy.location('pathname').should('eq', '/testing-your-first-application/setting-up-data-before-each-test');

        cy.getByData("challenge-answer-0").click();
        cy.getByData("next-lesson-button").click();
        cy.location('pathname').should('eq', '/');

    });
});