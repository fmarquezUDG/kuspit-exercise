describe('TC-TRANS-002: Scheduled Transfer', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Should perform scheduled transfer', () => {
    cy.fixture('transfer-data').then((data) => {
      cy.performScheduledTransfer(data.scheduledTransfer)
    })
  })
})