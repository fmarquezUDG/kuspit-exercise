import './commands/transfer-commands'

// Login básico - hacer clic en "Launch Business Demo"
Cypress.Commands.add('login', () => {
  cy.visit('/banking/sign_in')
  
  // Buscar y hacer clic en "Launch Business Demo"
  cy.contains('Launch Business Demo').click()
  
  // Esperar a que cargue el dashboard
  cy.url().should('contain', '/banking')
  
  // Esperar a que aparezcan los elementos del dashboard
  cy.get('body').should('contain', 'Demo Multi Signatory Account')
})

// Comando para navegar a cuentas (si es necesario)
Cypress.Commands.add('navigateToAccounts', () => {
  cy.get('[data-testid="accounts"]').click()
  // Alternativa: cy.contains('Accounts').click()
})

// Utilidades adicionales
Cypress.Commands.add('waitForPageLoad', () => {
  cy.get('body').should('be.visible')
})