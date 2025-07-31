import { TransferPage } from '../pages/TransferPage'
import { ConfirmationPage } from '../pages/ConfirmationPage'

// TC-TRANS-001: Transferencia básica
Cypress.Commands.add('performBasicTransfer', (data) => {
  TransferPage.goToTransfer()
  cy.screenshot('TC-TRANS-001/01-transfer-form-loaded', { capture: 'fullPage' })
  
  TransferPage.fillBasicForm(data)
  cy.screenshot('TC-TRANS-001/02-form-filled', { capture: 'fullPage' })
  
  TransferPage.selectWhen('Now')
  TransferPage.clickNext()
  
  cy.screenshot('TC-TRANS-001/03-confirmation-page', { capture: 'fullPage' })
  ConfirmationPage.validateConfirmationData(data)
  
  ConfirmationPage.confirmTransfer()
  cy.screenshot('TC-TRANS-001/04-transfer-submitted', { capture: 'fullPage' })
  
  ConfirmationPage.handleInterruption()
  cy.screenshot('TC-TRANS-001/05-interruption-handled', { capture: 'fullPage' })
})

// TC-TRANS-002: Transferencia programada
Cypress.Commands.add('performScheduledTransfer', (data) => {
  TransferPage.goToTransfer()
  cy.get('#Transfer_Amount').should('be.visible')
  cy.screenshot('TC-TRANS-002/01-transfer-form-loaded', { capture: 'fullPage' })
  
  TransferPage.fillBasicForm(data)
  cy.get('#Transfer_Amount').should('have.value', data.amount)
  cy.get('#Transfer_Description').should('have.value', data.description)
  cy.screenshot('TC-TRANS-002/02-form-filled', { capture: 'fullPage' })
  
  TransferPage.selectWhen('Later')
  cy.get('input[data-semantic="future-payment-date"]').should('be.visible')
  cy.screenshot('TC-TRANS-002/03-later-selected', { capture: 'fullPage' })

  const [year, month, day] = data.date.split('-')
  const formattedDate = `${day}/${month}/${year}`

  cy.get('input[data-semantic="future-payment-date"]')
    .clear()
    .type(formattedDate, { force: true })

  cy.get(`.react-datepicker__day--0${day.padStart(2, '0')}`)
    .not('.react-datepicker__day--outside-month')
    .click({ force: true })
  
  cy.get('input[data-semantic="future-payment-date"]').should('have.value', formattedDate)
  cy.screenshot('TC-TRANS-002/04-date-selected', { capture: 'fullPage' })

  TransferPage.clickNext()
  cy.url().should('include', '/confirm')
  cy.get('#Transfer_Confirm_Submit').should('be.visible')
  cy.screenshot('TC-TRANS-002/05-confirmation-page', { capture: 'fullPage' })
  
  ConfirmationPage.validateConfirmationData(data)
  ConfirmationPage.confirmTransfer()
  cy.get('#alert-desc').should('be.visible')
  cy.screenshot('TC-TRANS-002/06-transfer-submitted', { capture: 'fullPage' })
  
  ConfirmationPage.handleInterruption()
  cy.get('#Modal_Ok').should('not.exist')
  cy.screenshot('TC-TRANS-002/07-interruption-handled', { capture: 'fullPage' })
})

// TC-TRANS-003: Transferencia recurrente
Cypress.Commands.add('performRecurringTransfer', (data) => {
  TransferPage.goToTransfer()
  cy.get('#Transfer_Amount').should('be.visible')
  cy.screenshot('TC-TRANS-003/01-transfer-form-loaded', { capture: 'fullPage' })
  
  TransferPage.fillBasicForm(data)
  cy.get('#Transfer_Amount').should('have.value', data.amount)
  cy.get('#Transfer_Description').should('have.value', data.description)
  cy.screenshot('TC-TRANS-003/02-form-filled', { capture: 'fullPage' })
  
  TransferPage.selectWhen('Repeating')
  cy.get('input[data-semantic="recurring-start-date"]').should('be.visible')
  cy.screenshot('TC-TRANS-003/03-repeating-selected', { capture: 'fullPage' })

  const [year, month, day] = data.startDate.split('-')
  const formattedDate = `${day}/${month}/${year}`

  cy.get('input[data-semantic="recurring-start-date"]')
    .clear()
    .type(formattedDate, { force: true })

  cy.contains('span', data.frequency).click({ force: true })
  cy.contains('span', data.duration).click({ force: true })
  
  cy.get('input[data-semantic="recurring-start-date"]').should('have.value', formattedDate)  
  cy.screenshot('TC-TRANS-003/04-recurring-configured', { capture: 'fullPage' })

  TransferPage.clickNext()
  cy.url().should('include', '/confirm')
  cy.get('#Transfer_Confirm_Submit').should('be.visible')
  cy.screenshot('TC-TRANS-003/05-confirmation-page', { capture: 'fullPage' })
  
  ConfirmationPage.validateConfirmationData(data)
  ConfirmationPage.confirmTransfer()
  cy.get('#alert-desc').should('be.visible')
  cy.screenshot('TC-TRANS-003/06-transfer-submitted', { capture: 'fullPage' })
  
  ConfirmationPage.handleInterruption()
  cy.get('#Modal_OK').should('not.exist')
  cy.screenshot('TC-TRANS-003/07-interruption-handled', { capture: 'fullPage' })
})