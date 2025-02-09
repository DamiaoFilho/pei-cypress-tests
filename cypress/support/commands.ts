// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
export {}
declare global {
  namespace Cypress {
    interface Chainable {
      loginCoordinator() : Chainable<void>
      goToAcademics() : Chainable<void>
    }
  }
}

Cypress.Commands.add('loginCoordinator', () => {
    cy.fixture('login.json').then((login) => {
      cy.visit('/')
      cy.get('input[id="id_login"]').type(login.emailCoordinator)
      cy.get('input[id="id_password"]').type(login.password)
      cy.get('button[type="submit"]').click()
    })
})