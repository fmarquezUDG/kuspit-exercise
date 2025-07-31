export class ConfirmationPage {
  static elements = {
    confirmBtn: '#Transfer_Confirm_Submit',
    okBtn: '#Modal_Ok',
    interruptionMsg: '#alert-desc',
    
    transferAmount: 'span.transaction-amount.transfer',
    transferDate: '[data-semantic="detail"]',
    transferDescription: '[data-semantic="label"]'
  }

  static validateConfirmationData(data) {
    cy.url().should('include', '/banking/move_money/transfer/confirm')
    
    cy.get(this.elements.transferAmount).should('contain', `$${data.amount}`)
    
    cy.get(this.elements.transferDescription).should('contain', data.description)
    
    cy.get(this.elements.transferDate).should('be.visible')
    
    cy.get('body').should('contain', 'Demo Multi Signatory Account')
    cy.get('body').should('contain', 'Demo My Mastercard')
    cy.get(this.elements.confirmBtn).should('be.visible').and('contain', 'Submit')
  }

  static confirmTransfer() {
    cy.get(this.elements.confirmBtn).click()
  }

  static handleInterruption() {
    cy.get(this.elements.interruptionMsg, { timeout: 10000 })
      .should('contain', 'Your transfer has been interrupted')
    cy.get(this.elements.okBtn).click()
  }
}