import './commands/transfer-commands'

// Login básico - hacer clic en "Launch Business Demo"
Cypress.Commands.add('login', () => {
  cy.visit('/banking/sign_in')
  
  cy.contains('Launch Business Demo').click()
  
  cy.url().should('contain', '/banking')
  
  cy.get('body').should('contain', 'Demo Multi Signatory Account')
})

Cypress.Commands.add('navigateToAccounts', () => {
  cy.get('[data-testid="accounts"]').click()
})

Cypress.Commands.add('waitForPageLoad', () => {
  cy.get('body').should('be.visible')
})