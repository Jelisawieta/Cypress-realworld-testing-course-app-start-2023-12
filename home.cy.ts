import { invertObj } from "lodash/fp"

describe('home page', () => {
  
beforeEach('Visit home page', () => {
  cy.visit('http://localhost:3000/');
  });

  context('Hero section', () => {
  it('the features on the hompega are correct, no1', () => {
    cy.get('dt').eq(0).contains('4 Courses');
  });
  
  it('the features on the hompega are correct, no2', () => {
    cy.get('dt').eq(1).contains('25+ Lessons');
  });

  it('the features on the hompega are correct, no3', () => {
    cy.get('dt').eq(2).contains('Free and Open Source');
  });
});

context('Courses section', () => {
  it('Course: Testing Your First Next.js Application', () => {
    cy.getByData("course-0").find('a').eq(3).contains('Get started').click();
    cy.location('pathname').should('eq',"/testing-your-first-application");
  });

  it('Course: Testing Foundations', () => {
    cy.getByData("course-1").find('a').contains('Get started').click();
    cy.location('pathname').should('eq',"/testing-foundations");
    });

    it('Course: Cypress Fundamentals', () => {
      cy.getByData("course-2").find('a').contains('Get started').click();
      cy.location('pathname').should('eq',"/cypress-fundamentals");
      });    
  });
});